
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-dark-darker shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-playfair font-bold text-gold">
            Luminary
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-cream-light hover:text-gold transition-colors">
            Home
          </Link>
          <a href="#products" className="text-cream-light hover:text-gold transition-colors">
            Products
          </a>
          <a href="#categories" className="text-cream-light hover:text-gold transition-colors">
            Categories
          </a>
          <a href="#testimonials" className="text-cream-light hover:text-gold transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-cream-light hover:text-gold transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-cream-light hover:text-gold">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-cream-light hover:text-gold relative"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-dark-darker text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Button>
          
          {user ? (
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-cream-light">
                <span className="text-sm">Hi, {user.name}</span>
              </div>
              <Button variant="outline" size="sm" className="text-gold border-gold hover:bg-gold/10" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-cream-light hover:text-gold">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="sm" className="text-gold border-gold hover:bg-gold/10">
                  Register
                </Button>
              </Link>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-cream-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-dark-darker z-40 transition-transform transform pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-6 p-8">
          <Link 
            to="/" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <a 
            href="#products" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={closeMobileMenu}
          >
            Products
          </a>
          <a 
            href="#categories" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={closeMobileMenu}
          >
            Categories
          </a>
          <a 
            href="#testimonials" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={closeMobileMenu}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          
          {user ? (
            <div className="flex flex-col items-center space-y-4 mt-4">
              <div className="text-cream-light">
                <span>Hi, {user.name}</span>
              </div>
              <Button className="btn-primary w-full" onClick={() => {
                handleLogout();
                closeMobileMenu();
              }}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex flex-col space-y-2 w-full mt-4">
              <Link to="/login" className="w-full" onClick={closeMobileMenu}>
                <Button variant="outline" className="text-gold border-gold hover:bg-gold/10 w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="w-full" onClick={closeMobileMenu}>
                <Button className="btn-primary w-full">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
