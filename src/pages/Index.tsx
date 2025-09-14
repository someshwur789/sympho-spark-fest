import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AudioPlayer />
      <Navbar />
      <Hero />
      <Countdown />
      <Timeline />
      <About />
      <Events />
      <Gallery />
      <Team />
      <Contact />
    </div>
  );
};

export default Index;
