
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";

const collections = [
  {
    id: 1,
    name: "Essential Collection",
    description: "Timeless basics for your everyday wardrobe",
    image: "/shirt-1.jpg",
  },
  {
    id: 2,
    name: "Graphic Series",
    description: "Bold statements meet minimalist design",
    image: "/shirt-2.jpg",
  },
  {
    id: 3,
    name: "Limited Edition",
    description: "Exclusive designs for the bold and unique",
    image: "/shirt-3.jpg",
  },
  {
    id: 4,
    name: "Seasonal Edit",
    description: "Curated pieces for the current season",
    image: "/shirt-1.jpg",
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-16">Collections</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/shop?collection=${collection.id}`}
              className="group block"
            >
              <div className="aspect-[16/9] glass rounded-lg overflow-hidden mb-6">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="font-serif text-2xl mb-2">{collection.name}</h2>
              <p className="text-white/70">{collection.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Collections;
