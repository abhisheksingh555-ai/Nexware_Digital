import React from 'react';
import backgoundImage from "../images/about-01.webp";

const IndustriesHeroSection = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white py-12">
      {/* Background Image with Dark Overlay for Text Contrast */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url(${backgoundImage})`,
        }}
      />
      
      {/* Layered Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      {/* Grid Pattern Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Dynamic Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">We Serve</span>
        </h1>

        {/* Polished Subtitle Description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed">
          Leveraging next-gen technologies to develop industry-leading, scalable digital solutions designed for transformational customer experiences.
        </p>

        {/* Action Button - Navigates to contact-us */}
        <div className="mt-8 flex justify-center">
          <a 
            href="/contact-us" 
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHeroSection;