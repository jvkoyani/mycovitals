import { Layout } from '@/components/layout/Layout';
import { Brain, Shield, Zap, Heart, Sparkles, Leaf } from 'lucide-react';

const benefits = [
  { icon: Brain, title: 'Cognitive Support', desc: "Lion's Mane promotes nerve growth factor and mental clarity." },
  { icon: Shield, title: 'Immune Defense', desc: 'Reishi and Turkey Tail modulate immune system function.' },
  { icon: Zap, title: 'Natural Energy', desc: 'Cordyceps enhances ATP production and oxygen utilization.' },
  { icon: Heart, title: 'Stress Adaptation', desc: 'Adaptogens help your body respond to stress naturally.' },
  { icon: Sparkles, title: 'Antioxidant Power', desc: 'Chaga contains one of the highest ORAC values in nature.' },
  { icon: Leaf, title: 'Gut Health', desc: 'Prebiotic fibers support a healthy microbiome.' },
];

const Benefits = () => (
  <Layout>
    <section className="pt-32 pb-16 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Mushroom Benefits</h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl">Discover how functional mushrooms can transform your health.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elevated transition-shadow">
              <b.icon className="w-12 h-12 text-forest mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Benefits;
