import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, Monitor, Gamepad2, Briefcase, DollarSign } from "lucide-react";
import { mockPCBuilds } from "@/data/mockProducts";
import { Link } from "react-router-dom";

const buildTypeIcons = {
  gaming: Gamepad2,
  office: Briefcase,
  budget: DollarSign,
  'high-end': Monitor
};

const buildTypeColors = {
  gaming: 'text-accent',
  office: 'text-secondary',
  budget: 'text-primary',
  'high-end': 'text-purple-500'
};

export function PCBuilds() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              ⭐ Recommended PC Builds
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pre-configured systems optimized for your needs
          </p>
        </div>

        {/* Build Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['Gaming', 'Professional', 'Budget', 'High-End'].map((category) => (
            <Link key={category} to={`/prebuilt?category=${category.toLowerCase()}`}>
              <Card className="gradient-border card-hover">
                <CardContent className="p-6 text-center">
                  <div className="mb-3">
                    {category === 'Gaming' && <Gamepad2 className="h-8 w-8 mx-auto text-accent" />}
                    {category === 'Professional' && <Briefcase className="h-8 w-8 mx-auto text-secondary" />}
                    {category === 'Budget' && <DollarSign className="h-8 w-8 mx-auto text-primary" />}
                    {category === 'High-End' && <Monitor className="h-8 w-8 mx-auto text-purple-500" />}
                  </div>
                  <h3 className="font-semibold">{category}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* PC Builds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockPCBuilds.map((build) => {
            const Icon = buildTypeIcons[build.type as keyof typeof buildTypeIcons] || Cpu;
            const iconColor = buildTypeColors[build.type as keyof typeof buildTypeColors] || 'text-primary';
            
            return (
              <Card key={build.id} className="gradient-border card-hover overflow-hidden">
                {/* Build Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={build.image}
                    alt={build.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                    <Icon className={`h-4 w-4 mr-1 ${iconColor}`} />
                    {build.type.charAt(0).toUpperCase() + build.type.slice(1)}
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{build.name}</h3>
                    <p className="text-3xl font-bold text-primary">
                      ${build.totalPrice}
                    </p>
                  </div>

                  {/* Key Components */}
                  <div className="space-y-2 text-sm">
                    {build.components.cpu && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CPU:</span>
                        <span className="font-medium text-right">{build.components.cpu.name}</span>
                      </div>
                    )}
                    {build.components.gpu && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">GPU:</span>
                        <span className="font-medium text-right">{build.components.gpu.name}</span>
                      </div>
                    )}
                    {build.components.ram && build.components.ram[0] && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">RAM:</span>
                        <span className="font-medium text-right">{build.components.ram[0].name}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4">
                    <Link to="/build" className="flex-1">
                      <Button className="w-full neon-button">
                        Customize
                      </Button>
                    </Link>
                    <Link to={`/prebuilt?category=${build.type}`} className="flex-1">
                      <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/build">
            <Button size="lg" className="neon-button">
              Build Your Own PC
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}