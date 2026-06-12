import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyClaustrum } from "@/components/WhyClaustrum";
import { EngagementModels } from "@/components/EngagementModels";
import { CTASection } from "@/components/CTASection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Trust />
        <Services />
        <Process />
        <WhyClaustrum />
        <EngagementModels />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
