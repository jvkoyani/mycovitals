import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf } from 'lucide-react';

const Login = () => (
  <Layout>
    <section className="pt-32 pb-20 min-h-screen flex items-center bg-cream-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-card p-8 rounded-2xl shadow-elevated">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest flex items-center justify-center">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Sign in to your account</p>
          </div>
          <form className="space-y-4">
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
            <Button variant="hero" size="lg" className="w-full">Sign In</Button>
          </form>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Don't have an account? <Link to="/register" className="text-forest font-medium hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Login;
