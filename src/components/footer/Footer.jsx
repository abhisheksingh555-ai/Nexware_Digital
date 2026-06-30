import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const componentRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Training Solutions', href: '#training' },
    { label: 'Client Portals', href: '#client' },
    { label: 'Careers', href: '#careers' },
  ];

  const serviceLinks = [
    { label: 'Custom Software', href: '#services-custom' },
    { label: 'Cloud Architecture', href: '#services-cloud' },
    { label: 'AI & Machine Learning', href: '#services-ai' },
    { label: 'IT Consulting', href: '#services-consulting' },
  ];

  const industryLinks = [
    { label: 'Healthcare Tech', href: '#industry-healthcare' },
    { label: 'Fintech Systems', href: '#industry-fintech' },
    { label: 'E-Commerce & Logistics', href: '#industry-ecommerce' },
  ];

  useLayoutEffect(() => {
    // Scopes selectors inside this component context safely
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 90%", // Triggers when the top of the footer enters 90% of the viewport height
          toggleActions: "play none none none"
        }
      });

      // Subtle, elegant fade up for footer main content and bottom copyright bar
      tl.from(".animate-branding", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power2.out"
      })
      .from(".animate-links > div", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4")
      .from(".animate-bottom", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.2");

    }, componentRef);

    return () => ctx.revert(); // Complete component unmount cleanup
  }, []);

  return (
    // Matching premium theme background styling and ultra-low layout paddings
    <footer 
      ref={componentRef}
      className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden select-none"
    >
      
      {/* Decorative localized glow highlights matching component design frameworks */}
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        
        {/* Main Content structural breakdown grid split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-slate-900 items-start">
          
          {/* LEFT: Branding Column */}
          <div className="animate-branding md:col-span-4 space-y-2">
            <div className="flex items-center gap-2">
              <img 
                src="/favicon-v2.png"
                alt="Tech Nexware Digital Logo" 
                className="h-15 w-15 object-contain"
              />
              <span className="font-bold text-base tracking-tight text-white">
                Tech Nexware <span className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Digital</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Accelerating digital transformation with premium custom engineering, cloud solutions, and scalable tech teams worldwide.
            </p>
          </div>

          {/* RIGHT: Quick Links Matrix grids */}
          <div className="animate-links md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2 md:pt-0">
            
            {/* Column 1: Company links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                Company
              </h4>
              <ul className="space-y-1.5">
                {platformLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-slate-400 hover:text-sky-400 transition-colors duration-150">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Core Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                Services
              </h4>
              <ul className="space-y-1.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-slate-400 hover:text-sky-400 transition-colors duration-150">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Industries Focus */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                Industries
              </h4>
              <ul className="space-y-1.5">
                {industryLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-slate-400 hover:text-sky-400 transition-colors duration-150">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM: Copyright & System Architecture Bar */}
        <div className="animate-bottom pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
          <p>© {currentYear} Tech Nexware Digital. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Contact Us</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;