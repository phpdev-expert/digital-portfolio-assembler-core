
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChromeExtension {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  storeUrl: string;
}

const ChromeExtensionsSection = () => {
  const extensions: ChromeExtension[] = [
    {
      id: 1,
      title: "Group Convert Extension",
      description: "Chrome extension for group conversion optimization.",
      imageUrl: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop",
      storeUrl: "https://chrome.google.com/webstore/detail/group-convert-ext/hmfojimmcgpkcploafgmaofmhhcadgdh"
    },
    {
      id: 2,
      title: "Fill Your Funnel",
      description: "FunnelBot CF Page Copier for sales funnel optimization.",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      storeUrl: "https://chromewebstore.google.com/detail/funnelbot-cf-page-copier/cpiagapooikhbopmlcjnpphhmjiegcpi?hl=en"
    },
    {
      id: 3,
      title: "QuickLinkConvert",
      description: "Quick link conversion tool for improved customer journey.",
      imageUrl: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2070&auto=format&fit=crop",
      storeUrl: "https://chrome.google.com/webstore/detail/quicklinkconvert/bpcoheoeakioobjanfgleeahdpgkppci?hl=en"
    },
    {
      id: 4,
      title: "AffiliateConvert",
      description: "ExTraPe Affiliate Link Converter for affiliate marketers.",
      imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
      storeUrl: "https://chromewebstore.google.com/detail/extrape-affiliate-link-co/jkjdnkdcmpidffnghmclamlhadpflhlb?hl=en"
    },
    {
      id: 5,
      title: "Group Extractor",
      description: "ESuit Group Members Extractor for social media marketing.",
      imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
      storeUrl: "https://chromewebstore.google.com/detail/esuit-group-members-extra/mpfndbkbcmbacdjmphhfapdmjgpfkjmg?hl=en"
    },
    {
      id: 6,
      title: "SocialPostBuddy",
      description: "Social media post automation and scheduling tool.",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      storeUrl: "https://chrome.google.com/webstore/detail/socialpostbuddy/fjadmkofajjmeoecmbknkhlfjmdbobmo"
    },
    {
      id: 7,
      title: "CommentFunnels",
      description: "Social Fixer for Facebook to enhance social media interactions.",
      imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2070&auto=format&fit=crop",
      storeUrl: "https://chromewebstore.google.com/detail/social-fixer-for-facebook/ifmhoabcaeehkljcfclfiieohkohdgbb?hl=en"
    },
    {
      id: 8,
      title: "Group Hyper Growth Tools",
      description: "Tools for rapid social media group growth and engagement.",
      imageUrl: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop",
      storeUrl: "https://chrome.google.com/webstore/detail/group-hyper-growth-tools/mldpcnkohpfiddgbmceafgkekgpledfn"
    },
    {
      id: 9,
      title: "Hume",
      description: "Productivity and workflow enhancement extension.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      storeUrl: "https://chrome.google.com/webstore/detail/hume/idfooimilpjbbihjbeidflghgdahckck"
    }
  ];

  return (
    <section id="extensions" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-light flex items-center">
            <span className="text-portfolio-teal mono text-xl mr-4">04.</span> Chrome Extensions
          </h2>
          <div className="h-px bg-portfolio-slate/30 flex-grow ml-4"></div>
        </div>
        
        <p className="text-portfolio-slate mb-12 max-w-3xl">
          I've developed several Chrome extensions to enhance productivity, social media marketing, and conversion optimization.
          Each extension is designed to solve specific problems and improve user workflows.
        </p>

        {/* Extensions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extensions.map((extension) => (
            <div 
              key={extension.id} 
              className="extension-card bg-portfolio-dark rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-portfolio-teal/20 z-10"></div>
                <img 
                  src={extension.imageUrl} 
                  alt={extension.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-portfolio-lightest text-xl font-semibold mb-2">{extension.title}</h3>
                <p className="text-portfolio-slate mb-4">{extension.description}</p>
                <div className="flex gap-4">
                  <a 
                    href={extension.storeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-portfolio-teal hover:text-portfolio-lightest transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Chrome Web Store
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-portfolio-slate mb-6">
            These Chrome extensions have helped thousands of users improve their productivity and marketing efforts.
          </p>
          <Button className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal rounded px-6 py-3">
            <ExternalLink size={18} className="mr-2" /> View All Extensions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChromeExtensionsSection;
