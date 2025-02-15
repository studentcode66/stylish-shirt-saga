
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://example.com/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="container relative z-20 text-center">
          <span className="text-sm uppercase tracking-widest mb-4 inline-block glass px-3 py-1 rounded-full">
            Premium Collection
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
            Limited Edition Drops
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Exclusive designs for those who dare to stand out.
            Each piece tells a story of craftsmanship and style.
          </p>
          <a
            href="/shop"
            className="inline-flex items-center glass glass-hover px-8 py-4 rounded-full group"
          >
            Explore Collection
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24">
        <div className="container">
          <span className="text-sm uppercase tracking-widest mb-4 inline-block glass px-3 py-1 rounded-full">
            Latest Arrivals
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-12">
            Featured Collection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <a
                key={item}
                href="/product"
                className="group relative aspect-[3/4] overflow-hidden rounded-lg glass"
              >
                <img
                  src={`/shirt-${item}.jpg`}
                  alt="T-Shirt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-serif mb-2">Essential Tee</h3>
                    <p className="text-white/70">$89.00</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass mt-auto py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Shirts Matter</h3>
              <p className="text-white/70">
                Premium limited edition t-shirts for the bold and unique.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/collections" className="text-white/70 hover:text-white transition-colors">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="/new-arrivals" className="text-white/70 hover:text-white transition-colors">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="/bestsellers" className="text-white/70 hover:text-white transition-colors">
                    Bestsellers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/faq" className="text-white/70 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="text-white/70 hover:text-white transition-colors">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="/returns" className="text-white/70 hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-4">Follow Us</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-white/70 text-sm">
            <p>&copy; 2024 Shirts Matter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
