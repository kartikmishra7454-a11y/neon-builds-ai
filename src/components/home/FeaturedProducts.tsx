import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { mockProducts } from "@/data/mockProducts";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";

export function FeaturedProducts() {
  const featuredProducts = mockProducts.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              🔥 Top Selling Products
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Handpicked components for ultimate performance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group card-hover gradient-border overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-background">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Discount Badge */}
        {product.discount && (
          <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
            -{product.discount}%
          </Badge>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-2 left-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" className="flex-1 bg-primary/90 hover:bg-primary">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
          <Button size="sm" variant="secondary" className="bg-secondary/90 hover:bg-secondary">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Product Info */}
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.brand}</p>
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">
              ${product.price}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </p>
            )}
          </div>
          {product.stock <= 10 && (
            <Badge variant="destructive" className="text-xs">
              Only {product.stock} left
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}