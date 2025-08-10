import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import background from "@/assets/background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-glow bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Ilan Kalantarov
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">Software Developer</p>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Welcome to my portfolio website. I'm Ilan, a software developer with experience in full-stack development and automation. Feel free to explore my projects or get in touch.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="btn-hero px-8 py-6 text-lg" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            
            <Button variant="outline" size="lg" className="btn-light-blue px-8 py-6 text-lg" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://www.linkedin.com/in/ilankalantarov/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-[var(--transition-smooth)] hover:scale-110">
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            
            <a href="https://github.com/IlanKal" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-accent/20 hover:border-accent/50 transition-[var(--transition-smooth)] hover:scale-110">
              <Github className="w-6 h-6 text-accent" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button onClick={() => scrollToSection('about')} className="animate-bounce text-primary hover:text-primary-glow transition-colors">
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;