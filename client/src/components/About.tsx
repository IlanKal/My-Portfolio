import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Sc. in Computer Science with strong theoretical foundation"
    },
    {
      icon: Code,
      title: "Experience",
      description: "Hands-on experience in automation and full-stack development"
    },
    {
      icon: Lightbulb,
      title: "Passion",
      description: "Self-taught learner passionate about emerging technologies"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driven by curiosity and powered by code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Software Developer with a B.Sc. in Computer Science and hands-on experience in automation and full-stack development. 
                Self-taught and passionate about new technologies, seeking a full-time role to grow and contribute in a dynamic tech-driven environment.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I thrive on solving complex problems and building innovative solutions. My journey in tech has been driven by continuous learning 
                and a genuine passion for creating software that makes a difference.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-primary">What drives me:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Building scalable and efficient solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Staying current with emerging technologies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Contributing to impactful projects
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-gradient p-6 transform hover:scale-105 transition-[var(--transition-bounce)]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;