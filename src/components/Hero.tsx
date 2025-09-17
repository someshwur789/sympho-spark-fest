import { Button } from "@/components/ui/button";
import aiuraLogo from "@/assets/aiura-logo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="starfield"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo with Circular Animation */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto">
            <div className="w-full h-full border-2 border-primary/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 sm:inset-4 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 border border-secondary/20 rounded-full animate-spin-reverse"></div>
          </div>
          <img 
            src={aiuraLogo} 
            alt="AIURA" 
            className="relative mx-auto h-32 sm:h-48 md:h-64 w-auto filter drop-shadow-lg"
          />
        </div>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary font-semibold mb-4">
          AI & Data Science Symposium 2025
        </p>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Join us for an extraordinary journey into the future of Artificial Intelligence and Data Science. 
          Discover innovative research, compete in cutting-edge challenges, and network with industry leaders.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 sm:px-8 
                       glow-border animate-pulse-glow w-full sm:w-auto text-sm sm:text-base"
          >
            Register Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground 
                       px-6 py-3 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
          >
            View Events
          </Button>
        </div>

        {/* Event Details */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            📅 September 26, 2025 | 🎓 Department of Artificial Intelligence and Data Science
          </p>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-2">
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