
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 px-4">
      <div className="container mx-auto">
        <h1 className="mono text-portfolio-teal text-lg mb-5 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-portfolio-lightest mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
          Full Stack Developer.
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-portfolio-slate mb-6 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
          I build things for the web.
        </h3>
        <p className="max-w-xl text-portfolio-slate text-lg mb-12 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
          I'm a full-stack developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on creating accessible, responsive web applications with modern 
          technologies like Django, Laravel, React, and Vue.js.
        </p>
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
          <a href="#projects">
            <Button className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal rounded px-6 py-4 text-base flex items-center gap-2 group">
              View My Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
