import React, { useState, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, formatPrice, getDiscountPercentage } from '@/lib/products';
import { getProductImages } from '@/lib/productImages';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = forwardRef<HTMLAnchorElement, ProductCardProps>(({ product }, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const defaultWeight = product.weightOptions[0];
  const hasDiscount = defaultWeight.discountPrice !== undefined;
  const productImages = getProductImages(product.slug);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, defaultWeight, 1);
  };

  return (
    <Link
      ref={ref}
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-cream-dark">
          {/* Product Image */}
          <img 
            src={productImages[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestSeller && (
              <span className="bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                Best Seller
              </span>
            )}
            {hasDiscount && (
              <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
                {getDiscountPercentage(defaultWeight.price, defaultWeight.discountPrice!)}% OFF
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div
            className={cn(
              'absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300',
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <Button
              variant="cream"
              size="sm"
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add to Cart
            </Button>
            <Button variant="cream" size="icon" className="shrink-0">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Category */}
          <span className="text-xs font-medium text-mushroom uppercase tracking-wider">
            {product.mushroomType}
          </span>

          {/* Name */}
          <h3 className="font-display text-xl font-semibold mt-1 mb-2 text-foreground group-hover:text-forest transition-colors">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
            {product.shortDescription}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-4 h-4',
                    i < Math.floor(product.rating)
                      ? 'fill-gold text-gold'
                      : 'fill-muted text-muted'
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-1">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            {hasDiscount ? (
              <>
                <span className="font-display text-xl font-bold text-forest">
                  {formatPrice(defaultWeight.discountPrice!)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(defaultWeight.price)}
                </span>
              </>
            ) : (
              <span className="font-display text-xl font-bold text-forest">
                {formatPrice(defaultWeight.price)}
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              / {defaultWeight.weight}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = 'ProductCard';
