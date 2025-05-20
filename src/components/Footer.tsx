
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-portfolio-slate/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-slate text-sm">
              &copy; {new Date().getFullYear()} | Built with React & Tailwind CSS
            </p>
          </div>
          
          <div>
            <a 
              href="#home"
              className="text-portfolio-teal text-sm hover:text-portfolio-light transition-colors mono"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
