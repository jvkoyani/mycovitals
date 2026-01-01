import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/products';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { state } = useCart();
  const shipping = state.discountTotal >= 500 ? 0 : 50;

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-cream-gradient min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold mb-8">Checkout</h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-2xl shadow-soft">
                <h2 className="font-display text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Address Line 1" />
                  <Input placeholder="Address Line 2 (Optional)" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="City" />
                    <Input placeholder="State" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="PIN Code" />
                    <Input placeholder="Phone" />
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-soft">
                <h2 className="font-display text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-forest">
                    <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                    <span>Razorpay (Cards, UPI, Wallets)</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-forest">
                    <input type="radio" name="payment" className="w-4 h-4" />
                    <span>Cash on Delivery (+₹40)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-soft h-fit sticky top-24">
              <h2 className="font-display text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {state.items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedWeight}`} className="flex justify-between text-sm">
                    <span>{item.product.name} ({item.selectedWeight}) × {item.quantity}</span>
                    <span>{formatPrice((item.discountPrice || item.price) * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(state.discountTotal)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t"><span>Total</span><span className="text-forest">{formatPrice(state.discountTotal + shipping)}</span></div>
              </div>
              <Link to="/thank-you"><Button variant="hero" size="lg" className="w-full mt-6">Place Order</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
