import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import teamImage from "../images/about-2.webp"

gsap.registerPlugin(ScrollTrigger);

const TeamCultureSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left content text items
      gsap.fromTo(
        '.reveal-content',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate right side image block
      gsap.fromTo(
        '.reveal-visual',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#070f1e] text-white overflow-hidden relative">
      {/* Decorative ambient background spots */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-indigo-600/5 blur-[90px] rounded-full pointer-events-none" />

      {/* Main tight structural padding wrapper */}
      <div className="w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-8 md:py-12 relative z-10">
        
        {/* Split Grid Layout - Stacks on mobile, splits on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Core Brand Copy */}
          <div className="md:col-span-7 space-y-4 flex flex-col items-start">
            <h2 className="reveal-content text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Technology Succeeds with{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                People
              </span>
            </h2>
            
            <div className="reveal-content border-l-2 border-blue-500 pl-4">
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal">
                We are fueled by an award-winning team with the most extensive set of IT capabilities, tailored to help middle-market organizations use technology to uncover new opportunities.
              </p>
            </div>
            
            <p className="reveal-content text-slate-400 text-xs md:text-sm leading-relaxed font-light">
              Explore the leaders who thrive on helping our clients leverage digital solutions to achieve long-term market success and stable infrastructure.
            </p>
          </div>
          
          {/* Right Column: Visual Frame Asset */}
          <div className="reveal-visual md:col-span-5 relative w-full group">
            {/* Geometric dark blue background border offset */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#172a4b]/40 to-blue-600/10 rounded-2xl border border-[#233d6b]/30 -z-10 group-hover:border-blue-500/20 transition-colors duration-300" />
            
            {/* Styled Image Container */}
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#172a4b] shadow-xl relative bg-[#0b1528]/40">
              <img 
                src={teamImage} 
                alt="Modern tech team collaborating around digital workspaces" 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle ambient overlay to smoothly transition the image into your dark UI theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070f1e]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TeamCultureSection;