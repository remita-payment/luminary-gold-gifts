
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1920&auto=format",
    title: "Luxury Gift Collections",
    subtitle: "Discover thoughtful gifts for every special occasion",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1920&auto=format",
    title: "Premium Perfumes",
    subtitle: "Exquisite fragrances for the discerning individual",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1920&auto=format",
    title: "Gift Baskets & Sets",
    subtitle: "Curated collections to delight your loved ones",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl animate-fade-in">
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream-light mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-cream mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="btn-primary">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="btn-outline">
                    Explore Gifts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-gold" : "bg-cream/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
