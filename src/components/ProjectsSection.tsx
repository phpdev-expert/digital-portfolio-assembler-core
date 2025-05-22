
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

  // Project data with updated real project images
  const projects: Project[] = [
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
      technologies: ['laravel'],
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
