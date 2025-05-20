
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Reset search when dialog opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setSearchResults([]);
    }
  }, [isOpen]);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 results

    setSearchResults(filteredResults);
  }, [searchQuery]);

  const handleSelectProduct = (productId: string) => {
    navigate(`/product/${productId}`);
    onClose();
    setSearchQuery("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-0 gap-0 overflow-hidden">
        <DialogTitle className="sr-only">Search Products</DialogTitle>
        <div className="flex items-center border-b p-4">
          <Search className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
          <Input
            autoFocus
            placeholder="Search products..."
            className="flex h-10 w-full border-0 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="ghost" size="sm" onClick={onClose} className="ml-2">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <Command className="border-none">
          <CommandEmpty className="py-6 text-center text-sm">
            {searchQuery.trim() ? "No products found." : "Type to search products..."}
          </CommandEmpty>
          {searchResults && searchResults.length > 0 && (
            <CommandGroup className="max-h-[300px] overflow-y-auto p-2">
              {searchResults.map((product) => (
                <CommandItem
                  key={product.id}
                  onSelect={() => handleSelectProduct(product.id)}
                  className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-secondary"
                >
                  <div className="h-12 w-12 rounded overflow-hidden flex-shrink-0 border border-border">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">{product.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ${product.discountPrice || product.price}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
