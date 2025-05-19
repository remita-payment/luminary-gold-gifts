
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-dark-darker shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-playfair font-bold text-gold">
            Luminary
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-cream-light hover:text-gold transition-colors">
            Home
          </a>
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
          <Button variant="ghost" size="icon" className="text-cream-light hover:text-gold relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-gold text-dark-darker text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-cream-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <a 
            href="/" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#products" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </a>
          <a 
            href="#categories" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Categories
          </a>
          <a 
            href="#testimonials" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-xl text-cream-light hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
