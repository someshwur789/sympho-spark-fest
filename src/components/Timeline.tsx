const Timeline = () => {
  const timelineEvents = [
    {
      title: "REGISTRATION",
      description: "Welcome participants and collect registration details.",
      image: "/src/assets/timeline-presentation.jpg",
      side: "left"
    },
    {
      title: "INAUGURATION",
      description: "Official opening ceremony with welcome address.",
      image: "/src/assets/timeline-workshop.jpg",
      side: "right"
    },
    {
      title: "TECH & NON-TECH EVENTS BEGIN",
      description: "Technical and non-technical competitions commence.",
      image: "/src/assets/event-coding.jpg",
      side: "left"
    },
    {
      title: "LUNCH",
      description: "Break for refreshments and networking.",
      image: "/src/assets/timeline-hackathon.jpg",
      side: "right"
    },
    {
      title: "EVENTS CONTINUE",
      description: "Afternoon session of competitions and presentations.",
      image: "/src/assets/event-ai.jpg",
      side: "left"
    },
    {
      title: "PRIZE DISTRIBUTION",
      description: "Award ceremony and closing remarks.",
      image: "/src/assets/gallery-1.jpg",
      side: "right"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[hsl(var(--countdown-bg))] tracking-wider">
          AIURA EVENT TIMELINE
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line with Glow Effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary rounded-full animate-pulse opacity-50 blur-sm"></div>
          </div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${event.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-5/12 ${event.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="glow-card bg-card rounded-xl overflow-hidden animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--countdown-bg))] mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping opacity-30"></div>
                    <div className="absolute inset-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;