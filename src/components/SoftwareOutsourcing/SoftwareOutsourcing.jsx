import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SoftwareOutsourcing = () => {
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

      // Left-side header text reveals smoothly
      tl.from(".animate-left-text > *", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      })
      // Staggered grid entry for the core value cards
      .from(".animate-grid-items > div", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
      }, "-=0.3")
      // Right-side structural graphic slides up gracefully at the same time
      .from(".animate-right-graphic", {
        opacity: 0,
        scale: 0.98,
        y: 25,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");

    }, componentRef);

    return () => ctx.revert(); // Complete component unmount cleanup
  }, []);

  return (
    // REDUCED: Changed py-16 to py-4 to remove massive top/bottom space. Removed shadow-xl to bleed clean.
    <div 
      ref={componentRef}
      className="w-full max-w-7xl mx-auto px-6 py-4 bg-slate-900 text-slate-100 overflow-hidden"
    >
      {/* TIGHTENED: Reduced gap-12 to gap-6 (lg:gap-8 on screens) */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-8">
        
        {/* Left Side: Rich Text Content & Value Pillars */}
        {/* TIGHTENED: Reduced internal layout spacing from space-y-8 to space-y-4 */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="animate-left-text">
            {/* TIGHTENED: Changed mt-4 to mt-0 to eliminate unwanted header spacing */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-0 leading-tight">
              Best Software Outsourcing Company
            </h2>
            {/* TIGHTENED: Changed mt-4 to mt-2 for a closer text structure */}
            <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
              We engineer online success through world-class software development services. Whether it’s web or mobile app development, software product engineering, or dedicated co-development teams, our professionals deliver next-gen engineering to scale and sustain your digital transformation for the long run.
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* Core Value Pillars Grid */}
          <div>
            {/* TIGHTENED: Reduced mb-4 to mb-2.5 */}
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Why Global Enterprises Trust Us
            </h3>
            {/* TIGHTENED: Balanced structural grid gaps from gap-4 to gap-2.5 */}
            <div className="animate-grid-items grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { title: "100% Client Satisfaction", desc: "Uncompromising commitment to your business goals." },
                { title: "In-Depth Domain Knowledge", desc: "Deep industry vertical expertise." },
                { title: "Highly Experienced Team", desc: "Elite engineers accustomed to complex builds." },
                { title: "Business Need-Based Approach", desc: "Tailored architectures, not cookie-cutter fixes." },
                { title: "Quality & Security Adherence", desc: "Enterprise-grade compliance baked into code." },
                { title: "First Time Right Process", desc: "Rigorous standards to eliminate technical debt early." },
                { title: "Guaranteed Innovation", desc: "Modern tech stacks and future-proof systems." },
                { title: "Integrity & Transparency", desc: "Honest communication and clear progress tracking." },
                { title: "Result-Driven Approach", desc: "Milestones mapped directly to your ROI." },
                { title: "Co-Development Teams", desc: "Seamless extensions of your internal tech engine." }
              ].map((item, index) => (
                // LESS PADDING: Adjusted p-3 to p-2.5 for compact luxury card elements
                <div key={index} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800/70 transition-colors duration-200">
                  <div className="shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-slate-200">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Visual Graphic Container */}
        <div className="animate-right-graphic w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-4/3 sm:aspect-square bg-linear-to-br from-slate-800 to-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl group">
            {/* Visual Grid Backdrop */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            {/* Glow Accent */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
            
            {/* Main Image Asset */}
            <img 
              src="/src/images/Outsourcing.webp" 
              alt="Tech Nexware Digital Software Engineering Ecosystem" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-60 group-hover:scale-102 transition-all duration-500"
            />
            
            {/* Subtle Overlay Badge - Balanced internal padding */}
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur-md border border-slate-800/60 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Agile Execution</p>
                <p className="text-xs sm:text-sm text-white font-medium">Next-Gen Software Outsourcing</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SoftwareOutsourcing;