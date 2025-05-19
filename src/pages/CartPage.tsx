
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCart, Product } from "@/hooks/useCart";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateItemTotal = (item: Product): number => {
    return (item.discountPrice || item.price) * (item.quantity || 1);
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="container mt-32 mb-20 flex-1 px-4 md:px-6">
        <h1 className="text-3xl font-playfair font-semibold text-gold mb-8">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-dark-light rounded-lg border border-dark-darker">
            <ShoppingCart className="h-16 w-16 text-gold/30 mx-auto mb-4" />
            <h2 className="text-2xl font-playfair text-cream-light mb-4">Your cart is empty</h2>
            <p className="text-cream-light/70 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/">
              <Button className="btn-primary">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-dark-light rounded-lg border border-dark-darker overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-dark-darker text-cream-light/70">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
                
                <div className="divide-y divide-dark-darker">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-6 flex items-center space-x-4">
                        <Link to={`/product/${item.id}`} className="w-20 h-20 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-md"
                          />
                        </Link>
                        <div>
                          <Link to={`/product/${item.id}`} className="text-cream-light hover:text-gold font-medium">
                            {item.name}
                          </Link>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 flex md:justify-center">
                        <div className="flex items-center md:hidden text-cream-light/70 mr-2">Price:</div>
                        <div className="text-cream-light">
                          {formatPrice(item.discountPrice || item.price)}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 flex md:justify-center">
                        <div className="flex items-center md:hidden text-cream-light/70 mr-2">Quantity:</div>
                        <div className="flex items-center border border-dark-darker rounded-md overflow-hidden">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="rounded-none h-8 w-8 text-cream-light hover:text-gold p-0"
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-cream-light">
                            {item.quantity || 1}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="rounded-none h-8 w-8 text-cream-light hover:text-gold p-0"
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 flex justify-between md:justify-end">
                        <div className="flex items-center md:hidden text-cream-light/70 mr-2">Total:</div>
                        <div className="flex items-center">
                          <span className="text-cream-light mr-4">
                            {formatPrice(calculateItemTotal(item))}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-cream-light/70 hover:text-destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  className="border-dark-darker text-cream-light hover:bg-dark-darker"
                  onClick={() => clearCart()}
                >
                  Clear Cart
                </Button>
                <Link to="/">
                  <Button variant="ghost" className="text-cream-light hover:text-gold">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-dark-light rounded-lg border border-dark-darker p-6 h-fit">
              <h2 className="text-xl font-playfair font-medium text-gold mb-4">Order Summary</h2>
              <div className="space-y-3 text-cream-light/70 pb-4 border-b border-dark-darker">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</span>
                  <span className="text-cream-light">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-cream-light">Free</span>
                </div>
              </div>
              <div className="flex justify-between py-4 font-medium text-gold">
                <span>Total</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <Link to="/checkout">
                <Button className="btn-primary w-full mt-4">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CartPage;
