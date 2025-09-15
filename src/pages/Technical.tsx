import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Technical = () => {
  const navigate = useNavigate();

  const technicalEvents = [
    {
      id: "hack-n-hammer",
      title: "Hack n Hammer",
      description: "An intensive hackathon where teams build innovative solutions to real-world problems",
      tags: ["Hackathon", "Innovation"],
      image: "🔨"
    },
    {
      id: "paper-showcase",
      title: "Paper Showcase",
      description: "Present your research papers and innovative ideas in AI and Data Science",
      tags: ["Research", "Presentation"],
      image: "📄"
    },
    {
      id: "bytefest",
      title: "ByteFest",
      description: "A competitive programming festival with challenging algorithmic problems",
      tags: ["Programming", "Competition"],
      image: "💻"
    }
  ];

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`);
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
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-wider mb-4">
              Technical
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Challenge yourself with cutting-edge technical competitions designed to test your programming, 
              problem-solving, and innovation skills in AI and Data Science.
            </p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {technicalEvents.map((event, index) => (
              <Card
                key={event.id}
                className="glow-card cursor-pointer group transition-all duration-300 hover:scale-105 bg-card border-primary/30 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => handleEventClick(event.id)}
              >
                <CardContent className="p-0">
                  {/* Event Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-xl flex items-center justify-center">
                    <div className="text-6xl">{event.image}</div>
                  </div>
                  
                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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
                          className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Registration Info */}
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-2">REGISTRATION STARTS NOW</div>
                      <div className="text-primary font-semibold group-hover:text-secondary transition-colors">
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

export default Technical;