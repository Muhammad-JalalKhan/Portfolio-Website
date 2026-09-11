import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import CommunityBanner from "@/components/CommunityBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SelectedWork />
      <Services />
      <Experience />
      <CommunityBanner />
      <Footer />
    </main>
  );
}
