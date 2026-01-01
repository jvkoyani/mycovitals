import { Layout } from '@/components/layout/Layout';

const Privacy = () => (
  <Layout>
    <section className="pt-32 pb-16 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl font-bold">Privacy Policy</h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p>Last updated: January 2024</p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly, including name, email, shipping address, and payment information when you make a purchase.</p>
        <h2>How We Use Your Information</h2>
        <p>We use your information to process orders, send order confirmations, and provide customer support.</p>
        <h2>Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information.</p>
        <h2>Contact Us</h2>
        <p>For privacy concerns, email us at privacy@mycovitals.com</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
