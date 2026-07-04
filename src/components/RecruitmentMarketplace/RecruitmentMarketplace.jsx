import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import recruitment from "../../images/Recruitment.webp"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RecruitmentMarketplace = () => {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    // Scopes selectors inside this component context safely
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 80%", // Triggers when the top of the section enters 80% of the viewport height
          toggleActions: "play none none none"
        }
      });

      // Left-side image container slides in subtly from the left
      tl.from(".animate-left-img", {
        opacity: 0,
        x: -30,
        duration: 0.9,
        ease: "power3.out"
      })
      // Title text blocks and features reveal with an overlapping cascade stagger
      .from(".animate-right-content > *", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out"
      }, "-=0.6");

    }, componentRef);

    return () => ctx.revert(); // Complete component unmount cleanup
  }, []);

  return (
    // Applied base dark theme (bg-slate-900), set text to white, and added overflow-hidden for background glow circles
    <div 
      ref={componentRef}
      className="w-full max-w-7xl mx-auto px-4 py-8 bg-slate-900 text-white relative overflow-hidden"
    >
      
      {/* Background Decorative Ambient Glows (Learned from Core Services) */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-50/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-505 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 relative z-10">
        
        {/* Left Side: Image Container */}
        <div className="animate-left-img w-full lg:w-1/2 flex justify-center">
          {/* Glassmorphism wrapper card around the image */}
          <div className="relative w-full max-w-lg aspect-4/3 sm:aspect-video lg:aspect-square overflow-hidden rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xs group shadow-lg">
            
            {/* Dark mode image overlay template */}
            <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:opacity-0 transition-opacity duration-300" />
            
            <img 
              src={recruitment}
              alt="Tech Nexware Digital Recruitment Platform" 
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 relative z-0"
            />
          </div>
        </div>

        {/* Right Side: Structured Text Content */}
        <div className="animate-right-content w-full lg:w-1/2 space-y-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mt-1 leading-tight bg-linear-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              India’s Premier Ecosystem for Agile Technical Recruitment
            </h2>
            
            {/* Adjusted muted text color to slate-400 for proper visibility */}
            <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
              Stop drowning in resumes. Tech Nexware Digital unifies thousands of verified tech talents and vendors into a single, high-octane engine.
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* Value Propositions */}
          <div className="space-y-4">
            
            {/* Feature 1 */}
            <div className="flex gap-3 items-start group/item">
              {/* Opacity balanced icon container */}
              <div className="shrink-0 w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/20 transition-colors group-hover/item:text-blue-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-slate-100 transition-colors group-hover/item:text-blue-400">Unified Talent Pipeline</h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                  Bypass traditional screening. Gain instantaneous access to thousands of pre-vetted professionals matching your exact technical stack in one interface.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3 items-start group/item">
              <div className="shrink-0 w-9 h-9 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 border border-indigo-500/20 transition-colors group-hover/item:text-indigo-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-slate-100 transition-colors group-hover/item:text-indigo-400">Zero Vendor Empanelment Overhead</h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                  Eliminate time-wasting procurement cycles. We manage the vendor relationships, agreements, and technicalities so you can focus strictly on hiring.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-3 items-start group/item">
              <div className="shrink-0 w-9 h-9 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 border border-emerald-500/20 transition-colors group-hover/item:text-emerald-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-slate-100 transition-colors group-hover/item:text-emerald-400">Audit-Ready Compliance</h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                  Protect your corporate reputation. Our automated framework ensures real-time documentation, clean background checks, and effortless audit-readiness.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RecruitmentMarketplace;
