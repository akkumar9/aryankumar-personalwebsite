import { useState, useEffect } from "react";

const navItems = [
  { label: "experience", href: "#projects" },
  { label: "timeline", href: "#achievements" },
  { label: "contact", href: "#contact" },
];

const StatusBar = () => {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sectionIds = ["projects", "achievements", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

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
    <header className="fixed top-0 inset-x-0 z-50 h-12 border-b border-border bg-background grid grid-cols-[1fr_auto_1fr] items-center px-6">
      <button
        onClick={() => scrollToSection("#top")}
        className="flex items-center gap-2 font-mono text-sm shrink-0 justify-self-start"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
        <span className="text-foreground">aryan@ucsd</span>
      </button>

      <nav className="hidden md:flex items-center gap-8 justify-self-center font-mono text-sm">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="justify-self-end font-mono text-xs text-muted-foreground hidden lg:block">
        San Diego / Bay Area, CA
      </div>
    </header>
  );
};

export default StatusBar;
