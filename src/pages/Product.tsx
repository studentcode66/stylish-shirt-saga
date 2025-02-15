
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Heart, Share2, ChevronRight } from "lucide-react";

const SIZES = ["XS", "S", "M", "L", "XL"];

const Product = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(0);

  const images = [
    "/shirt-1.jpg",
    "/shirt-2.jpg",
    "/shirt-3.jpg",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="lg:flex-1">
            {/* Main Image */}
            <div className="aspect-[3/4] rounded-lg glass overflow-hidden mb-4">
              <img
                src={images[mainImage]}
                alt="T-Shirt"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(index)}
                  className={`aspect-square rounded-lg glass overflow-hidden ${
                    mainImage === index ? "ring-2 ring-white" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt="T-Shirt"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:flex-1">
            <div className="sticky top-24">
              <span className="text-sm uppercase tracking-widest mb-4 inline-block glass px-3 py-1 rounded-full">
                Limited Edition
              </span>
              
              <h1 className="font-serif text-3xl md:text-4xl mb-4">
                Essential Minimalist Tee
              </h1>
              
              <p className="text-2xl mb-8">$89.00</p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-serif text-lg mb-4">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`glass ${
                          selectedSize === size ? "ring-2 ring-white" : ""
                        } glass-hover w-12 h-12 rounded-full flex items-center justify-center`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg mb-4">Description</h3>
                  <p className="text-white/70 leading-relaxed">
                    Crafted from premium cotton, this minimalist tee features a unique design
                    that embodies modern simplicity. Each piece is carefully made to ensure
                    maximum comfort and style.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 glass glass-hover px-8 py-4 rounded-full font-medium">
                  Add to Cart
                </button>
                <button className="glass glass-hover p-4 rounded-full">
                  <Heart size={24} />
                </button>
                <button className="glass glass-hover p-4 rounded-full">
                  <Share2 size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
