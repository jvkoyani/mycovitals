import { Layout } from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'How do I take mushroom powder?', a: 'Mix 1 teaspoon into coffee, tea, smoothies, or warm water. Can also be added to recipes.' },
  { q: 'Are your products organic?', a: 'Yes! All our mushroom powders are 100% certified organic and FSSAI approved.' },
  { q: 'How long before I see results?', a: 'Some benefits may be felt within days, but for best results, use consistently for 2-4 weeks.' },
  { q: 'Can I take multiple mushrooms together?', a: 'Absolutely! Mushrooms work synergistically. Our 5 Mushroom Blend is designed for this.' },
  { q: 'What is your shipping policy?', a: 'Free shipping on orders over ₹500. Standard delivery takes 3-7 business days.' },
  { q: 'What is your return policy?', a: 'We offer a 30-day satisfaction guarantee. Contact us if you\'re not happy with your purchase.' },
];

const FAQ = () => (
  <Layout>
    <section className="pt-32 pb-16 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">FAQ</h1>
        <p className="text-xl text-primary-foreground/80">Frequently asked questions.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl px-6 border-none shadow-soft">
              <AccordionTrigger className="font-display text-lg font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQ;
