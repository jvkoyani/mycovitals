import { Layout } from '@/components/layout/Layout';

const Terms = () => (
  <Layout>
    <section className="pt-32 pb-16 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl font-bold">Terms & Conditions</h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p>Last updated: January 2024</p>
        <h2>Acceptance of Terms</h2>
        <p>By accessing and using MycoVitals, you agree to be bound by these terms and conditions.</p>
        <h2>Products</h2>
        <p>All products are dietary supplements and are not intended to diagnose, treat, cure, or prevent any disease.</p>
        <h2>Orders and Payment</h2>
        <p>We reserve the right to refuse or cancel any order. Payment must be received before order processing.</p>
        <h2>Shipping</h2>
        <p>Delivery times are estimates and may vary. Free shipping is available on orders over ₹500.</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
