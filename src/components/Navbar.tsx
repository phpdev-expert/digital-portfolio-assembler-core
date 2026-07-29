
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <a href="#" className="font-display font-extrabold text-2xl tracking-tight">
            <span className="gradient-text">Dhirendra</span><span className="text-portfolio-teal">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <li key={link.name} className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
                <a
                  href={link.href}
                  className="group mono text-portfolio-light text-sm tracking-wider hover:text-portfolio-teal transition-colors relative py-2"
                >
                  <span className="text-portfolio-teal mr-1">0{index + 1}.</span> {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-portfolio-teal to-portfolio-accent group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li className="animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              <a
                href="#contact"
                className="btn-gradient mono text-sm rounded-lg px-4 py-2"
              >
                Let's talk
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-light hover:text-portfolio-teal" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-portfolio-dark/95 z-40 flex flex-col items-center justify-center transform transition-transform duration-300 md:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="w-full">
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <li key={link.name} className="w-full text-center">
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mono text-portfolio-light text-lg block py-2 hover:text-portfolio-teal transition-colors"
                >
                  <span className="text-portfolio-teal block text-sm mb-1">0{index + 1}.</span> 
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
