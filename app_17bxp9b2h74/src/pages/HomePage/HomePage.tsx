import WebinarBarSection from './sections/WebinarBarSection';
import HeroSection from './sections/HeroSection';
import ClientsSection from './sections/ClientsSection';
import FeatureCardsSection from './sections/FeatureCardsSection';
import SolidworksSection from './sections/SolidworksSection';
import IndustriesSection from './sections/IndustriesSection';

export default function HomePage() {
  return (
    <div className="bg-background">
      <WebinarBarSection />
      <HeroSection />
      <ClientsSection />
      <FeatureCardsSection />
      <SolidworksSection />
      <IndustriesSection />
    </div>
  );
}
