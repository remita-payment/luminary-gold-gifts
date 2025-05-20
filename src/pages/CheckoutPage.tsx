
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(11, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const CheckoutPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'bank'>('paystack');
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
    },
  });

  const handlePaystackPayment = (formData: FormValues) => {
    // This is a mock implementation since we don't have an actual Paystack integration
    // In a real app, you would use the Paystack JavaScript library
    
    setIsProcessing(true);
    
    // Mock successful payment after a short delay
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. Your order has been confirmed.",
      });
      
      // Clear cart and redirect to a success page
      clearCart();
      navigate("/");
    }, 2000);
  };

  const handleBankTransfer = (formData: FormValues) => {
    setIsProcessing(true);
    
    // Mock order confirmation after a short delay
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order Received!",
        description: "Please complete your bank transfer to confirm your order.",
      });
      
      // Clear cart and redirect to a success page
      clearCart();
      navigate("/");
    }, 1500);
  };

  const onSubmit = (values: FormValues) => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Your cart is empty. Please add some products before checkout.",
        variant: "destructive",
      });
      return;
    }
    
    if (paymentMethod === 'paystack') {
      handlePaystackPayment(values);
    } else {
      handleBankTransfer(values);
    }
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="container mt-32 mb-20 flex-1 px-4 md:px-6">
        <h1 className="text-3xl font-playfair font-semibold text-gold mb-8">Checkout</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-playfair text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">
              Please add some products to your cart before proceeding to checkout.
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
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <h2 className="text-xl font-playfair font-medium text-gold mb-6">Shipping Information</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">First Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John"
                                className="bg-white border-gray-300 text-gray-700"
                                disabled={isProcessing}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Last Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                className="bg-white border-gray-300 text-gray-700"
                                disabled={isProcessing}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="you@example.com"
                                className="bg-white border-gray-300 text-gray-700"
                                disabled={isProcessing}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="08012345678"
                                className="bg-white border-gray-300 text-gray-700"
                                disabled={isProcessing}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123 Main Street"
                              className="bg-white border-gray-300 text-gray-700"
                              disabled={isProcessing}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">City</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Damaturu"
                                className="bg-white border-gray-300 text-gray-700"
                                disabled={isProcessing}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">State</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Yobe"
                                className="bg-white border-gray-300 text-gray-700"
                                disabled={isProcessing}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h2 className="text-xl font-playfair font-medium text-gold mb-4">Payment Method</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="paystack"
                            name="paymentMethod"
                            className="w-4 h-4 text-gold bg-white border-gray-300 focus:ring-gold"
                            checked={paymentMethod === 'paystack'}
                            onChange={() => setPaymentMethod('paystack')}
                          />
                          <label htmlFor="paystack" className="ml-2 text-gray-700">
                            Paystack (Credit/Debit Card)
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="bank"
                            name="paymentMethod"
                            className="w-4 h-4 text-gold bg-white border-gray-300 focus:ring-gold"
                            checked={paymentMethod === 'bank'}
                            onChange={() => setPaymentMethod('bank')}
                          />
                          <label htmlFor="bank" className="ml-2 text-gray-700">
                            Bank Transfer
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="btn-primary w-full"
                        disabled={isProcessing}
                      >
                        {isProcessing ? "Processing..." : `Complete Order - ${formatPrice(getTotalPrice())}`}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-playfair font-medium text-gold mb-4">Order Summary</h2>
                
                <div className="space-y-4 divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex py-3">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-gray-700 text-sm font-medium">{item.name}</p>
                        <p className="text-gray-500 text-xs">Quantity: {item.quantity || 1}</p>
                        <p className="text-gold text-sm mt-1">
                          {formatPrice((item.discountPrice || item.price) * (item.quantity || 1))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span className="text-gray-700">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping</span>
                    <span className="text-gray-700">Free</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 text-gold">
                    <span>Total</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-playfair font-medium text-gold mb-4">Need Help?</h3>
                <p className="text-gray-500 mb-4">
                  If you have any questions about your order, feel free to contact us.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-gray-600">
                    <span className="text-gold mr-2">•</span> Phone: 08066014844, 08165997050
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="text-gold mr-2">•</span> Email: luminarygiftstore@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CheckoutPage;
