import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NonTechnical = () => {
  const navigate = useNavigate();

  const nonTechnicalEvents = [
    {
      id: "esports",
      title: "Esports",
      description: "Compete in popular gaming tournaments and showcase your gaming skills",
      tags: ["Gaming", "Competition"],
      image: "🎮"
    },
    {
      id: "cinephile",
      title: "Cinephile",
      description: "Film appreciation, movie trivia, and cinematic creativity challenges",
      tags: ["Film", "Entertainment"],
      image: "🎬"
    }
  ];

  const handleEventClick = (eventId: string) => {
    navigate(`/event-rules/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="starfield"></div>
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary tracking-wider mb-4">
              Non-Technical
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Express your creativity and communication skills through engaging non-technical competitions 
              that blend innovation with artistic expression.
            </p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <Card
                key={event.id}
                className="glow-card cursor-pointer group transition-all duration-300 hover:scale-105 bg-card border-secondary/30 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => handleEventClick(event.id)}
              >
                <CardContent className="p-0">
                  {/* Event Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-t-xl flex items-center justify-center">
                    <div className="text-6xl">{event.image}</div>
                  </div>
                  
                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Registration Info */}
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-2">REGISTRATION STARTS NOW</div>
                      <div className="text-secondary font-semibold group-hover:text-primary transition-colors">
                        View Details →
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonTechnical;