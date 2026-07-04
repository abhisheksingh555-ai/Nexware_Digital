import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useService } from "../../context/ServiceContext";

const ChevronIcon = ({ open }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const { activeServiceId, setActiveServiceId } = useService();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setMobileServicesOpen(false);
      setMobileIndustriesOpen(false);
    }
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

  const industryLinks = [
    { label: 'Healthcare Technology', href: 'industries' },
    { label: 'Fintech & Financial', href: 'industries' },
    { label: 'Commercial Real Estate', href: 'industries' },
    { label: 'IT Sector Outsourcing', href: 'industries' },
    { label: 'Logistics & Supply Chain', href: 'industries' },
    { label: 'Retail & E-Commerce', href: 'industries' },
  ];

  return (
    <nav className="relative bg-slate-900 border-b border-slate-800 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="shrink-0 flex items-center gap-3">
            <img src="/favicon-v2.png" alt="Logo" className="h-10 w-10" />
            <Link to="/" className="font-bold text-lg">Tech Nexware Digital</Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-6 h-full">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
            <Link to="/about-us" className="text-slate-300 hover:text-white transition-colors">About Us</Link>

            <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('industries')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                Industries <ChevronIcon open={activeDropdown === 'industries'} />
              </button>
              <div className={`absolute top-14 left-0 w-60 bg-slate-800 rounded-xl p-2 shadow-xl transition-all duration-200 origin-top ${activeDropdown === 'industries' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {industryLinks.map((ind, i) => (
                  <Link key={i} to={`/${ind.href}`} className="block px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors">{ind.label}</Link>
                ))}
              </div>
            </div>

            <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`flex items-center gap-1 transition-colors ${activeServiceId?.startsWith('services-') ? 'text-sky-400' : 'text-slate-300 hover:text-white'}`}>
                Services <ChevronIcon open={activeDropdown === 'services'} />
              </button>
              <div className={`absolute top-14 left-0 w-64 bg-slate-800 rounded-xl p-2 shadow-xl transition-all duration-200 origin-top ${activeDropdown === 'services' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {serviceLinks.map((srv) => (
                  <Link
                    key={srv.href}
                    to={`/${srv.href}`}
                    onClick={() => setActiveServiceId(srv.href)}
                    className={`block px-3 py-2 rounded-lg transition-colors ${activeServiceId === srv.href ? 'bg-slate-700 text-sky-400' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                  >
                    {srv.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/clients" className="text-slate-300 hover:text-white transition-colors">Clients</Link>
            <Link
              to="/contact-us"
              className="ml-2 px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-semibold hover:bg-sky-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* MOBILE BACKDROP */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* MOBILE SLIDE-IN PANEL */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-slate-900 z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="shrink-0 flex items-center justify-between px-5 h-16 border-b border-slate-800">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable content area — this is what guarantees everything is reachable,
            no matter how many links get added later */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="flex flex-col gap-1 p-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="px-3 py-3 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors">Home</Link>
            <Link to="/about-us" onClick={() => setIsOpen(false)} className="px-3 py-3 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors">About Us</Link>

            {/* Industries accordion — grid-rows trick auto-sizes to actual content height */}
            <button
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              className="flex items-center justify-between px-3 py-3 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors"
              aria-expanded={mobileIndustriesOpen}
            >
              Industries <ChevronIcon open={mobileIndustriesOpen} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${mobileIndustriesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-1 py-1">
                  {industryLinks.map((i, idx) => (
                    <Link
                      key={idx}
                      to={`/${i.href}`}
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors text-sm"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services accordion — same fix applied */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between px-3 py-3 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors"
              aria-expanded={mobileServicesOpen}
            >
              Services <ChevronIcon open={mobileServicesOpen} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${mobileServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-1 py-1">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={`/${s.href}`}
                      onClick={() => { setActiveServiceId(s.href); setIsOpen(false); }}
                      className={`px-6 py-2.5 rounded-lg text-sm transition-colors ${activeServiceId === s.href ? 'text-sky-400 bg-slate-800' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/clients" onClick={() => setIsOpen(false)} className="px-3 py-3 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors">Clients</Link>

            <Link
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className="mt-3 px-3 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;