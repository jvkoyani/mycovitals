import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: "Lion's Mane", href: '/shop?category=cognitive' },
    { label: 'Reishi', href: '/shop?category=immunity' },
    { label: 'Cordyceps', href: '/shop?category=energy' },
    { label: 'Blends', href: '/shop?category=blends' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping', href: '/shipping' },
    { label: 'Returns', href: '/refund-policy' },
    { label: 'Track Order', href: '/track-order' },
    { label: 'Contact Us', href: '/contact' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Blog', href: '/blog' },
    { label: 'Certifications', href: '/about#certifications' },
    { label: 'Wholesale', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-forest text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-3xl mb-3">Join the Myco Community</h3>
            <p className="text-primary-foreground/70 mb-6">
              Get 15% off your first order, plus exclusive wellness tips and early access to new products.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
              />
              <Button variant="gold" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-gold" />
              </div>
              <span className="font-display text-2xl font-bold">
                Myco<span className="text-gold">Vitals</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-4 max-w-xs">
              Premium organic mushroom powders for optimal health and wellness. 
              Sustainably sourced, scientifically backed.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>hello@mycovitals.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold">✓</span>
              FSSAI Certified
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold">🌿</span>
              100% Organic
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold">🧪</span>
              Lab Tested
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold">🌱</span>
              Vegan Friendly
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold">🚫</span>
              No Additives
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/60">
            © 2024 MycoVitals. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
