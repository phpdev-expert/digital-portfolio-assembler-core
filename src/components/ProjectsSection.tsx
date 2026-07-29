
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Chrome, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define project types
type Technology = 'all' | 'django' | 'laravel' | 'react' | 'vue' | 'extensions' | 'php' | 'ai';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  liveUrl: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<Technology>('all');

  // Project data with updated real project images and new projects
  const projects: Project[] = [
    // ===== AI / GenAI projects =====
    {
      id: 101,
      title: "mium.chat",
      description: "AI-powered text assistant — a GenAI \"multi-tool for text\" built on LLM APIs for chat, writing, and content generation.",
      technologies: ['ai', 'react'],
      imageUrl: "/lovable-uploads/screen-mium.jpeg",
      liveUrl: "https://chat.mium.de"
    },
    {
      id: 102,
      title: "Lebenslauf Kostenlos",
      description: "AI CV/résumé builder that parses inputs and generates tailored, professional resumes using an LLM + RAG pipeline.",
      technologies: ['ai', 'react'],
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      liveUrl: "https://lebenslaufkostenlos.de"
    },
    {
      id: 103,
      title: "Ajaia Docs",
      description: "RAG-powered knowledge platform — upload documents and get AI answers grounded in your files, with file sharing and collaborative editing built in.",
      technologies: ['ai', 'react', 'django'],
      imageUrl: "/lovable-uploads/screen-ajaia.jpeg",
      liveUrl: "https://ajaia-docs-mkhz.onrender.com"
    },
    // PLACEHOLDER: replace title/description/liveUrl with your real project details.
    {
      id: 104,
      title: "Autonomous AI Agent",
      description: "Multi-step AI agent using LangChain with tool-calling to automate research and workflow tasks end to end.",
      technologies: ['ai', 'react'],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2072&auto=format&fit=crop",
      liveUrl: "#"
    },
    {
      id: 105,
      title: "FinCalcHub",
      description: "AI-powered suite of 143+ financial calculators (investments, loans, tax, retirement) with an AI assistant and plain-English insights, built as a fast offline-capable PWA.",
      technologies: ['ai', 'react'],
      imageUrl: "/lovable-uploads/screen-fincalchub.jpeg",
      liveUrl: "https://www.fincalchub.org"
    },
    {
      id: 1,
      title: "PodPage",
      description: "A podcast website builder platform developed with Django.",
      technologies: ['django'],
      imageUrl: "/lovable-uploads/c13dd1c6-2ed1-4e1e-b197-bdd501927fed.png",
      liveUrl: "https://www.podpage.com"
    },
    {
      id: 2,
      title: "DitchCarbon",
      description: "Carbon footprint tracking application built with Django and React.",
      technologies: ['django', 'react'],
      imageUrl: "/lovable-uploads/c20e1386-8db2-4742-a0d6-1d56fed188a1.png",
      liveUrl: "https://ditchcarbon.com"
    },
    {
      id: 3,
      title: "Real Clear Neighborhoods",
      description: "Real estate analytics platform built with Django.",
      technologies: ['django'],
      imageUrl: "/lovable-uploads/2c903f30-993e-4489-8293-4f011e843077.png",
      liveUrl: "https://www.realclearneighborhoods.com"
    },
    {
      id: 4,
      title: "eRezLife",
      description: "Student housing management system developed with Django and React.",
      technologies: ['django', 'react'],
      imageUrl: "/lovable-uploads/20b5d9ad-aed0-4393-a495-c2ec1e1078d5.png",
      liveUrl: "http://erezlife.com"
    },
    {
      id: 5,
      title: "Script Sender",
      description: "Automated messaging platform built with Laravel.",
      technologies: ['laravel'],
      imageUrl: "/lovable-uploads/20b64252-bfec-4f98-9cf4-79b64c9df1dd.png",
      liveUrl: "https://scriptsender.com"
    },
    {
      id: 6,
      title: "Dealership Performance CRM",
      description: "Customer relationship management system for auto dealerships, built with PHP and AngularJS.",
      technologies: ['php'],
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      liveUrl: "https://www.dealershipperformancecrm.com"
    },
    {
      id: 7,
      title: "Brightest",
      description: "ESG reporting platform built with React.",
      technologies: ['react'],
      imageUrl: "/lovable-uploads/35b80909-77a9-4a2f-b3f4-6f8bc8a0748e.png",
      liveUrl: "https://www.brightest.io"
    },
    {
      id: 8,
      title: "Voucherify",
      description: "Promotion management system built with Vue.js.",
      technologies: ['vue'],
      imageUrl: "/lovable-uploads/d61f851c-6521-4f4d-89a3-2fa78daceb1b.png",
      liveUrl: "https://www.voucherify.io"
    },
    {
      id: 9,
      title: "Shipping Saint",
      description: "Shipping management platform built with Laravel and Vue.js.",
      technologies: ['laravel', 'vue'],
      imageUrl: "/lovable-uploads/71dc0e56-72bb-41fe-b90f-4d6e8f16f2dc.png",
      liveUrl: "https://www.shippingsaint.com"
    },
    {
      id: 10,
      title: "Fusion Invoice",
      description: "Invoicing application built with Laravel.",
      technologies: ['laravel'],
      imageUrl: "/lovable-uploads/4bd4903b-196d-4c7b-869b-950a46d8d74e.png",
      liveUrl: "https://www.fusioninvoice.com"
    },
    {
      id: 11,
      title: "Done.fyi",
      description: "Online academy and educational platform built with Laravel.",
      technologies: ['laravel'],
      imageUrl: "/lovable-uploads/3bcddcc8-56dc-41f6-8046-524def589b82.png",
      liveUrl: "https://done.fyi"
    },
    {
      id: 21,
      title: "RecycleBlu",
      description: "Recycling and waste management platform built with PHP and Laravel.",
      technologies: ['php', 'laravel'],
      imageUrl: "/lovable-uploads/a74836d4-6ff1-4eda-921b-045aa695deb6.png",
      liveUrl: "https://www.recycleblu.com"
    },
    {
      id: 22,
      title: "PECB",
      description: "Professional certification and training platform built with Laravel.",
      technologies: ['laravel'],
      imageUrl: "/lovable-uploads/e4fc8702-5842-4504-9efa-00fdcb817baf.png",
      liveUrl: "http://pecb.com"
    },
    {
      id: 23,
      title: "The Ukulele Way",
      description: "Online ukulele learning platform built with PHP.",
      technologies: ['php'],
      imageUrl: "/lovable-uploads/37a208c3-56b3-498e-8dbd-54f98cb0ac60.png",
      liveUrl: "http://theukuleleway.com"
    },
    {
      id: 24,
      title: "Megatix",
      description: "Event ticketing and management platform built with PHP.",
      technologies: ['php'],
      imageUrl: "/lovable-uploads/fabec6b0-06d4-4591-9037-5bde5776c8b5.png",
      liveUrl: "https://megatix.com.au"
    },
    // Chrome Extensions
    {
      id: 12,
      title: "Group Convert Extension",
      description: "Chrome extension for group conversion optimization.",
      technologies: ['extensions'],
      imageUrl: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop",
      liveUrl: "https://chrome.google.com/webstore/detail/group-convert-ext/hmfojimmcgpkcploafgmaofmhhcadgdh"
    },
    {
      id: 13,
      title: "Fill Your Funnel",
      description: "FunnelBot CF Page Copier for sales funnel optimization.",
      technologies: ['extensions'],
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      liveUrl: "https://chromewebstore.google.com/detail/funnelbot-cf-page-copier/cpiagapooikhbopmlcjnpphhmjiegcpi?hl=en"
    },
    {
      id: 14,
      title: "QuickLinkConvert",
      description: "Quick link conversion tool for improved customer journey.",
      technologies: ['extensions'],
      imageUrl: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2070&auto=format&fit=crop",
      liveUrl: "https://chrome.google.com/webstore/detail/quicklinkconvert/bpcoheoeakioobjanfgleeahdpgkppci?hl=en"
    },
    {
      id: 15,
      title: "AffiliateConvert",
      description: "ExTraPe Affiliate Link Converter for affiliate marketers.",
      technologies: ['extensions'],
      imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
      liveUrl: "https://chromewebstore.google.com/detail/extrape-affiliate-link-co/jkjdnkdcmpidffnghmclamlhadpflhlb?hl=en"
    },
    {
      id: 16,
      title: "Group Extractor",
      description: "ESuit Group Members Extractor for social media marketing.",
      technologies: ['extensions'],
      imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
      liveUrl: "https://chromewebstore.google.com/detail/esuit-group-members-extra/mpfndbkbcmbacdjmphhfapdmjgpfkjmg?hl=en"
    },
    {
      id: 17,
      title: "SocialPostBuddy",
      description: "Social media post automation and scheduling tool.",
      technologies: ['extensions'],
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      liveUrl: "https://chrome.google.com/webstore/detail/socialpostbuddy/fjadmkofajjmeoecmbknkhlfjmdbobmo"
    },
    {
      id: 18,
      title: "CommentFunnels",
      description: "Social Fixer for Facebook to enhance social media interactions.",
      technologies: ['extensions'],
      imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2070&auto=format&fit=crop",
      liveUrl: "https://chromewebstore.google.com/detail/social-fixer-for-facebook/ifmhoabcaeehkljcfclfiieohkohdgbb?hl=en"
    },
    {
      id: 19,
      title: "Group Hyper Growth Tools",
      description: "Tools for rapid social media group growth and engagement.",
      technologies: ['extensions'],
      imageUrl: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop",
      liveUrl: "https://chrome.google.com/webstore/detail/group-hyper-growth-tools/mldpcnkohpfiddgbmceafgkekgpledfn"
    },
    {
      id: 20,
      title: "Hume",
      description: "Productivity and workflow enhancement extension.",
      technologies: ['extensions'],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      liveUrl: "https://chrome.google.com/webstore/detail/hume/idfooimilpjbbihjbeidflghgdahckck"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  const filters: { name: string; value: Technology; icon?: React.ReactNode }[] = [
    { name: 'All', value: 'all' },
    { name: 'AI / GenAI', value: 'ai', icon: <Sparkles size={14} className="mr-1" /> },
    { name: 'Django', value: 'django' },
    { name: 'Laravel', value: 'laravel' },
    { name: 'PHP', value: 'php' },
    { name: 'React', value: 'react' },
    { name: 'Vue', value: 'vue' },
    { name: 'Chrome Extensions', value: 'extensions', icon: <Chrome size={14} className="mr-1" /> }
  ];

  return (
    <section id="projects" className="surface-alt py-16 sm:py-24 px-4 visible">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-light flex items-center gap-3 sm:gap-4">
            <span className="section-num">02</span> Projects I've Built
          </h2>
          <div className="divider-gradient flex-grow ml-4 sm:ml-6"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                'rounded-full px-3 sm:px-6 py-2 mono text-xs sm:text-sm flex items-center',
                activeFilter === filter.value 
                  ? 'bg-portfolio-teal text-portfolio-navy' 
                  : 'bg-transparent text-portfolio-slate border border-portfolio-slate/30 hover:border-portfolio-teal hover:text-portfolio-teal'
              )}
            >
              {filter.icon && filter.icon}
              {filter.name}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card glass rounded-xl overflow-hidden w-full group"
            >
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-portfolio-dark">
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-navy/10 to-transparent z-10 transition-all duration-300"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  style={{ minHeight: '192px' }}
                  onError={(e) => {
                    console.log(`Failed to load image for ${project.title}: ${project.imageUrl}`);
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#1e293b';
                    target.style.display = 'block';
                    target.alt = `${project.title} - Image not available`;
                  }}
                />
                {project.technologies.includes('extensions') && (
                  <div className="absolute top-2 right-2 bg-portfolio-teal text-portfolio-navy p-1 rounded-md flex items-center text-xs z-20">
                    <Chrome size={12} className="mr-1" /> Extension
                  </div>
                )}
                {project.technologies.includes('ai') && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-portfolio-teal to-portfolio-accent text-portfolio-navy font-semibold px-2 py-1 rounded-md flex items-center text-xs z-20 shadow-lg">
                    <Sparkles size={12} className="mr-1" /> AI
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-portfolio-lightest text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-portfolio-slate mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs mono px-2 py-1 rounded bg-portfolio-dark text-portfolio-teal border border-portfolio-teal/20 flex items-center"
                    >
                      {tech === 'extensions' ? <Chrome size={10} className="mr-1" /> : null}
                      {tech === 'ai' ? <Sparkles size={10} className="mr-1" /> : null}
                      {tech === 'extensions' ? 'Chrome' : tech === 'ai' ? 'AI' : tech.charAt(0).toUpperCase() + tech.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl === '#' ? (
                    <span className="mono text-xs text-portfolio-slate/70 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-portfolio-slate/50" /> Coming soon
                    </span>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono text-xs text-portfolio-teal hover:text-portfolio-lightest transition-colors flex items-center gap-1.5 group/link"
                      aria-label={`Visit ${project.title}`}
                    >
                      Visit site
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-portfolio-slate mb-6 text-sm sm:text-base px-4">
            These are just a few of my projects. Visit my GitHub to see more of my work.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
