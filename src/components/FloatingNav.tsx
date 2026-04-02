import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Building2, Clock, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Top", href: "#top" },
  { icon: Building2, label: "Experiences", href: "#projects" },
  { icon: Clock, label: "Timeline", href: "#achievements" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    // Watch named sections with IntersectionObserver
    const sectionIds = ["projects", "achievements", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Trigger when a section crosses the middle third of the viewport
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fall back to "top" when near the top of the page
    const handleScroll = () => {
      if (window.scrollY < 200) setActiveSection("top");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
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
