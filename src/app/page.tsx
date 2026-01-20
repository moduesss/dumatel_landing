import Header from "@/components/Header";
import AssistantCarousel from "@/sections/AssistantCarousel";
import AssistantDialog from "@/sections/AssistantDialog";
import ComparisonMatrix from "@/sections/ComparisonMatrix";
import Formats from "@/sections/Formats";
import FAQ from "@/sections/FAQ";
import Hero from "@/sections/Hero";
import PricingPlans from "@/sections/PricingPlans";
import Reviews from "@/sections/Reviews";
import SecurityShowcase from "@/sections/SecurityShowcase";
import QuestionWindow from "@/sections/QuestionWindow";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AssistantCarousel />
        <AssistantDialog />
        <Reviews />
        <PricingPlans />
        <Formats />
        <ComparisonMatrix />
        <SecurityShowcase />
        <QuestionWindow />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
