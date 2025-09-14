import { Mail, Phone, MapPin, Users } from "lucide-react";

const Contact = () => {
  const facultyCoordinator = {
    name: "Mr.A.Sivaramakrishnan, AP(Sr.)/AI&DS",
    phone: "+91 97917 62893",
    email: "ccethackfest2k25@gmail.com"
  };

  const studentRepresentatives = [
    { name: "Mohammed Imran K", phone: "9150564749" },
    { name: "Kailash Nagappan S", phone: "9345612204" },
    { name: "Sarathi R", phone: "7397580370" },
    { name: "Rajkumar V", phone: "9894200254" }
  ];

  const venue = {
    name: "Chettinad College of Engineering & Technology",
    address: "Karur, Tamil Nadu, India"
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
            Contact & Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for any queries or information about AIURA 2024
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>

            {/* Faculty Coordinator */}
            <div className="glow-card bg-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-secondary mr-3" />
                <h4 className="text-lg font-semibold text-secondary">Faculty Coordinator</h4>
              </div>
              <div className="space-y-3">
                <p className="text-foreground font-medium">{facultyCoordinator.name}</p>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{facultyCoordinator.phone}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{facultyCoordinator.email}</span>
                </div>
              </div>
            </div>

            {/* Student Representatives */}
            <div className="glow-card bg-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-lg font-semibold text-primary">Student Representatives (AI&DS)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {studentRepresentatives.map((student, index) => (
                  <div key={index} className="bg-muted/20 rounded-lg p-3">
                    <p className="text-foreground font-medium text-sm mb-1">{student.name}</p>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Phone className="w-3 h-3 mr-1" />
                      <span>{student.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Venue Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Venue</h3>

            <div className="glow-card bg-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-secondary mr-3" />
                <h4 className="text-lg font-semibold text-secondary">{venue.name}</h4>
              </div>
              <p className="text-muted-foreground mb-6">{venue.address}</p>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-muted/20 rounded-lg flex items-center justify-center border border-primary/20">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">{venue.name}</p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  🚗 Easily accessible by road | 🚊 Public transport available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glow-card bg-card rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Join AIURA 2024?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Don't miss this opportunity to be part of the most exciting AI & Data Science symposium. 
              Register now and secure your spot in the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:ccethackfest2k25@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors glow-border"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
              <a 
                href={`tel:${facultyCoordinator.phone}`}
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors cyan-border"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;