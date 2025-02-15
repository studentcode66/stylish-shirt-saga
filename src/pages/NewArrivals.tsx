
import { Navigation } from "@/components/Navigation";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const newArrivals = [
  {
    id: 1,
    name: "Modern Classic Tee",
    price: 89.00,
    image: "/shirt-1.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Urban Essential Shirt",
    price: 99.00,
    image: "/shirt-2.jpg",
    isNew: true,
  },
  {
    id: 3,
    name: "Minimalist V-Neck",
    price: 79.00,
    image: "/shirt-3.jpg",
    isNew: true,
  },
  // Add more products as needed
];

const NewArrivals = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">New Arrivals</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover our latest releases, featuring innovative designs and premium materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[3/4] glass rounded-lg overflow-hidden mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="glass px-4 py-2 rounded-full text-sm">
                      New Release
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button className="glass glass-hover p-3 rounded-full">
                      <Heart size={20} />
                    </button>
                    <button className="glass glass-hover p-3 rounded-full">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-lg mb-1">{product.name}</h3>
                <p className="text-white/70">${product.price.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NewArrivals;
