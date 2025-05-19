
import { Gift, Package, Image, Star, ShoppingCart } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Perfumes",
    icon: <Gift className="h-10 w-10 text-gold mb-4" />,
    count: 48,
  },
  {
    id: 2,
    name: "Gift Baskets",
    icon: <Package className="h-10 w-10 text-gold mb-4" />,
    count: 36,
  },
  {
    id: 3,
    name: "Home Decor",
    icon: <Image className="h-10 w-10 text-gold mb-4" />,
    count: 42,
  },
  {
    id: 4,
    name: "Corporate Gifts",
    icon: <Star className="h-10 w-10 text-gold mb-4" />,
    count: 24,
  },
  {
    id: 5,
    name: "Special Occasions",
    icon: <Gift className="h-10 w-10 text-gold mb-4" />,
    count: 52,
  },
  {
    id: 6,
    name: "Accessories",
    icon: <ShoppingCart className="h-10 w-10 text-gold mb-4" />,
    count: 38,
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-dark-light">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Shop by Category</h2>
        <p className="text-cream-light/80 mb-10 max-w-2xl">
          Explore our extensive range of premium gift categories, each offering unique and carefully selected items.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              {category.icon}
              <h3 className="font-playfair text-xl font-medium text-cream-light mb-1">
                {category.name}
              </h3>
              <p className="text-cream-light/70 text-sm">
                {category.count} products
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
