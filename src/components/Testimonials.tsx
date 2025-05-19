
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    stars: 5,
    content: "Luminary Gift Shop has been my go-to for gifts for over a year now. The quality and presentation are always exceptional, and my recipients absolutely love their gifts!",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Corporate Client",
    stars: 5,
    content: "We ordered custom gift baskets for our company's annual event, and Luminary exceeded all expectations. The attention to detail and professional service were outstanding.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Amina Ibrahim",
    role: "Happy Customer",
    stars: 4,
    content: "The perfume collection at Luminary is incredible. I found the perfect scent for my sister's birthday, and the gift wrapping made it look so luxurious!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Repeat Customer",
    stars: 5,
    content: "What sets Luminary apart is their personalized service. They helped me select the perfect gift for my anniversary, and my wife was absolutely thrilled.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const handlePrevious = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount < testimonials.length ? prev + 1 : prev));
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + visibleCount);
  
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Don't just take our word for it. Here's what our valued customers have to say about their Luminary experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.stars ? "fill-gold" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="border-gold text-gold hover:bg-gold/10"
            onClick={handlePrevious}
            disabled={startIndex === 0}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gold text-gold hover:bg-gold/10"
            onClick={handleNext}
            disabled={startIndex + visibleCount >= testimonials.length}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
