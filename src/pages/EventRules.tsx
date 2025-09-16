import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventRules = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const eventRules = {
    "hack-n-hammer": {
      title: "Hack n Hammer",
      description: "An intensive hackathon where teams build innovative solutions to real-world problems",
      rules: [
        "Teams can have 2-4 members",
        "Duration: 24 hours",
        "All code must be written during the hackathon",
        "Use of external APIs and libraries is allowed",
        "Final submission must include source code and demo",
        "Projects will be judged on innovation, technical implementation, and presentation"
      ],
      prizes: ["First Prize: ₹25,000", "Second Prize: ₹15,000", "Third Prize: ₹10,000"],
      contact: "hackathon@saec.ac.in"
    },
    "paper-showcase": {
      title: "Paper Showcase",
      description: "Present your research papers and innovative ideas in AI and Data Science",
      rules: [
        "Individual or team presentations (max 3 members)",
        "Presentation duration: 10-15 minutes",
        "Research should be original and unpublished",
        "Topics must be related to AI, ML, or Data Science",
        "Submit abstract 1 week before the event",
        "PowerPoint presentation required"
      ],
      prizes: ["Best Paper: ₹15,000", "Second Best: ₹10,000", "Third Best: ₹5,000"],
      contact: "research@saec.ac.in"
    },
    "bytefest": {
      title: "ByteFest",
      description: "A competitive programming festival with challenging algorithmic problems",
      rules: [
        "Individual participation only",
        "Duration: 3 hours",
        "Multiple rounds with increasing difficulty",
        "Use of any IDE is allowed",
        "Internet access restricted to documentation only",
        "Scoring based on correctness and time taken"
      ],
      prizes: ["Winner: ₹20,000", "Runner-up: ₹12,000", "Third Place: ₹8,000"],
      contact: "coding@saec.ac.in"
    },
    "esports": {
      title: "Esports",
      description: "Gaming competitions across multiple popular titles",
      rules: [
        "Team size varies by game (1v1, 5v5)",
        "Bring your own devices (BYOD)",
        "Multiple game categories available",
        "Tournament bracket format",
        "Fair play and sportsmanship required",
        "No external assistance during matches"
      ],
      prizes: ["Champions: ₹18,000", "Runners-up: ₹12,000", "Semi-finalists: ₹6,000"],
      contact: "esports@saec.ac.in"
    },
    "cinephile": {
      title: "Cinephile",
      description: "Test your movie knowledge and film-making skills",
      rules: [
        "Individual or team participation (max 3 members)",
        "Multiple rounds: Quiz, Scene recreation, Trivia",
        "Cover all genres and eras of cinema",
        "Props and costumes allowed for scene recreation",
        "No mobile phones during quiz rounds",
        "Judging based on accuracy and creativity"
      ],
      prizes: ["Movie Buffs: ₹15,000", "Cinema Lovers: ₹10,000", "Film Fans: ₹5,000"],
      contact: "cinema@saec.ac.in"
    }
  };

  const event = eventRules[eventId as keyof typeof eventRules];

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Event Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-secondary hover:text-primary transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="starfield"></div>
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-wider mb-4">
              {event.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {event.description}
            </p>
          </div>
        </div>
      </div>

      {/* Rules Content */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {/* Rules */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Rules & Regulations</h2>
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 font-bold">{index + 1}.</span>
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Prizes */}
            <Card className="glow-card bg-card border-secondary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">Prizes</h2>
                <div className="grid gap-4">
                  {event.prizes.map((prize, index) => (
                    <div key={index} className="flex items-center justify-between bg-secondary/10 rounded-lg p-4">
                      <span className="text-foreground font-medium">{prize}</span>
                      <span className="text-secondary">🏆</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  For queries and registrations: <br />
                  <span className="text-secondary font-medium">{event.contact}</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRules;