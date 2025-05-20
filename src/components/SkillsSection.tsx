
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
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'HTML5', icon: '📄' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '🌬️' },
    { name: 'Bootstrap', icon: '🅱️' },
  ];

  const backendTechnologies = [
    { name: 'Django', icon: '🐍' },
    { name: 'Django REST', icon: '🔄' },
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
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Nginx', icon: '🌐' },
    { name: 'Heroku', icon: '💜' },
    { name: 'JIRA', icon: '📋' },
  ];

  const aiMlTechnologies = [
    { name: 'AI/ML', icon: '🧠' },
    { name: 'Data Analysis', icon: '📊' },
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
          With over 8 years of experience in web development, I've gained expertise in a variety of technologies.
          I specialize in building robust, scalable applications while focusing on maintainability and performance.
          Here's a comprehensive overview of my technical skills:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <TechnologyCategory title="Frontend" technologies={frontendTechnologies} />
            <TechnologyCategory title="Backend" technologies={backendTechnologies} />
            <TechnologyCategory title="AI/ML" technologies={aiMlTechnologies} />
          </div>
          <div>
            <TechnologyCategory title="Databases" technologies={databaseTechnologies} />
            <TechnologyCategory title="DevOps & Tools" technologies={devOpsTechnologies} />
          </div>
        </div>

        <div className="mt-12 p-6 bg-portfolio-dark rounded-lg">
          <h3 className="text-xl text-portfolio-light font-semibold mb-4">Personal Traits</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Adaptability', 'Team Player', 'Creative', 'Continuous Learner', 'Constructive Feedback'].map((trait) => (
              <div key={trait} className="text-center p-3 bg-portfolio-navy/50 rounded-lg">
                <span className="text-portfolio-teal mono mb-2 block">•</span>
                <span className="text-portfolio-light">{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
