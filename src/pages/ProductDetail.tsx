import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Minus, Plus, Star, Check, Truck, Shield, RefreshCw, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { getProductBySlug, products, formatPrice, getDiscountPercentage } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addItem } = useCart();

  const [selectedWeight, setSelectedWeight] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'benefits' | 'usage' | 'nutrition'>('description');

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🍄</div>
            <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
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

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="pt-24 bg-cream-dark">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-forest transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/shop" className="hover:text-forest transition-colors">Shop</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square rounded-2xl bg-card overflow-hidden shadow-soft">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-forest/20 to-mushroom/20">
                  <div className="text-center">
                    <div className="text-9xl mb-4">🍄</div>
                    <span className="text-lg text-muted-foreground">{product.mushroomType}</span>
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Gallery Placeholder */}
              <div className="flex gap-3 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      'w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-colors',
                      i === 1 ? 'border-forest' : 'border-transparent hover:border-forest/50'
                    )}
                  >
                    <div className="w-full h-full bg-muted flex items-center justify-center text-2xl">
                      🍄
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.bestSeller && (
                  <span className="bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Best Seller
                  </span>
                )}
                <span className="bg-forest/10 text-forest text-xs font-bold px-3 py-1 rounded-full">
                  {product.mushroomType}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
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
                <span className="text-foreground font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              {/* Short Description */}
              <p className="text-lg text-muted-foreground mb-6">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                {hasDiscount ? (
                  <>
                    <span className="font-display text-4xl font-bold text-forest">
                      {formatPrice(currentWeightOption.discountPrice!)}
                    </span>
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(currentWeightOption.price)}
                    </span>
                    <span className="bg-destructive text-destructive-foreground text-sm font-bold px-2 py-1 rounded">
                      Save {getDiscountPercentage(currentWeightOption.price, currentWeightOption.discountPrice!)}%
                    </span>
                  </>
                ) : (
                  <span className="font-display text-4xl font-bold text-forest">
                    {formatPrice(currentWeightOption.price)}
                  </span>
                )}
              </div>

              {/* Weight Options */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.weightOptions.map((option, index) => (
                    <button
                      key={option.weight}
                      onClick={() => setSelectedWeight(index)}
                      className={cn(
                        'px-5 py-3 rounded-lg border-2 transition-all',
                        selectedWeight === index
                          ? 'border-forest bg-forest text-primary-foreground'
                          : 'border-border bg-card hover:border-forest'
                      )}
                    >
                      <div className="font-semibold">{option.weight}</div>
                      <div className="text-sm opacity-80">
                        {formatPrice(option.discountPrice || option.price)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-2 border-border rounded-lg overflow-hidden">
                    <button
                      onClick={decrementQuantity}
                      className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 h-12 flex items-center justify-center font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                variant="hero"
                size="xl"
                className="w-full mb-6"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - {formatPrice((currentWeightOption.discountPrice || currentWeightOption.price) * quantity)}
              </Button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-forest" />
                  <div className="text-xs text-muted-foreground">Free Shipping 500+</div>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-forest" />
                  <div className="text-xs text-muted-foreground">Secure Payment</div>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-6 h-6 mx-auto mb-2 text-forest" />
                  <div className="text-xs text-muted-foreground">Easy Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-border mb-8">
            {[
              { id: 'description', label: 'Description' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'usage', label: 'How to Use' },
              { id: 'nutrition', label: 'Nutrition' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  'px-6 py-3 font-medium transition-colors border-b-2 -mb-px',
                  activeTab === tab.id
                    ? 'border-forest text-forest'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-3xl">
            {activeTab === 'description' && (
              <div className="prose prose-lg">
                <p className="text-foreground">{product.description}</p>
                <h3 className="font-display text-xl font-semibold mt-6 mb-3">Ingredients</h3>
                <p className="text-muted-foreground">{product.ingredients}</p>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'usage' && (
              <div>
                <h3 className="font-display text-2xl font-semibold mb-4">How to Use</h3>
                <p className="text-foreground mb-6">{product.usage}</p>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold mb-3">Pro Tips:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Start with a smaller dose and gradually increase</li>
                    <li>• Take consistently for best results</li>
                    <li>• Can be taken with or without food</li>
                    <li>• Store in a cool, dry place away from sunlight</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h3 className="font-display text-2xl font-semibold mb-4">Nutritional Information</h3>
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-medium">Serving Size</td>
                        <td className="px-4 py-3 text-right">{product.nutritionalInfo.servingSize}</td>
                      </tr>
                      <tr className="border-b border-border bg-muted/50">
                        <td className="px-4 py-3 font-medium">Calories</td>
                        <td className="px-4 py-3 text-right">{product.nutritionalInfo.calories}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-medium">Protein</td>
                        <td className="px-4 py-3 text-right">{product.nutritionalInfo.protein}</td>
                      </tr>
                      <tr className="border-b border-border bg-muted/50">
                        <td className="px-4 py-3 font-medium">Dietary Fiber</td>
                        <td className="px-4 py-3 text-right">{product.nutritionalInfo.fiber}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Total Carbohydrates</td>
                        <td className="px-4 py-3 text-right">{product.nutritionalInfo.carbs}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-cream-gradient">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
