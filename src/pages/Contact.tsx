import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => (
  <Layout>
    <section className="pt-32 pb-16 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-primary-foreground/80">We'd love to hear from you.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-forest" /><span>hello@mycovitals.com</span></div>
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-forest" /><span>+91 98765 43210</span></div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-forest" /><span>Mumbai, Maharashtra, India</span></div>
            </div>
          </div>
          <form className="space-y-4 bg-card p-8 rounded-2xl shadow-soft">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Email Address" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button variant="hero" size="lg" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
