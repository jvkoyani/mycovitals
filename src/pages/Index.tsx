import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Leaf, Zap, Heart, Star, Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { getBestSellers, products } from '@/lib/products';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: Sparkles,
    title: 'Enhanced Focus',
    description: 'Sharpen mental clarity and cognitive performance naturally',
  },
  {
    icon: Shield,
    title: 'Immune Support',
    description: 'Strengthen your body\'s natural defense systems',
  },
  {
    icon: Zap,
    title: 'Natural Energy',
    description: 'Sustained vitality without crashes or jitters',
  },
  {
    icon: Heart,
    title: 'Stress Relief',
    description: 'Adaptogenic support for calm and balance',
  },
];

const whyChoose = [
  { title: '100% Organic', description: 'Certified organic fruiting body extracts' },
  { title: 'Lab Tested', description: 'Third-party verified for purity and potency' },
  { title: 'No Fillers', description: 'Pure mushroom, no grains or additives' },
  { title: 'Sustainable', description: 'Eco-friendly sourcing and packaging' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'The Lion\'s Mane has transformed my work productivity. I feel more focused and clear-headed throughout the day.',
    product: 'Lion\'s Mane Focus Blend',
  },
  {
    name: 'Rahul Patel',
    location: 'Bangalore',
    rating: 5,
    text: 'Finally sleeping better! The Reishi powder has become my nightly ritual. Calm, natural, and effective.',
    product: 'Reishi Calm & Immunity',
  },
  {
    name: 'Ananya Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'As a fitness enthusiast, Cordyceps has boosted my endurance significantly. My morning runs have never been better!',
    product: 'Cordyceps Energy Boost',
  },
];

const faqs = [
  {
    question: 'How do I take mushroom powder?',
    answer: 'Simply mix 1 teaspoon (2g) into your favorite beverage - coffee, tea, smoothies, or warm water. You can also add it to soups, oatmeal, or recipes.',
  },
  {
    question: 'How long before I see results?',
    answer: 'While some benefits like energy may be felt quickly, adaptogens work best with consistent use. Most people notice significant changes within 2-4 weeks.',
  },
  {
    question: 'Are your products safe?',
    answer: 'Yes! All products are FSSAI certified, third-party lab tested, 100% organic, and free from additives. They\'re safe for daily use.',
  },
  {
    question: 'Can I take multiple mushrooms together?',
    answer: 'Absolutely! Mushrooms work synergistically. Our 5 Mushroom Blend is designed for comprehensive daily wellness.',
  },
];

const Index = () => {
  const bestSellers = getBestSellers();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-foreground/30 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/20 blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Leaf className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-primary-foreground">100% Organic Mushroom Powders</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                Unlock Nature's
                <span className="block text-gold">Ancient Wisdom</span>
              </h1>

              <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
                Premium functional mushroom powders for focus, immunity, energy, and balance. 
                Sustainably sourced, scientifically backed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/shop">
                  <Button variant="hero" size="xl">
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <Link to="/benefits">
                  <Button variant="hero-outline" size="xl">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <Check className="w-5 h-5 text-gold" />
                  FSSAI Certified
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <Check className="w-5 h-5 text-gold" />
                  Lab Tested
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <Check className="w-5 h-5 text-gold" />
                  Free Shipping 500+
                </div>
              </div>
            </div>

            {/* Hero Image/Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                {/* Floating Mushroom Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-foreground/10 backdrop-blur-md flex items-center justify-center animate-pulse-soft">
                  <div className="text-9xl">🍄</div>
                </div>
                <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center animate-float">
                  <span className="text-4xl">✨</span>
                </div>
                <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center animate-float-delayed">
                  <span className="text-3xl">🌿</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-cream-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-mushroom uppercase tracking-wider">Why Mushrooms?</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Ancient Wisdom, Modern Science
            </h2>
            <p className="text-muted-foreground text-lg">
              Functional mushrooms have been used for thousands of years. Now, modern research validates what ancient healers knew all along.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 rounded-xl bg-forest/10 flex items-center justify-center mb-4 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-forest group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="text-sm font-medium text-mushroom uppercase tracking-wider">Shop</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Best Sellers
              </h2>
            </div>
            <Link to="/shop" className="group flex items-center gap-2 text-forest font-medium hover:gap-3 transition-all">
              View All Products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-forest text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-gold uppercase tracking-wider">Our Promise</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
                Why Choose MycoVitals?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                We're committed to bringing you the purest, most potent mushroom extracts. 
                Every batch is carefully sourced, extracted, and tested to ensure you get the full benefits nature intended.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-primary-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-block mt-8">
                <Button variant="gold" size="lg">
                  Learn Our Story
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-7xl mb-4">🍄</div>
                    <div className="font-display text-3xl font-bold mb-2">Premium Quality</div>
                    <div className="text-primary-foreground/70">Sourced from the finest organic farms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-cream-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-mushroom uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Loved by Thousands
            </h2>
            <p className="text-muted-foreground text-lg">
              Join our community of wellness enthusiasts who've transformed their health with MycoVitals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                    <span className="font-display font-bold text-forest">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>

                {/* Product Badge */}
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs font-medium text-mushroom">
                    Verified Purchase: {testimonial.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-mushroom uppercase tracking-wider">FAQ</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/faq">
                <Button variant="outline" size="lg">
                  View All FAQs
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground mb-4">
            Ready to Transform Your Wellness?
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Start your mushroom journey today and experience the power of nature's adaptogens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="forest" size="xl">
                Shop All Products
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
