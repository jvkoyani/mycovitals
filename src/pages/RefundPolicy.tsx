import { Layout } from '@/components/layout/Layout';

const RefundPolicy = () => (
  <Layout>
    <section className="pt-32 pb-16 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl font-bold">Refund Policy</h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p>Last updated: January 2024</p>
        <h2>30-Day Satisfaction Guarantee</h2>
        <p>We stand behind our products. If you're not completely satisfied, contact us within 30 days of delivery for a full refund.</p>
        <h2>Return Process</h2>
        <p>Email us at returns@mycovitals.com with your order number. We'll provide return instructions.</p>
        <h2>Refund Timeline</h2>
        <p>Refunds are processed within 5-7 business days after we receive your return.</p>
        <h2>Non-Refundable Items</h2>
        <p>Opened products with more than 50% consumed are not eligible for refunds.</p>
      </div>
    </section>
  </Layout>
);

export default RefundPolicy;
