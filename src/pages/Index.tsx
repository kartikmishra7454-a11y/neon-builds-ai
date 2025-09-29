import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PCBuilds } from "@/components/home/PCBuilds";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <PCBuilds />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
