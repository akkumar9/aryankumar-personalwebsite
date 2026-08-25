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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg border border-border shadow-2xl overflow-hidden animate-scale-in">
            <div className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[hsl(0,55%,48%)]"></div>
                <div className="w-3 h-3 rounded-full bg-[hsl(42,70%,50%)]"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-3">zsh</span>
            </div>

            <div className="p-8 font-mono">
              <div className="text-primary mb-4">
                {displayText}
                <span className="animate-blink border-r-2 border-primary ml-1"></span>
              </div>

              {displayText === fullText && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <div className="text-2xl md:text-4xl font-semibold text-foreground mb-2 tracking-tight">
                      Aryan Kumar
                    </div>
                    <div className="text-muted-foreground text-sm md:text-base">
                      Computer engineering @ UC San Diego · Jacobs Scholar
                    </div>
                  </div>

                  <div className="text-sm md:text-base space-y-1.5 border-l-2 border-border pl-4">
                    <div className="text-foreground/85">
                      <span className="text-primary">role</span>{" "}
                      <span className="text-muted-foreground">·</span>{" "}
                      product developer, backend engineer, robotics researcher
                    </div>
                    <div className="text-foreground/85">
                      <span className="text-primary">focus</span>{" "}
                      <span className="text-muted-foreground">·</span>{" "}
                      backend systems, applied AI, embedded systems
                    </div>
                    <div className="text-foreground/85">
                      <span className="text-primary">right now</span>{" "}
                      <span className="text-muted-foreground">·</span>{" "}
                      anti-piracy systems for Paramount and UFC, product
                      work on an AI career platform at Qualcomm
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() =>
                        document
                          .getElementById("projects")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      See what I've built
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-border text-foreground hover:bg-secondary"
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Get in touch
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground pt-2 font-mono">
                    open to internships starting winter 2027 · San Diego / Bay Area, CA
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;
