
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CreditCard, Apple, Check } from "lucide-react";

type Step = 1 | 2 | 3;

const Checkout = () => {
  const [step, setStep] = useState<Step>(1);
  const [isGift, setIsGift] = useState(false);
  const [sameAsBilling, setSameAsBilling] = useState(true);

  const nextStep = () => {
    setStep((prev) => (prev === 3 ? prev : (prev + 1) as Step));
  };

  const prevStep = () => {
    setStep((prev) => (prev === 1 ? prev : (prev - 1) as Step));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        {/* Steps Progress */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= s ? "glass" : "glass opacity-50"
                }`}
              >
                {step > s ? (
                  <Check size={16} />
                ) : (
                  s
                )}
              </div>
              {s < 3 && (
                <div
                  className={`w-24 h-px mx-2 ${
                    step > s ? "bg-white" : "bg-white/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Step 1: Shipping */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h1 className="font-serif text-3xl mb-8">Shipping Information</h1>
              
              <div className="glass rounded-lg p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Address</label>
                  <input
                    type="text"
                    className="w-full glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">City</label>
                    <input
                      type="text"
                      className="w-full glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">ZIP Code</label>
                    <input
                      type="text"
                      className="w-full glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="gift"
                    checked={isGift}
                    onChange={(e) => setIsGift(e.target.checked)}
                    className="rounded glass"
                  />
                  <label htmlFor="gift">This is a gift</label>
                </div>

                {isGift && (
                  <div>
                    <label className="block mb-2">Gift Message</label>
                    <textarea
                      className="w-full glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                      rows={3}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h1 className="font-serif text-3xl mb-8">Payment Method</h1>
              
              <div className="glass rounded-lg p-6 space-y-6">
                <div className="flex gap-4">
                  <button className="flex-1 glass glass-hover p-4 rounded-lg flex items-center justify-center gap-2">
                    <CreditCard size={20} />
                    Credit Card
                  </button>
                  <button className="flex-1 glass glass-hover p-4 rounded-lg flex items-center justify-center gap-2">
                    <Apple size={20} />
                    Apple Pay
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block mb-2">Card Number</label>
                    <input
                      type="text"
                      className="w-full glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">CVC</label>
                    <input
                      type="text"
                      className="w-full glass px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="sameAddress"
                    checked={sameAsBilling}
                    onChange={(e) => setSameAsBilling(e.target.checked)}
                    className="rounded glass"
                  />
                  <label htmlFor="sameAddress">Billing address same as shipping</label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h1 className="font-serif text-3xl mb-8">Review Order</h1>
              
              <div className="glass rounded-lg p-6 space-y-6">
                {/* Order Summary */}
                <div className="space-y-4">
                  <h2 className="font-serif text-xl">Order Summary</h2>
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
                </div>

                {/* Shipping */}
                <div>
                  <h2 className="font-serif text-xl mb-2">Shipping Address</h2>
                  <p className="text-white/70">
                    John Doe<br />
                    123 Street Name<br />
                    City, State 12345
                  </p>
                </div>

                {/* Payment */}
                <div>
                  <h2 className="font-serif text-xl mb-2">Payment Method</h2>
                  <p className="text-white/70">
                    Credit Card ending in 1234
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="glass glass-hover px-8 py-4 rounded-full"
              >
                Back
              </button>
            )}
            <button
              onClick={step === 3 ? () => window.location.href = "/confirmation" : nextStep}
              className="glass glass-hover px-8 py-4 rounded-full ml-auto"
            >
              {step === 3 ? "Place Order" : "Continue"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
