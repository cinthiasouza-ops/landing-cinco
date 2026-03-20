import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CincoCareSection from "@/components/CincoCareSection";
import FeaturesSection from "@/components/FeaturesSection";
import OrgsSection from "@/components/OrgsSection";
import PlansSection from "@/components/PlansSection";
import UseCasaSection from "@/components/UseCasaSection";
import B2CSection from "@/components/B2CSection";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* y=80 */}
        <HeroSection />
        {/* y=724 */}
        <CincoCareSection />
        {/* y=1439 */}
        <FeaturesSection />
        {/* y=2539 */}
        <OrgsSection />
        {/* y=3456 */}
        <PlansSection />
        {/* y=4189 */}
        <UseCasaSection />
        {/* y=4752 */}
        <B2CSection />
        {/* y=5481 */}
        <FAQSection />
        {/* y=5918 */}
        <PartnersSection />
      </main>
      {/* y=6192 */}
      <Footer />
    </>
  );
}
