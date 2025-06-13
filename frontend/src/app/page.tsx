import Hero from "@/components/common/Hero";
import CoursesSection from "@/components/common/CoursesSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoursesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
