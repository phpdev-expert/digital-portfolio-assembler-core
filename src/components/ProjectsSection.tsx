
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define project types
type Technology = 'all' | 'django' | 'laravel' | 'react' | 'vue';

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

  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "PodPage",
      description: "A podcast website builder platform developed with Django.",
      technologies: ['django'],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      liveUrl: "https://www.podpage.com"
    },
    {
      id: 2,
      title: "DitchCarbon",
      description: "Carbon footprint tracking application built with Django and React.",
      technologies: ['django', 'react'],
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      liveUrl: "https://ditchcarbon.com"
    },
    {
      id: 3,
      title: "Real Clear Neighborhoods",
      description: "Real estate analytics platform built with Django.",
      technologies: ['django'],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      liveUrl: "https://www.realclearneighborhoods.com"
    },
    {
      id: 4,
      title: "eRezLife",
      description: "Student housing management system developed with Django and React.",
      technologies: ['django', 'react'],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      liveUrl: "http://erezlife.com"
    },
    {
      id: 5,
      title: "Script Sender",
      description: "Automated messaging platform built with Laravel.",
      technologies: ['laravel'],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      liveUrl: "https://scriptsender.com"
    },
    {
      id: 6,
      title: "Dealership Performance CRM",
      description: "Customer relationship management system for auto dealerships, built with PHP and AngularJS.",
      technologies: ['laravel'],
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      liveUrl: "https://www.dealershipperformancecrm.com"
    },
    {
      id: 7,
      title: "Brightest",
      description: "ESG reporting platform built with React.",
      technologies: ['react'],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      liveUrl: "https://www.brightest.io"
    },
    {
      id: 8,
      title: "Voucherify",
      description: "Promotion management system built with Vue.js.",
      technologies: ['vue'],
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      liveUrl: "https://www.voucherify.io"
    },
    {
      id: 9,
      title: "Shipping Saint",
      description: "Shipping management platform built with Laravel and Vue.js.",
      technologies: ['laravel', 'vue'],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      liveUrl: "https://www.shippingsaint.com"
    },
    {
      id: 10,
      title: "Fusion Invoice",
      description: "Invoicing application built with Laravel.",
      technologies: ['laravel'],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      liveUrl: "https://www.fusioninvoice.com"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  const filters: { name: string; value: Technology }[] = [
    { name: 'All', value: 'all' },
    { name: 'Django', value: 'django' },
    { name: 'Laravel', value: 'laravel' },
    { name: 'React', value: 'react' },
    { name: 'Vue', value: 'vue' }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-light flex items-center">
            <span className="text-portfolio-teal mono text-xl mr-4">02.</span> Projects I've Built
          </h2>
          <div className="h-px bg-portfolio-slate/30 flex-grow ml-4"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                'rounded-full px-6 py-2 mono text-sm',
                activeFilter === filter.value 
                  ? 'bg-portfolio-teal text-portfolio-navy' 
                  : 'bg-transparent text-portfolio-slate border border-portfolio-slate/30 hover:border-portfolio-teal hover:text-portfolio-teal'
              )}
            >
              {filter.name}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card bg-portfolio-dark rounded-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-portfolio-teal/20 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-portfolio-lightest text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-portfolio-slate mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs mono px-2 py-1 rounded bg-portfolio-navy text-portfolio-teal"
                    >
                      {tech.charAt(0).toUpperCase() + tech.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-portfolio-light hover:text-portfolio-teal">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-portfolio-slate mb-6">
            These are just a few of my projects. Visit my GitHub to see more of my work.
          </p>
          <Button className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal rounded px-6 py-3">
            <Github size={18} className="mr-2" /> View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
