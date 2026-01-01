import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid3X3, LayoutList, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { products, Product } from '@/lib/products';
import { cn } from '@/lib/utils';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'Cognitive Health', label: 'Cognitive Health' },
  { value: 'Immunity', label: 'Immunity' },
  { value: 'Energy', label: 'Energy' },
  { value: 'Antioxidant', label: 'Antioxidant' },
  { value: 'Gut Health', label: 'Gut Health' },
  { value: 'Daily Wellness', label: 'Daily Wellness' },
];

const mushroomTypes = [
  { value: 'all', label: 'All Types' },
  { value: "Lion's Mane", label: "Lion's Mane" },
  { value: 'Reishi', label: 'Reishi' },
  { value: 'Cordyceps', label: 'Cordyceps' },
  { value: 'Chaga', label: 'Chaga' },
  { value: 'Turkey Tail', label: 'Turkey Tail' },
  { value: 'Blend', label: 'Blends' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
  { value: 'newest', label: 'Newest' },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMushroom, setSelectedMushroom] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
      if (selectedMushroom !== 'all' && product.mushroomType !== selectedMushroom) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return (a.weightOptions[0].discountPrice || a.weightOptions[0].price) -
                 (b.weightOptions[0].discountPrice || b.weightOptions[0].price);
        case 'price-desc':
          return (b.weightOptions[0].discountPrice || b.weightOptions[0].price) -
                 (a.weightOptions[0].discountPrice || a.weightOptions[0].price);
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return parseInt(b.id) - parseInt(a.id);
        default:
          return b.featured ? 1 : -1;
      }
    });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMushroom('all');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMushroom !== 'all';

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Shop All Products
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Discover our complete range of premium organic mushroom powders for every wellness goal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={cn(
                          'block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                          selectedCategory === cat.value
                            ? 'bg-forest text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        )}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mushroom Types */}
                <div>
                  <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                    Mushroom Type
                  </h3>
                  <div className="space-y-2">
                    {mushroomTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setSelectedMushroom(type.value)}
                        className={cn(
                          'block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                          selectedMushroom === type.value
                            ? 'bg-forest text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        )}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button variant="outline" onClick={clearFilters} className="w-full">
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Toggle */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                    {hasActiveFilters && (
                      <span className="ml-2 w-5 h-5 bg-forest text-primary-foreground text-xs rounded-full flex items-center justify-center">
                        {(selectedCategory !== 'all' ? 1 : 0) + (selectedMushroom !== 'all' ? 1 : 0)}
                      </span>
                    )}
                  </Button>

                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} products
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="h-9 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-forest"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* View Toggle */}
                  <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        'p-2 transition-colors',
                        viewMode === 'grid' ? 'bg-forest text-primary-foreground' : 'hover:bg-muted'
                      )}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={cn(
                        'p-2 transition-colors',
                        viewMode === 'list' ? 'bg-forest text-primary-foreground' : 'hover:bg-muted'
                      )}
                    >
                      <LayoutList className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Filters */}
              {isFilterOpen && (
                <div className="lg:hidden mb-6 p-4 bg-card rounded-xl border border-border">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <button onClick={() => setIsFilterOpen(false)}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-border bg-background"
                      >
                        {categories.map((cat) => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Mushroom Type</label>
                      <select
                        value={selectedMushroom}
                        onChange={(e) => setSelectedMushroom(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-border bg-background"
                      >
                        {mushroomTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    {hasActiveFilters && (
                      <Button variant="outline" onClick={clearFilters} className="w-full">
                        Clear All
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className={cn(
                  'grid gap-6',
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                    : 'grid-cols-1'
                )}>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🍄</div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    No products found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
