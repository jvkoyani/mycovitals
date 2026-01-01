import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

const posts = [
  { title: 'The Science Behind Lion\'s Mane', excerpt: 'Discover how this remarkable mushroom supports cognitive function...', date: 'Dec 15, 2024', slug: '#' },
  { title: '5 Ways to Add Mushroom Powder to Your Diet', excerpt: 'Simple and delicious ways to incorporate adaptogens...', date: 'Dec 10, 2024', slug: '#' },
  { title: 'Reishi: The Mushroom of Immortality', excerpt: 'Learn why ancient cultures revered this powerful fungus...', date: 'Dec 5, 2024', slug: '#' },
];

const Blog = () => (
  <Layout>
    <section className="pt-32 pb-16 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-primary-foreground/80">Wellness tips and mushroom wisdom.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <article key={i} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow">
              <div className="h-48 bg-forest/20 flex items-center justify-center text-6xl">🍄</div>
              <div className="p-6">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
