import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionPrompt from "./SectionPrompt";

const projects = [
  {
    title: "Anti-Piracy Detection System",
    tagline: "Backend Engineer, 451 Degrees, LLC (contracted to Stream Enforcement)",
    clients: ["Paramount", "UFC"],
    description: "Built a multi-signal URL ranking engine in Python that scores pirated stream links 0-100 across six weighted signals to prioritize takedown candidates, plus a Telegram discovery scraper (via Telethon) that monitors 44+ piracy channels with automated polling. Wrote an 84-test suite at 100% passing and expanded NLP filtering to cut false positives.",
    tech: ["Python", "Telethon", "NLP Filtering", "Unit Testing"],
    metrics: ["44+ piracy channels monitored", "149 ranked URLs from one scrape", "84 tests, 100% passing"],
    year: "Apr 2026 - Present",
  },
  {
    title: "Existential Robotics Lab",
    tagline: "Undergraduate Researcher, Prof. Atanasov, UC San Diego",
    description: "Learned ROS2 and the lab's robotics stack, then implemented and tested A* pathfinding algorithms for autonomous navigation as part of onboarding.",
    tech: ["Python", "ROS2", "A* Pathfinding"],
    metrics: ["Learned the ROS2 robotics stack", "Implemented A* pathfinding for navigation", "Lab onboarding project"],
    year: "Jan 2026 - Mar 2026",
  },
  {
    title: "Qualcomm × EIEC",
    tagline: "Product Developer, AI Career Platform",
    description: "Developing go-to-market strategy and a B2B licensing model for an AI-powered career guidance platform targeting 5,000+ UCSD students. Leading product ideation, user interviews, and the university licensing pitch.",
    tech: ["Product Strategy", "B2B Licensing", "User Research", "Go-to-Market"],
    metrics: ["Targeting 5,000+ UCSD students", "Built the B2B licensing model", "Leading the university licensing pitch"],
    year: "Oct 2025 - Present",
  },
  {
    title: "Automate365",
    tagline: "Backend Engineering Intern",
    description: "Built a webhook ingestion service processing 10,000+ daily events at sub-200ms median latency, automating a previously manual pipeline end to end. Designed prompt engineering and summarization workflows that turn unstructured call transcripts into structured CRM fields, and served as the team's sole GitHub integrator, owning branch strategy, CI, and deployment.",
    tech: ["Python", "GPT-4", "FastAPI", "GitHub Actions", "CI/CD"],
    metrics: ["10K+ daily events processed", "Sub-200ms response latency", "Sole GitHub/CI owner for the team"],
    year: "Dec 2025 - May 2026",
  },
  {
    title: "UC Davis ECE",
    tagline: "Embedded Systems Engineer",
    description: "Wrote C/C++ firmware for STM32 medical devices streaming sensor data over Bluetooth. Extended battery life by 20% while maintaining sub-1ms alert response times.",
    tech: ["C/C++", "STM32", "Bluetooth LE", "Embedded Systems"],
    metrics: ["20% battery improvement", "Sub-1ms alerts", "Kalman filtering"],
    year: "Jul 2024 - May 2025",
  },
  {
    title: "INSIGHT Computer Vision",
    tagline: "Founder & Systems Engineer",
    description: "Built computer vision system with YOLOv5 achieving 30+ FPS on edge devices. Hit 90% accuracy across 5,000+ images while making it 40% faster. Scaled to 12 cameras handling 1,000+ requests per minute.",
    tech: ["C++", "Python", "YOLOv5", "CUDA", "Flask", "Redis"],
    metrics: ["90% accuracy", "40% faster", "1k+ req/min"],
    year: "Aug 2023 - Apr 2025",
  },
  {
    title: "SynergyPlus Platform",
    tagline: "Full-Stack Development",
    description: "Created web gradebook used by 13,000+ students across school district. Handles 50,000+ monthly requests and got 30% faster after adding Redis caching and database optimization.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    metrics: ["13k+ users", "50k+ monthly requests", "30% performance gain"],
    year: "2023 - 2025",
  },
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-20 relative scroll-mt-12">
      <div className="container mx-auto px-6">
        <div className="mb-10 max-w-7xl mx-auto">
          <SectionPrompt command="cat experience.log" />
          <h2 className="text-xl font-semibold text-foreground">Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded bg-card border-border hover:border-primary/50 transition-colors duration-300"
            >
              <CardContent className="p-6 relative z-10">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-3 mt-0.5">{project.year}</span>
                  </div>
                  <p className="text-sm font-semibold text-primary mb-2">{project.tagline}</p>
                  {"clients" in project && (
                    <div className="mb-3">
                      <p className="text-xs font-medium text-muted-foreground mb-2">
                        Clients include
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {(project as typeof project & { clients: string[] }).clients.map(
                          (name, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-bold px-2.5 py-0.5 rounded bg-[hsl(var(--client-accent)/0.15)] text-[hsl(var(--client-accent))] border border-[hsl(var(--client-accent)/0.35)] cursor-default"
                            >
                              {name}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
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
                      className="text-xs rounded bg-primary/15 text-primary/85 border border-primary/25 hover:bg-primary/25 transition-colors"
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