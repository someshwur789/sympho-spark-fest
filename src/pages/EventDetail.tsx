import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Sample event data - in a real app, this would come from an API or database
  const eventData: { [key: string]: any } = {
    "coders-chemistry": {
      title: "Coders Chemistry",
      timing: "1 hr",
      duration: "10:30am - 11:30am",
      description: "A competitive programming challenge that tests your algorithmic thinking and coding prowess. Teams will face multiple rounds of increasingly difficult problems.",
      rules: {
        general: [
          "EACH TEAM SHOULD CONSIST OF 2 MEMBERS.",
          "THERE WILL BE 3 ROUNDS.",
          "TEAM MEMBERS ARE NOT ALLOWED TO COMMUNICATE WITH EACH OTHER IN THE 1ST AND 2ND ROUNDS.",
          "THE PROGRAMMING LANGUAGES: JAVA, C, C++, PYTHON"
        ],
        rounds: [
          {
            title: "ROUND 1:",
            details: [
              "ONE MEMBER SHOULD CODE THE ANSWERS FOR THE QUESTIONS, WHILE THE OTHER SHOULD IMPLEMENT THE LOGIC USING THE PAPER-AND-PEN METHOD.",
              "THE MEMBERS WILL SWAP ROLES EVERY 3 MINUTES AND PROCEED WITH THE REMAINING PART OF THE CODE.",
              "THE TIME DURATION FOR THIS ROUND IS 15 MINUTES."
            ]
          },
          {
            title: "ROUND 2:",
            details: [
              "BOTH TEAM MEMBERS HAVE TO CODE SIMULTANEOUSLY ON DIFFERENT PROBLEMS.",
              "THE POSITIONS OF THE TEAMMATES ARE SWAPPED EVERY 4 MINUTES.",
              "THE AVERAGE SCORE OF THE TEAM IS CONSIDERED FOR ELIMINATION.",
              "THE TIME DURATION FOR THIS ROUND IS 15 MINUTES."
            ]
          },
          {
            title: "ROUND 3:",
            details: [
              "THE TEAM WILL BE GIVEN A SET OF PROBLEMS TO SOLVE.",
              "BOTH TEAM MEMBERS CAN DISCUSS AND SOLVE THE PROBLEMS.",
              "PROBLEMS WILL BE BASED ON DATA STRUCTURES & ALGORITHMS.",
              "THE TIME DURATION FOR THIS ROUND IS 20 MINUTES."
            ]
          }
        ]
      },
      coordinators: [
        { name: "HARI PRASAD R", phone: "7550160349" },
        { name: "SARUMATHI", phone: "8098087730" },
        { name: "SHANJUGA PRIYA", phone: "9098987730" }
      ]
    }
  };

  const event = eventData[eventId || ""] || eventData["coders-chemistry"];

  return (
    <div className="min-h-screen bg-background">
      <div className="starfield"></div>
      
      <div className="relative z-10 pt-20 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          {/* Event Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-wider mb-4">
              {event.title}
            </h1>
          </div>

          {/* Event Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="glow-card bg-card rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Timing</div>
              <div className="font-semibold">{event.timing}</div>
            </div>
            <div className="glow-card bg-card rounded-xl p-4 text-center">
              <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Duration</div>
              <div className="font-semibold">{event.duration}</div>
            </div>
            <div className="glow-card bg-card rounded-xl p-4 text-center">
              <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Team Size</div>
              <div className="font-semibold">2 Members</div>
            </div>
          </div>

          {/* Event Description */}
          <div className="glow-card bg-card rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Event Description:</h2>
            <p className="text-muted-foreground leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Rules Section */}
          <div className="glow-card bg-card rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Rules & Guidelines</h2>
            
            {/* General Rules */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-secondary mb-3">GENERAL RULES:</h3>
              <ul className="space-y-2">
                {event.rules.general.map((rule: string, index: number) => (
                  <li key={index} className="text-muted-foreground">
                    • {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Round Details */}
            {event.rules.rounds.map((round: any, index: number) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold text-secondary mb-3">{round.title}</h3>
                <ul className="space-y-2">
                  {round.details.map((detail: string, detailIndex: number) => (
                    <li key={detailIndex} className="text-muted-foreground">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Coordinators */}
          <div className="glow-card bg-card rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Coordinators:</h2>
            <div className="space-y-4">
              {event.coordinators.map((coordinator: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <span className="font-semibold text-foreground">{coordinator.name}</span>
                  <span className="text-muted-foreground">{coordinator.phone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Register Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-12 py-3 glow-border animate-pulse-glow"
            >
              Register for Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;