
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Royal Amber Perfume",
    price: 12500,
    discountPrice: 9999,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: "Luxury Gift Basket",
    price: 18500,
    image: "https://images.unsplash.com/photo-1549465220-6396a6ff20de?q=80&w=800&auto=format",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Crystal Celebration Set",
    price: 15000,
    discountPrice: 12500,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Artisan Chocolate Box",
    price: 8500,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5c384?q=80&w=800&auto=format",
    rating: 4.6,
    isNew: true,
  },
  {
    id: 5,
    name: "Handcrafted Jewelry Box",
    price: 22000,
    discountPrice: 18500,
    image: "https://images.unsplash.com/photo-1584811644165-33078f50eb15?q=80&w=800&auto=format",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Premium Wine Hamper",
    price: 32000,
    image: "https://images.unsplash.com/photo-1543570321-acf0f90ccc11?q=80&w=800&auto=format",
    rating: 4.8,
  },
];

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
};

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-dark">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Featured Products</h2>
        <p className="text-cream-light/80 mb-10 max-w-2xl">
          Discover our curated selection of premium gifts, perfumes, and gift baskets. 
          Perfect for every occasion and crafted to impress.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-gold text-dark-darker px-2 py-1 text-xs font-medium rounded">
                    New Arrival
                  </div>
                )}
                {product.discountPrice && (
                  <div className="absolute top-4 right-4 bg-destructive text-white px-2 py-1 text-xs font-medium rounded">
                    Sale
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-darker to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 btn-primary">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-1">
                  <div className="flex text-gold">
                    <Star className="h-4 w-4 fill-gold" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-medium text-cream-light mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-gold font-medium">
                    {formatPrice(product.discountPrice || product.price)}
                  </span>
                  {product.discountPrice && (
                    <span className="text-cream-light/60 line-through text-sm">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button className="btn-outline">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
