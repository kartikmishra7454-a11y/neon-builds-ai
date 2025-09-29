import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full filter blur-3xl opacity-20 animate-pulse" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Build Your
                </span>
                <br />
                <span className="text-foreground">Dream PC</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Premium components, expert builds, and unbeatable prices. Create the ultimate gaming experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/build">
                <Button size="lg" className="neon-button bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/prebuilt">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  View Pre-Built PCs
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Free Shipping</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden gradient-border">
              <img
                src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=600&fit=crop"
                alt="Gaming PC"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold animate-pulse">
              NEW ARRIVALS
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold">
              RTX 4090 IN STOCK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}