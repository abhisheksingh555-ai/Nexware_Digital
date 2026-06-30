import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import backgoundImage from "../images/about-01.webp"

gsap.registerPlugin(ScrollTrigger);

const HeroSectionAbout = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-hero',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full flex items-center justify-start overflow-hidden bg-[#070f1e] p-0 m-0"
    >
      {/* Background Image Container - Updated to use local asset import */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 scale-105"
        style={{ 
          backgroundImage: `url(${backgoundImage})` 
        }}
      >
        {/* Layered gradients for deep glowing branding */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070f1e]/95 via-[#0b1528]/85 to-[#070f1e]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070f1e] via-transparent to-transparent" />
      </div>

      {/* Hero Content Wrapper - Adjusted Tight Padding */}
      <div className="relative z-10 w-full text-left flex flex-col items-start px-4 sm:px-8 md:px-16 lg:px-20 py-8 md:py-12">
        
        {/* Dynamic Typography - Mobile Friendly */}
        <h1 className="reveal-hero text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 max-w-4xl leading-tight">
          Empowering Brands with the{" "}
          <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
            Best Tech Talent
          </span>
        </h1>

        {/* Updated Brand Narrative Body Text */}
        <p className="reveal-hero text-sm sm:text-base md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-6 font-light">
          One of the best Indian Software Services company and continuously serving with Best Talent to customers within the delivery timeline , aggressively capturing world market in Software and Staffing solutions.
        </p>
      </div>

      {/* Decorative ambient blue glow */}
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[150px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default HeroSectionAbout;