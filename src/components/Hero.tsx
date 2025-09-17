import { Button } from "@/components/ui/button";
import aiuraLogo from "@/assets/aiura-logo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="starfield"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo with Circular Animation */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 w-64 h-64 mx-auto">
            <div className="w-full h-full border-2 border-primary/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 w-56 h-56 border border-secondary/20 rounded-full animate-spin-reverse"></div>
          </div>
          <img 
            src={aiuraLogo} 
            alt="AIURA" 
            className="relative mx-auto h-64 w-auto filter drop-shadow-lg"
          />
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-secondary font-semibold mb-4">
          AI & Data Science Symposium 2025
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Join us for an extraordinary journey into the future of Artificial Intelligence and Data Science. 
          Discover innovative research, compete in cutting-edge challenges, and network with industry leaders.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 glow-border animate-pulse-glow"
          >
            Register Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3"
          >
            View Events
          </Button>
        </div>

        {/* Event Details */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            📅 September 26, 2025 | 🎓 Department of Artificial Intelligence and Data Science
          </p>
          <p className="text-md text-muted-foreground mt-2">
            S A Engineering College, Avadi
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-secondary rounded-full animate-float opacity-80" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-secondary rounded-full animate-float opacity-70" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
};

export default Hero;