
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-darker pt-16 pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gold mb-6">Luminary</h3>
            <p className="text-cream-light/70 mb-6">
              Your one-stop gift shop where every gift shines. Discover premium gifts, perfumes, and
              gift baskets for all occasions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-light hover:text-gold transition-colors">
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
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-cream-light hover:text-gold transition-colors">
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
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-cream-light hover:text-gold transition-colors">
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
                  className="w-5 h-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-cream-light/70 hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-cream-light/70 hover:text-gold transition-colors">Products</a>
              </li>
              <li>
                <a href="#categories" className="text-cream-light/70 hover:text-gold transition-colors">Categories</a>
              </li>
              <li>
                <a href="#testimonials" className="text-cream-light/70 hover:text-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#location" className="text-cream-light/70 hover:text-gold transition-colors">Store Location</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-gold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
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
                  className="w-5 h-5 mr-2 text-gold"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-cream-light/70">08066014844, 08165997050</span>
              </li>
              <li className="flex items-start">
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
                  className="w-5 h-5 mr-2 text-gold"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-cream-light/70">luminarygiftstore@gmail.com</span>
              </li>
              <li className="flex items-start">
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
                  className="w-5 h-5 mr-2 text-gold"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-cream-light/70">
                  Shop No 1 Opposite Yakubu Bello Residence,
                  <br /> Sabon Fegi Damaturu, Yobe State
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-gold mb-6">Newsletter</h3>
            <p className="text-cream-light/70 mb-4">
              Subscribe to receive updates about new products and special offers.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-dark border-gold/50 focus:border-gold text-cream-light rounded-r-none"
              />
              <Button className="bg-gold hover:bg-gold-dark text-dark-darker rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-6 border-t border-dark-light">
          <p className="text-center text-cream-light/50 text-sm">
            © {new Date().getFullYear()} Luminary Gift Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
