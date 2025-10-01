import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  Cpu, Monitor, HardDrive, Zap, Box, Fan, 
  AlertCircle, Check, X, ShoppingCart, Sparkles 
} from "lucide-react";
import { mockProducts } from "@/data/mockProducts";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface BuildComponents {
  cpu?: Product;
  gpu?: Product;
  ram?: Product[];
  motherboard?: Product;
  storage?: Product[];
  psu?: Product;
  cabinet?: Product;
  cooling?: Product;
}

const PCBuilder = () => {
  const [selectedComponents, setSelectedComponents] = useState<BuildComponents>({});
  const [compatibilityErrors, setCompatibilityErrors] = useState<string[]>([]);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const componentCategories = [
    { key: 'cpu', label: 'Processor', icon: Cpu, required: true },
    { key: 'gpu', label: 'Graphics Card', icon: Monitor, required: true },
    { key: 'ram', label: 'Memory', icon: HardDrive, required: true, multiple: true },
    { key: 'motherboard', label: 'Motherboard', icon: Box, required: true },
    { key: 'storage', label: 'Storage', icon: HardDrive, required: true, multiple: true },
    { key: 'psu', label: 'Power Supply', icon: Zap, required: true },
    { key: 'cabinet', label: 'Cabinet', icon: Box, required: true },
    { key: 'cooling', label: 'Cooling', icon: Fan, required: false },
  ];

  const checkCompatibility = () => {
    const errors: string[] = [];
    
    // Check CPU and Motherboard socket compatibility
    if (selectedComponents.cpu && selectedComponents.motherboard) {
      const cpuSocket = selectedComponents.cpu.compatibility?.[0];
      const mbSocket = selectedComponents.motherboard.compatibility?.[0];
      if (cpuSocket !== mbSocket) {
        errors.push(`CPU socket (${cpuSocket}) doesn't match motherboard socket (${mbSocket})`);
      }
    }

    // Check PSU wattage
    if (selectedComponents.psu && selectedComponents.gpu) {
      const totalPower = (selectedComponents.cpu ? 125 : 0) + 
                        (selectedComponents.gpu ? 350 : 0) + 
                        50; // Other components
      const psuWattage = parseInt(selectedComponents.psu.specifications?.['Wattage'] || '0');
      if (psuWattage < totalPower * 1.2) {
        errors.push(`PSU wattage (${psuWattage}W) may be insufficient. Recommended: ${Math.ceil(totalPower * 1.2)}W`);
      }
    }

    setCompatibilityErrors(errors);
    return errors.length === 0;
  };

  const selectComponent = (category: string, product: Product) => {
    const isMultiple = ['ram', 'storage'].includes(category);
    
    setSelectedComponents(prev => {
      if (isMultiple) {
        const existing = (prev[category as keyof BuildComponents] as Product[]) || [];
        return { ...prev, [category]: [...existing, product] };
      }
      return { ...prev, [category]: product };
    });
  };

  const removeComponent = (category: string, productId?: string) => {
    setSelectedComponents(prev => {
      const isMultiple = ['ram', 'storage'].includes(category);
      if (isMultiple && productId) {
        const existing = (prev[category as keyof BuildComponents] as Product[]) || [];
        return { ...prev, [category]: existing.filter(p => p.id !== productId) };
      }
      const newComponents = { ...prev };
      delete newComponents[category as keyof BuildComponents];
      return newComponents;
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    Object.values(selectedComponents).forEach(component => {
      if (Array.isArray(component)) {
        total += component.reduce((sum, c) => sum + c.price, 0);
      } else if (component) {
        total += component.price;
      }
    });
    return total;
  };

  const addBuildToCart = () => {
    if (!checkCompatibility()) {
      toast({
        title: "Compatibility Issues",
        description: "Please resolve compatibility issues before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    Object.values(selectedComponents).forEach(component => {
      if (Array.isArray(component)) {
        component.forEach(c => addToCart(c));
      } else if (component) {
        addToCart(component);
      }
    });

    toast({
      title: "Build added to cart",
      description: "All components have been added to your cart.",
    });
  };

  const autoGenerateBuild = (type: 'gaming' | 'budget' | 'professional') => {
    const builds = {
      gaming: {
        cpu: mockProducts.find(p => p.id === 'cpu-1'),
        gpu: mockProducts.find(p => p.id === 'gpu-1'),
        ram: [mockProducts.find(p => p.id === 'ram-1')].filter(Boolean) as Product[],
        motherboard: mockProducts.find(p => p.id === 'mb-1'),
        storage: [mockProducts.find(p => p.id === 'storage-1')].filter(Boolean) as Product[],
        psu: mockProducts.find(p => p.id === 'psu-1'),
        cabinet: mockProducts.find(p => p.id === 'cabinet-1'),
        cooling: mockProducts.find(p => p.id === 'cooling-1'),
      },
      budget: {
        cpu: mockProducts.find(p => p.id === 'cpu-2'),
        gpu: mockProducts.find(p => p.id === 'gpu-2'),
        ram: [mockProducts.find(p => p.id === 'ram-1')].filter(Boolean) as Product[],
        motherboard: mockProducts.find(p => p.id === 'mb-1'),
        storage: [mockProducts.find(p => p.id === 'storage-1')].filter(Boolean) as Product[],
        psu: mockProducts.find(p => p.id === 'psu-1'),
        cabinet: mockProducts.find(p => p.id === 'cabinet-1'),
      },
      professional: {
        cpu: mockProducts.find(p => p.id === 'cpu-1'),
        gpu: mockProducts.find(p => p.id === 'gpu-2'),
        ram: [mockProducts.find(p => p.id === 'ram-1')].filter(Boolean) as Product[],
        motherboard: mockProducts.find(p => p.id === 'mb-1'),
        storage: [mockProducts.find(p => p.id === 'storage-1')].filter(Boolean) as Product[],
        psu: mockProducts.find(p => p.id === 'psu-1'),
        cabinet: mockProducts.find(p => p.id === 'cabinet-1'),
        cooling: mockProducts.find(p => p.id === 'cooling-1'),
      },
    };

    setSelectedComponents(builds[type] as BuildComponents);
    checkCompatibility();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PC Builder
          </h1>
          <p className="text-muted-foreground">Build your dream PC with our compatibility checker</p>
        </div>

        {/* Quick Build Options */}
        <Card className="mb-8 border-border bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Quick Build Templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                onClick={() => autoGenerateBuild('gaming')}
                className="h-auto flex-col py-4 hover:shadow-neon"
              >
                <Monitor className="h-8 w-8 mb-2 text-primary" />
                <span className="font-semibold">Gaming Beast</span>
                <span className="text-xs text-muted-foreground">High-end gaming</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => autoGenerateBuild('budget')}
                className="h-auto flex-col py-4 hover:shadow-neon"
              >
                <HardDrive className="h-8 w-8 mb-2 text-accent" />
                <span className="font-semibold">Budget Build</span>
                <span className="text-xs text-muted-foreground">Best value</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => autoGenerateBuild('professional')}
                className="h-auto flex-col py-4 hover:shadow-neon"
              >
                <Cpu className="h-8 w-8 mb-2 text-primary" />
                <span className="font-semibold">Professional</span>
                <span className="text-xs text-muted-foreground">Workstation</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Compatibility Alerts */}
        {compatibilityErrors.length > 0 && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <ul className="list-disc list-inside">
                {compatibilityErrors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Component Selection */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Select Components</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="cpu">
                  <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-6">
                    {componentCategories.map(cat => (
                      <TabsTrigger key={cat.key} value={cat.key}>
                        <cat.icon className="h-4 w-4" />
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {componentCategories.map(cat => (
                    <TabsContent key={cat.key} value={cat.key}>
                      <div className="space-y-4">
                        {mockProducts
                          .filter(p => p.category === cat.key)
                          .map(product => (
                            <div
                              key={product.id}
                              className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary transition-colors"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold">{product.name}</h4>
                                <p className="text-sm text-muted-foreground">{product.brand}</p>
                              </div>
                              <span className="text-lg font-bold text-primary">
                                ${product.price}
                              </span>
                              <Button
                                size="sm"
                                onClick={() => selectComponent(cat.key, product)}
                                className="bg-gradient-to-r from-primary to-accent hover:shadow-neon"
                              >
                                Select
                              </Button>
                            </div>
                          ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Build Summary */}
          <div className="lg:col-span-1">
            <Card className="border-border bg-card/50 backdrop-blur sticky top-24">
              <CardHeader>
                <CardTitle>Build Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {componentCategories.map(cat => {
                  const component = selectedComponents[cat.key as keyof BuildComponents];
                  const hasComponent = Array.isArray(component) ? component.length > 0 : !!component;
                  
                  return (
                    <div key={cat.key} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <cat.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{cat.label}</span>
                        {cat.required && (
                          hasComponent ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <X className="h-4 w-4 text-destructive" />
                          )
                        )}
                      </div>
                      {hasComponent && (
                        <span className="text-sm font-medium">
                          ${Array.isArray(component) 
                            ? component.reduce((sum, c) => sum + c.price, 0).toFixed(2)
                            : component.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  );
                })}

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${calculateTotalPrice().toFixed(2)}</span>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-neon"
                  onClick={addBuildToCart}
                  disabled={Object.keys(selectedComponents).length === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add Build to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PCBuilder;