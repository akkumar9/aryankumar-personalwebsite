import SectionPrompt from "./SectionPrompt";

const timeline = [
  {
    year: "2023",
    title: "SynergyPlus Platform",
    subtitle: "Full-stack development",
    description:
      "Built a web gradebook that ended up serving 13,000+ students district-wide, handling 50,000+ monthly requests.",
    type: "experience",
  },
  {
    year: "Aug 2023",
    title: "Founded INSIGHT Computer Vision",
    subtitle: "Systems engineer",
    description:
      "Real-time object detection at 90% accuracy across 5,000+ images, running on 12 camera nodes.",
    type: "experience",
  },
  {
    year: "Jul 2024",
    title: "UC Davis ECE Department",
    subtitle: "Embedded systems engineer",
    description:
      "Wrote C/C++ firmware for STM32 medical devices, getting 20% longer battery life with sub-1ms alert response.",
    type: "experience",
  },
  {
    year: "Sep 2025",
    title: "Started at UC San Diego",
    subtitle: "Jacobs Scholar",
    description:
      "Began Computer Engineering as a Jacobs Scholar, 1 of 10 selected from 1,500+ engineering applicants for the full-tuition scholarship.",
    type: "education",
  },
  {
    year: "Oct 2025",
    title: "Qualcomm × EIEC",
    subtitle: "Product developer, AI career platform",
    description:
      "Developing go-to-market strategy and a B2B licensing model for an AI career platform targeting 5,000+ UCSD students.",
    type: "experience",
  },
  {
    year: "Dec 2025",
    title: "Automate365",
    subtitle: "Backend engineering intern",
    description:
      "Built a webhook service handling 10,000+ events/day at sub-200ms latency, and served as the team's sole GitHub/CI owner.",
    type: "experience",
  },
  {
    year: "Jan 2026",
    title: "Existential Robotics Lab",
    subtitle: "Undergraduate researcher",
    description:
      "Learned ROS2 and the lab's robotics stack, then implemented and tested A* pathfinding algorithms as part of onboarding.",
    type: "experience",
  },
  {
    year: "Apr 2026",
    title: "451 Degrees, LLC",
    subtitle: "Backend engineer, contracted to Stream Enforcement",
    description:
      "Built a multi-signal URL ranking engine and a Telegram scraper monitoring 44+ piracy channels for Stream Enforcement's clients, Paramount and UFC.",
    type: "experience",
  },
  {
    year: "2028",
    title: "Expected graduation",
    subtitle: "B.S. Computer Engineering",
    description:
      "Still working on AI systems, robotics, and backend work while finishing the degree at UCSD.",
    type: "education",
  },
];

const Timeline = () => {
  return (
    <section id="achievements" className="py-20 scroll-mt-12">
      <div className="container mx-auto px-6">
        <div className="mb-10 max-w-3xl mx-auto">
          <SectionPrompt command="log --graph timeline" />
          <h2 className="text-xl font-semibold text-foreground">Timeline</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative flex flex-col items-center w-3 shrink-0">
                <div
                  className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 z-10 ${
                    item.type === "education" ? "bg-primary" : "bg-muted-foreground/60"
                  }`}
                />
                {index !== timeline.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>

              <div className="min-w-0 pb-9">
                <div className="font-mono text-xs text-muted-foreground mb-1">
                  {item.year}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  {item.type === "education" && (
                    <span className="font-mono text-[10px] uppercase tracking-wide text-primary border border-primary/30 rounded px-1.5 py-0.5">
                      Education
                    </span>
                  )}
                </div>
                <p className="text-sm text-primary/90 mb-1.5">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
