
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Simulate API call to fetch product details
    const getProductDetails = async () => {
      setLoading(true);
      try {
        // This would normally be an API call
        // For now, we'll use the data from FeaturedProducts
        const allProducts = [
          // All products from all categories
          {
            id: 1,
            name: "Royal Amber Perfume",
            price: 12500,
            discountPrice: 9999,
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format",
            rating: 4.8,
            isNew: true,
            description: "A luxurious fragrance with notes of amber, vanilla and sandalwood that lasts all day.",
            images: [
              "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format",
              "https://images.unsplash.com/photo-1615796053747-7612db873c49?q=80&w=800&auto=format",
              "https://images.unsplash.com/photo-1608377205709-a6288936450e?q=80&w=800&auto=format"
            ],
            features: [
              "Long lasting fragrance (8-12 hours)",
              "Elegant glass bottle with gold accents",
              "Notes: amber, vanilla, sandalwood, musk",
              "Suitable for evening wear and special occasions"
            ]
          },
          {
            id: 2,
            name: "Luxury Gift Basket",
            price: 18500,
            image: "https://images.unsplash.com/photo-1549465220-6396a6ff20de?q=80&w=800&auto=format",
            rating: 4.9,
            description: "An exquisite collection of gourmet treats, chocolates and premium items presented in an elegant basket.",
            images: [
              "https://images.unsplash.com/photo-1549465220-6396a6ff20de?q=80&w=800&auto=format",
              "https://images.unsplash.com/photo-1607059605925-71e026bb01e3?q=80&w=800&auto=format",
              "https://images.unsplash.com/photo-1638428303892-34c86857e6c5?q=80&w=800&auto=format"
            ],
            features: [
              "Premium handcrafted basket",
              "Assortment of gourmet chocolates and treats",
              "Elegant presentation with ribbon",
              "Perfect for corporate gifting or special occasions"
            ]
          },
          // Add more products as needed
          {
            id: 3,
            name: "Crystal Celebration Set",
            price: 15000,
            discountPrice: 12500,
            image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format",
            rating: 4.7,
            description: "Beautiful crystal glasses and decorative items perfect for celebrations and special occasions.",
            images: [
              "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format",
              "https://images.unsplash.com/photo-1586836930332-6a1b50e95e3a?q=80&w=800&auto=format",
              "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format"
            ],
            features: [
              "Premium quality crystal",
              "Set of 4 glasses",
              "Elegant gift box included",
              "Perfect for weddings and anniversaries"
            ]
          },
          {
            id: 4,
            name: "Artisan Chocolate Box",
            price: 8500,
            image: "https://images.unsplash.com/photo-1621263764928-df1444c5c384?q=80&w=800&auto=format",
            rating: 4.6,
            isNew: true,
            description: "Handcrafted chocolate selection featuring unique flavors from around the world.",
            images: [
              "https://images.unsplash.com/photo-1621263764928-df1444c5c384?q=80&w=800&auto=format",
              "https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=800&auto=format",
              "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?q=80&w=800&auto=format"
            ],
            features: [
              "12 premium handcrafted chocolates",
              "Variety of flavors and textures",
              "Beautiful gift box included",
              "Sourced from sustainable cocoa farms"
            ]
          }
        ];

        const foundProduct = allProducts.find(p => p.id === parseInt(id as string));
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          toast({
            title: "Product not found",
            description: "We couldn't find the product you're looking for",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast({
          title: "Error",
          description: "Failed to load product details",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (action === 'increase') {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-gold">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-dark flex flex-col">
        <Navbar />
        <div className="container mt-32 mb-20 flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-gold mb-4">Product Not Found</h1>
          <p className="text-cream-light mb-8">We couldn't find the product you're looking for.</p>
          <Link to="/">
            <Button className="btn-primary">
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="container mt-32 mb-20 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden bg-dark-light rounded-lg border border-dark-darker">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
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
            </div>
            
            {/* Thumbnail Images */}
            {product.images && product.images.length > 0 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === idx ? "border-gold" : "border-dark-darker"
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <div className="flex text-gold">
                  <Star className="h-5 w-5 fill-gold" />
                  <span className="ml-1">{product.rating}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-playfair font-medium text-cream-light">
                {product.name}
              </h1>
              
              <div className="flex items-center mt-4 space-x-3">
                <span className="text-2xl text-gold font-medium">
                  {formatPrice(product.discountPrice || product.price)}
                </span>
                {product.discountPrice && (
                  <span className="text-xl text-cream-light/60 line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
                {product.discountPrice && (
                  <span className="bg-gold/20 text-gold px-2 py-1 text-sm rounded">
                    {Math.round((1 - product.discountPrice / product.price) * 100)}% Off
                  </span>
                )}
              </div>
            </div>
            
            <div className="border-t border-dark-darker pt-6">
              <p className="text-cream-light/80 leading-relaxed">
                {product.description}
              </p>
              
              {product.features && (
                <div className="mt-6">
                  <h3 className="font-medium text-gold mb-3">Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-cream-light/80">
                        <span className="text-gold mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="border-t border-dark-darker pt-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center">
                  <span className="text-cream-light mr-4">Quantity:</span>
                  <div className="flex items-center border border-dark-darker rounded-md overflow-hidden">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-none h-10 w-10 text-cream-light hover:text-gold"
                      onClick={() => handleQuantityChange('decrease')}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center text-cream-light">
                      {quantity}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-none h-10 w-10 text-cream-light hover:text-gold"
                      onClick={() => handleQuantityChange('increase')}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 flex gap-3">
                  <Button 
                    className="btn-primary flex-1" 
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Link to="/checkout">
                    <Button className="btn-outline">
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
