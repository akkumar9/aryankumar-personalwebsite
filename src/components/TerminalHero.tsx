import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const TerminalHero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "aryan@ucsd:~$ whoami";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal Window */}
          <div className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border shadow-2xl overflow-hidden animate-scale-in">
            {/* Terminal Header */}
            <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-3 h-3 rounded-full bg-[hsl(50,95%,60%)]"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
              </div>
              <span className="text-sm text-muted-foreground ml-4">terminal — bash</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono">
              <div className="text-secondary mb-4">
                {displayText}
                <span className="animate-blink border-r-2 border-secondary ml-1"></span>
              </div>

              {displayText === fullText && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-start gap-4">
                    <span className="text-primary">→</span>
                    <div>
                      <div className="text-xl md:text-3xl font-bold mb-2">
                        <span className="text-gradient">Aryan Kumar</span>
                      </div>
                      <div className="text-muted-foreground">
                        Computer Engineering @ UC San Diego · Jacobs Scholar
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-sm md:text-base">
                    <span className="text-secondary">→</span>
                    <div className="space-y-1">
                      <div className="text-foreground/90">
                        <span className="text-primary">Role:</span> Full-Stack Engineer, Robotics Developer, Research Assistant
                      </div>
                      <div className="text-foreground/90">
                        <span className="text-primary">Specialty:</span> PCB Design · Web Dev · ML Integration · Team Leadership
                      </div>
                      <div className="text-foreground/90">
                        <span className="text-primary">Impact:</span> Served 40k+ users · Raised $50k+ · Ranked Top 2% Globally
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-6">
                    <span className="text-accent">→</span>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 glow-primary transition-all"
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        View Experiences
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Get In Touch
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-xs text-muted-foreground pt-4">
                    <span>→</span>
                    <div>Open for opportunities · San Diego, CA</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;