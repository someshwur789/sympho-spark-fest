import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Events = () => {
  const navigate = useNavigate();

  const handleTechnicalClick = () => {
    navigate("/technical");
  };

  const handleNonTechnicalClick = () => {
    navigate("/non-technical");
  };

  return (
    <section id="events" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-wider mb-4">
            Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our exciting lineup of technical and non-technical events designed to challenge and inspire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Events Card */}
          <Card 
            className="glow-card cursor-pointer group transition-all duration-300 hover:scale-105 bg-card border-primary/30"
            onClick={handleTechnicalClick}
          >
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">💻</div>
              <h3 className="text-3xl font-bold text-primary mb-4">Technical</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dive deep into cutting-edge technology competitions including coding challenges, 
                AI workshops, data science hackathons, and innovative project presentations.
              </p>
              <div className="text-secondary font-semibold group-hover:text-primary transition-colors">
                Explore Technical Events →
              </div>
            </CardContent>
          </Card>

          {/* Non-Technical Events Card */}
          <Card 
            className="glow-card cursor-pointer group transition-all duration-300 hover:scale-105 bg-card border-secondary/30"
            onClick={handleNonTechnicalClick}
          >
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">🎨</div>
              <h3 className="text-3xl font-bold text-secondary mb-4">Non-Technical</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Showcase your creative side with cultural events, design competitions, 
                presentation challenges, and interactive workshops that blend art with technology.
              </p>
              <div className="text-primary font-semibold group-hover:text-secondary transition-colors">
                Explore Creative Events →
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;