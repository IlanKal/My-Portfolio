import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "C/C++", "PHP", "SQL", "HTML/CSS"],
      color: "from-primary to-primary-glow"
    },
    {
      icon: Globe,
      title: "Frameworks",
      skills: ["React", "Node.js", "Express"],
      color: "from-secondary to-accent"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Firebase"],
      color: "from-accent to-primary"
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "GitHub", "Docker", "Postman", "Selenium", "Jira", "WordPress", "n8n", "Zapier"],
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-gradient p-8 transform hover:scale-105 transition-[var(--transition-bounce)] group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default text-sm py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;