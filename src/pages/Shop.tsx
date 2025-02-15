
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Filter, ChevronDown } from "lucide-react";

const SIZES = ["XS", "S", "M", "L", "XL"];
const COLORS = ["Black", "White", "Gray", "Navy"];
const CATEGORIES = ["All", "Minimalist", "Graphic", "Text-based", "Limited Edition"];

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-serif text-3xl">Shop All</h1>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="glass glass-hover px-4 py-2 rounded-full flex items-center gap-2"
          >
            <Filter size={20} />
            Filters
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="glass rounded-lg p-6 mb-8 grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in">
            {/* Categories */}
            <div>
              <h3 className="font-serif mb-4">Categories</h3>
              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <label key={category} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded glass" />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-serif mb-4">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    className="glass glass-hover w-12 h-12 rounded-full flex items-center justify-center"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-serif mb-4">Colors</h3>
              <div className="space-y-2">
                {COLORS.map((color) => (
                  <label key={color} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded glass" />
                    {color}
                  </label>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-serif mb-4">Sort By</h3>
              <button className="glass glass-hover w-full p-3 rounded-lg flex items-center justify-between">
                Newest
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <a
              key={index}
              href={`/product/${index + 1}`}
              className="group block"
            >
              <div className="aspect-[3/4] rounded-lg glass overflow-hidden mb-4">
                <img
                  src={`/shirt-${(index % 3) + 1}.jpg`}
                  alt="T-Shirt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg mb-1">Essential Tee</h3>
              <p className="text-white/70">$89.00</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;
