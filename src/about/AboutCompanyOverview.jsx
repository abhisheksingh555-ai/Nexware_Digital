import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutCompanyOverview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-text',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      title: "Scalability",
      desc: "We are flexible to the increasing requirements or requests of our clients in the growing business ecosystem.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Advisory",
      desc: "We help our clients become faster, smarter and more resilient to change.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Competitive Price",
      desc: "We offer effective pricing models that suit all your needs.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {/* Fixed the trailing '0x' typo to a clean path closing token 'z' */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Security",
      desc: "We develop enterprise applications and solutions with the minimum risk of cyber-attacks and cyber threats.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#070f1e] text-white overflow-hidden relative">
      {/* Decorative ambient background spots */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[200px] h-[200px] bg-indigo-600/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Tightened vertical padding optimized across viewports */}
      <div className="w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-6 md:py-8 relative z-10">
        
        {/* Compact Stacked Container */}
        <div className="flex flex-col gap-6 max-w-5xl">
          
          {/* Row 1: Heading in One Row */}
          <div className="flex flex-col items-start">
            <h2 className="reveal-text text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                TechNexware Digital
              </span>
            </h2>
          </div>
          
          {/* Row 2: Narrative Content */}
          <div className="space-y-4">
            <div className="reveal-text border-l-2 border-blue-500 pl-4">
              <p className="text-slate-200 text-base md:text-xl leading-relaxed font-normal">
                TechNexware Digital is a global Technology & Consulting company specializing in diverse technology platforms, including Software Development, Outsourcing Services, IT Consulting, Artificial Intelligence, Cloud Services, Onboarding, and Training.
              </p>
            </div>
            
            <p className="reveal-text text-slate-400 text-sm md:text-base leading-relaxed font-light">
              Our highly experienced Technical & Functional resources operate across the US, Australia, Canada, and India to deploy cutting-edge technological infrastructures. 
            </p>

            <p className="reveal-text text-slate-400 text-sm md:text-base leading-relaxed font-light">
              With a rich, varied foundation in enterprise consulting and an unwavering commitment to continuous high-quality delivery, we offer unmatched subjective, highly precise, on-time, and cost-effective software solutions tailored to scale market leaders globally.
            </p>
          </div>

          {/* Row 3: Core Pillars with Icons - Mobile-first Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="reveal-text p-4 bg-[#0b1528]/60 border border-[#172a4b] rounded-xl flex items-start gap-3.5 relative group backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/40"
              >
                {/* Left vertical brand accent line */}
                <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-blue-500/30 group-hover:bg-blue-400 transition-colors rounded-r" />
                
                {/* Dynamic Icon Container */}
                <div className="flex-shrink-0 p-2 bg-[#12223c] rounded-lg border border-[#1d355e] group-hover:border-blue-500/30 transition-colors">
                  {pillar.icon}
                </div>
                
                <div className="flex flex-col justify-start">
                  <h3 className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-400 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutCompanyOverview;