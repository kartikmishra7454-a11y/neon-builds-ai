import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockProducts } from "@/data/mockProducts";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Star, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const Deals = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Filter products with discounts
  const dealsProducts = mockProducts.filter(p => p.discount && p.discount > 0);

  const handleAddToCart = (product: typeof mockProducts[0]) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flame className="h-12 w-12 text-red-500 animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Hot Deals
            </h1>
            <Flame className="h-12 w-12 text-red-500 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground">
            Limited time offers on the best gaming hardware
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dealsProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all">
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.discount && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                      -{product.discount}%
                    </Badge>
                  )}
                </div>
              </Link>
              <div className="p-4 space-y-3">
                <Link to={`/product/${product.id}`}>
                  <Badge variant="outline" className="text-xs">
                    {product.brand}
                  </Badge>
                  <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors mt-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <Button
                  className="w-full"
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
