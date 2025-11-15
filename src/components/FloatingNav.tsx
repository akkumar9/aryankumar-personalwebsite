import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, Trophy, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Top", href: "#top" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Trophy, label: "Achievements", href: "#achievements" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-1/2 right-8 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4 bg-card/50 backdrop-blur-xl rounded-full border border-border p-3 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          
          return (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`group relative p-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? "bg-primary text-primary-foreground glow-primary" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
              title={item.label}
            >
              <Icon className="h-5 w-5" />
              
              {/* Tooltip */}
              <span className="absolute right-full mr-4 px-3 py-1.5 bg-card border border-border rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default FloatingNav;
