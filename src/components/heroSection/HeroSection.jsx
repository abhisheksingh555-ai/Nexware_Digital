import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import newHeroSectionImg from "../../images/NewHeroSection.webp";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    // Creating a GSAP Context scopes selectors to this component only
    let ctx = gsap.context(() => {
      
      // Timeline for a coordinated entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 80%", // Starts when the top of the section hits 80% of the viewport height
          toggleActions: "play none none none"
        }
      });

      tl.from(".animate-img", {
        opacity: 0,
        x: 40,
        duration: 1,
        ease: "power3.out"
      })
      .from(".animate-text > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15, // Smooth stagger between text, badges, and buttons
        ease: "power3.out"
      }, "-=0.6"); // Overlaps with the image animation for fluidity

    }, componentRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section 
      ref={componentRef} 
      className="relative bg-slate-900 text-white overflow-hidden flex items-center"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10 w-full">
        
        {/* Right Image Column (Rendered First on Mobile) */}
        <div className="animate-img relative w-full max-w-full lg:max-w-none mx-auto group order-1 lg:order-2">
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-sky-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
          
          <div className="relative overflow-hidden rounded-xl border border-slate-700/60 bg-slate-800/40 backdrop-blur-sm shadow-xl">
            <img 
              src={newHeroSectionImg} 
              alt="Digital Software Development Tree" 
              className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] lg:max-h-none object-cover transform transition duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Left Content Column (Rendered Second on Mobile) */}
        <div className="animate-text space-y-4 lg:space-y-6 text-left order-2 lg:order-1 w-full">
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
            End-to-End <br />
            <span className="text-[1.65rem] sm:text-4xl lg:text-5xl bg-linear-to-r select-none from-blue-400 via-sky-400 to-blue-200 bg-clip-text text-transparent block whitespace-nowrap overflow-visible">
              Software Development
            </span>
          </h1>

          {/* Body Text */}
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We bridge the gap between complex technology and seamless execution. Empowering global businesses through premium consulting, scalable development, and reliable outsourcing services.
          </p>

          {/* Key Services Badges */}
          <div className="flex flex-nowrap items-center gap-1.5 justify-start pt-1 w-full overflow-hidden">
            <span className="bg-slate-800/40 border border-slate-700/60 px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-sm font-medium text-slate-200 shadow-sm whitespace-nowrap">
              Consulting
            </span>
            <span className="bg-slate-800/40 border border-slate-700/60 px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-sm font-medium text-slate-200 shadow-sm whitespace-nowrap">
              Outsourcing
            </span>
            <span className="bg-slate-800/40 border border-slate-700/60 px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-sm font-medium text-slate-200 shadow-sm whitespace-nowrap">
              Global Delivery
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;