import { useEffect, useRef, useState } from 'react';

const partnersRow1 = [
  { name: 'Google', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Amazon_2024.svg' },
  { name: 'Figma',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const partnersRow2 = [
  { name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png' },
  { name: 'Slack',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

const stats = [
  { value: 200, suffix: '+', label: 'Integrations' },
  { value: 50, suffix: 'K+', label: 'Companies'    },
  { value: 99.9, suffix: '%', label: 'Uptime'      },
];

function useCountUp(target, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return [ref, val];
}

function StatCard({ value, suffix, label }) {
  const [ref, animated] = useCountUp(value);
  const display = Number.isInteger(value) ? Math.round(animated) : animated.toFixed(1);
  return (
    <div ref={ref} className="cps-stat" role="listitem">
      <span className="cps-stat-n">{display}{suffix}</span>
      <span className="cps-stat-l">{label}</span>
    </div>
  );
}

export default function ClientPartnersSection() {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 16, y: -4 });
  const baseTilt = { x: 16, y: -4 };

  const handleMove = (e) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: baseTilt.x - px * 6, y: baseTilt.y + px * 10 });
  };

  const resetTilt = () => setTilt(baseTilt);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');

        @keyframes cps-marquee-forward {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes cps-marquee-backward {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes cps-fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cps-glowPulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.85; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes cps-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .cps-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #030712;
          padding: 32px 16px;
          position: relative;
          overflow: hidden;
        }

        .cps-bg-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(59, 130, 246, 0.04) 60%, transparent 100%);
          top: 50%;
          left: 50%;
          pointer-events: none;
          filter: blur(60px);
          animation: cps-glowPulse 7s ease-in-out infinite;
        }
        .cps-bg-glow.cps-glow-2 {
          width: 220px;
          height: 220px;
          top: 80%;
          left: 80%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.10) 0%, transparent 70%);
          animation-delay: -3s;
        }

        .cps-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          gap: 32px;
        }

        .cps-header-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 12px;
          width: 100%;
        }

        .cps-headline {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 800;
          line-height: 1.2;
          color: #f9fafb;
          letter-spacing: -0.02em;
          margin: 0;
          animation: cps-fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          width: 100%;
        }

        .cps-headline em {
          font-style: normal;
          background: linear-gradient(135deg, #a5b4fc 0%, #60a5fa 50%, #c084fc 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: cps-shimmer 5s linear infinite;
        }

        .cps-sub {
          font-size: 15px;
          line-height: 1.5;
          color: #9ca3af;
          margin: 0;
          animation: cps-fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          width: 100%;
        }

        .cps-stats {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          animation: cps-fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }

        .cps-stat {
          background: linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%);
          border: 1px solid rgba(255, 255, 255, 0.07);
          padding: 16px;
          border-radius: 16px;
          box-shadow: 0 12px 28px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05);
          text-align: center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .cps-stat:hover {
          transform: translateY(-4px);
          border-color: rgba(165, 180, 252, 0.35);
          box-shadow: 0 18px 36px -14px rgba(99,102,241,0.35), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .cps-stat-n {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
          display: block;
          margin-bottom: 2px;
          font-variant-numeric: tabular-nums;
        }

        .cps-stat-l {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #6b7280;
          text-transform: uppercase;
        }

        /* ── 3D Ribbon Stage ── */
        .cps-3d-stage {
          width: 100%;
          perspective: 1100px;
          margin-top: 8px;
          animation: cps-fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        .cps-3d-transform-layer {
          transform: rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotateZ(-1deg);
          transition: transform 0.25s ease-out;
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cps-marquee-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 4px 0;
          mask-image: linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%);
        }

        .cps-marquee-wrapper {
          display: flex;
          width: max-content;
          gap: 14px;
        }

        .cps-anim-forward {
          animation: cps-marquee-forward 24s linear infinite;
        }
        .cps-anim-backward {
          animation: cps-marquee-backward 24s linear infinite;
        }
        .cps-marquee-wrapper:hover {
          animation-play-state: paused;
        }

        .cps-logo-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 20px;
          border-radius: 16px;
          box-shadow: 0 10px 26px -8px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .cps-logo-card:hover {
          transform: translateY(-5px) scale(1.04);
          border-color: rgba(165, 180, 252, 0.4);
          box-shadow: 0 16px 32px -10px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .cps-logo-card img {
          height: 18px;
          width: auto;
          object-fit: contain;
          filter: grayscale(0.2) brightness(1.1);
        }

        .cps-logo-card span {
          font-size: 14px;
          font-weight: 500;
          color: #e5e7eb;
        }

        @media (min-width: 768px) {
          .cps-root {
            padding: 48px 24px;
          }
          .cps-bg-glow {
            width: 800px;
            height: 600px;
            filter: blur(100px);
          }
          .cps-container {
            gap: 48px;
          }
          .cps-headline {
            font-size: 54px;
            line-height: 1.1;
            white-space: nowrap;
          }
          .cps-sub {
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .cps-stats {
            flex-direction: row;
            gap: 24px;
            max-width: 700px;
          }
          .cps-stat {
            flex: 1;
            padding: 20px;
            border-radius: 20px;
          }
          .cps-stat-n {
            font-size: 32px;
          }
          .cps-3d-stage {
            perspective: 1200px;
            margin-top: 12px;
          }
          .cps-3d-transform-layer {
            gap: 20px;
          }
          .cps-marquee-container {
            padding: 6px 0;
          }
          .cps-marquee-wrapper {
            gap: 20px;
          }
          .cps-logo-card {
            gap: 14px;
            padding: 16px 32px;
            border-radius: 22px;
          }
          .cps-logo-card img {
            height: 24px;
          }
          .cps-logo-card span {
            font-size: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cps-headline em, .cps-bg-glow, .cps-anim-forward, .cps-anim-backward,
          .cps-stat, .cps-logo-card, .cps-3d-transform-layer {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="cps-root" aria-label="Our partners">
        <div className="cps-bg-glow" aria-hidden="true" />
        <div className="cps-bg-glow cps-glow-2" aria-hidden="true" />

        <div className="cps-container">

          <div className="cps-header-block">
            <h2 className="cps-headline">
              Trusted by <em>industry leaders</em>
            </h2>
            <p className="cps-sub">
              Collaborating with modern enterprises and disruptive startups to scale digital products.
            </p>
          </div>

          <div className="cps-stats" role="list" aria-label="Key performance metrics">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div
            className="cps-3d-stage"
            ref={stageRef}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
          >
            <div className="cps-3d-transform-layer">

              <div className="cps-marquee-container">
                <div className="cps-marquee-wrapper cps-anim-forward" role="list">
                  {[...partnersRow1, ...partnersRow1, ...partnersRow1, ...partnersRow1].map((p, i) => (
                    <div key={`fwd-${i}`} className="cps-logo-card" role="listitem">
                      <img src={p.logo} alt={`${p.name} logo`} loading="lazy" />
                      <span>{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cps-marquee-container">
                <div className="cps-marquee-wrapper cps-anim-backward" role="list">
                  {[...partnersRow2, ...partnersRow2, ...partnersRow2, ...partnersRow2].map((p, i) => (
                    <div key={`bwd-${i}`} className="cps-logo-card" role="listitem">
                      <img src={p.logo} alt={`${p.name} logo`} loading="lazy" />
                      <span>{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}