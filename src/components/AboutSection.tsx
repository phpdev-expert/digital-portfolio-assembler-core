
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-light flex items-center">
            <span className="text-portfolio-teal mono text-xl mr-4">01.</span> About Me
          </h2>
          <div className="h-px bg-portfolio-slate/30 flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-portfolio-slate mb-4">
              I am a passionate full-stack web developer with expertise in building elegant, responsive, and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I create seamless experiences that bridge design and functionality.
            </p>
            <p className="text-portfolio-slate mb-4">
              My journey began with PHP and Laravel, where I developed a deep understanding of server-side programming and MVC architecture. Over time, I expanded my toolkit to include Django and Python, allowing me to work on data-intensive applications and REST APIs.
            </p>
            <p className="text-portfolio-slate mb-4">
              On the frontend, I'm proficient with modern JavaScript frameworks like React and Vue.js, which enable me to create dynamic and interactive user interfaces. Whether it's a complex SPA or a simple landing page, I'm focused on creating clean, maintainable code that delivers exceptional user experiences.
            </p>
            <p className="text-portfolio-slate">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>
          
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative rounded-md overflow-hidden w-full aspect-square">
              <img 
                src="/lovable-uploads/cae69900-866e-4036-a35d-e568169946d8.png" 
                alt="Programming skills illustration showing PHP, CSS, JavaScript, Git, AI, Machine Learning, Python, Vue and React" 
                className="w-full h-full object-cover hover:transform hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="absolute -right-6 -bottom-6 w-full h-full border-2 border-portfolio-teal rounded-md -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
