const Team = () => {
  const coordinators = [
    {
      name: "Dharshini Shree",
      role: "Coordinator",
      phone: "+91 93959 56542",
      image: "👩‍💼"
    },
    {
      name: "Rajkumar",
      role: "Coordinator", 
      phone: "+91 95769 81801",
      image: "👨‍💼"
    },
    {
      name: "Bala Kumar",
      role: "Coordinator",
      phone: "+91 81833 34200",
      image: "👨‍💻"
    },
    {
      name: "Srija",
      role: "Coordinator",
      phone: "+91 80150 66653",
      image: "👩‍💻"
    }
  ];

  const webTeam = [
    {
      name: "Someshwur R",
      role: "Web Team Lead",
      image: "👨‍💻"
    },
    {
      name: "Hari Krishnan R", 
      role: "Web Team Co-Lead",
      image: "👨‍💻"
    },
    {
      name: "Tarun J",
      role: "Web Team Member",
      image: "👨‍💻"
    },
    {
      name: "Azeez V",
      role: "Poster Designer",
      image: "🎨"
    },
    {
      name: "Nivetha N",
      role: "Poster Designer", 
      image: "🎨"
    }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-wider mb-4">
            TEAM
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team behind AIURA who make this symposium website
          </p>
        </div>

        {/* Coordinators Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary tracking-wider mb-8 text-center">
            COORDINATORS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coordinators.map((member, index) => (
              <div 
                key={index} 
                className="glow-card bg-card rounded-xl p-6 text-center animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center text-4xl">
                  {member.image}
                </div>

                {/* Role Badge */}
                <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-3 uppercase tracking-wider">
                  {member.role}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-secondary font-medium mb-4">
                  {member.role}
                </p>

                {/* Phone */}
                <div className="text-muted-foreground text-sm">
                  <span className="font-medium">📞 {member.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Team Section */}
        <div>
          <h3 className="text-2xl font-bold text-secondary tracking-wider mb-8 text-center">
            WEB TEAM
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {webTeam.map((member, index) => (
              <div 
                key={index} 
                className="glow-card bg-card rounded-xl p-6 text-center animate-slide-up"
                style={{animationDelay: `${(index + coordinators.length) * 0.1}s`}}
              >
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center text-3xl">
                  {member.image}
                </div>

                {/* Role Badge */}
                <div className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  {member.role}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;