import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, Minus, Plus, Star, Check, Truck, Shield, RefreshCw, 
  ChevronRight, ChevronLeft, Clock, Award, Leaf, Heart, Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { getProductBySlug, products, formatPrice, getDiscountPercentage } from '@/lib/products';
import { getProductImages } from '@/lib/productImages';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const productImgs = getProductImages(slug || '');
  const { addItem } = useCart();

  const [selectedWeight, setSelectedWeight] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🍄</div>
            <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you are looking for does not exist.</p>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const currentWeightOption = product.weightOptions[selectedWeight];
  const hasDiscount = currentWeightOption.discountPrice !== undefined;
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, currentWeightOption, quantity);
    toast({
      title: "Added to Cart!",
      description: `${product.name} (${currentWeightOption.weight}) x ${quantity} added to your cart.`,
    });
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(q => q + 1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImgs.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImgs.length) % productImgs.length);
  };

  return (
    <Layout>
      {/* Promo Banner */}
      <div className="bg-gold text-accent-foreground text-center py-2 text-sm font-medium">
        <span>🎉 Save up to 15% on all products | Free shipping on orders ₹500+</span>
      </div>

      {/* Breadcrumb */}
      <div className="pt-20 bg-background">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-forest transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/shop" className="hover:text-forest transition-colors">Shop</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section - Mobile First Design */}
      <section className="bg-background pb-8">
        <div className="container mx-auto px-4">
          {/* Mobile: Title & Rating at Top */}
          <div className="lg:hidden mb-4">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-muted text-muted'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <Link to="#reviews" className="text-sm text-forest underline">
                ({product.reviewCount} Reviews)
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">{product.shortDescription}</p>
            
            {/* Mobile Price */}
            <div className="flex items-baseline gap-2 mt-3">
              {hasDiscount ? (
                <>
                  <span className="font-display text-2xl font-bold text-forest">
                    {formatPrice(currentWeightOption.discountPrice!)}
                  </span>
                  <span className="text-base text-muted-foreground line-through">
                    {formatPrice(currentWeightOption.price)}
                  </span>
                  <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-0.5 rounded">
                    Save {getDiscountPercentage(currentWeightOption.price, currentWeightOption.discountPrice!)}%
                  </span>
                </>
              ) : (
                <span className="font-display text-2xl font-bold text-forest">
                  {formatPrice(currentWeightOption.price)}
                </span>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images - Gallery with Navigation */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream-dark shadow-soft">
                <img
                  src={productImgs[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.bestSeller && (
                    <span className="bg-gold text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      ⭐ Best Seller
                    </span>
                  )}
                  {hasDiscount && (
                    <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {getDiscountPercentage(currentWeightOption.price, currentWeightOption.discountPrice!)}% OFF
                    </span>
                  )}
                </div>

                {/* Navigation Arrows */}
                {productImgs.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {productImgs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        'w-2 h-2 rounded-full transition-all',
                        index === currentImageIndex 
                          ? 'bg-forest w-6' 
                          : 'bg-background/70 hover:bg-background'
                      )}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="hidden md:flex gap-3 mt-4">
                {productImgs.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      'w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                      index === currentImageIndex 
                        ? 'border-forest ring-2 ring-forest/20' 
                        : 'border-transparent hover:border-forest/50'
                    )}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:pt-0">
              {/* Desktop: Title & Rating */}
              <div className="hidden lg:block mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.bestSeller && (
                    <span className="bg-gold/20 text-gold border border-gold text-xs font-bold px-3 py-1 rounded-full">
                      Best Seller
                    </span>
                  )}
                  <span className="bg-forest/10 text-forest text-xs font-bold px-3 py-1 rounded-full">
                    {product.mushroomType}
                  </span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {product.name}
                </h1>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-5 h-5',
                          i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-muted text-muted'
                        )}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{product.rating}</span>
                  <Link to="#reviews" className="text-forest underline">
                    ({product.reviewCount} Reviews)
                  </Link>
                </div>

                <p className="text-muted-foreground mb-4">{product.shortDescription}</p>

                {/* Desktop Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  {hasDiscount ? (
                    <>
                      <span className="font-display text-4xl font-bold text-forest">
                        {formatPrice(currentWeightOption.discountPrice!)}
                      </span>
                      <span className="text-xl text-muted-foreground line-through">
                        {formatPrice(currentWeightOption.price)}
                      </span>
                      <span className="bg-destructive text-destructive-foreground text-sm font-bold px-3 py-1 rounded">
                        Save {getDiscountPercentage(currentWeightOption.price, currentWeightOption.discountPrice!)}%
                      </span>
                    </>
                  ) : (
                    <span className="font-display text-4xl font-bold text-forest">
                      {formatPrice(currentWeightOption.price)}
                    </span>
                  )}
                </div>
              </div>

              {/* Weight Options */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Select Size: <span className="text-forest">{currentWeightOption.weight}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.weightOptions.map((option, index) => (
                    <button
                      key={option.weight}
                      onClick={() => setSelectedWeight(index)}
                      className={cn(
                        'relative px-6 py-3 rounded-xl border-2 transition-all min-w-[100px]',
                        selectedWeight === index
                          ? 'border-forest bg-forest text-primary-foreground shadow-md'
                          : 'border-border bg-card hover:border-forest hover:shadow-sm'
                      )}
                    >
                      <div className="font-bold">{option.weight}</div>
                      <div className="text-sm opacity-90">
                        {formatPrice(option.discountPrice || option.price)}
                      </div>
                      {option.discountPrice && (
                        <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                          -{getDiscountPercentage(option.price, option.discountPrice)}%
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                {/* Quantity Selector */}
                <div className="flex items-center border-2 border-border rounded-xl overflow-hidden bg-card">
                  <button
                    onClick={decrementQuantity}
                    className="w-12 h-14 flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-14 h-14 flex items-center justify-center font-bold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-12 h-14 flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Button
                  variant="hero"
                  size="xl"
                  className="flex-1 h-14 text-base"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart • {formatPrice((currentWeightOption.discountPrice || currentWeightOption.price) * quantity)}
                </Button>
              </div>

              {/* Trust Badges - Inline */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 py-4 border-t border-b border-border text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-forest" />
                  <span>Free delivery ₹500+</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-forest" />
                  <span>Easy returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-forest" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-forest" />
                  <span>Ships in 24hrs</span>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-cream-dark rounded-xl p-5 mb-6">
                <h3 className="font-display text-lg font-semibold mb-4">What You Get</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-card rounded-lg p-3">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                      <Package className="w-5 h-5 text-forest" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Premium Packaging</div>
                      <div className="text-xs text-muted-foreground">Keeps freshness</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-card rounded-lg p-3">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-forest" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Lab Tested</div>
                      <div className="text-xs text-muted-foreground">Quality assured</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-card rounded-lg p-3">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-forest" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">100% Organic</div>
                      <div className="text-xs text-muted-foreground">FSSAI Certified</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-card rounded-lg p-3">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-forest" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Vegan Friendly</div>
                      <div className="text-xs text-muted-foreground">No additives</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-6">
                <h3 className="font-display text-lg font-semibold mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Accordion Details */}
              <Accordion type="single" collapsible className="border rounded-xl overflow-hidden">
                <AccordionItem value="benefits" className="border-b">
                  <AccordionTrigger className="px-4 hover:no-underline hover:bg-muted/50">
                    <span className="font-semibold">Key Benefits</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="usage" className="border-b">
                  <AccordionTrigger className="px-4 hover:no-underline hover:bg-muted/50">
                    <span className="font-semibold">How to Use</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-sm text-muted-foreground mb-3">{product.usage}</p>
                    <div className="bg-forest/5 rounded-lg p-3 text-sm">
                      <strong className="text-forest">Pro Tips:</strong>
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li>• Start with a smaller dose and gradually increase</li>
                        <li>• Take consistently for best results</li>
                        <li>• Store in a cool, dry place away from sunlight</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nutrition" className="border-b">
                  <AccordionTrigger className="px-4 hover:no-underline hover:bg-muted/50">
                    <span className="font-semibold">Nutritional Info</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between py-1 border-b border-border">
                        <span>Serving Size</span>
                        <span className="font-medium">{product.nutritionalInfo.servingSize}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border">
                        <span>Calories</span>
                        <span className="font-medium">{product.nutritionalInfo.calories}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border">
                        <span>Protein</span>
                        <span className="font-medium">{product.nutritionalInfo.protein}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border">
                        <span>Dietary Fiber</span>
                        <span className="font-medium">{product.nutritionalInfo.fiber}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Total Carbohydrates</span>
                        <span className="font-medium">{product.nutritionalInfo.carbs}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ingredients">
                  <AccordionTrigger className="px-4 hover:no-underline hover:bg-muted/50">
                    <span className="font-semibold">Ingredients</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-sm text-muted-foreground">{product.ingredients}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Special - Visual Section */}
      <section className="py-12 bg-cream-gradient">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 text-center shadow-soft">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-forest" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">100% Organic</h3>
              <p className="text-sm text-muted-foreground">
                Sourced from pristine forests, our mushrooms are grown without pesticides or chemicals.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-soft">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-forest" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Third-Party Tested</h3>
              <p className="text-sm text-muted-foreground">
                Every batch is lab-tested for purity, potency, and safety by independent labs.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-soft">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-forest" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Fruiting Body Only</h3>
              <p className="text-sm text-muted-foreground">
                We use only the nutrient-rich fruiting body, not fillers or mycelium on grain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
