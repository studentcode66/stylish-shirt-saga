
import { Navigation } from "@/components/Navigation";
import { Check, Instagram, PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 glass rounded-full flex items-center justify-center mx-auto">
              <Check size={40} />
            </div>
          </div>

          <h1 className="font-serif text-4xl mb-4">
            Thank you for your order!
          </h1>
          
          <p className="text-white/70 mb-8">
            Order #12345 has been placed successfully.
            We'll send you a confirmation email shortly.
          </p>

          {/* Order Details */}
          <div className="glass rounded-lg p-6 mb-8 text-left">
            <h2 className="font-serif text-xl mb-4">Order Details</h2>
            
            <div className="space-y-4">
              <div className="glass rounded-lg p-4 flex gap-4">
                <img
                  src="/shirt-1.jpg"
                  alt="T-Shirt"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-serif">Essential Minimalist Tee</h3>
                  <p className="text-white/70">Size: M / Color: Black</p>
                  <p>$89.00</p>
                </div>
              </div>

              <div className="flex justify-between py-4 border-t border-white/10">
                <span className="text-white/70">Subtotal</span>
                <span>$89.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Shipping</span>
                <span>$15.00</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-white/10">
                <span className="font-medium">Total</span>
                <span className="font-medium">$104.00</span>
              </div>
            </div>
          </div>

          {/* Tracking Info */}
          <div className="glass rounded-lg p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <PackageOpen size={24} />
              <h2 className="font-serif text-xl">Tracking Information</h2>
            </div>
            <p className="text-white/70 mb-4">
              Your order will be shipped within 3-5 business days.
              You'll receive tracking details via email once your package is on its way.
            </p>
            <button className="glass glass-hover px-6 py-3 rounded-full">
              Track Order
            </button>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h2 className="font-serif text-xl mb-4">Join Our Community</h2>
            <p className="text-white/70 mb-6">
              Follow us on Instagram for exclusive content and early access to new drops.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover px-6 py-3 rounded-full inline-flex items-center gap-2"
            >
              <Instagram size={20} />
              Follow @ShirtsMatter
            </a>
          </div>

          <div className="mt-12">
            <Link
              to="/shop"
              className="glass glass-hover px-8 py-4 rounded-full inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmation;
