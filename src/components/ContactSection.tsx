import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Calendar, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Let's Build Something</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Open to discussing new projects, internship opportunities, or collaborating on 
            AI/ML applications, backend systems, and robotics solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <a
                href="mailto:ark009@ucsd.edu"
                className="flex items-center gap-4 text-left"
              >
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">ark009@ucsd.edu</div>
                </div>
              </a>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-secondary/50 transition-all duration-300 group">
              <a
                href="https://linkedin.com/in/aryan-kumar-85b444265"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-left"
              >
                <div className="p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Connect</div>
                </div>
              </a>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 group">
              <a
                href="https://github.com/akkumar9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-left"
              >
                <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Github className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">GitHub</div>
                  <div className="text-sm text-muted-foreground">View code</div>
                </div>
              </a>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>San Diego, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-secondary" />
              <span>Available for Summer 2026 internships</span>
            </div>
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
            <p className="text-muted-foreground leading-relaxed">
              Currently studying Computer Engineering at UC San Diego while working on AI integrations, 
              backend systems, and robotics research. Particularly interested in roles involving LLM 
              applications, system architecture, autonomous systems, or building tools that solve real 
              business problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;