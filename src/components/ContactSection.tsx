
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

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
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-light flex items-center justify-center mb-3">
            <span className="text-portfolio-teal mono text-xl mr-4">04.</span> Get In Touch
          </h2>
          <p className="text-portfolio-slate mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="#" 
              className="text-portfolio-slate hover:text-portfolio-teal transition-colors p-3 bg-portfolio-dark rounded-full"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-portfolio-slate hover:text-portfolio-teal transition-colors p-3 bg-portfolio-dark rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:example@example.com" 
              className="text-portfolio-slate hover:text-portfolio-teal transition-colors p-3 bg-portfolio-dark rounded-full"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="bg-portfolio-dark rounded-lg p-8">
            <form onSubmit={handleSubmit}>
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
                    className="bg-portfolio-navy border-portfolio-slate/30 focus:border-portfolio-teal"
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
                    className="bg-portfolio-navy border-portfolio-slate/30 focus:border-portfolio-teal"
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
                    className="bg-portfolio-navy border-portfolio-slate/30 focus:border-portfolio-teal min-h-[150px]"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal rounded px-6 py-3 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
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
