
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Minus, Plus, Trash2, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Essential Minimalist Tee", size: "M", color: "Black", price: 89, quantity: 1 },
    { id: 2, title: "Limited Edition Graphic Tee", size: "L", color: "White", price: 99, quantity: 1 },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = 15;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:flex-1 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="glass rounded-lg p-4 md:p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-32 rounded-lg glass overflow-hidden">
                    <img
                      src={`/shirt-${item.id}.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                        <p className="text-white/70 mb-2">
                          Size: {item.size} / Color: {item.color}
                        </p>
                        <p className="font-medium">${item.price}</p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="glass glass-hover p-2 rounded-full"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="glass glass-hover p-2 rounded-full"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="glass glass-hover p-2 rounded-full text-red-400 hover:text-red-300"
                          >
                            <Trash2 size={16} />
                          </button>
                          <button className="glass glass-hover p-2 rounded-full">
                            <Heart size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="glass rounded-lg p-6 sticky top-24">
              <h2 className="font-serif text-xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-white/70">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="glass glass-hover px-4 py-2 rounded-lg">
                  Apply
                </button>
              </div>

              {/* Shipping Estimate */}
              <p className="text-sm text-white/70 mb-6">
                Orders typically ship within 3-5 business days
              </p>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="glass glass-hover w-full px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 group"
              >
                Proceed to Checkout
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
