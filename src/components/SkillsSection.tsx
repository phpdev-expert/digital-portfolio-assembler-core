
import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

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
      <h3 className="text-xl text-portfolio-light font-semibold mb-4 flex items-center gap-2">
        <span className="inline-block w-6 h-px bg-portfolio-teal" />{title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2.5 rounded-xl glass transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-teal/50 hover:shadow-[0_14px_30px_-14px_rgba(13,148,136,0.35)]"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-portfolio-teal/12 to-portfolio-accent/10 text-lg shrink-0">
              {tech.icon}
            </span>
            <span className="text-portfolio-light text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const frontendTechnologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '🟢' },
    { name: 'Nuxt.js', icon: '💚' },
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
    { name: 'FastAPI', icon: '⚡' },
    { name: 'Laravel', icon: '🔴' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Temporal', icon: '⏳' },
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
    { name: 'Keycloak', icon: '🔐' },
    { name: 'Nginx', icon: '🌐' },
    { name: 'Heroku', icon: '💜' },
    { name: 'JIRA', icon: '📋' },
  ];

  const aiGenAiTechnologies = [
    { name: 'OpenAI API', icon: '🤖' },
    { name: 'Anthropic (Claude)', icon: '🧠' },
    { name: 'Gemini', icon: '✨' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'LangGraph', icon: '🕸️' },
    { name: 'LlamaIndex', icon: '🦙' },
    { name: 'RAG', icon: '📚' },
    { name: 'Embeddings', icon: '🧬' },
    { name: 'Pinecone', icon: '🌲' },
    { name: 'pgvector', icon: '🐘' },
    { name: 'Chroma', icon: '🎨' },
    { name: 'AI Agents', icon: '🕹️' },
    { name: 'Prompt Engineering', icon: '💬' },
    { name: 'Python (ML)', icon: '🐍' },
    { name: 'pandas', icon: '📊' },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-light flex items-center gap-4">
            <span className="section-num">03</span> My Tech Stack
          </h2>
          <div className="divider-gradient flex-grow ml-6"></div>
        </div>
        
        <p className="text-portfolio-slate mb-12 max-w-3xl">
          With over 10 years of experience in web development, I've gained expertise in a variety of technologies.
          More recently I've focused on building AI-powered applications — LLM-driven products, Retrieval-Augmented
          Generation (RAG) systems, and autonomous agents — combining that with the robust, scalable full-stack
          foundations I've always built on. Here's a comprehensive overview of my technical skills:
        </p>

        {/* Featured: AI / GenAI */}
        <div className="relative mb-12 p-6 md:p-8 rounded-2xl gradient-border overflow-hidden">
          <div className="aurora-blob bg-portfolio-accent/30 w-72 h-72 -top-24 -right-16" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-widest text-portfolio-teal bg-portfolio-teal/10 border border-portfolio-teal/30 rounded-full px-3 py-1 mb-5">
              <Sparkles size={12} /> Core Focus
            </span>
            <TechnologyCategory title="AI / GenAI" technologies={aiGenAiTechnologies} />
            <p className="text-portfolio-slate text-sm mt-2 mb-0">
              Building LLM apps, RAG pipelines, and agentic workflows across production, client, and personal projects.
            </p>
          </div>
        </div>

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

        <div className="mt-12 p-6 md:p-8 glass rounded-2xl">
          <h3 className="text-xl text-portfolio-light font-semibold mb-5">Personal Traits</h3>
          <div className="flex flex-wrap gap-3">
            {['Adaptability', 'Team Player', 'Creative', 'Continuous Learner', 'Constructive Feedback'].map((trait) => (
              <span
                key={trait}
                className="inline-flex items-center gap-2 rounded-full border border-portfolio-slate/15 bg-portfolio-dark px-4 py-2 text-sm text-portfolio-light hover:border-portfolio-teal/50 hover:text-portfolio-teal transition-colors"
              >
                <Check size={14} className="text-portfolio-teal" /> {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 rounded-2xl gradient-border p-8 md:p-12 text-center">
          <p className="mono text-portfolio-teal text-sm mb-3">What's next?</p>
          <h3 className="text-2xl md:text-3xl font-bold text-portfolio-light mb-3">
            Let's build something <span className="gradient-text">together</span>
          </h3>
          <p className="text-portfolio-slate max-w-xl mx-auto mb-8">
            Have an AI or full-stack project in mind? I'm currently available for new opportunities and collaborations.
          </p>
          <a
            href="#contact"
            className="btn-gradient inline-flex items-center gap-2 font-semibold rounded-lg px-7 py-3.5 text-base group"
          >
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
