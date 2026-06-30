import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely
gsap.registerPlugin(ScrollTrigger);

const ProcessWorkflow = () => {
  const componentRef = useRef(null);

  const steps = [
    {
      num: "01",
      title: "Discover & Scope",
      desc: "We dive deep into your technology stack, timeline requirements, and project roadblocks to map out a clear blueprint."
    },
    {
      num: "02",
      title: "Zero-Risk Alignment",
      desc: "Review pre-vetted talent profiles or product roadmaps. Zero long-term commitments or administrative burdens on day one."
    },
    {
      num: "03",
      title: "Seamless Integration",
      desc: "Our cross-functional teams or elite engineers plug right into your existing communication channels and repositories."
    },
    {
      num: "04",
      title: "Accelerated Delivery",
      desc: "Experience agile development sprints backed by regular deployment cycles, transparent code access, and clear tracking."
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 85%", // Triggers when the section enters the viewport
          toggleActions: "play none none none" // Only triggers the animation once
        }
      });

      // 1. Reveal Header Title and Paragraph
      tl.from(".animate-flow-header > *", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      })
      // 2. Cascade stagger reveal for the individual workflow steps
      .from(".animate-flow-step", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out"
      }, "-=0.3")
      // 3. Subtle bottom summary bar fade in
      .from(".animate-flow-footer", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.2");

    }, componentRef);

    return () => ctx.revert(); // Cleanup memory allocations on unmount
  }, []);

  return (
    // UPGRADED: Background changed to match CompanyMetrics (bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100)
    // REDUCED: Changed py-20 to py-4 to remove massive top/bottom space. Reduced side px-6 to px-4.
    <div 
      ref={componentRef}
      className="w-full max-w-7xl mx-auto px-4 py-4 bg-linear-to-b from-slate-900 to-slate-950 text-slate-100 relative overflow-hidden"
    >
      
      {/* Decorative background glow elements matching CompanyMetrics styling */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Structural Header Grid */}
      {/* TIGHTENED: Reduced mb-16 down to mb-6 and space-y-3 down to space-y-1.5 */}
      <div className="animate-flow-header grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end mb-6 relative z-10">
        <div className="lg:col-span-7 space-y-1.5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            A Simple, Powerful, and <br className="hidden sm:inline"/>
            <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Efficient Engineering Process</span>
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Discover how frictionless it is to build with <strong className="text-slate-200 font-semibold">Tech Nexware Digital</strong>. Our proven delivery methodology completely insulates your business from deployment risks, resource overhead, and operational friction.
          </p>
        </div>
      </div>

      {/* Interactive Process Steps Grid */}
      {/* TIGHTENED: Reduced vertical space context by matching item gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        
        {/* Decorative horizontal line optimized for dark mode background transparency */}
        <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-slate-800 pointer-events-none" />

        {steps.map((step, index) => (
          // Wrapped inside an isolated animation layer to secure code execution from CSS transitions
          <div key={index} className="animate-flow-step w-full">
            <div className="group flex flex-col items-start relative z-10">
              
              {/* Step Counter Bubble - Dark glass design style change */}
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-black text-base text-slate-500 shadow-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400">
                {step.num}
              </div>

              {/* Title */}
              {/* TIGHTENED: Changed mt-5 mb-2 down to mt-3 mb-1 */}
              <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-3 mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                {step.title}
              </h3>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
                {step.desc}
              </p>

              {/* Visual Micro-indicator Line match for the new theme */}
              <div className="w-full h-0.5 bg-linear-to-r from-cyan-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-3 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Low-friction summary footer bar */}
      {/* TIGHTENED: Changed mt-16 to mt-6, reduced inner padding from p-5 to p-3.5 */}
      <div className="animate-flow-footer mt-6 p-3.5 bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Ready to integrate? Kick off your risk-free pilot phase within <span className="text-slate-200 font-bold">48 hours</span>.
          </p>
        </div>
        {/* TIGHTENED: Button padding tailored down from px-5 py-2.5 to px-4 py-2 */}
        <button className="w-full sm:w-auto px-4 py-2 bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all duration-200 shadow-md">
          Get Started Risk-Free
        </button>
      </div>

    </div>
  );
};

export default ProcessWorkflow;