import Header from "@/components/Header";
import AssistantCarousel from "@/sections/AssistantCarousel";
import AssistantDialog from "@/sections/AssistantDialog";
import Hero from "@/sections/Hero";
import PricingPlans from "@/sections/PricingPlans";
import Reviews from "@/sections/Reviews";

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
      </main>
    </>
  );
}
