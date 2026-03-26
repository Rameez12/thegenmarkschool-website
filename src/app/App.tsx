import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { AboutSection } from "./components/AboutSection";
import { AcademicsSection } from "./components/AcademicsSection";
import { FacilitiesSection } from "./components/FacilitiesSection";
import { AdmissionsSection } from "./components/AdmissionsSection";
import { EventsSection } from "./components/EventsSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <AboutSection />
        <AcademicsSection />
        <FacilitiesSection />
        <AdmissionsSection />
        <EventsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
