import AppAds from "@/components/organisms/AppAds/AppAds";
import ContactUs from "@/components/organisms/ContactUs/ContactUs";
import Footer from "@/components/organisms/Footer/Footer";
import Hero from "@/components/organisms/Hero/Hero";
import Navbar from "@/components/organisms/Navbar/Navbar";
import Services from "@/components/organisms/Services/Services";
import StatsSection from "@/components/organisms/StatsSection/StatsSection";
import WhatIsEms from "@/components/organisms/WhatIsEms/WhatIsEms";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <StatsSection />
        <WhatIsEms />
        <Services />
        <AppAds />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
