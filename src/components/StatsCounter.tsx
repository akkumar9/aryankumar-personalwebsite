import { useEffect, useRef, useState } from "react";
import SectionPrompt from "./SectionPrompt";

const stats = [
  { label: "users_served", value: 13000, suffix: "+" },
  { label: "daily_events_processed", value: 10000, suffix: "+" },
  { label: "channels_monitored", value: 44, suffix: "+" },
  { label: "unit_tests_passing", value: 84, suffix: "" },
  { label: "cameras_deployed", value: 12, suffix: "" },
  { label: "research_projects", value: 3, suffix: "" },
];

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <SectionPrompt command="stats --summary" />
          <div className="border border-border rounded bg-card px-5 py-4">
            {stats.map((stat) => (
              <StatRow key={stat.label} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatRow = ({
  stat,
  isVisible,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1000;
    const steps = 30;
    const increment = stat.value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div className="font-mono text-sm flex items-baseline justify-between gap-4 py-0.5">
      <span className="text-muted-foreground">{stat.label}</span>
      <span className="text-primary tabular-nums">
        {count.toLocaleString()}
        {stat.suffix}
      </span>
    </div>
  );
};

export default StatsCounter;
