import { useEffect, useRef, useState } from "react";

const SectionPrompt = ({ command }: { command: string }) => {
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(command.slice(0, i));
      if (i >= command.length) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [started, command]);

  return (
    <div ref={ref} className="font-mono text-sm mb-4 flex items-center">
      <span className="text-primary">aryan@ucsd</span>
      <span className="text-muted-foreground">:~$&nbsp;</span>
      <span className="text-foreground">{typed}</span>
      <span className="inline-block w-[7px] h-[15px] bg-primary/80 ml-0.5 animate-blink" />
    </div>
  );
};

export default SectionPrompt;
