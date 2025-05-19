
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
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
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
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format",
            rating: 4.8,
            isNew: true,
            category: "perfumes",
            description: "A luxurious fragrance with notes of amber, vanilla and sandalwood that lasts all day.",
            images: [
              "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1615796053747-7612db873c49?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1608377205709-a6288936450e?q=80&w=400&auto=format"
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
            image: "https://images.unsplash.com/photo-1549465220-6396a6ff20de?q=80&w=400&auto=format",
            rating: 4.9,
            category: "gifts",
            description: "An exquisite collection of gourmet treats, chocolates and premium items presented in an elegant basket.",
            images: [
              "https://images.unsplash.com/photo-1549465220-6396a6ff20de?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1607059605925-71e026bb01e3?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1638428303892-34c86857e6c5?q=80&w=400&auto=format"
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
            image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=400&auto=format",
            rating: 4.7,
            category: "homeDecor",
            description: "Beautiful crystal glasses and decorative items perfect for celebrations and special occasions.",
            images: [
              "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1586836930332-6a1b50e95e3a?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format"
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
            image: "https://images.unsplash.com/photo-1621263764928-df1444c5c384?q=80&w=400&auto=format",
            rating: 4.6,
            isNew: true,
            category: "gifts",
            description: "Handcrafted chocolate selection featuring unique flavors from around the world.",
            images: [
              "https://images.unsplash.com/photo-1621263764928-df1444c5c384?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?q=80&w=400&auto=format"
            ],
            features: [
              "12 premium handcrafted chocolates",
              "Variety of flavors and textures",
              "Beautiful gift box included",
              "Sourced from sustainable cocoa farms"
            ]
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
            images: [
              "https://images.unsplash.com/photo-1584811644165-33078f50eb15?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1584811644147-8438cf9f532d?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=400&auto=format"
            ],
            features: [
              "Handcrafted from sustainable wood",
              "Multiple compartments and drawers",
              "Velvet lining for jewelry protection",
              "Antique-inspired design and finishes"
            ]
          },
          {
            id: 6,
            name: "Premium Wine Hamper",
            price: 32000,
            image: "https://images.unsplash.com/photo-1543570321-acf0f90ccc11?q=80&w=400&auto=format",
            rating: 4.8,
            category: "corporate",
            description: "Selection of fine wines paired with gourmet cheeses and crackers in an elegant hamper.",
            images: [
              "https://images.unsplash.com/photo-1543570321-acf0f90ccc11?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1560157368-946d9c8f7cb5?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1592845601438-c4b13d282ce4?q=80&w=400&auto=format"
            ],
            features: [
              "Selection of premium wines",
              "Artisanal cheeses and crackers",
              "Elegantly presented in wicker hamper",
              "Perfect for corporate gifting"
            ]
          },
          {
            id: 7,
            name: "Midnight Rose Perfume",
            price: 14500,
            image: "https://images.unsplash.com/photo-1563170352-58ec7a91ad53?q=80&w=400&auto=format",
            rating: 4.7,
            category: "perfumes",
            description: "An enchanting floral fragrance with deep rose notes and subtle hints of musk.",
            images: [
              "https://images.unsplash.com/photo-1563170352-58ec7a91ad53?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1602928298049-8d5d543927a5?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1617186162387-d8431a2acab3?q=80&w=400&auto=format"
            ],
            features: [
              "Long-lasting floral fragrance",
              "Elegant bottle with crystal accents",
              "Notes: rose, jasmine, amber, musk",
              "Suitable for evening wear"
            ]
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
            images: [
              "https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1617186162890-a695d538dc87?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1622630338624-91d754c4a977?q=80&w=400&auto=format"
            ],
            features: [
              "Fresh and invigorating scent",
              "Modern minimalist bottle design",
              "Notes: citrus, marine, woody base",
              "Perfect for daily wear"
            ]
          },
          {
            id: 9,
            name: "Spa Gift Set",
            price: 16500,
            discountPrice: 14000,
            image: "https://images.unsplash.com/photo-1570194065650-d99fb4abbd90?q=80&w=400&auto=format",
            rating: 4.8,
            category: "personal",
            description: "Premium collection of bath oils, lotions, and aromatherapy products for relaxation.",
            images: [
              "https://images.unsplash.com/photo-1570194065650-d99fb4abbd90?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1616594328883-b41db62be770?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=400&auto=format"
            ],
            features: [
              "Organic bath and body products",
              "Essential oil aromatherapy",
              "Beautifully packaged gift set",
              "Perfect for self-care routines"
            ]
          },
          {
            id: 10,
            name: "Luxury Candle Set",
            price: 9500,
            image: "https://images.unsplash.com/photo-1596433809252-61d909c8525d?q=80&w=400&auto=format",
            rating: 4.6,
            category: "homeDecor",
            description: "Set of artisanal scented candles in elegant containers perfect for creating ambiance.",
            images: [
              "https://images.unsplash.com/photo-1596433809252-61d909c8525d?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1610027584085-d7dfe3600d34?q=80&w=400&auto=format",
              "https://images.unsplash.com/photo-1601625743576-b4916e6cddf2?q=80&w=400&auto=format"
            ],
            features: [
              "Hand-poured soy wax candles",
              "Long burn time (40+ hours)",
              "Premium fragrance oils",
              "Reusable luxury containers"
            ]
          }
        ];

        const foundProduct = allProducts.find(p => p.id === parseInt(id as string));
        
        if (foundProduct) {
          setProduct(foundProduct);
          // Find related products in the same category
          const related = allProducts.filter(p => 
            p.category === foundProduct.category && p.id !== foundProduct.id
          ).slice(0, 3); // Limit to 3 related products
          setRelatedProducts(related);
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gold">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="container mt-32 mb-20 flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-gold mb-4">Product Not Found</h1>
          <p className="text-gray-700 mb-8">We couldn't find the product you're looking for.</p>
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
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="container mt-32 mb-20 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-lg border border-gray-200">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
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
            </div>
            
            {/* Thumbnail Images */}
            {product.images && product.images.length > 0 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === idx ? "border-gold" : "border-gray-200"
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
              <h1 className="text-3xl md:text-4xl font-playfair font-medium text-gray-900">
                {product.name}
              </h1>
              
              <div className="flex items-center mt-4 space-x-3">
                <span className="text-2xl text-gold font-medium">
                  {formatPrice(product.discountPrice || product.price)}
                </span>
                {product.discountPrice && (
                  <span className="text-xl text-gray-500 line-through">
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
            
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
              
              {product.features && (
                <div className="mt-6">
                  <h3 className="font-medium text-gold mb-3">Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-gold mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Shipping Information */}
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="font-medium text-gold mb-2">Shipping Information:</h3>
              <p className="text-gray-700 text-sm mb-2">
                Orders shipping within Damaturu will be delivered same day if placed before 4pm and next day if placed after 4pm.
              </p>
              <p className="text-gray-700 text-sm mb-2">
                Orders shipping outside Lagos will be delivered within 3 days.
              </p>
              <p className="text-gray-700 text-sm">
                Once your order is processed you will receive an email with progress updates.
              </p>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center">
                  <span className="text-gray-700 mr-4">Quantity:</span>
                  <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-none h-10 w-10 text-gray-700 hover:text-gold"
                      onClick={() => handleQuantityChange('decrease')}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center text-gray-700">
                      {quantity}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-none h-10 w-10 text-gray-700 hover:text-gold"
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

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-playfair font-medium text-gold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="product-card group">
                  <div className="relative overflow-hidden">
                    <Link to={`/product/${relatedProduct.id}`}>
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="product-image"
                      />
                    </Link>
                    {relatedProduct.isNew && (
                      <div className="absolute top-4 left-4 bg-gold text-white px-2 py-1 text-xs font-medium rounded">
                        New Arrival
                      </div>
                    )}
                    {relatedProduct.discountPrice && (
                      <div className="absolute top-4 right-4 bg-destructive text-white px-2 py-1 text-xs font-medium rounded">
                        Sale
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    <Button 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 btn-primary"
                      onClick={() => addToCart({ ...relatedProduct, quantity: 1 })}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-1">
                      <div className="flex text-gold">
                        <Star className="h-4 w-4 fill-gold" />
                        <span className="ml-1 text-sm">{relatedProduct.rating}</span>
                      </div>
                    </div>
                    <Link to={`/product/${relatedProduct.id}`}>
                      <h3 className="font-playfair text-xl font-medium text-gray-900 mb-1 hover:text-gold transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <div className="flex items-center space-x-2">
                      <span className="text-gold font-medium">
                        {formatPrice(relatedProduct.discountPrice || relatedProduct.price)}
                      </span>
                      {relatedProduct.discountPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          {formatPrice(relatedProduct.price)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
