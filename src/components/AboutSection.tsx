
import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, suffix = '' }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1300;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * end));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [end]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const nodes = [
  { label: 'LLMs', x: 50, y: 15 },
  { label: 'React', x: 80, y: 33 },
  { label: 'Django', x: 80, y: 67 },
  { label: 'Python', x: 50, y: 85 },
  { label: 'RAG', x: 20, y: 67 },
  { label: 'Agents', x: 20, y: 33 },
];

const AboutSection = () => {
  const stats: { value?: number; suffix?: string; text?: string; label: string }[] = [
    { value: 10, suffix: '+', label: 'Years of experience' },
    { value: 30, suffix: '+', label: 'Projects shipped' },
    { text: 'AI', label: 'LLM · RAG · Agents' },
    { value: 10, suffix: '+', label: 'Chrome extensions' },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-light flex items-center gap-4">
            <span className="section-num">01</span> About Me
          </h2>
          <div className="divider-gradient flex-grow ml-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-portfolio-slate mb-4">
              I'm a full-stack developer and <span className="text-portfolio-teal font-medium">AI engineer</span> who builds elegant, responsive products end to end — from data model to interface. With a strong foundation across frontend and backend, I turn ideas into seamless experiences that bridge design, functionality, and now intelligence.
            </p>
            <p className="text-portfolio-slate mb-4">
              My journey began with PHP and Laravel, where I developed a deep understanding of server-side programming and MVC architecture. Over time, I expanded my toolkit to include Django and Python, allowing me to work on data-intensive applications and REST APIs.
            </p>
            <p className="text-portfolio-slate mb-4">
              On the frontend, I'm proficient with modern JavaScript frameworks like React and Vue.js, which enable me to create dynamic and interactive user interfaces. Whether it's a complex SPA or a simple landing page, I'm focused on creating clean, maintainable code that delivers exceptional user experiences.
            </p>
            <p className="text-portfolio-slate mb-4">
              Most recently, I've moved deep into AI engineering — building LLM-powered applications on top of the OpenAI, Anthropic (Claude), and Gemini APIs. I've shipped Retrieval-Augmented Generation (RAG) systems with embeddings and vector databases, and built autonomous agents with LangChain and LlamaIndex, including products like <a href="https://chat.mium.de" target="_blank" rel="noopener noreferrer" className="text-portfolio-teal hover:text-portfolio-lightest transition-colors">mium.chat</a> and an AI-driven CV builder. This lets me pair solid full-stack engineering with modern GenAI to ship real, production-grade AI features.
            </p>
            <p className="text-portfolio-slate">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>
          
          <div className="relative mx-auto w-full max-w-md group">
            <div className="absolute -inset-3 bg-gradient-to-br from-portfolio-teal/15 to-portfolio-accent/15 rounded-2xl blur-2xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden w-full aspect-square bg-white border border-portfolio-slate/15 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)]">
              <div className="tech-constellation absolute inset-0" role="img" aria-label="AI-powered full-stack skills: LLMs, RAG, agents, React, Django and Python connected to an AI core">
                {/* connector lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="ai-line" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0D9488" />
                      <stop offset="100%" stopColor="#4F46E5" />
                    </linearGradient>
                  </defs>
                  {nodes.map((n) => (
                    <line
                      key={n.label}
                      x1="50" y1="50" x2={n.x} y2={n.y}
                      stroke="url(#ai-line)" strokeWidth="0.5" strokeOpacity="0.4"
                      strokeDasharray="2.5 2.5"
                    />
                  ))}
                </svg>

                {/* center AI core */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-portfolio-teal to-portfolio-accent blur-xl opacity-40 animate-glow-pulse" />
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-portfolio-teal to-portfolio-accent flex items-center justify-center shadow-[0_12px_30px_-8px_rgba(13,148,136,0.6)]">
                      <span className="font-display font-extrabold text-white text-3xl md:text-4xl">AI</span>
                    </div>
                  </div>
                </div>

                {/* orbiting tech nodes */}
                {nodes.map((n, i) => (
                  <div
                    key={n.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                    style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * -1.3}s`, animationDuration: '7s' }}
                  >
                    <div className="flex items-center gap-1.5 rounded-full bg-white border border-portfolio-slate/15 shadow-[0_6px_16px_-8px_rgba(15,23,42,0.25)] px-3 py-1.5 text-xs font-semibold text-portfolio-light whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-portfolio-teal to-portfolio-accent" />
                      {n.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center hover:-translate-y-1 hover:border-portfolio-teal/40 transition-all duration-300">
              <div className="font-display text-3xl md:text-4xl font-extrabold gradient-text mb-1">
                {stat.text ? stat.text : <CountUp end={stat.value as number} suffix={stat.suffix} />}
              </div>
              <div className="text-portfolio-slate text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
