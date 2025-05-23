
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-portfolio-navy/90 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <a href="#" className="text-portfolio-teal font-bold text-2xl mono">Dhirendra<span className="text-portfolio-light">.</span></a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={link.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <a
                  href={link.href}
                  className="mono text-portfolio-light text-sm tracking-wider hover:text-portfolio-teal transition-colors relative py-2 px-1"
                >
                  <span className="text-portfolio-teal mr-1">0{index + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Button 
            className="border border-portfolio-teal text-portfolio-teal bg-transparent hover:bg-portfolio-teal/10 rounded px-4 py-2 mono text-sm"
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-portfolio-light hover:text-portfolio-teal" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
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
            <li className="mt-8">
              <Button 
                className="border border-portfolio-teal text-portfolio-teal bg-transparent hover:bg-portfolio-teal/10 rounded px-6 py-3 mono"
              >
                Resume
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
