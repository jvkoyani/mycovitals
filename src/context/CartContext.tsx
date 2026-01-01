import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '@/lib/products';

interface CartItem {
  product: Product;
  selectedWeight: string;
  quantity: number;
  price: number;
  discountPrice?: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  discountTotal: number;
  itemCount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; weight: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; weight: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

const initialState: CartState = {
  items: [],
  total: 0,
  discountTotal: 0,
  itemCount: 0,
};

const calculateTotals = (items: CartItem[]): Pick<CartState, 'total' | 'discountTotal' | 'itemCount'> => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountTotal = items.reduce((sum, item) => sum + (item.discountPrice || item.price) * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, discountTotal, itemCount };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        item => item.product.id === action.payload.product.id && item.selectedWeight === action.payload.selectedWeight
      );

      let newItems: CartItem[];
      if (existingIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }

      return { ...state, items: newItems, ...calculateTotals(newItems) };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        item => !(item.product.id === action.payload.productId && item.selectedWeight === action.payload.weight)
      );
      return { ...state, items: newItems, ...calculateTotals(newItems) };
    }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        const newItems = state.items.filter(
          item => !(item.product.id === action.payload.productId && item.selectedWeight === action.payload.weight)
        );
        return { ...state, items: newItems, ...calculateTotals(newItems) };
      }

      const newItems = state.items.map(item =>
        item.product.id === action.payload.productId && item.selectedWeight === action.payload.weight
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, items: newItems, ...calculateTotals(newItems) };
    }

    case 'CLEAR_CART':
      return initialState;

    case 'LOAD_CART':
      return action.payload;

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (product: Product, weightOption: { weight: string; price: number; discountPrice?: number }, quantity?: number) => void;
  removeItem: (productId: string, weight: string) => void;
  updateQuantity: (productId: string, weight: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('mushroom-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (e) {
        console.error('Failed to load cart from localStorage');
      }
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem('mushroom-cart', JSON.stringify(state));
  }, [state]);

  const addItem = (
    product: Product,
    weightOption: { weight: string; price: number; discountPrice?: number },
    quantity = 1
  ) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        selectedWeight: weightOption.weight,
        quantity,
        price: weightOption.price,
        discountPrice: weightOption.discountPrice,
      },
    });
  };

  const removeItem = (productId: string, weight: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, weight } });
  };

  const updateQuantity = (productId: string, weight: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, weight, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
