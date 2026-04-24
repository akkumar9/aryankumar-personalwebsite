import { Badge } from "@/components/ui/badge";

const timeline = [
  {
    year: "2023",
    title: "SynergyPlus Platform Launch",
    subtitle: "Full-Stack Development",
    description: "Created web gradebook serving 13,000+ students district-wide, handling 50,000+ monthly requests",
    type: "experience",
  },
  {
    year: "Aug 2023",
    title: "Founded INSIGHT Computer Vision",
    subtitle: "Systems Engineer",
    description: "Built real-time object detection system achieving 90% accuracy across 5,000+ images, deployed across 12 camera nodes",
    type: "experience",
  },
  {
    year: "2024",
    title: "Started at UC San Diego",
    subtitle: "Jacobs Scholar",
    description: "Began Computer Engineering program as a Jacobs Scholar, the highest honor for incoming engineering students at UCSD",
    type: "education",
  },
  {
    year: "Jul 2024",
    title: "UC Davis ECE Department",
    subtitle: "Embedded Systems Engineer",
    description: "Developed C/C++ firmware for STM32 medical devices, achieving 20% battery life improvement while maintaining sub-1ms alert response",
    type: "experience",
  },
  {
    year: "Oct 2025",
    title: "Qualcomm × EIEC",
    subtitle: "Student Software Developer",
    description: "Built and deployed a Python FastAPI backend for an internal research platform with 500+ registered users, JWT authentication, and GitHub Actions CI/CD with blue-green deployment reducing release cycles by ~50%.",
    type: "experience",
  },
  {
    year: "Dec 2025",
    title: "Automate365",
    subtitle: "Backend Engineering Intern",
    description: "Integrated GPT-4 with HubSpot and Salesforce CRMs to automate lead-qualification workflows; built a webhook ingestion service processing 10,000+ daily events with sub-200ms median response latency.",
    type: "experience",
  },
  {
    year: "Jan 2026",
    title: "Existential Robotics Lab",
    subtitle: "Undergraduate Researcher",
    description: "Working on probabilistic navigation algorithms with ROS2, achieving 15cm position accuracy in GPS-denied environments",
    type: "experience",
  },
  {
    year: "Apr 2026",
    title: "Stream Enforcement LLC",
    subtitle: "Disney · Netflix · UFC · Amazon · ESPN — Backend Engineer, Anti-Piracy",
    description: "Building anti-piracy detection infrastructure for Disney, Netflix, UFC, Amazon, and ESPN; processing 500K+ domains using multi-signal detection (keyword, traffic, content fingerprinting) at 92% precision, automating DMCA workflows replacing offshore review teams.",
    type: "experience",
  },
  {
    year: "2028",
    title: "Expected Graduation",
    subtitle: "B.S. Computer Engineering",
    description: "Continuing work in AI systems, robotics, and backend development while pursuing degree at UC San Diego",
    type: "education",
  },
];

const Timeline = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Journey & Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From embedded systems to AI integrations and robotics research
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border"></div>
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