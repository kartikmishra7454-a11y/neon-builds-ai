import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Package, User, Settings } from "lucide-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Please Login</h1>
          <Button onClick={() => navigate("/auth")}>Go to Login</Button>
        </main>
        <Footer />
      </div>
    );
  }

  // Mock orders data
  const orders = [
    {
      id: "ORD-001",
      date: "2025-10-01",
      status: "delivered",
      total: 2499,
      items: 3,
    },
    {
      id: "ORD-002",
      date: "2025-09-28",
      status: "shipped",
      total: 1299,
      items: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">My Account</h1>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="orders">
                <Package className="mr-2 h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6 mt-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Name</label>
                    <p className="text-lg font-medium">{user?.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Email</label>
                    <p className="text-lg font-medium">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Role</label>
                    <Badge className="ml-2">{user?.role}</Badge>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6 mt-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Order History</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <Badge
                          variant={order.status === "delivered" ? "default" : "secondary"}
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                          {order.items} items
                        </p>
                        <p className="text-lg font-bold text-primary">
                          ${order.total.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6 mt-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
                <p className="text-muted-foreground">Settings coming soon...</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
