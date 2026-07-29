
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Send, Phone } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="surface-alt py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="mono text-portfolio-teal text-sm mb-3">04. What's next?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Let's build something</span>
          </h2>
          <p className="text-portfolio-slate mb-8 max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations — especially AI-driven products. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/phpdev-expert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-slate hover:text-portfolio-teal hover:-translate-y-1 transition-all duration-300 p-3 glass rounded-full hover:border-portfolio-teal/50"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/dhirendra-singh-bisht" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-slate hover:text-portfolio-teal hover:-translate-y-1 transition-all duration-300 p-3 glass rounded-full hover:border-portfolio-teal/50"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:dhirendra1123@gmail.com" 
              className="text-portfolio-slate hover:text-portfolio-teal hover:-translate-y-1 transition-all duration-300 p-3 glass rounded-full hover:border-portfolio-teal/50"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+918437711066" 
              className="text-portfolio-slate hover:text-portfolio-teal hover:-translate-y-1 transition-all duration-300 p-3 glass rounded-full hover:border-portfolio-teal/50"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 text-portfolio-slate">
              <Mail size={18} className="text-portfolio-teal" />
              <span>dhirendra1123@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-portfolio-slate">
              <Phone size={18} className="text-portfolio-teal" />
              <span>+91 8437711066</span>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 text-left relative overflow-hidden">
            <div className="aurora-blob bg-portfolio-teal/20 w-72 h-72 -bottom-24 -left-16" />
            <form onSubmit={handleSubmit} className="relative">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-portfolio-light text-sm font-medium mb-2 text-left">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-portfolio-dark border-portfolio-slate/20 focus:border-portfolio-teal text-portfolio-light"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-portfolio-light text-sm font-medium mb-2 text-left">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-portfolio-dark border-portfolio-slate/20 focus:border-portfolio-teal text-portfolio-light"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-portfolio-light text-sm font-medium mb-2 text-left">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="bg-portfolio-dark border-portfolio-slate/20 focus:border-portfolio-teal text-portfolio-light min-h-[150px]"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gradient relative overflow-hidden font-semibold rounded-lg px-6 py-3 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
