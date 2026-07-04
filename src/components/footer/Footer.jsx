import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const componentRef = useRef(null);
  const currentYear = new Date().getFullYear();

  // Mirrors the navbar exactly
  const companyLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Clients', href: '/clients' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const serviceLinks = [
    { label: 'Web App Development', href: 'services-web-app' },
    { label: 'Digital Marketing', href: 'services-digital-marketing' },
    { label: 'Google Ads Management', href: 'services-google-ads' },
    { label: 'UI/UX Product Design', href: 'services-design' },
    { label: 'Custom Software Development', href: 'services-custom' },
    { label: 'Cloud Architecture', href: 'services-cloud' },
    { label: 'AI & Machine Learning', href: 'services-ai' },
    { label: 'IT Strategy Consulting', href: 'services-consulting' },
    { label: 'Cyber Security Solutions', href: 'services-security' },
  ];

  const industryLinks = [
    { label: 'Healthcare Technology', href: 'industries' },
    { label: 'Fintech & Financial', href: 'industries' },
    { label: 'Commercial Real Estate', href: 'industries' },
    { label: 'IT Sector Outsourcing', href: 'industries' },
    { label: 'Logistics & Supply Chain', href: 'industries' },
    { label: 'Retail & E-Commerce', href: 'industries' },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

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

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={componentRef}
      className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden select-none"
    >
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-900 items-start">

          {/* LEFT: Branding Column */}
          <div className="animate-branding md:col-span-4 space-y-3">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <img
                src="/favicon-v2.png"
                alt="Tech Nexware Digital Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-base tracking-tight text-white">
                Tech Nexware <span className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Digital</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Accelerating digital transformation with premium custom engineering, cloud solutions, and scalable tech teams worldwide.
            </p>
          </div>

          {/* RIGHT: Quick Links Matrix */}
          <div className="animate-links md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2 md:pt-0">

            {/* Column 1: Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                Company
              </h4>
              <ul className="space-y-1.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-xs text-slate-400 hover:text-sky-400 transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                Services
              </h4>
              <ul className="space-y-1.5">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={`/${link.href}`} className="text-xs text-slate-400 hover:text-sky-400 transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Industries */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                Industries
              </h4>
              <ul className="space-y-1.5">
                {industryLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={`/${link.href}`} className="text-xs text-slate-400 hover:text-sky-400 transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM: Copyright & Legal Bar */}
        <div className="animate-bottom pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
          <p>© {currentYear} Tech Nexware Digital. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link to="/contact-us" className="hover:text-slate-400 transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;