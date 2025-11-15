import FloatingNav from "@/components/FloatingNav";
import TerminalHero from "@/components/TerminalHero";
import StatsCounter from "@/components/StatsCounter";
import ProjectShowcase from "@/components/ProjectShowcase";
import Timeline from "@/components/Timeline";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <FloatingNav />
      <TerminalHero />
      <StatsCounter />
      <ProjectShowcase />
      <Timeline />
      <ContactSection />
      
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aryan Kumar · Built with precision and passion
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#top" className="hover:text-primary transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
