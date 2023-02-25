import MainLayout from "components/layout/MainLayout";
import AboutSection from "components/pages/Homepage/AboutSection";
import BenifitSection from "components/pages/Homepage/BenifitSection";
import DownloadSection from "components/pages/Homepage/DownloadSection";
import FAQSection from "components/pages/Homepage/FAQSection";
import HeroSection from "components/pages/Homepage/HeroSection";
import StatisticSection from "components/pages/Homepage/StatisticSection";
import TestemonialSection from "components/pages/Homepage/TestemonialSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <BenifitSection />
      <AboutSection />
      <StatisticSection />
      <TestemonialSection />
      <FAQSection />
      <DownloadSection />
    </MainLayout>
  );
}
