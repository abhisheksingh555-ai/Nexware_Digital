import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import missionImage from "../images/about-03.webp"; 
import visionImage from "../images/about-04.webp";  

gsap.registerPlugin(ScrollTrigger);

const MissionVisionSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in blocks when they enter viewport
      gsap.fromTo(
        '.reveal-row',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.25,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#070f1e] text-white overflow-hidden relative">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container with matching horizontal padding and minimized inner spacing */}
      <div className="w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-20 pt-12 pb-6 relative z-10 max-w-5xl flex flex-col gap-12 md:gap-16">
        
        {/* ROW 1: MISSION (Left Text, Right Image) */}
        <div className="reveal-row grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
          {/* Left Side: Mission Text */}
          <div className="md:col-span-7 space-y-3 flex flex-col items-start order-1 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Technexware Digital{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal">
                Our mission is to reduce your time span and offer a fast process in recruiting staff. We offer highly professional and high-quality services to the client. 
              </p>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">
              At Technexware Digital, we are dedicated to building excellent teams for you to stay ahead in the global market. We offer the ideal and right solutions for the HR requirements of our clients with a focus on long-term business relationships.
            </p>
          </div>

          {/* Right Side: Mission Image */}
          <div className="md:col-span-5 relative w-full group order-2 md:order-2">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#172a4b]/40 to-blue-600/10 rounded-2xl border border-[#233d6b]/30 -z-10 group-hover:border-blue-500/20 transition-colors duration-300" />
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#172a4b] shadow-xl relative bg-[#0b1528]/40">
              <img 
                src={missionImage} 
                alt="Technexware Digital Mission Visual" 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070f1e]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ROW 2: VISION (Left Image, Right Text) */}
        <div className="reveal-row grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
          {/* Left Side: Vision Image */}
          <div className="md:col-span-5 relative w-full group order-2 md:order-1">
            <div className="absolute -inset-1.5 bg-gradient-to-tl from-[#172a4b]/40 to-blue-600/10 rounded-2xl border border-[#233d6b]/30 -z-10 group-hover:border-blue-500/20 transition-colors duration-300" />
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#172a4b] shadow-xl relative bg-[#0b1528]/40">
              <img 
                src={visionImage} 
                alt="Technexware Digital Vision Visual" 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070f1e]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Vision Text */}
          <div className="md:col-span-7 space-y-3 flex flex-col items-start order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Technexware Digital{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal">
                Our vision is to reduce your time span and offer a fast process in recruiting staff. We offer highly professional and high-quality services to the client.
              </p>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">
              At Technexware Digital, we are dedicated to building excellent teams for you to stay ahead in the global market. We offer the ideal and right solutions for the HR requirements of our clients with a focus on long-term business relationships.
            </p>
          </div>
        </div>

        {/* Footer Area with Copyright notice */}
        <div className="w-full border-t border-[#172a4b]/60 pt-4 mt-4 flex items-center justify-center md:justify-start">
          <p className="text-[11px] sm:text-xs text-slate-500 font-light tracking-wide">
            Copyright © All Rights Reserved | Technexware Digital
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionSection;