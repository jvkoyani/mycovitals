import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => (
  <Layout>
    <section className="pt-32 pb-20 min-h-screen flex items-center bg-cream-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-forest flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-muted-foreground mb-2">Your order has been placed successfully.</p>
          <p className="text-muted-foreground mb-8">Order confirmation has been sent to your email.</p>
          <div className="bg-card p-6 rounded-2xl shadow-soft mb-8">
            <p className="font-semibold">Order #MV{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p className="text-sm text-muted-foreground mt-2">Estimated delivery: 3-7 business days</p>
          </div>
          <div className="flex gap-4 justify-center">
            <Link to="/shop"><Button variant="outline" size="lg">Continue Shopping</Button></Link>
            <Link to="/"><Button variant="hero" size="lg">Back to Home</Button></Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ThankYou;
