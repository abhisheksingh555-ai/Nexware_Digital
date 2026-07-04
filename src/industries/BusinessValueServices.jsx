import React, { useState } from 'react';
import img1 from "../images/ind-01.webp";
import img2 from "../images/ind-02.webp";
import img3 from "../images/ind-03.webp";
import img4 from "../images/ind-04.webp";
import img5 from "../images/ind-05.webp";
import img6 from "../images/ind-06.webp";
import img7 from "../images/ind-07.webp";
import img8 from "../images/ind-08.webp";

const industryData = {
  'Healthcare Technology': {
    tagline: 'Patient-First Digital Ecosystems',
    description: 'At Technexware, we understand the critical demand for compliant, secure, and intuitive medical applications. We build interconnected health networks featuring automated EHR management, telemedicine portals, and predictive analytics diagnostics that enhance clinical workflows and patient care standards.',
    image: img1,
    highlights: ['HIPAA & GDPR Compliant Architectures', 'HL7/FHIR Telehealth Integrations', 'AI Diagnostic Systems']
  },
  'Fintech & Financial': {
    tagline: 'Secure, Scalable Capital Infrastructures',
    description: 'We develop next-gen financial tools engineered for hyper-secure transaction spaces. Our solutions bridge old systems with decentralized capabilities, featuring real-time risk assessment, transparent smart contracts, automated accounting engines, and consumer wallet frameworks.',
    image: img2,
    highlights: ['Decentralized Ledger Technology', 'Fraud Detection Algorithms', 'Micro-Payment Gateway API Hubs']
  },
  'Commercial Real Estate': {
    tagline: 'PropTech Built for Modern Portfolios',
    description: 'Transform physical assets into smart digital ecosystems. We design high-performance commercial real estate software providing live building metrics, asset depreciation models, automated lease workflows, and immersive property discovery experiences.',
    image: img3,
    highlights: ['IoT Smart Property Overviews', 'AI-Driven Valuation Models', 'Automated Tenant Management']
  },
  'IT Sector Outsourcing': {
    tagline: 'High-Velocity Distributed Software Teams',
    description: 'Scale your active engineering velocity overnight. We offer strategic team augmentation through highly vetted systems engineers and developers. Our model embeds specialists natively into your sprints, removing recruitment overhead while matching strict architectural standards.',
    image: img4, 
    highlights: ['Vetted Senior Engineering Talent', 'Agile & DevOps Workflow Alignment', 'Rapid Resource Mobilization']
  },
  'Logistics & Supply Chain': {
    tagline: 'Predictive Automated Distribution Pathways',
    description: 'Eliminate shipping bottlenecks using spatial asset tracking and inventory automation. We craft comprehensive logistics software that computes freight routing, automates picking yards, and connects warehouse sensors directly to enterprise management dashboards.',
    image: img5,
    highlights: ['Real-Time GPS Fleet Management', 'Dynamic Routing Optimization', 'Automated Warehouse Inventory Tracking']
  },
  'Retail & E-Commerce': {
    tagline: 'Omnichannel B2C Consumer Frameworks',
    description: 'Deliver fast, high-conversion storefronts optimized across all devices. We construct headless e-commerce structures with tailored configuration engines, predictive multi-tier discounts, and unified loyalty tools capable of handling sudden holiday traffic spikes effortlessly.',
    image: img6,
    highlights: ['Headless Architecture Frontends', 'Unified Multi-Channel Inventories', 'Personalized Product Recommendations']
  },
  'Automotive Insurtech': {
    tagline: 'Telemetry-Driven Claim Engines',
    description: 'We build digital insurance systems that utilize vehicle hardware data to automate claims processing. By pairing real-time telemetry pipelines with claim engines, we help providers lower overhead and process simple adjustments instantly.',
    image: img6,
    highlights: ['Real-Time Telemetry Processing', 'AI Accident Damage Assessment', 'Automated Payout Engines']
  },
  'Energy & Utilities': {
    tagline: 'Smart-Grid Resource Management Systems',
    description: 'Modernize green energy and resource operations through predictive grid tracking. We help suppliers deploy monitoring systems that display consumption fluctuations, identify device failures instantly, and distribute peak-load requirements automatically.',
    image: img7,
    highlights: ['Real-Time Microgrid Distribution', 'Predictive Grid Wear Analytics', 'Automated Billing Implementations']
  }
};

