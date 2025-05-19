
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import StoreLocation from "@/components/StoreLocation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      
      {/* Benefits Section */}
      <section className="py-16 bg-dark-darker">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-gold"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-gold mb-2">Premium Quality</h3>
              <p className="text-cream-light/70">
                All our gifts are carefully selected to ensure the highest quality and elegance.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-gold"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-gold mb-2">Secure Payments</h3>
              <p className="text-cream-light/70">
                Shop with confidence using our secure payment options and encryption.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-gold"
                >
                  <path d="M21 10V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M16 2v8h-8"></path>
                  <path d="M8 10v10"></path>
                  <path d="M12 10v10"></path>
                  <path d="M16 10v4"></path>
                  <path d="M20 16v6h-6"></path>
                  <path d="M20 19h-6"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-gold mb-2">Gift Wrapping</h3>
              <p className="text-cream-light/70">
                Complimentary elegant gift wrapping service available for all purchases.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-gold"
                >
                  <path d="m7.9 20 6.2-16h2l-6.2 16Z"></path>
                  <path d="M5 4h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"></path>
                  <path d="M14 14h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-gold mb-2">Custom Orders</h3>
              <p className="text-cream-light/70">
                Special requirements? We can create custom gift packages just for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <StoreLocation />
      <Footer />
    </div>
  );
};

export default Index;
