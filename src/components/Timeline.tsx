import { Badge } from "@/components/ui/badge";

const timeline = [
  {
    year: "2021",
    title: "Started VEX Robotics Journey",
    subtitle: "Foothill Robotics",
    description: "Began competitive robotics as Programmer/Designer/Strategist, qualified for 3 State and 2 World Championships",
    type: "experience",
  },
  {
    year: "2023",
    title: "INSIGHT Vice President",
    subtitle: "Assistive Technology Startup",
    description: "Led 6-person engineering team developing ML-powered mobility device, raised $5k seed funding",
    type: "experience",
  },
  {
    year: "2024",
    title: "PVSA Gold Award",
    subtitle: "Presidential Volunteer Service",
    description: "Earned Gold-level Presidential Volunteer Service Award for outstanding community service",
    type: "achievement",
  },
  {
    year: "2024",
    title: "3rd Place ACSEF",
    subtitle: "Science & Engineering Fair",
    description: "Placed third at ACSEF for innovative engineering project",
    type: "achievement",
  },
  {
    year: "2024",
    title: "Research Assistant @ UC Davis",
    subtitle: "Aerospace Engineering",
    description: "Optimized airfoil design increasing wind-tunnel power output 15% and engineered systems achieving 30% smoother motion",
    type: "experience",
  },
  {
    year: "2024",
    title: "Blue Ocean Pitch Top 100",
    subtitle: "Entrepreneurship Competition",
    description: "Selected as Top 100 finalist in Blue Ocean entrepreneurship pitch competition",
    type: "achievement",
  },
  {
    year: "2024",
    title: "VEX California State Champion",
    subtitle: "First Place",
    description: "Led team to victory at the California State Championship",
    type: "achievement",
  },
  {
    year: "2024",
    title: "VEX Nationals Finalist",
    subtitle: "National Competition",
    description: "Advanced to finals at VEX Nationals, demonstrating consistent excellence in competitive robotics",
    type: "achievement",
  },
  {
    year: "2024",
    title: "VEX World Championship Semifinalist",
    subtitle: "Top 2% Globally",
    description: "Competed at the highest level of high school robotics, reaching semifinals at Worlds",
    type: "achievement",
  },
  {
    year: "2029",
    title: "UC San Diego - Jacobs Scholar",
    subtitle: "B.S. Computer Engineering",
    description: "Expected graduation as Jacobs Scholar, the highest honor for incoming engineering students at UCSD",
    type: "education",
  },
];

const Timeline = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Journey & Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Key milestones in engineering and leadership
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary glow-primary z-10"></div>
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 pl-8" : "md:pl-12 pl-8"}`}>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant="secondary"
                        className={
                          item.type === "education" 
                            ? "bg-primary/20 text-primary"
                            : item.type === "achievement"
                            ? "bg-accent/20 text-accent"
                            : "bg-secondary/20 text-secondary"
                        }
                      >
                        {item.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{item.title}</h3>
                    <p className="text-sm font-semibold text-primary mb-2">{item.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;