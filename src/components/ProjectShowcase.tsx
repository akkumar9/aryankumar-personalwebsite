import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "INSIGHT Mobility Device",
    tagline: "ML-Powered Assistive Technology",
    description: "Leading a 6-person team to develop an assistive mobility device using ML-based sensor fusion. Achieved 22% accuracy improvement and secured $5k in seed funding.",
    tech: ["Machine Learning", "Sensor Fusion", "Hardware", "Leadership"],
    metrics: ["100+ users tested", "$5k funding", "22% accuracy gain"],
    gradient: "from-primary to-accent",
    year: "2023 - Present",
  },
  {
    title: "SynergyPlus Platform",
    tagline: "Education Management System",
    description: "Built a comprehensive gradebook platform serving 4,000+ users across 12 schools. Developed automation tools that cut teacher workflow time by 35%.",
    tech: ["React", "Node.js", "PostgreSQL", "Automation"],
    metrics: ["4k+ users", "12 schools", "35% efficiency gain"],
    gradient: "from-secondary to-primary",
    year: "2023 - 2025",
  },
  {
    title: "UC Davis Research",
    tagline: "Aerospace & Mechanical Engineering",
    description: "Optimized airfoil design increasing wind-tunnel power output by 15%. Engineered globoidal cam achieving 30% smoother motion.",
    tech: ["CAD", "Simulation", "Optimization", "Wind Tunnel"],
    metrics: ["15% power increase", "30% smoother motion"],
    gradient: "from-accent to-secondary",
    year: "2024 - 2025",
  },
  {
    title: "Jeong Lab Intern",
    tagline: "Hardware Engineering",
    description: "Designed and fabricated 5 custom PCBs in EagleCAD for the Jeong Lab. Integrated Bluetooth SoC improving connectivity stability by 25%.",
    tech: ["EagleCAD", "PCB Design", "Bluetooth", "Embedded Systems"],
    metrics: ["5 PCBs fabricated", "40% faster cycles", "25% better stability"],
    gradient: "from-primary to-secondary",
    year: "2024 - 2025",
  },
  {
    title: "VEX Robotics Competition",
    tagline: "World-Class Robotics",
    description: "Qualified for 3 State and 2 World Championships (top 2%). Led team to State Championship victory and raised $20k in sponsorships.",
    tech: ["C++", "Robotics", "CAD", "Strategy"],
    metrics: ["Top 2% globally", "$20k raised", "State Champion"],
    gradient: "from-accent to-primary",
    year: "2021 - 2025",
  },
  {
    title: "Jetson UI/UX Intern",
    tagline: "Product Design & Testing",
    description: "Designed Figma-based UI boosting daily retention by 6%. Executed 100+ UI/UX tests, lowering post-release defects by 20%.",
    tech: ["Figma", "UI/UX", "Testing", "Analytics"],
    metrics: ["6% retention boost", "100+ tests", "20% fewer defects"],
    gradient: "from-secondary to-accent",
    year: "2023",
  },
];

const ProjectShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building impactful solutions across hardware, software, and research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm font-semibold text-primary mb-3">{project.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="mb-4 space-y-1">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-foreground/80">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
