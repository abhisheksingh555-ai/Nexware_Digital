import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Users, Lightbulb, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TechNexwareHero = () => {
  const [activeTab, setActiveTab] = useState('software');
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    // Context keeps animations safely scoped to this component for cleanups
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 80%", // Starts when the top of the component reaches 80% viewport height
          toggleActions: "play none none none"
        }
      });

      // 1. Staggered reveal for left side items
      tl.from(".animate-left > *", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out"
      })
      // 2. Smooth fade & subtle pop for the interactive panel card
      .from(".animate-right-card", {
        opacity: 0,
        scale: 0.96,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5"); // Overlaps timeline slightly for fluid progression

    }, componentRef);

    return () => ctx.revert(); // Automatically handles memory leaks and resets on unmount
  }, []);

  const capabilities = {
    software: {
      title: "Enterprise Software & AI Systems",
      description: "Engineering custom platforms built to scale. From predictive AI models to fluid cloud architecture, we build the backend engine for your digital future.",
      points: ["Custom AI & Machine Learning integration", "Cloud migration & secure DevOps architecture", "High-performance enterprise software"]
    },
    consulting: {
      title: "Strategic IT Consulting",
      description: "Aligning your infrastructure with your commercial goals. Our architects assess your bottlenecks and map actionable engineering roadmaps.",
      points: ["Legacy modernization strategies", "IT infrastructure risk assessments", "Cost-effective scaling roadmaps"]
    },
    staffing: {
      title: "Value-Added Tech Placement",
      description: "Skip the generalists. Our specialized recruiting division hunts down niche technical and functional engineers to integrate seamlessly into your workforce.",
      points: ["Strict pre-vetted technical talent matching", "Global resource distribution (US, CA, AU, IN)", "Flexible contract & permanent scaling"]
    }
  };

  return (
    <section 
      ref={componentRef} 
      className="relative bg-slate-900 text-white overflow-hidden flex items-center pt-0 pb-2 md:pb-4"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-2 md:pt-8 md:pb-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
        
        {/* TOP / LEFT SIDE: Core Text & Call To Actions */}
        <div className="animate-left lg:col-span-7 space-y-4 lg:space-y-6 text-left order-1 w-full">
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-white">
            Welcome To <br />
            <span className="text-[1.65rem] sm:text-4xl lg:text-5xl xl:text-6xl bg-linear-to-r select-none from-blue-400 via-sky-400 to-blue-200 bg-clip-text text-transparent block whitespace-nowrap overflow-visible">
              Tech Nexware Digital
            </span>
          </h1>

          {/* Subtitle / Catchphrase */}
          <p className="text-base sm:text-lg font-semibold text-slate-200 tracking-tight max-w-xl">
            Software Development and Consulting for Your Digital Success
          </p>

          {/* Body Text */}
          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            Tech Nexware Digital is a global technology powerhouse specializing across diverse enterprise platforms. 
            Backed by a team of deeply human-experienced technical and functional engineers, we operate across the 
            <span className="text-sky-400 font-medium"> US, Australia, Canada, and India</span> to master cutting-edge software ecosystems. 
            We bridge the gap between human expertise and digital excellence to deliver elite, on-time, and cost-effective solutions.
          </p>

          {/* Key Quick Badges */}
          <div className="flex flex-nowrap items-center gap-1.5 justify-start pt-1 w-full overflow-hidden">
            <span className="bg-slate-800/40 border border-slate-700/60 px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-medium text-slate-200 shadow-sm whitespace-nowrap">
              Consulting
            </span>
            <span className="bg-slate-800/40 border border-slate-700/60 px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-medium text-slate-200 shadow-sm whitespace-nowrap">
              Outsourcing
            </span>
            <span className="bg-slate-800/40 border border-slate-700/60 px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-medium text-slate-200 shadow-sm whitespace-nowrap">
              Human Expertise
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-start pt-2">
            <a 
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg text-sm sm:text-base shadow-md shadow-blue-600/20 transition-all duration-200 transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Schedule Consultation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white font-semibold rounded-lg text-sm sm:text-base transition-all duration-200 w-full sm:w-auto"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* BOTTOM / RIGHT SIDE: Interactive Capabilities Panel */}
        <div className="animate-right-card lg:col-span-5 w-full relative group order-2 mt-4 lg:mt-0">
          {/* Outer glow aura */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-sky-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
          
          {/* Card Window Container */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/40 backdrop-blur-sm shadow-xl p-6 sm:p-8">
            
            <div className="border-b border-slate-700/50 pb-4 mb-6">
              <h3 className="text-lg font-bold text-white mb-1">Our Ecosystem Core</h3>
              <p className="text-xs text-slate-400">Click tabs below to see how we drive value strategy</p>
            </div>

            {/* Dynamic Tabs Grid */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-slate-900 rounded-xl border border-slate-700/60 mb-6">
              <button 
                onClick={() => setActiveTab('software')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeTab === 'software' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Software</span>
              </button>
              <button 
                onClick={() => setActiveTab('consulting')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeTab === 'consulting' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Consulting</span>
              </button>
              <button 
                onClick={() => setActiveTab('staffing')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeTab === 'staffing' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Staffing</span>
              </button>
            </div>

            {/* Dynamic Card Window Content */}
            <div className="space-y-4 min-h-[220px] flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-sky-400 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  {capabilities[activeTab].title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {capabilities[activeTab].description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-700/40">
                {capabilities[activeTab].points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TechNexwareHero;