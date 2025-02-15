
import { ShoppingCart, Heart, User, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-2xl">
            Shirts Matter
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="hover:text-white/70 transition-colors">
              Shop
            </Link>
            <Link to="/collections" className="hover:text-white/70 transition-colors">
              Collections
            </Link>
            <Link to="/about" className="hover:text-white/70 transition-colors">
              About
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-white/70 transition-colors">
              <Heart size={20} />
            </button>
            <button className="hover:text-white/70 transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="hover:text-white/70 transition-colors">
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link
              to="/shop"
              className="block hover:text-white/70 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/collections"
              className="block hover:text-white/70 transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="block hover:text-white/70 transition-colors"
            >
              About
            </Link>
            <div className="flex space-x-6 pt-4 border-t border-white/10">
              <button className="hover:text-white/70 transition-colors">
                <Heart size={20} />
              </button>
              <button className="hover:text-white/70 transition-colors">
                <ShoppingCart size={20} />
              </button>
              <button className="hover:text-white/70 transition-colors">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
