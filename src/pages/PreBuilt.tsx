import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Cpu, Monitor, HardDrive } from "lucide-react";

const PreBuilt = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const prebuiltPCs = [
    {
      id: "pb1",
      name: "Gaming Beast Pro",
      type: "High-End Gaming",
      price: 3499,
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c",
      specs: ["RTX 4090 24GB", "i9-14900K", "64GB DDR5", "2TB NVMe SSD"],
      rating: 4.9,
    },
    {
      id: "pb2",
      name: "Content Creator Elite",
      type: "Workstation",
      price: 2799,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
      specs: ["RTX 4080", "Ryzen 9 7950X", "128GB DDR5", "4TB NVMe SSD"],
      rating: 4.8,
    },
    {
      id: "pb3",
      name: "Esports Champion",
      type: "Competitive Gaming",
      price: 1999,
      image: "https://images.unsplash.com/photo-1587202372583-49330a15584d",
      specs: ["RTX 4070 Ti", "i7-14700K", "32GB DDR5", "1TB NVMe SSD"],
      rating: 4.7,
    },
    {
      id: "pb4",
      name: "Budget Gamer",
      type: "Entry-Level Gaming",
      price: 1299,
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea",
      specs: ["RTX 4060 Ti", "Ryzen 5 7600X", "16GB DDR5", "500GB NVMe SSD"],
      rating: 4.5,
    },
  ];

  const handleAddToCart = (pc: typeof prebuiltPCs[0]) => {
    const product = {
      id: pc.id,
      name: pc.name,
      brand: "PC FORGE",
      category: "prebuilt" as const,
      price: pc.price,
      image: pc.image,
      stock: 10,
      rating: pc.rating,
      reviews: 150,
      description: `${pc.type} PC with top-tier components`,
      specifications: pc.specs.reduce((acc, spec, i) => {
        acc[`Component ${i + 1}`] = spec;
        return acc;
      }, {} as Record<string, string>),
    };
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${pc.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pre-Built Gaming PCs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked components, expertly assembled, and rigorously tested for peak performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prebuiltPCs.map((pc) => (
            <Card key={pc.id} className="group overflow-hidden hover:shadow-lg transition-all">
              <div className="relative overflow-hidden">
                <img
                  src={pc.image}
                  alt={pc.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4">{pc.type}</Badge>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{pc.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">
                    ${pc.price.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-2">
                  {pc.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      {i === 0 && <Monitor className="h-4 w-4" />}
                      {i === 1 && <Cpu className="h-4 w-4" />}
                      {i === 2 && <HardDrive className="h-4 w-4" />}
                      {i === 3 && <HardDrive className="h-4 w-4" />}
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" onClick={() => handleAddToCart(pc)}>
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

export default PreBuilt;
