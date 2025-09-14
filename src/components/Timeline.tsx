const Timeline = () => {
  const timelineEvents = [
    {
      title: "PAPER PRESENTATION",
      description: "Showcase of innovative engineering ideas and research.",
      image: "🎯",
      side: "left"
    },
    {
      title: "AI WORKSHOP",
      description: "Hands-on machine learning and deep learning sessions.",
      image: "🤖",
      side: "right"
    },
    {
      title: "CODING COMPETITION",
      description: "High-speed programming challenges testing creativity and precision.",
      image: "💻",
      side: "left"
    },
    {
      title: "DATA SCIENCE HACKATHON",
      description: "24-hour intensive data analysis and modeling competition.",
      image: "📊",
      side: "right"
    },
    {
      title: "KEYNOTE SPEAKERS",
      description: "Industry leaders sharing insights on AI and future technologies.",
      image: "🎤",
      side: "left"
    },
    {
      title: "NETWORKING SESSION",
      description: "Connect with peers, mentors, and industry professionals.",
      image: "🤝",
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
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[hsl(var(--timeline-line))] rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${event.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-5/12 ${event.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="glow-card bg-card rounded-xl p-6 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="text-4xl mb-4">{event.image}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--countdown-bg))] mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-[hsl(var(--timeline-dot))] rounded-full border-4 border-background shadow-lg animate-pulse-glow"></div>
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