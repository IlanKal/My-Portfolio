import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary mb-2">Ilan Kalantarov</h3>
            <p className="text-muted-foreground">Software Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://www.linkedin.com/in/ilankalantarov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a 
              href="https://github.com/IlanKal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent/20 hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              © {currentYear} Ilan Kalantarov. Made with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;