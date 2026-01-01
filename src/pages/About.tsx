import { Layout } from '@/components/layout/Layout';
import { Check, Leaf, Users, Award, Heart } from 'lucide-react';

const About = () => (
  <Layout>
    <section className="pt-32 pb-16 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">About MycoVitals</h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl">Our mission is to bring the ancient wisdom of functional mushrooms to modern wellness.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <p className="text-lg text-muted-foreground mb-8">Founded with a passion for natural wellness, MycoVitals sources the finest organic mushrooms from sustainable farms. Every product is third-party lab tested for purity and potency.</p>
          <div className="grid md:grid-cols-2 gap-6 my-12">
            {[{icon: Leaf, title: '100% Organic'}, {icon: Users, title: '50,000+ Customers'}, {icon: Award, title: 'Lab Tested'}, {icon: Heart, title: 'Made with Love'}].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-xl">
                <item.icon className="w-8 h-8 text-forest" />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
