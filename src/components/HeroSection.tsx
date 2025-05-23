
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
            <h1 className="mono text-portfolio-teal text-lg mb-5">
              Hi, my name is
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-portfolio-lightest mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              Dhirendra Singh Bisht.
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-portfolio-slate mb-6 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              I build things for the web.
            </h3>
            <p className="max-w-xl text-portfolio-slate text-lg mb-12 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              I'm a full-stack developer with over 8 years of experience, specializing in building robust applications 
              with Laravel, Django, React, and Vue.js. I focus on creating scalable and efficient systems 
              while maintaining long-term client relationships.
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
          
          <div className="md:flex-1 flex justify-center md:justify-end animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-portfolio-teal/20 blur-xl"></div>
              <img 
                src="/lovable-uploads/011f91f0-32ac-4fbe-8c2e-1f9dc8b3ef7f.png" 
                alt="Dhirendra Singh Bisht" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-portfolio-teal shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
