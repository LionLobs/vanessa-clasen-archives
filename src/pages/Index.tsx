import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedBook from "@/components/FeaturedBook";
import BooksSection from "@/components/BooksSection";
import AuthoritySection from "@/components/AuthoritySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedBook />
      <BooksSection />
      <AuthoritySection />
      <Footer />
    </div>
  );
};

export default Index;
