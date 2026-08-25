import StatusBar from "@/components/StatusBar";
import TerminalHero from "@/components/TerminalHero";
import StatsCounter from "@/components/StatsCounter";
import ProjectShowcase from "@/components/ProjectShowcase";
import Timeline from "@/components/Timeline";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <StatusBar />
      <TerminalHero />
      <StatsCounter />
      <ProjectShowcase />
      <Timeline />
      <ContactSection />

      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-sm text-muted-foreground">
            <div>© {new Date().getFullYear()} Aryan Kumar</div>
            <a href="#top" className="hover:text-primary transition-colors">
              back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
