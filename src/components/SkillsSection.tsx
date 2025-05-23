
import React from 'react';
import { ExternalLink, Chrome } from 'lucide-react';

interface Technology {
  name: string;
  icon: string;
}

interface ChromeExtension {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  storeUrl: string;
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

  // Chrome Extensions data
  const chromeExtensions: ChromeExtension[] = [
    {
      id: 1,
      title: "Group Convert Extension",
      description: "Chrome extension for group conversion optimization.",
      imageUrl: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop",
      storeUrl: "https://chrome.google.com/webstore/detail/group-convert-ext/hmfojimmcgpkcploafgmaofmhhcadgdh"
    },
    {
      id: 2,
      title: "Fill Your Funnel",
      description: "FunnelBot CF Page Copier for sales funnel optimization.",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      storeUrl: "https://chromewebstore.google.com/detail/funnelbot-cf-page-copier/cpiagapooikhbopmlcjnpphhmjiegcpi?hl=en"
    },
    {
      id: 3,
      title: "QuickLinkConvert",
      description: "Quick link conversion tool for improved customer journey.",
      imageUrl: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2070&auto=format&fit=crop",
      storeUrl: "https://chrome.google.com/webstore/detail/quicklinkconvert/bpcoheoeakioobjanfgleeahdpgkppci?hl=en"
    }
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

        {/* Chrome Extensions Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-portfolio-light flex items-center mb-6">
            <Chrome className="text-portfolio-teal mr-3" size={24} /> Chrome Extensions
          </h3>
          
          <p className="text-portfolio-slate mb-8 max-w-3xl">
            I've developed several Chrome extensions to enhance productivity, social media marketing, and conversion optimization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chromeExtensions.map((extension) => (
              <div 
                key={extension.id} 
                className="extension-card bg-portfolio-dark rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-portfolio-teal/20 z-10"></div>
                  <img 
                    src={extension.imageUrl} 
                    alt={extension.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-portfolio-lightest text-xl font-semibold mb-2">{extension.title}</h4>
                  <p className="text-portfolio-slate mb-4">{extension.description}</p>
                  <div className="flex gap-4">
                    <a 
                      href={extension.storeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-portfolio-teal hover:text-portfolio-lightest transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" /> Chrome Web Store
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="#projects" 
              className="text-portfolio-teal hover:text-portfolio-lightest transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} /> View all Chrome extensions in my projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
