import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuotesMarquee from "@/components/QuotesMarquee";
import FeaturedBook from "@/components/FeaturedBook";
import BooksSection from "@/components/BooksSection";
import AuthoritySection from "@/components/AuthoritySection";
import PressGallery from "@/components/PressGallery";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QuotesMarquee />
      <FeaturedBook />
      <BooksSection />
      <AuthoritySection />
      <PressGallery />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
