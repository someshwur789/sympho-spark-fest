const Team = () => {
  const coordinators = [
    {
      name: "Dharshini Shree",
      role: "Coordinator",
      phone: "+91 93959 56542",
      image: "/placeholder-avatar.jpg", // Replace with actual image path
      fallback: "DS"
    },
    {
      name: "Rajkumar",
      role: "Coordinator", 
      phone: "+91 95769 81801",
      image: "/placeholder-avatar.jpg", // Replace with actual image path
      fallback: "RK"
    },
    {
      name: "Bala Kumar",
      role: "Coordinator",
      phone: "+91 81833 34200",
      image: "/placeholder-avatar.jpg", // Replace with actual image path
      fallback: "BK"
    },
    {
      name: "Srija",
      role: "Coordinator",
      phone: "+91 80150 66653",
      image: "/placeholder-avatar.jpg", // Replace with actual image path
      fallback: "SR"
    }
  ];

  const webTeam = [
    {
      name: "Someshwur R",
      role: "Web Team Lead",
      image: "/placeholder-avatar.jpg", // Replace with actual image path
      fallback: "SR"
    },
    {
      name: "Hari Krishnan R", 
      role: "Web Team Co-Lead",
      image: "/placeholder-avatar.jpg", // Replace with actual image path
      fallback: "HK"
    },
    {
      name: "Tarun J",
      role: "Web Team Member",
      image: "/placeholder-avatar.jpg", // Replace with actual image path
      fallback: "TJ"
    },
    {
      name: "Azeez V",
      role: "Poster Designer",
      image: "/placeholder-avatar.jpg", // Replace with actual image path
      fallback: "AV"
    },
    {
      name: "Nivetha N",
      role: "Poster Designer", 
      image: "/placeholder-avatar.jpg", // Replace with actual image path
      fallback: "NN"
    }
  ];

  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-wider mb-4">
            TEAM
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Meet the dedicated team behind AIURA who make this symposium website
          </p>
        </div>

        {/* Coordinators Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-secondary tracking-wider mb-6 sm:mb-8 text-center">
            COORDINATORS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {coordinators.map((member, index) => (
              <div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-4 sm:p-6 text-center 
                          hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20
                          animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Avatar */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                  <div className="w-full h-full rounded-full border-2 border-secondary/30 overflow-hidden bg-muted/50 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 bg-muted/80 text-foreground font-bold text-lg sm:text-xl flex items-center justify-center hidden">
                      {member.fallback}
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                </div>

                {/* Role Badge */}
                <div className="inline-block px-2 sm:px-3 py-1 bg-secondary/20 text-secondary text-xs sm:text-sm font-semibold rounded-full mb-3 uppercase tracking-wider">
                  {member.role}
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 leading-tight">
                  {member.name}
                </h3>

                {/* Phone */}
                <div className="text-muted-foreground text-xs sm:text-sm">
                  <span className="font-medium break-all">{member.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Team Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-secondary tracking-wider mb-6 sm:mb-8 text-center">
            WEB TEAM
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {webTeam.map((member, index) => (
              <div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-3 sm:p-4 lg:p-6 text-center 
                          hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20
                          animate-fade-in"
                style={{animationDelay: `${(index + coordinators.length) * 0.1}s`}}
              >
                {/* Avatar */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                  <div className="w-full h-full rounded-full border-2 border-primary/30 overflow-hidden bg-muted/50 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 bg-muted/80 text-foreground font-bold text-sm sm:text-lg flex items-center justify-center hidden">
                      {member.fallback}
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Role Badge */}
                <div className="inline-block px-1 sm:px-2 py-0.5 sm:py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2 sm:mb-3 uppercase tracking-wider">
                  <span className="hidden sm:inline">{member.role}</span>
                  <span className="sm:hidden">{member.role.split(' ')[0]}</span>
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground leading-tight">
                  <span className="hidden sm:inline">{member.name}</span>
                  <span className="sm:hidden">{member.name.split(' ')[0]}</span>
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