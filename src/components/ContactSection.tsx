import { Mail, Linkedin, Github, MapPin, Calendar, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "ark009@ucsd.edu",
    href: "mailto:ark009@ucsd.edu",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "aryan-kumar-85b444265",
    href: "https://linkedin.com/in/aryan-kumar-85b444265",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "akkumar9",
    href: "https://github.com/akkumar9",
    icon: Github,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="section-index">03</span>
            <h2 className="font-mono text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Contact
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-lg">
            Studying computer engineering at UCSD, working on AI integrations,
            backend systems, and robotics research. Reach out if you're hiring
            for LLM applications, systems work, or autonomous systems — or if
            you just want to talk shop.
          </p>

          <div className="border border-border rounded-lg divide-y divide-border mb-8">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between px-5 py-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{link.label}</div>
                      <div className="text-sm text-muted-foreground">{link.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>San Diego, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Open to summer 2026 internships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
