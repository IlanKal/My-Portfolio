import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import evvaProject from "@/assets/evva-project.png";
import taskmasterProject from "@/assets/taskmaster-project.png";

const Projects = () => {
  const projects = [
    {
      title: "EVVA",
      description: "Evva is an intelligent platform designed to help organizations plan and manage events efficiently. It combines structured conversations with users, automatic supplier filtering, budget optimization, and supplier selection – all in one seamless workflow.",
      image: evvaProject,
      technologies: ["Node.js", "Angular", "PostgreSQL", "JavaScript", "TypeScript", "Express"],
      githubUrl: "https://github.com/IlanKal/Evva",
      featured: true
    },
    {
      title: "TaskMaster",
      description: "TaskMaster is a powerful and intuitive to-do list application designed to help users efficiently manage their tasks. Whether you need to organize your daily activities, track project deadlines, or maintain a list of personal goals, TaskMaster provides a comprehensive set of tools to ensure you stay on top of everything.",
      image: taskmasterProject,
      technologies: ["Java", "Firebase", "Android Studio", "XML"],
      githubUrl: "https://github.com/IlanKal/TaskMaster",
      featured: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-gradient overflow-hidden group transform hover:scale-[1.02] transition-[var(--transition-smooth)] ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      {project.featured && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="bg-muted/30 hover:bg-accent/20 hover:text-accent transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="btn-github w-full"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild variant="outline" size="lg" className="btn-github">
            <a href="https://github.com/IlanKal" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;