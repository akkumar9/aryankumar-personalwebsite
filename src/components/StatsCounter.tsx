import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const stats = [
  { label: "Users Impacted", value: 40000, suffix: "+", icon: "👥" },
  { label: "Funding Raised", value: 50, suffix: "k", prefix: "$", icon: "💰" },
  { label: "Global Ranking", value: 2, suffix: "%", prefix: "Top ", icon: "🏆" },
  { label: "Championships", value: 7, suffix: "", icon: "🎯" },
  { label: "Schools Served", value: 12, suffix: "+", icon: "🎓" },
  { label: "Team Members Led", value: 25, suffix: "+", icon: "👨‍💼" },
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Impact by Numbers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Measurable results across engineering and leadership
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  stat, 
  isVisible, 
  delay 
}: { 
  stat: typeof stats[0]; 
  isVisible: boolean; 
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
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
    <Card 
      className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-primary"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-2">{stat.icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-xs text-muted-foreground">{stat.label}</div>
    </Card>
  );
};

export default StatsCounter;
