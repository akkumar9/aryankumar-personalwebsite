import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Users served", value: 13000, suffix: "+" },
  { label: "Daily events processed", value: 10000, suffix: "+" },
  { label: "Concurrent users", value: 500, suffix: "+" },
  { label: "Performance gains", value: 50, suffix: "%" },
  { label: "Cameras deployed", value: 12, suffix: "" },
  { label: "Research projects", value: 3, suffix: "" },
];

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  stat,
  isVisible,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1200;
    const steps = 40;
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
    <div className="border-l border-border pl-4">
      <div className="font-mono text-2xl md:text-3xl font-semibold text-foreground tabular-nums">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
    </div>
  );
};

export default StatsCounter;
