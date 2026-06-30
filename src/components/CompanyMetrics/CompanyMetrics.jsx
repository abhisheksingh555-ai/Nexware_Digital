import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely
gsap.registerPlugin(ScrollTrigger);

const CompanyMetrics = () => {
  const componentRef = useRef(null);

  // Dynamically calculate experience based on a 2022 founding year
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2022;

  // Structured metrics data array with custom live data fallback protection
  const metrics = [
    { 
      value: `${yearsOfExperience > 0 ? yearsOfExperience : 4}+`, 
      label: "Years of Experience", 
      category: "Legacy" 
    },
    { value: "650+", label: "Elite Tech Professionals", category: "Talent" },
    { value: "50K+", label: "Man Hours Contributed", category: "Execution" },
    { value: "12,500+", label: "Successful Projects", category: "Delivery" },
    { value: "5,400+", label: "Happy Global Customers", category: "Trust" },
    { value: "100K+", label: "Talents Placed Perfectly", category: "Impact" },
    { value: "25K+", label: "Happy Employers Served", category: "Scale" },
    { value: "10+", label: "Global Branches", category: "Footprint" },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 85%", 
          toggleActions: "play none none none" 
        }
      });

      // 1. Reveal Header items sequentially
      tl.from(".animate-header-text > *", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      })
      // 2. Beautiful wave stagger reveal for the grid wrappers
      .from(".animate-metric-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.05, 
        ease: "power3.out"
      }, "-=0.3"); 

    }, componentRef);

    return () => ctx.revert(); 
  }, []);

  return (
    // REDUCED: Changed py-20 to py-4 to remove massive top/bottom space. Reduced side px-6 to px-4.
    <div 
      ref={componentRef}
      className="w-full max-w-7xl mx-auto px-4 py-4 bg-linear-to-b from-slate-900 to-slate-950 text-slate-100 relative overflow-hidden"
    >
      
      {/* Decorative background glow elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      {/* TIGHTENED: Reduced layout margin bottom from mb-16 to mb-6, and text spacing down to space-y-2 */}
      <div className="animate-header-text text-center max-w-3xl mx-auto mb-6 space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Proven Business Results <br className="hidden sm:inline" />
          <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            At Leading Companies
          </span>
        </h2>
        {/* TIGHTENED: Fixed text descriptions and slightly scaled down copy */}
        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Numbers talk. We’ve spent years mastering engineering, talent acceleration, and global delivery.
        </p>
      </div>

      {/* Dynamic Metrics Grid */}
      {/* TIGHTENED: Kept tight layout grid gap structure for space efficiency */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10">
        {metrics.map((metric, index) => (
          // Separated animation wrapper from Tailwind transition properties
          <div key={index} className="animate-metric-card">
            <div 
              // LESS PADDING: Adjusted inside cell padding from p-6 down to p-4 (p-3.5 on micro viewports)
              className="group relative p-3.5 sm:p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl transition-all duration-300 hover:border-slate-700/80 hover:bg-slate-900/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              {/* Top row mini-category decoration */}
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                {metric.category}
              </div>

              {/* Large Numeric Value */}
              {/* TIGHTENED: Shifted default spacing text from mt-2 mb-1 down to mt-1 mb-0.5 */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-1 mb-0.5 tracking-tight group-hover:scale-102 origin-left transition-transform duration-300">
                {metric.value}
              </div>

              {/* Label Text */}
              <p className="text-[11px] sm:text-xs font-medium text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-snug">
                {metric.label}
              </p>

              {/* Micro bottom line interactive highlight */}
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-linear-to-r from-cyan-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CompanyMetrics;