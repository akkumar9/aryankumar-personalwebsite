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
    year: "2024",
    title: "Started at UC San Diego",
    subtitle: "Jacobs Scholar",
    description:
      "Began Computer Engineering as a Jacobs Scholar, UCSD's top scholarship for incoming engineers.",
    type: "education",
  },
  {
    year: "Jul 2024",
    title: "UC Davis ECE Department",
    subtitle: "Embedded systems engineer",
    description:
      "Wrote C/C++ firmware for STM32 medical devices — 20% longer battery life, sub-1ms alert response.",
    type: "experience",
  },
  {
    year: "Oct 2025",
    title: "Qualcomm × EIEC",
    subtitle: "Student software developer",
    description:
      "Shipped a FastAPI backend for an internal research platform with 500+ users, JWT auth, and a blue-green CI/CD pipeline that cut release time by ~50%.",
    type: "experience",
  },
  {
    year: "Dec 2025",
    title: "Automate365",
    subtitle: "Backend engineering intern",
    description:
      "Wired GPT-4 into HubSpot and Salesforce to automate lead qualification. Built a webhook service handling 10,000+ events/day at sub-200ms latency.",
    type: "experience",
  },
  {
    year: "Jan 2026",
    title: "Existential Robotics Lab",
    subtitle: "Undergraduate researcher",
    description:
      "Working on probabilistic navigation with ROS2 — 15cm position accuracy in GPS-denied environments.",
    type: "experience",
  },
  {
    year: "Apr 2026",
    title: "Stream Enforcement LLC",
    subtitle: "Backend engineer, anti-piracy detection",
    description:
      "Building anti-piracy infrastructure for Paramount and UFC. 500K+ domains, 92% precision, replacing offshore manual review.",
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
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="section-index">02</span>
            <h2 className="font-mono text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Timeline
            </h2>
          </div>
          <p className="text-muted-foreground">
            Embedded systems, then AI integrations, then robotics research.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 py-5 border-b border-border last:border-b-0"
            >
              <div className="w-20 shrink-0 pt-0.5">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.year}
                </span>
              </div>
              <div className="min-w-0">
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
