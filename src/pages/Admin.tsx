import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Package, Users, ShoppingCart, TrendingUp } from "lucide-react";

const Admin = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-8">You don't have permission to access this page</p>
        </main>
        <Footer />
      </div>
    );
  }

  const stats = [
    { title: "Total Orders", value: "1,234", icon: ShoppingCart, change: "+12%" },
    { title: "Total Users", value: "5,678", icon: Users, change: "+8%" },
    { title: "Products", value: "234", icon: Package, change: "+3%" },
    { title: "Revenue", value: "$123,456", icon: TrendingUp, change: "+15%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4 mt-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
              <p className="text-muted-foreground">Order management coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4 mt-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Product Management</h2>
              <p className="text-muted-foreground">Product management coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4 mt-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">User Management</h2>
              <p className="text-muted-foreground">User management coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
