import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  
  // Track the current path state for highlighting active links
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    // Sync starting location path
    const currentPath = window.location.pathname.replace(/^\/|\/$/g, '') || '/';
    setActivePath(currentPath);

    const handleLocationChange = () => {
      const updatedPath = window.location.pathname.replace(/^\/|\/$/g, '') || '/';
      setActivePath(updatedPath);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Prevent background content scrolling when mobile menu takes over the page
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

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

  // UPDATED: Every item now points to the 'industries' page directly
  const industryLinks = [
    { label: 'Healthcare Technology', href: 'industries' },
    { label: 'Fintech & Financial', href: 'industries' },
    { label: 'Commercial Real Estate', href: 'industries' },
    { label: 'IT Sector Outsourcing', href: 'industries' },
    { label: 'Logistics & Supply Chain', href: 'industries' },
    { label: 'Retail & E-Commerce', href: 'industries' },
    { label: 'Automotive Insurtech', href: 'industries' },
    { label: 'Energy & Utilities', href: 'industries' },
  ];

  // Helper check function to find if sub-items are active
  const isServiceActive = serviceLinks.some(link => link.href === activePath);
  const isIndustryActive = activePath === 'industries';

  return (
    <nav className="relative bg-slate-900 border-b border-slate-800 text-white z-50 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT SIDE: Brand Image Logo & Company Name */}
          <div className="shrink-0 flex items-center gap-3">
            <img 
              src="/favicon-v2.png" 
              alt="Tech Nexware Digital Logo" 
              className="h-11 w-11 sm:h-12 sm:w-12 object-contain transition-transform duration-200"
            />
            <span className="font-bold text-base sm:text-lg tracking-tight whitespace-nowrap text-white">
              Tech Nexware <span className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Digital</span>
            </span>
          </div>

          {/* RIGHT SIDE: Desktop Navigation with Active Indicator States */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 h-full">
            <a 
              href="/" 
              className={`px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${activePath === '/' ? 'text-sky-400 bg-slate-800/40' : 'text-slate-300 hover:text-white'}`}
            >
              Home
            </a>
            <a 
              href="/about-us" 
              className={`px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${activePath === 'about-us' ? 'text-sky-400 bg-slate-800/40' : 'text-slate-300 hover:text-white'}`}
            >
              About Us
            </a>

            {/* INDUSTRIES DROPDOWN */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href="/industries"
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors focus:outline-none ${isIndustryActive ? 'text-sky-400' : 'text-slate-300 hover:text-white'}`}
              >
                Industries
                <svg className={`h-4 w-4 transform transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-sky-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              
              <div className={`absolute top-14 left-0 w-60 bg-slate-800 border border-slate-700 rounded-xl p-2 shadow-xl transition-all duration-200 origin-top ${activeDropdown === 'industries' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                {industryLinks.map((ind, idx) => (
                  <a 
                    key={idx} 
                    href={`/${ind.href}`} 
                    className={`block px-3 py-2 rounded-lg text-xs xl:text-sm transition-colors ${activePath === ind.href ? 'text-sky-400 bg-slate-900/40' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
                  >
                    {ind.label}
                  </a>
                ))}
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors focus:outline-none ${isServiceActive ? 'text-sky-400' : 'text-slate-300 hover:text-white'}`}>
                Services
                <svg className={`h-4 w-4 transform transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-sky-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div className={`absolute top-14 left-0 w-64 bg-slate-800 border border-slate-700 rounded-xl p-2 shadow-xl transition-all duration-200 origin-top ${activeDropdown === 'services' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                {serviceLinks.map((srv) => (
                  <a 
                    key={srv.label} 
                    href={`/${srv.href}`} 
                    className={`block px-3 py-2 rounded-lg text-xs xl:text-sm transition-colors ${activePath === srv.href ? 'text-sky-400 bg-slate-900/40' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
                  >
                    {srv.label}
                  </a>
                ))}
              </div>
            </div>

            <a 
              href="/clients" 
              className={`px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${activePath === 'clients' ? 'text-sky-400 bg-slate-800/40' : 'text-slate-300 hover:text-white'}`}
            >
              Clients
            </a>
            
            <a 
              href="/contact-us" 
              className={`px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${activePath === 'contact-us' ? 'text-sky-400 bg-slate-800/40' : 'text-slate-300 hover:text-white'}`}
            >
              Contact Us
            </a>
          </div>

          {/* HAMBURGER TRIGGER BUTTON */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-50"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* FULL PAGE MOBILE OVERLAY DISPLAY */}
      <div 
        className={`lg:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-slate-900 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-full'
        }`}
      >
        <div className="px-6 py-6 space-y-3 h-full overflow-y-auto pb-20">
          <a 
            href="/" 
            onClick={() => setIsOpen(false)} 
            className={`block px-4 py-3 rounded-xl text-lg font-semibold ${activePath === '/' ? 'text-sky-400 bg-slate-800' : 'text-slate-300'}`}
          >
            Home
          </a>
          
          <a 
            href="/about-us" 
            onClick={() => setIsOpen(false)} 
            className={`block px-4 py-3 rounded-xl text-lg font-semibold ${activePath === 'about-us' ? 'text-sky-400 bg-slate-800' : 'text-slate-300'}`}
          >
            About Us
          </a>

          {/* COLLAPSIBLE MOBILE INDUSTRIES */}
          <div className="rounded-xl overflow-hidden">
            <div className={`flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-left ${isIndustryActive ? 'text-sky-400 bg-slate-800/20' : 'text-slate-300'}`}>
              <a href="/industries" onClick={() => setIsOpen(false)} className="flex-1">
                Industries
              </a>
              <button 
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} 
                className="pl-4 focus:outline-none"
              >
                <svg className={`h-5 w-5 transform transition-transform ${mobileIndustriesOpen ? 'rotate-180 text-sky-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <div className={`pl-6 bg-slate-800/30 space-y-1 transition-all duration-200 overflow-hidden ${mobileIndustriesOpen ? 'max-h-[350px] py-2' : 'max-h-0'}`}>
              {industryLinks.map((ind, idx) => (
                <a 
                  key={idx} 
                  href={`/${ind.href}`} 
                  onClick={() => setIsOpen(false)} 
                  className={`block px-4 py-2.5 rounded-lg text-base ${activePath === ind.href ? 'text-sky-400 font-medium' : 'text-slate-400'}`}
                >
                  {ind.label}
                </a>
              ))}
            </div>
          </div>

          {/* COLLAPSIBLE MOBILE SERVICES */}
          <div className="rounded-xl overflow-hidden">
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-left ${isServiceActive ? 'text-sky-400 bg-slate-800/20' : 'text-slate-300'}`}
            >
              <span>Services</span>
              <svg className={`h-5 w-5 transform transition-transform ${mobileServicesOpen ? 'rotate-180 text-sky-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`pl-6 bg-slate-800/30 space-y-1 transition-all duration-200 overflow-hidden ${mobileServicesOpen ? 'max-h-[400px] py-2' : 'max-h-0'}`}>
              {serviceLinks.map((srv) => (
                <a 
                  key={srv.label} 
                  href={`/${srv.href}`} 
                  onClick={() => setIsOpen(false)} 
                  className={`block px-4 py-2.5 rounded-lg text-base ${activePath === srv.href ? 'text-sky-400 font-medium' : 'text-slate-400'}`}
                >
                  {srv.label}
                </a>
              ))}
            </div>
          </div>

          <a 
            href="/clients" 
            onClick={() => setIsOpen(false)} 
            className={`block px-4 py-3 rounded-xl text-lg font-semibold ${activePath === 'clients' ? 'text-sky-400 bg-slate-800' : 'text-slate-300'}`}
          >
            Clients
          </a>
          
          <a 
            href="/contact-us" 
            onClick={() => setIsOpen(false)} 
            className={`block px-4 py-3 rounded-xl text-lg font-semibold ${activePath === 'contact-us' ? 'text-sky-400 bg-slate-800' : 'text-slate-300'}`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;