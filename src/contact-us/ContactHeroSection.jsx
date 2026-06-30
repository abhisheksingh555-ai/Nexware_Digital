import { useEffect, useRef } from 'react';
import contact_background_image from "../images/contact-us.webp";

export default function ContactHeroSection() {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);

  // WebGL / Interactive Mesh Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numPoints = 40;
    const points = [];
    const mouse = { x: null, y: null, radius: 180 };

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= dx * force * 0.02;
            p.y -= dy * force * 0.02;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.2)';
        ctx.fill();
      });

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            const alpha = (1 - dist / 130) * 0.08;
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // 3D Card Hover Perspective Tilt Effect
  const handleCardMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const angleX = (yc - y) / 25; 
    const angleY = (x - xc) / 25;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleCardMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(4deg) rotateY(-4deg) rotateZ(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden bg-[#05080f] px-5 py-10 lg:px-12 lg:py-20 flex items-center justify-center font-sans selection:bg-indigo-500/30 selection:text-white" 
      aria-label="Contact Section"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 8, 15, 0.88), rgba(5, 8, 15, 0.94)), url('${contact_background_image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background Interactive Mesh Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* Main Structural Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
        
        {/* ── Left Content Panel ── */}
        <div className="flex flex-col space-y-6 lg:space-y-8">
          <div>
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight mb-4">
              We’re here to <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">help you.</span>
            </h1>
            <p className="text-sm lg:text-base text-slate-400 leading-relaxed max-w-xl">
              Whether you need assistance with sales quotes, billing, or technical support, 
              simply fill out the form to let us know how we can help you unlock insights 
              from your data to tell a clear story.
            </p>
          </div>

          {/* Direct Contact Information Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm transition hover:border-white/[0.1]">
              <div className="text-indigo-400 flex-shrink-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Our Location</span>
                <span className="text-sm text-slate-300">E Block, Noida Sector 16</span>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm transition hover:border-white/[0.1]">
              <div className="text-indigo-400 flex-shrink-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Give Us A Call</span>
                <a href="tel:+918929082629" className="text-sm text-slate-300 hover:text-blue-400 transition break-all">(+91) 89290 82629</a>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm transition hover:border-white/[0.1] sm:col-span-2 lg:col-span-1">
              <div className="text-indigo-400 flex-shrink-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Email Us</span>
                <a href="mailto:itteams@technexwaredigital.com" className="text-sm text-slate-300 hover:text-blue-400 transition break-all">itteams@technexwaredigital.com</a>
              </div>
            </div>
          </div>

          {/* ── Google Maps Embedded Embed ── */}
          <div className="w-full h-64 lg:h-72 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl relative group">
            <iframe 
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4645239533355!2d77.31343717631317!3d28.585816975691068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f62ca01053%3A0x6335133649fc61a1!2sE%20Block%2C%20Sector%2016%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ── Right Side 3D Interactive Form ── */}
        <div className="flex justify-center [perspective:1000px] w-full">
          <div 
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="w-full max-w-[500px] bg-gradient-to-br from-white/[0.05] to-white/[0.015] border border-white/[0.08] rounded-2xl p-6 lg:p-9 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md [transform-style:preserve-3d] transition-all duration-150 ease-out hover:border-indigo-500/25 default-card-3d"
            style={{ transform: 'rotateX(4deg) rotateY(-4deg)' }}
          >
            <h2 className="text-xl lg:text-2xl font-bold text-slate-100 mb-1 [transform:translateZ(20px)]">What’s on your mind?</h2>
            <p className="text-xs lg:text-sm text-slate-500 mb-6 [transform:translateZ(15px)]">Tell us what you’re looking for and we’ll connect you.</p>
            
            <form className="flex flex-col space-y-4 [transform:translateZ(25px)]" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Name</label>
                <input type="text" className="bg-[#05080f]/50 border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15 transition duration-300" placeholder="John Doe" required />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Company Name</label>
                <input type="text" className="bg-[#05080f]/50 border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15 transition duration-300" placeholder="Acme Corp" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Email Address</label>
                <input type="email" className="bg-[#05080f]/50 border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15 transition duration-300" placeholder="john@example.com" required />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Phone Number</label>
                <input type="tel" className="bg-[#05080f]/50 border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15 transition duration-300" placeholder="+91 00000 00000" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Your Message</label>
                <textarea className="bg-[#05080f]/50 border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15 min-h-[90px] resize-vertical transition duration-300" placeholder="How can we help you unlock insights..." required></textarea>
              </div>

              <button type="submit" className="mt-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-[#05080f] font-semibold text-sm py-3 rounded-lg hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 transition duration-200 shadow-lg shadow-indigo-500/10">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}