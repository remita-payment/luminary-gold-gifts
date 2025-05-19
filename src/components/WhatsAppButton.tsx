
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "2348066014844"; // Format: country code + number without '+'
  const message = "Hello! I'm interested in your products.";
  
  const handleWhatsAppChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72 animate-in slide-in-from-right">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <MessageCircle className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="font-medium text-gray-800">Chat with us</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Have questions about our products or services? Chat with our team on WhatsApp!
          </p>
          <Button 
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            onClick={handleWhatsAppChat}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Start Chat
          </Button>
        </div>
      )}
      
      <Button 
        size="icon" 
        className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default WhatsAppButton;
