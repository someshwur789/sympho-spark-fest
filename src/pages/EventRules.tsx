import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventRules = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const eventRules = {
    "hack-n-hammer": {
      title: "Hack n Hammer",
      description: "An intensive hackathon where teams build innovative solutions to real-world problems using cutting-edge technologies and creative problem-solving approaches.",
      timing: "24 hrs",
      duration: "9:00am - 9:00am (Next Day)",
      teamSize: "2-4 Members",
      generalRules: [
        "EACH TEAM SHOULD CONSIST OF 2-4 MEMBERS.",
        "ALL CODE MUST BE WRITTEN DURING THE HACKATHON.",
        "USE OF EXTERNAL APIs AND LIBRARIES IS ALLOWED.",
        "FINAL SUBMISSION MUST INCLUDE SOURCE CODE AND DEMO.",
        "PROJECTS WILL BE JUDGED ON INNOVATION, TECHNICAL IMPLEMENTATION, AND PRESENTATION."
      ],
      rounds: [
        {
          title: "PROBLEM STATEMENT RELEASE",
          details: [
            "• PROBLEM STATEMENTS WILL BE RELEASED AT THE START OF THE HACKATHON.",
            "• TEAMS CAN CHOOSE FROM MULTIPLE PROBLEM DOMAINS.",
            "• PLANNING AND IDEATION PHASE BEGINS.",
            "• THE TIME DURATION FOR THIS PHASE IS 2 HOURS."
          ]
        },
        {
          title: "DEVELOPMENT PHASE",
          details: [
            "• TEAMS START BUILDING THEIR SOLUTIONS.",
            "• MENTORS WILL BE AVAILABLE FOR GUIDANCE.",
            "• REGULAR CHECK-INS WITH ORGANIZERS.",
            "• THE TIME DURATION FOR THIS PHASE IS 20 HOURS."
          ]
        },
        {
          title: "PRESENTATION & JUDGING",
          details: [
            "• TEAMS PRESENT THEIR FINAL SOLUTIONS.",
            "• DEMO AND Q&A SESSION WITH JUDGES.",
            "• JUDGING BASED ON INNOVATION, FEASIBILITY, AND PRESENTATION.",
            "• THE TIME DURATION FOR THIS PHASE IS 2 HOURS."
          ]
        }
      ],
      coordinators: [
        { name: "DHARSHINI SHREE", phone: "9395956542" },
        { name: "RAJKUMAR", phone: "9576981801" },
        { name: "BALA KUMAR", phone: "8183334200" }
      ]
    },
    "paper-showcase": {
      title: "Paper Showcase",
      description: "Present your research papers and innovative ideas in AI and Data Science to a panel of experts and fellow researchers in an academic symposium format.",
      timing: "3 hrs",
      duration: "10:00am - 1:00pm",
      teamSize: "1-3 Members",
      generalRules: [
        "INDIVIDUAL OR TEAM PRESENTATIONS (MAX 3 MEMBERS).",
        "RESEARCH SHOULD BE ORIGINAL AND UNPUBLISHED.",
        "TOPICS MUST BE RELATED TO AI, ML, OR DATA SCIENCE.",
        "SUBMIT ABSTRACT 1 WEEK BEFORE THE EVENT.",
        "POWERPOINT PRESENTATION REQUIRED."
      ],
      rounds: [
        {
          title: "ABSTRACT SUBMISSION",
          details: [
            "• SUBMIT 500-WORD ABSTRACT OF YOUR RESEARCH.",
            "• INCLUDE METHODOLOGY AND EXPECTED OUTCOMES.",
            "• ABSTRACTS WILL BE REVIEWED BY ACADEMIC PANEL.",
            "• DEADLINE: 1 WEEK BEFORE EVENT."
          ]
        },
        {
          title: "PRESENTATION ROUND",
          details: [
            "• 15-MINUTE PRESENTATION FOLLOWED BY 5-MINUTE Q&A.",
            "• USE OF VISUAL AIDS AND DEMONSTRATIONS ENCOURAGED.",
            "• JUDGING BASED ON ORIGINALITY, METHODOLOGY, AND CLARITY.",
            "• THE TIME DURATION FOR EACH PRESENTATION IS 20 MINUTES."
          ]
        }
      ],
      coordinators: [
        { name: "DHARSHINI SHREE", phone: "9395956542" },
        { name: "SRIJA", phone: "8015066653" }
      ]
    },
    "bytefest": {
      title: "ByteFest",
      description: "A competitive programming festival with challenging algorithmic problems that tests your coding skills, problem-solving abilities, and algorithmic thinking.",
      timing: "3 hrs",
      duration: "2:00pm - 5:00pm",
      teamSize: "Individual",
      generalRules: [
        "INDIVIDUAL PARTICIPATION ONLY.",
        "MULTIPLE ROUNDS WITH INCREASING DIFFICULTY.", 
        "USE OF ANY IDE IS ALLOWED.",
        "INTERNET ACCESS RESTRICTED TO DOCUMENTATION ONLY.",
        "SCORING BASED ON CORRECTNESS AND TIME TAKEN."
      ],
      rounds: [
        {
          title: "ROUND 1: WARM-UP",
          details: [
            "• BASIC ALGORITHMIC PROBLEMS TO GET STARTED.",
            "• FOCUS ON IMPLEMENTATION AND LOGIC BUILDING.",
            "• 5 PROBLEMS TO SOLVE IN THE GIVEN TIME.",
            "• THE TIME DURATION FOR THIS ROUND IS 45 MINUTES."
          ]
        },
        {
          title: "ROUND 2: INTERMEDIATE",
          details: [
            "• MEDIUM DIFFICULTY PROBLEMS INVOLVING DATA STRUCTURES.",
            "• OPTIMAL SOLUTIONS REQUIRED FOR BETTER SCORING.",
            "• 4 PROBLEMS WITH VARYING DIFFICULTY LEVELS.",
            "• THE TIME DURATION FOR THIS ROUND IS 60 MINUTES."
          ]
        },
        {
          title: "ROUND 3: ADVANCED",
          details: [
            "• COMPLEX ALGORITHMIC CHALLENGES AND OPTIMIZATION.",
            "• ADVANCED DATA STRUCTURES AND ALGORITHM CONCEPTS.",
            "• 3 CHALLENGING PROBLEMS FOR FINAL RANKING.",
            "• THE TIME DURATION FOR THIS ROUND IS 75 MINUTES."
          ]
        }
      ],
      coordinators: [
        { name: "RAJKUMAR", phone: "9576981801" },
        { name: "BALA KUMAR", phone: "8183334200" }
      ]
    },
    "esports": {
      title: "Esports",
      description: "Gaming competitions across multiple popular titles featuring intense matches, strategic gameplay, and competitive gaming at its finest.",
      timing: "6 hrs",
      duration: "10:00am - 4:00pm",
      teamSize: "Varies by Game",
      generalRules: [
        "TEAM SIZE VARIES BY GAME (1V1, 5V5).",
        "BRING YOUR OWN DEVICES (BYOD).",
        "MULTIPLE GAME CATEGORIES AVAILABLE.",
        "TOURNAMENT BRACKET FORMAT.",
        "FAIR PLAY AND SPORTSMANSHIP REQUIRED."
      ],
      rounds: [
        {
          title: "GAME SELECTION & REGISTRATION",
          details: [
            "• CHOOSE FROM AVAILABLE GAME TITLES.",
            "• FORM TEAMS ACCORDING TO GAME REQUIREMENTS.",
            "• EQUIPMENT CHECK AND SETUP.",
            "• THE TIME DURATION FOR THIS PHASE IS 30 MINUTES."
          ]
        },
        {
          title: "QUALIFICATION ROUNDS",
          details: [
            "• INITIAL MATCHES TO DETERMINE TOURNAMENT BRACKETS.",
            "• BEST-OF-THREE FORMAT FOR TEAM GAMES.",
            "• ELIMINATION BASED ON PERFORMANCE.",
            "• THE TIME DURATION FOR THIS PHASE IS 3 HOURS."
          ]
        },
        {
          title: "FINALS & CHAMPIONSHIP",
          details: [
            "• TOP TEAMS COMPETE FOR THE CHAMPIONSHIP.",
            "• BEST-OF-FIVE FORMAT FOR FINAL MATCHES.",
            "• LIVE STREAMING AND COMMENTARY.",
            "• THE TIME DURATION FOR THIS PHASE IS 2.5 HOURS."
          ]
        }
      ],
      coordinators: [
        { name: "DHARSHINI SHREE", phone: "9395956542" },
        { name: "SRIJA", phone: "8015066653" }
      ]
    },
    "cinephile": {
      title: "Cinephile",
      description: "Test your movie knowledge and film-making skills in this comprehensive cinema-focused competition covering all aspects of film appreciation and creation.",
      timing: "4 hrs",
      duration: "1:00pm - 5:00pm", 
      teamSize: "1-3 Members",
      generalRules: [
        "INDIVIDUAL OR TEAM PARTICIPATION (MAX 3 MEMBERS).",
        "COVER ALL GENRES AND ERAS OF CINEMA.",
        "PROPS AND COSTUMES ALLOWED FOR SCENE RECREATION.",
        "NO MOBILE PHONES DURING QUIZ ROUNDS.",
        "JUDGING BASED ON ACCURACY AND CREATIVITY."
      ],
      rounds: [
        {
          title: "ROUND 1: MOVIE QUIZ",
          details: [
            "• QUESTIONS COVERING HOLLYWOOD, BOLLYWOOD, AND REGIONAL CINEMA.",
            "• AUDIO-VISUAL ROUNDS WITH MOVIE CLIPS AND SOUNDTRACKS.",
            "• RAPID FIRE ROUND FOR BONUS POINTS.",
            "• THE TIME DURATION FOR THIS ROUND IS 90 MINUTES."
          ]
        },
        {
          title: "ROUND 2: SCENE RECREATION",
          details: [
            "• RECREATE FAMOUS MOVIE SCENES WITH YOUR TEAM.",
            "• PROPS AND COSTUMES PROVIDED OR BRING YOUR OWN.",
            "• JUDGED ON ACCURACY, CREATIVITY, AND PERFORMANCE.",
            "• THE TIME DURATION FOR THIS ROUND IS 120 MINUTES."
          ]
        },
        {
          title: "ROUND 3: FILM TRIVIA SHOWDOWN",
          details: [
            "• FINAL ROUND WITH CHALLENGING CINEMA TRIVIA.",
            "• BEHIND-THE-SCENES FACTS AND MOVIE PRODUCTION DETAILS.",
            "• DETERMINING THE ULTIMATE CINEPHILE CHAMPIONS.",
            "• THE TIME DURATION FOR THIS ROUND IS 30 MINUTES."
          ]
        }
      ],
      coordinators: [
        { name: "DHARSHINI SHREE", phone: "9395956542" },
        { name: "BALA KUMAR", phone: "8183334200" }
      ]
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

      {/* Event Info Cards */}
      <div className="relative z-10 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Timing Card */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-2">🕐</div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Timing</h3>
                <p className="text-2xl font-bold text-foreground">{event.timing}</p>
              </CardContent>
            </Card>

            {/* Duration Card */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-2">📅</div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Duration</h3>
                <p className="text-lg font-bold text-foreground">{event.duration}</p>
              </CardContent>
            </Card>

            {/* Team Size Card */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-2">👥</div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Team Size</h3>
                <p className="text-2xl font-bold text-foreground">{event.teamSize}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {/* Event Description */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Event Description:</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {event.description}
                </p>
              </CardContent>
            </Card>

            {/* Rules & Guidelines */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Rules & Guidelines</h2>
                
                {/* General Rules */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">GENERAL RULES:</h3>
                  <ul className="space-y-2">
                    {event.generalRules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-3">•</span>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rounds */}
                {event.rounds.map((round, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-bold text-secondary mb-4">{round.title}:</h3>
                    <ul className="space-y-2">
                      {round.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Coordinators */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Coordinators:</h2>
                <div className="space-y-4">
                  {event.coordinators.map((coordinator, index) => (
                    <div key={index} className="flex justify-between items-center bg-secondary/10 rounded-lg p-4">
                      <span className="text-foreground font-medium text-lg">{coordinator.name}</span>
                      <span className="text-secondary font-bold">{coordinator.phone}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Register Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
                Register for Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRules;