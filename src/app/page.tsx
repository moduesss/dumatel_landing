import Header from "@/components/Header";
import AssistantCarousel from "@/sections/AssistantCarousel";
import AssistantDialog from "@/sections/AssistantDialog";
import Hero from "@/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AssistantCarousel />
        <AssistantDialog />
      </main>
    </>
  );
}
