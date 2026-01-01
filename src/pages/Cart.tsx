import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/products';
import { useState } from 'react';

const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const shipping = state.discountTotal >= 500 ? 0 : 50;
  const couponDiscount = couponApplied ? Math.round(state.discountTotal * 0.1) : 0;
  const finalTotal = state.discountTotal - couponDiscount + shipping;

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'myco10') {
      setCouponApplied(true);
    }
  };

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-cream-gradient">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-3">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products yet. Explore our collection of premium mushroom powders.
            </p>
            <Link to="/shop">
              <Button variant="hero" size="lg">
                Start Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-cream-gradient min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedWeight}`}
                  className="bg-card rounded-xl p-4 md:p-6 shadow-soft flex flex-col md:flex-row gap-4"
                >
                  {/* Product Image */}
                  <div className="w-full md:w-32 h-32 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-5xl">🍄</span>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link
                          to={`/product/${item.product.slug}`}
                          className="font-display text-lg font-semibold text-foreground hover:text-forest transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">{item.selectedWeight}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.selectedWeight)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedWeight, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 h-10 flex items-center justify-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedWeight, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        {item.discountPrice ? (
                          <>
                            <div className="font-display text-xl font-bold text-forest">
                              {formatPrice(item.discountPrice * item.quantity)}
                            </div>
                            <div className="text-sm text-muted-foreground line-through">
                              {formatPrice(item.price * item.quantity)}
                            </div>
                          </>
                        ) : (
                          <div className="font-display text-xl font-bold text-forest">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart */}
              <div className="flex justify-end">
                <Button variant="ghost" onClick={clearCart} className="text-destructive hover:text-destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 shadow-soft sticky top-24">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Order Summary
                </h2>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Coupon Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                      disabled={couponApplied}
                    />
                    <Button
                      variant="outline"
                      onClick={handleApplyCoupon}
                      disabled={couponApplied || !couponCode}
                    >
                      Apply
                    </Button>
                  </div>
                  {couponApplied && (
                    <p className="text-sm text-forest mt-2 flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      MYCO10 applied - 10% off!
                    </p>
                  )}
                  {!couponApplied && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Try "MYCO10" for 10% off
                    </p>
                  )}
                </div>

                {/* Summary */}
                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal ({state.itemCount} items)</span>
                    <span className="font-medium">{formatPrice(state.total)}</span>
                  </div>
                  
                  {state.total !== state.discountTotal && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Product Discount</span>
                      <span className="font-medium text-forest">-{formatPrice(state.total - state.discountTotal)}</span>
                    </div>
                  )}

                  {couponApplied && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Coupon (MYCO10)</span>
                      <span className="font-medium text-forest">-{formatPrice(couponDiscount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-forest">FREE</span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>

                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Free shipping on orders over ₹500
                    </p>
                  )}

                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-display text-2xl font-bold text-forest">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link to="/checkout" className="block mt-6">
                  <Button variant="hero" size="lg" className="w-full">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                {/* Continue Shopping */}
                <Link to="/shop" className="block mt-3">
                  <Button variant="ghost" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>

                {/* Trust */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span>🔒 Secure Checkout</span>
                    <span>✓ 100% Safe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
