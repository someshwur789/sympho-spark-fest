const Team = () => {
  const teamMembers = [
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

  return (
    <section id="team" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-wider mb-4">
            COORDINATORS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated coordinators behind AIURA who make this symposium possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
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
    </section>
  );
};

export default Team;