const BusinessValueServices = () => {
  const [activeTab, setActiveTab] = useState('Healthcare Technology');

  return (
    <section className="bg-slate-950 text-slate-100 py-12 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Optimized Header Area */}
        <div className="mb-10 border-b border-slate-800/60 pb-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm uppercase tracking-widest mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Technexware Digital World Class Services | Areas
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white lg:whitespace-nowrap">
            The Extended Value We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Bring to Your Business
            </span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 1. MOBILE RESPONSIVE ACCORDION VIEW (Visible on small screens up to lg)   */}
        {/* ========================================================================= */}
        <div className="block lg:hidden space-y-4">
          {Object.keys(industryData).map((industry) => {
            const isSelected = activeTab === industry;
            const data = industryData[industry];

            return (
              <div 
                key={industry} 
                className={`rounded-xl border transition-all duration-300 ${
                  isSelected ? 'bg-slate-900 border-cyan-500/30' : 'bg-slate-900/20 border-slate-800'
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => setActiveTab(isSelected ? '' : industry)}
                  className="w-full text-left p-5 flex items-center justify-between"
                >
                  <span className={`font-semibold tracking-wide text-base sm:text-lg ${isSelected ? 'text-cyan-400' : 'text-slate-300'}`}>
                    {industry}
                  </span>
                  <span className={`text-xl transition-transform duration-300 ${isSelected ? 'text-cyan-400 rotate-90' : 'text-slate-500'}`}>
                    →
                  </span>
                </button>

                {/* Inline Content Drawer */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isSelected ? 'max-h-[800px] opacity-100 border-t border-slate-800/60' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-5 space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {data.tagline}
                      </h3>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                      {data.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-widest mb-2">Key Focus Integrations:</h4>
                      <ul className="space-y-1.5">
                        {data.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                            <span className="text-cyan-400 font-bold">✓</span> {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative h-44 rounded-lg overflow-hidden border border-slate-800">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                      <img 
                        src={data.image} 
                        alt={industry}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 2. DESKTOP SPLIT VIEW (Visible on lg screens and up)                     */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Tab Links */}
          <div className="lg:col-span-5 space-y-2">
            {Object.keys(industryData).map((industry) => {
              const isActive = activeTab === industry;
              return (
                <button
                  key={industry}
                  onClick={() => setActiveTab(industry)}
                  onMouseEnter={() => setActiveTab(industry)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group border ${
                    isActive 
                      ? 'bg-slate-900 border-cyan-500/30 text-white translate-x-2 shadow-md shadow-cyan-500/5' 
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <span className="font-semibold tracking-wide text-lg">
                    {industry}
                  </span>
                  <span className={`text-xl transition-transform duration-300 ${
                    isActive ? 'text-cyan-400 translate-x-0' : 'text-slate-600 group-hover:translate-x-1'
                  }`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Side Info Block Display */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-10 backdrop-blur-sm min-h-[520px] flex flex-col justify-between transition-all duration-500 hover:border-slate-700/50">
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-md">
                  {activeTab || 'Select an Industry'}
                </span>
                <h3 className="text-3xl font-bold text-white mt-4 tracking-tight">
                  {activeTab ? industryData[activeTab].tagline : 'Explore Our Sectors'}
                </h3>
              </div>

              {activeTab && (
                <>
                  <p className="text-slate-300 leading-relaxed font-light text-lg">
                    {industryData[activeTab].description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-widest mb-3">Key Focus Integrations:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {industryData[activeTab].highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className="text-cyan-400 font-bold">✓</span> {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {activeTab && (
              <div className="mt-8 relative h-56 rounded-xl overflow-hidden shadow-inner border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                <img 
                  src={industryData[activeTab].image} 
                  alt={`${activeTab} technology`}
                  className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default BusinessValueServices;