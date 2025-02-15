
import { Navigation } from "@/components/Navigation";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const bestSellers = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 89.00,
    rating: 4.9,
    reviews: 128,
    image: "/shirt-1.jpg",
  },
  {
    id: 2,
    name: "Essential Black Shirt",
    price: 99.00,
    rating: 4.8,
    reviews: 96,
    image: "/shirt-2.jpg",
  },
  {
    id: 3,
    name: "Premium Gray Tee",
    price: 79.00,
    rating: 4.7,
    reviews: 84,
    image: "/shirt-3.jpg",
  },
  // Add more products as needed
];

const BestSellers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Best Sellers</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our most loved pieces, chosen by our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[3/4] glass rounded-lg overflow-hidden mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-1">
                    <Star className="fill-current" size={16} />
                    <span className="text-sm">{product.rating}</span>
                    <span className="text-sm text-white/70">
                      ({product.reviews})
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

        {/* Featured Review */}
        <div className="glass rounded-lg p-8 mt-16 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="fill-current" size={24} />
            ))}
          </div>
          <p className="text-lg mb-4">
            "The quality and fit of these shirts are unmatched. I've been a loyal customer 
            for years and they never disappoint."
          </p>
          <p className="text-white/70">- Alex M., Verified Buyer</p>
        </div>
      </main>
    </div>
  );
};

export default BestSellers;
