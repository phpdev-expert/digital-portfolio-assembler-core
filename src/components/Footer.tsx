
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-portfolio-slate/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div>
            <p className="text-portfolio-slate text-sm">
              &copy; {new Date().getFullYear()} <span className="text-portfolio-light">Dhirendra Singh Bisht</span>
              <span className="mx-2 text-portfolio-slate/40">·</span>
              Designed &amp; built with React, Tailwind &amp; a bit of <span className="gradient-text font-medium">AI</span>
            </p>
          </div>

          <a
            href="#home"
            className="text-portfolio-teal text-sm hover:text-portfolio-lightest transition-colors mono flex items-center gap-1.5 group"
          >
            Back to Top
            <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
