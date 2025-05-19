
import { Button } from "@/components/ui/button";

const StoreLocation = () => {
  return (
    <section id="location" className="py-20 bg-dark-light">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Visit Our Store</h2>
        <p className="text-cream-light/80 mb-10 max-w-2xl">
          Come experience Luminary Gift Shop in person. Our friendly staff is ready to help you find the perfect gift.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-dark p-6 rounded-lg mb-6">
              <h3 className="font-playfair text-xl text-gold mb-4">Store Address</h3>
              <p className="text-cream-light mb-2">
                Shop No 1 Opposite Yakubu Bello Residence,
                <br /> Sabon Fegi Damaturu, 
                <br /> Yobe State, Nigeria
              </p>
              <h3 className="font-playfair text-xl text-gold mt-6 mb-4">Opening Hours</h3>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-cream-light/70">Monday - Friday:</p>
                <p className="text-cream-light">9:00 AM - 7:00 PM</p>
                <p className="text-cream-light/70">Saturday:</p>
                <p className="text-cream-light">10:00 AM - 6:00 PM</p>
                <p className="text-cream-light/70">Sunday:</p>
                <p className="text-cream-light">12:00 PM - 5:00 PM</p>
              </div>
              <Button className="btn-primary mt-6">Get Directions</Button>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.910242115446!2d11.966923537791982!3d11.747953900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f3f1a1a7355%3A0x845c3bef0faad2e0!2sDamaturu%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1621345678901!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luminary Gift Shop Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
