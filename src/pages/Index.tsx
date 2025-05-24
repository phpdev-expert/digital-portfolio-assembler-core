
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

const Index = () => {
  useEffect(() => {
    document.title = "Dhirendra Singh Bisht - Portfolio";
  }, []);

  return (
    <div className="bg-portfolio-navy min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ScrollObserver>
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </ScrollObserver>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
