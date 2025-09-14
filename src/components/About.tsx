import { Brain, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "The Heartbeat of Innovation",
      description: "AIURA - The Pulse of Intelligence is a movement by the AI Club, exploring the future of AI and celebrating creativity powered by machines."
    },
    {
      icon: Zap,
      title: "Fueling Young Minds",
      description: "AIURA inspires innovation through tech events, workshops, and keynotes - a launchpad for students to shine in AI and Data Science."
    },
    {
      icon: Users,
      title: "A Platform for Possibilities",
      description: "More than events, AIURA is a hub for networking, collaboration, and innovation - where ideas thrive and boundaries fade."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cyan-text mb-6 tracking-wider">
            ABOUT
          </h2>
        </div>

        {/* Main Description Card */}
        <div className="glow-card bg-card rounded-xl p-8 mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="text-secondary text-3xl mr-4">🎓</div>
            <h3 className="text-2xl font-bold text-secondary">
              B.TECH Artificial Intelligence and Data Science Department
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl mx-auto">
            The Department of Artificial Intelligence and Data Science (AI&DS) at Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College is committed to shaping 
            the future of technology by nurturing the next generation of AI professionals. The department offers a well-structured curriculum that seamlessly integrates 
            foundational computer science with emerging areas like machine learning, deep learning, data analytics, and big data technologies. Students are equipped with both 
            theoretical knowledge and practical expertise, ensuring they are prepared to meet the demands of an ever-evolving tech industry.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glow-card bg-card rounded-xl p-6 text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-4">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;