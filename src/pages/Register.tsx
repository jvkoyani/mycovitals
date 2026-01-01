import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf } from 'lucide-react';

const Register = () => (
  <Layout>
    <section className="pt-32 pb-20 min-h-screen flex items-center bg-cream-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-card p-8 rounded-2xl shadow-elevated">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest flex items-center justify-center">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold">Create Account</h1>
            <p className="text-muted-foreground mt-2">Join the MycoVitals community</p>
          </div>
          <form className="space-y-4">
            <Input placeholder="Full Name" />
            <Input type="email" placeholder="Email Address" />
            <Input type="tel" placeholder="Phone Number" />
            <Input type="password" placeholder="Password" />
            <Button variant="hero" size="lg" className="w-full">Create Account</Button>
          </form>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-forest font-medium hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Register;
