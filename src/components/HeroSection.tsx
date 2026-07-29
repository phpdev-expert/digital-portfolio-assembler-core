import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { asset } from '@/lib/asset';

const HeroSection = () => {
  const stack = ['LLMs', 'RAG', 'AI Agents', 'React', 'Django', 'Laravel', 'TypeScript'];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16 px-4 overflow-hidden">
      {/* Aurora atmosphere */}
      <div className="aurora-blob bg-portfolio-teal/30 w-[32rem] h-[32rem] -top-40 -left-40 animate-float-slow" />
      <div className="aurora-blob bg-portfolio-accent/30 w-[28rem] h-[28rem] top-20 right-0 animate-float-slow" style={{ animationDelay: '-6s' }} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="flex-1 md:w-3/5">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '80ms' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-portfolio-teal" />
              </span>
              <span className="mono text-xs text-portfolio-light tracking-wide">Available for AI &amp; full-stack work</span>
            </div>

            <h1 className="mono text-portfolio-teal text-sm md:text-base mb-5 animate-fade-in opacity-0" style={{ animationDelay: '160ms' }}>
              Hi, my name is
            </h1>
            <h2 className="font-display text-6xl md:text-8xl font-extrabold text-portfolio-lightest mb-3 leading-[0.95] animate-fade-in opacity-0" style={{ animationDelay: '240ms' }}>
              Dhirendra<br />
              <span className="gradient-text-animated">Singh Bisht.</span>
            </h2>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-portfolio-slate mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '320ms' }}>
              I build AI-powered apps for the web.
            </h3>
            <p className="max-w-xl text-portfolio-slate text-base md:text-lg mb-8 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              Full-stack developer with <span className="text-portfolio-light font-semibold">10+ years</span> shipping robust
              apps in Laravel, Django, React &amp; Vue — now building products with <span className="text-portfolio-teal">LLMs</span>,{' '}
              <span className="text-portfolio-cyan">RAG pipelines</span> and{' '}
              <span className="text-portfolio-accent">autonomous agents</span>.
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '480ms' }}>
              {stack.map((t) => (
                <span key={t} className="mono text-xs text-portfolio-light glass rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '560ms' }}>
              <a href="#projects">
                <Button className="btn-gradient relative overflow-hidden font-semibold rounded-lg px-7 py-6 text-base flex items-center gap-2 group">
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </Button>
              </a>
              <a href="#contact">
                <Button className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal/50 hover:border-portfolio-teal rounded-lg px-7 py-6 text-base flex items-center gap-2">
                  <Sparkles size={16} /> Get in Touch
                </Button>
              </a>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: '640ms' }}>
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-3 bg-gradient-to-tr from-portfolio-teal/15 to-portfolio-accent/15 rounded-3xl blur-2xl opacity-70" />
              <div className="relative rounded-2xl overflow-hidden bg-white border border-portfolio-slate/15 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
                <img
                  src={asset("/lovable-uploads/96a72870-208d-45fc-928e-4b3a28f3987a.png")}
                  alt="Dhirendra Singh Bisht — AI &amp; full-stack developer"
                  className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
        <span className="mono text-[10px] tracking-[0.3em] text-portfolio-slate uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-portfolio-slate/40 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-portfolio-teal animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
