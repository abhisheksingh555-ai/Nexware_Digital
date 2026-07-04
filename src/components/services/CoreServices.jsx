import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images correctly so Vite bundles them
import webImg from "../../images/web.webp";
import appImg from "../../images/app.webp";
import digitalImg from "../../images/digitalMarketing.webp";
import googleImg from "../../images/googleAds.webp";
import staffImg from "../../images/staffing.webp";
import hrImg from "../../images/hr.webp";

// Register ScrollTrigger plugin safely
gsap.registerPlugin(ScrollTrigger);

const CoreServices = () => {
  const componentRef = useRef(null);

  // Updated: Use the imported variables here
  const services = [
    {
      image: webImg,
      title: "Web Development",
      description: "We build ultra-fast, high-converting websites and custom web apps tailored to fuel your business growth."
    },
    {
      image: appImg,
      title: "App Development",
      description: "Launch feature-rich iOS and Android mobile apps engineered for seamless performance and user retention."
    },
    {
      image: digitalImg,
      title: "Digital Marketing",
      description: "Scale your revenue with data-driven social media campaigns, SEO dominance, and high-impact content strategy."
    },
    {
      image: googleImg,
      title: "Google Ads (PPC)",
      description: "Maximize your marketing ROI with hyper-targeted ad campaigns that put your brand right in front of active buyers."
    },
    {
      image: staffImg,
      title: "Staffing Services",
      description: "Skip the hiring headache. Connect with vetted, top-tier technical and executive talent ready to scale your team."
    },
    {
      image: hrImg,
      title: "HR & Compliance",
      description: "Streamline your operations from onboarding to complex legal compliance, so you can focus entirely on winning."
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 82%", 
          toggleActions: "play none none none"
        }
      });

      tl.from(".animate-services-header > *", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out"
      })
      .from(".animate-service-card", {
        opacity: 0,
        y: 35,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out"
      }, "-=0.3");

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={componentRef}
      className="relative bg-slate-900 text-white py-4 px-4 overflow-hidden font-sans"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-64 md:w-96 h-64 md:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="animate-services-header text-center max-w-3xl mx-auto mb-6 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Our <span className="bg-linear-to-r from-blue-400 via-sky-400 to-blue-200 bg-clip-text text-transparent">Core Services</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed pt-1">
            We simplify modern technology, helping you leverage cloud security and automation to skyrocket customer engagement, team productivity, and market growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-service-card h-full w-full">
              <div 
                className="group relative h-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden"
              >
                <div className="w-full h-44 sm:h-48 md:h-52 overflow-hidden bg-slate-800 relative">
                  <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:opacity-0 transition-opacity duration-300" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col grow relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-xs sm:text-sm group-hover:text-slate-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-linear-to-r from-blue-500 via-sky-400 to-purple-500 rounded-b-2xl transition-all duration-300 group-hover:w-full shadow-[0_1px_10px_rgba(56,189,248,0.5)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
