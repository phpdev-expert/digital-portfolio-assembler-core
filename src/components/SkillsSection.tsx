
import React from 'react';

interface Technology {
  name: string;
  icon: string;
}

interface CategoryProps {
  title: string;
  technologies: Technology[];
}

const TechnologyCategory: React.FC<CategoryProps> = ({ title, technologies }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl text-portfolio-light font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className="flex items-center p-3 bg-portfolio-dark rounded-lg transition-all hover:translate-y-[-5px]"
          >
            <span className="text-portfolio-teal mr-2 mono text-lg">{tech.icon}</span>
            <span className="text-portfolio-light">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const frontendTechnologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: '🟢' },
    { name: 'AngularJS', icon: '🔺' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'HTML5', icon: '📄' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '🌬️' },
  ];

  const backendTechnologies = [
    { name: 'Django', icon: '🐍' },
    { name: 'Laravel', icon: '🔴' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'REST API', icon: '🔄' },
    { name: 'GraphQL', icon: '📊' },
  ];

  const databaseTechnologies = [
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redis', icon: '🔴' },
  ];

  const devOpsTechnologies = [
    { name: 'Git', icon: '📚' },
    { name: 'Docker', icon: '🐳' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'AWS', icon: '☁️' },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-light flex items-center">
            <span className="text-portfolio-teal mono text-xl mr-4">03.</span> My Tech Stack
          </h2>
          <div className="h-px bg-portfolio-slate/30 flex-grow ml-4"></div>
        </div>
        
        <p className="text-portfolio-slate mb-12 max-w-3xl">
          Over the years, I've worked with a variety of technologies and frameworks, building everything 
          from simple landing pages to complex full-stack applications. Here's a breakdown of the technologies I'm proficient in.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <TechnologyCategory title="Frontend" technologies={frontendTechnologies} />
            <TechnologyCategory title="Backend" technologies={backendTechnologies} />
          </div>
          <div>
            <TechnologyCategory title="Databases" technologies={databaseTechnologies} />
            <TechnologyCategory title="DevOps & Tools" technologies={devOpsTechnologies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
