
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/useCart";

// Products data organized by category
const productsByCategory = {
  all: [
    {
      id: 1,
      name: "Royal Amber Perfume",
      price: 12500,
      discountPrice: 9999,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format",
      rating: 4.8,
      isNew: true,
      category: "perfumes",
      description: "A luxurious fragrance with notes of amber, vanilla and sandalwood that lasts all day.",
    },
    {
      id: 2,
      name: "Luxury Gift Basket",
      price: 18500,
      image: "https://images.unsplash.com/photo-1549465220-6396a6ff20de?q=80&w=400&auto=format",
      rating: 4.9,
      category: "gifts",
      description: "An exquisite collection of gourmet treats, chocolates and premium items presented in an elegant basket.",
    },
    {
      id: 3,
      name: "Crystal Celebration Set",
      price: 15000,
      discountPrice: 12500,
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=400&auto=format",
      rating: 4.7,
      category: "homeDecor",
      description: "Beautiful crystal glasses and decorative items perfect for celebrations and special occasions.",
    },
    {
      id: 4,
      name: "Artisan Chocolate Box",
      price: 8500,
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5c384?q=80&w=400&auto=format",
      rating: 4.6,
      isNew: true,
      category: "gifts",
      description: "Handcrafted chocolate selection featuring unique flavors from around the world.",
    },
    {
      id: 5,
      name: "Handcrafted Jewelry Box",
      price: 22000,
      discountPrice: 18500,
      image: "https://images.unsplash.com/photo-1584811644165-33078f50eb15?q=80&w=400&auto=format",
      rating: 4.9,
      category: "homeDecor",
      description: "Beautifully designed wooden jewelry box with intricate details and premium finish.",
    },
    {
      id: 6,
      name: "Premium Wine Hamper",
      price: 32000,
      image: "https://images.unsplash.com/photo-1543570321-acf0f90ccc11?q=80&w=400&auto=format",
      rating: 4.8,
      category: "corporate",
      description: "Selection of fine wines paired with gourmet cheeses and crackers in an elegant hamper.",
    },
  ],
  perfumes: [
    {
      id: 1,
      name: "Royal Amber Perfume",
      price: 12500,
      discountPrice: 9999,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format",
      rating: 4.8,
      isNew: true,
      category: "perfumes",
      description: "A luxurious fragrance with notes of amber, vanilla and sandalwood that lasts all day.",
    },
    {
      id: 7,
      name: "Midnight Rose Perfume",
      price: 14500,
      image: "https://images.unsplash.com/photo-1563170352-58ec7a91ad53?q=80&w=400&auto=format",
      rating: 4.7,
      category: "perfumes",
      description: "An enchanting floral fragrance with deep rose notes and subtle hints of musk.",
    },
    {
      id: 8,
      name: "Ocean Breeze Cologne",
      price: 11000,
      discountPrice: 9500,
      image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=400&auto=format",
      rating: 4.5,
      category: "perfumes",
      description: "A fresh and invigorating scent with marine notes that evoke coastal breezes.",
    },
  ],
  gifts: [
    {
      id: 2,
      name: "Luxury Gift Basket",
      price: 18500,
      image: "https://images.unsplash.com/photo-1549465220-6396a6ff20de?q=80&w=400&auto=format",
      rating: 4.9,
      category: "gifts",
      description: "An exquisite collection of gourmet treats, chocolates and premium items presented in an elegant basket.",
    },
    {
      id: 4,
      name: "Artisan Chocolate Box",
      price: 8500,
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5c384?q=80&w=400&auto=format",
      rating: 4.6,
      isNew: true,
      category: "gifts",
      description: "Handcrafted chocolate selection featuring unique flavors from around the world.",
    },
    {
      id: 9,
      name: "Spa Gift Set",
      price: 16500,
      discountPrice: 14000,
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4abbd90?q=80&w=400&auto=format",
      rating: 4.8,
      category: "gifts",
      description: "Premium collection of bath oils, lotions, and aromatherapy products for relaxation.",
    },
  ],
  homeDecor: [
    {
      id: 3,
      name: "Crystal Celebration Set",
      price: 15000,
      discountPrice: 12500,
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=400&auto=format",
      rating: 4.7,
      category: "homeDecor",
      description: "Beautiful crystal glasses and decorative items perfect for celebrations and special occasions.",
    },
    {
      id: 5,
      name: "Handcrafted Jewelry Box",
      price: 22000,
      discountPrice: 18500,
      image: "https://images.unsplash.com/photo-1584811644165-33078f50eb15?q=80&w=400&auto=format",
      rating: 4.9,
      category: "homeDecor",
      description: "Beautifully designed wooden jewelry box with intricate details and premium finish.",
    },
    {
      id: 10,
      name: "Luxury Candle Set",
      price: 9500,
      image: "https://images.unsplash.com/photo-1596433809252-61d909c8525d?q=80&w=400&auto=format",
      rating: 4.6,
      category: "homeDecor",
      description: "Set of artisanal scented candles in elegant containers perfect for creating ambiance.",
    },
  ],
  corporate: [
    {
      id: 6,
      name: "Premium Wine Hamper",
      price: 32000,
      image: "https://images.unsplash.com/photo-1543570321-acf0f90ccc11?q=80&w=400&auto=format",
      rating: 4.8,
      category: "corporate",
      description: "Selection of fine wines paired with gourmet cheeses and crackers in an elegant hamper.",
    },
    {
      id: 11,
      name: "Executive Pen Set",
      price: 12500,
      image: "https://images.unsplash.com/photo-1583338917491-82e52cc4aa88?q=80&w=400&auto=format",
      rating: 4.7,
      category: "corporate",
      description: "Premium fountain pen set with custom engraving options for corporate gifting.",
    },
    {
      id: 12,
      name: "Business Card Holder",
      price: 8000,
      image: "https://images.unsplash.com/photo-1603009141191-0e6b4d5b5e87?q=80&w=400&auto=format",
      rating: 4.5,
      category: "corporate",
      description: "Elegant metal business card holder with leather accents, perfect for professionals.",
    },
  ],
  personal: [
    {
      id: 9,
      name: "Spa Gift Set",
      price: 16500,
      discountPrice: 14000,
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4abbd90?q=80&w=400&auto=format",
      rating: 4.8,
      category: "personal",
      description: "Premium collection of bath oils, lotions, and aromatherapy products for relaxation.",
    },
    {
      id: 13,
      name: "Luxury Leather Wallet",
      price: 15000,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&auto=format",
      rating: 4.8,
      category: "personal",
      description: "Handcrafted genuine leather wallet with multiple compartments and premium stitching.",
    },
    {
      id: 14,
      name: "Designer Watch",
      price: 35000,
      discountPrice: 29999,
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=400&auto=format",
      rating: 4.9,
      category: "personal",
      description: "Elegant wristwatch with stainless steel band and precision quartz movement.",
    },
  ],
};

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
};

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Featured Products</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Discover our curated selection of premium gifts, perfumes, and gift baskets. 
          Perfect for every occasion and crafted to impress.
        </p>
        
        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <div className="overflow-x-auto pb-2">
            <TabsList className="inline-flex min-w-full md:grid md:grid-cols-6 bg-gray-50">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-gold data-[state=active]:text-white"
              >
                All Products
              </TabsTrigger>
              <TabsTrigger 
                value="perfumes" 
                className="data-[state=active]:bg-gold data-[state=active]:text-white"
              >
                Perfumes
              </TabsTrigger>
              <TabsTrigger 
                value="gifts" 
                className="data-[state=active]:bg-gold data-[state=active]:text-white"
              >
                Gift Sets
              </TabsTrigger>
              <TabsTrigger 
                value="homeDecor" 
                className="data-[state=active]:bg-gold data-[state=active]:text-white"
              >
                Home Decor
              </TabsTrigger>
              <TabsTrigger 
                value="corporate" 
                className="data-[state=active]:bg-gold data-[state=active]:text-white"
              >
                Corporate
              </TabsTrigger>
              <TabsTrigger 
                value="personal" 
                className="data-[state=active]:bg-gold data-[state=active]:text-white"
              >
                Personal
              </TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(productsByCategory).map(([category, products]) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="product-card group">
                    <div className="relative overflow-hidden cursor-pointer" onClick={() => handleProductClick(product.id)}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                      {product.isNew && (
                        <div className="absolute top-4 left-4 bg-gold text-white px-2 py-1 text-xs font-medium rounded">
                          New Arrival
                        </div>
                      )}
                      {product.discountPrice && (
                        <div className="absolute top-4 right-4 bg-destructive text-white px-2 py-1 text-xs font-medium rounded">
                          Sale
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                      <Button 
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 btn-primary"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent navigation when clicking the button
                          handleAddToCart(product);
                        }}
                      >
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
                      <h3 
                        className="font-playfair text-xl font-medium text-gray-800 mb-1 hover:text-gold transition-colors cursor-pointer"
                        onClick={() => handleProductClick(product.id)}
                      >
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-gold font-medium">
                          {formatPrice(product.discountPrice || product.price)}
                        </span>
                        {product.discountPrice && (
                          <span className="text-gray-400 line-through text-sm">
                            {formatPrice(product.price)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProducts;
