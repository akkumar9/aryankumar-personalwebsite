import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const projects = [
  {
    title: "Stream Enforcement LLC",
    tagline: "Backend Engineer — Anti-Piracy Detection",
    description: "Building anti-piracy detection infrastructure contracted to Disney, Netflix, UFC, Amazon, and ESPN — processing 500K+ domains at 92% precision using keyword analysis, traffic pattern recognition, and content fingerprinting to automate DMCA takedowns and replace manual offshore review teams.",
    tech: ["Python", "Redis", "Distributed Systems", "Web Crawling", "DMCA Automation"],
    metrics: ["500K+ domains processed", "92% detection precision", "70% less manual review"],
    gradient: "from-primary to-secondary",
    year: "Apr 2026 - Present",
  },
  {
    title: "Existential Robotics Lab",
    tagline: "Autonomous Navigation Research",
    description: "Working with Prof. Atanasov on probabilistic navigation algorithms using Bayesian inference. Built real-time 3D mapping system with ROS2 achieving 15cm accuracy in GPS-denied environments.",
    tech: ["Python", "C++", "ROS2", "SLAM", "Sensor Fusion"],
    metrics: ["35% faster computation", "15cm accuracy", "Multi-robot coordination"],
    gradient: "from-primary to-accent",
    year: "Jan 2026 - Present",
  },
  {
    title: "Qualcomm × EIEC",
    tagline: "Student Software Developer",
    description: "Built and deployed a Python FastAPI backend for an internal research platform used by 500+ registered users, with JWT-based authentication and role-based access control. Configured GitHub Actions CI/CD with blue-green deployment, reducing release cycle time by ~50% and eliminating downtime.",
    tech: ["Python", "FastAPI", "GitHub Actions", "CI/CD", "JWT", "PostgreSQL"],
    metrics: ["500+ registered users", "~50% faster release cycles", "Zero-downtime deployments"],
    gradient: "from-secondary to-primary",
    year: "Oct 2025 - Present",
  },
  {
    title: "Automate365",
    tagline: "Backend Engineering Intern",
    description: "Integrated GPT-4 with HubSpot and Salesforce CRMs to automate lead-qualification workflows, reducing manual data-entry time for client sales teams. Built a webhook ingestion service processing 10,000+ daily events with sub-200ms median response latency.",
    tech: ["Python", "GPT-4", "HubSpot", "Salesforce", "FastAPI", "WebSockets"],
    metrics: ["10K+ daily events processed", "Sub-200ms response latency", "HubSpot & Salesforce integration"],
    gradient: "from-accent to-secondary",
    year: "Dec 2025 - Present",
  },
  {
    title: "UC Davis ECE",
    tagline: "Embedded Systems Engineer",
    description: "Wrote C/C++ firmware for STM32 medical devices streaming sensor data over Bluetooth. Extended battery life by 20% while maintaining sub-1ms alert response times.",
    tech: ["C/C++", "STM32", "Bluetooth LE", "Embedded Systems"],
    metrics: ["20% battery improvement", "Sub-1ms alerts", "Kalman filtering"],
    gradient: "from-primary to-secondary",
    year: "Jul 2024 - May 2025",
  },
  {
    title: "INSIGHT Computer Vision",
    tagline: "Founder & Systems Engineer",
    description: "Built computer vision system with YOLOv5 achieving 30+ FPS on edge devices. Hit 90% accuracy across 5,000+ images while making it 40% faster. Scaled to 12 cameras handling 1,000+ requests per minute.",
    tech: ["C++", "Python", "YOLOv5", "CUDA", "Flask", "Redis"],
    metrics: ["90% accuracy", "40% faster", "1k+ req/min"],
    gradient: "from-accent to-primary",
    year: "Aug 2023 - Apr 2025",
  },
  {
    title: "SynergyPlus Platform",
    tagline: "Full-Stack Development",
    description: "Created web gradebook used by 13,000+ students across school district. Handles 50,000+ monthly requests and got 30% faster after adding Redis caching and database optimization.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    metrics: ["13k+ users", "50k+ monthly requests", "30% performance gain"],
    gradient: "from-secondary to-accent",
    year: "2023 - 2025",
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
            Building AI-powered systems, backend infrastructure, and robotics solutions
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
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
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
                      className="text-xs bg-primary/15 text-primary/85 border border-primary/25 hover:bg-primary/25 transition-colors"
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