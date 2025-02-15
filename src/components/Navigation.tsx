
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl">
            Shirts Matter
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/new-arrivals" className="hover:text-white/70">
              New Arrivals
            </Link>
            <Link to="/best-sellers" className="hover:text-white/70">
              Best Sellers
            </Link>
            <Link to="/collections" className="hover:text-white/70">
              Collections
            </Link>
            <Link to="/about" className="hover:text-white/70">
              About
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <button
                  onClick={() => signOut()}
                  className="hover:text-white/70"
                >
                  Sign Out
                </button>
                <Link to="/profile" className="hover:text-white/70">
                  <User size={24} />
                </Link>
              </>
            ) : (
              <Link to="/auth" className="hover:text-white/70">
                Sign In
              </Link>
            )}
            <Link to="/cart" className="hover:text-white/70">
              <ShoppingCart size={24} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden hover:text-white/70"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link
                to="/new-arrivals"
                className="hover:text-white/70"
                onClick={() => setIsOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                to="/best-sellers"
                className="hover:text-white/70"
                onClick={() => setIsOpen(false)}
              >
                Best Sellers
              </Link>
              <Link
                to="/collections"
                className="hover:text-white/70"
                onClick={() => setIsOpen(false)}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="hover:text-white/70"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
