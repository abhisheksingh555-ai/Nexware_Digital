import React, { useState, useRef } from 'react';

const blueprints = {
  ai: {
    title: "AI & Data Engineering Pipeline",
    description: "High-throughput data ingestion channels engineered for predictive models and deep learning deployments.",
    nodes: ["Data Ingestion", "Vector Database", "Model Training", "Edge Inference API"],
    metrics: { speed: "12ms avg latency", load: "Up to 45TB/day", security: "AES-256 E2EE" },
    glow: "#818cf8"
  },
  ecommerce: {
    title: "Global E-Commerce Engine",
    description: "Multi-region distributed infrastructure designed to scale down to zero and handle massive flash-sale spikes.",
    nodes: ["Edge Cache CDN", "Distributed DB Cluster", "Payment Gateway Proxy", "Inventory Broker"],
    metrics: { speed: "99.99% Guaranteed Uptime", load: "120k requests/sec", security: "PCI-DSS Level 1 compliant" },
    glow: "#34d399"
  },
  saas: {
    title: "Enterprise B2B SaaS Layer",
    description: "Secure, multi-tenant workspace architecture built for isolated workspace execution environments.",
    nodes: ["Auth Session Manager", "Multi-Tenant App Core", "Background Workers", "Real-time Event Bus"],
    metrics: { speed: "Instant state updates", load: "Sub-second sync matrices", security: "SOC2 Type II Isolation" },
    glow: "#f472b6"
  }
};

export default function ClientStackVisualizer() {
  const [activeTab, setActiveTab] = useState('ai');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const boardRef = useRef(null);
  const activeData = blueprints[activeTab];

  const handleMouseMove = (e) => {
    const el = boardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 14 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <>
      <style>{`
        .csv-root {
          background:
            radial-gradient(60% 50% at 15% 10%, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0) 70%),
            radial-gradient(50% 40% at 90% 90%, rgba(244,114,182,0.06) 0%, rgba(244,114,182,0) 70%),
            #030712;
          padding: 64px 48px 88px 48px;
          font-family: 'Inter', sans-serif;
          position: relative;
          width: 100%;
          box-sizing: border-box;
          perspective: 1600px;
          overflow: hidden;
        }
        .csv-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(60% 60% at 50% 30%, #000 0%, transparent 75%);
          pointer-events: none;
        }
        .csv-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 968px) {
          .csv-container { grid-template-columns: 1fr; gap: 40px; }
          .csv-root { padding: 40px 24px 56px 24px; }
        }

        .csv-left { display: flex; flex-direction: column; gap: 24px; }
        .csv-title {
          font-family: 'Syne', sans-serif;
          font-size: 38px;
          font-weight: 800;
          color: #fff;
          line-height: 1.18;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .csv-subtitle {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          margin: -8px 0 4px 0;
          max-width: 420px;
        }

        .csv-tabs { display: flex; flex-direction: column; gap: 12px; }
        .csv-tab-btn {
          background: linear-gradient(180deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.005) 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 18px 20px;
          border-radius: 14px;
          text-align: left;
          cursor: pointer;
          outline: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease;
        }
        .csv-tab-btn h4 { font-size: 15px; font-weight: 600; color: #9ca3af; margin: 0 0 4px 0; transition: color 0.3s ease; }
        .csv-tab-btn p { font-size: 13px; color: #5b6472; margin: 0; line-height: 1.45; transition: color 0.3s ease; }

        .csv-tab-btn:hover {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.035);
          border-color: rgba(255, 255, 255, 0.12);
        }
        .csv-tab-btn.active {
          background: linear-gradient(120deg, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0.02) 100%);
          border-color: rgba(129, 140, 248, 0.4);
          box-shadow: 0 8px 24px -8px rgba(99,102,241,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
          transform: translateX(4px);
        }
        .csv-tab-btn.active h4 { color: #a5b4fc; }
        .csv-tab-btn.active p { color: #9ca3af; }
        .csv-tab-btn.active::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #818cf8, #c084fc);
          box-shadow: 0 0 12px #818cf8;
        }

        /* 3D Engine Board */
        .csv-right-wrap { transform-style: preserve-3d; }
        .csv-right {
          background:
            linear-gradient(150deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0) 35%),
            radial-gradient(120% 100% at 0% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 60%),
            #0a0e1a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out, box-shadow 0.4s ease;
          box-shadow:
            0 50px 100px -20px rgba(0,0,0,0.85),
            0 20px 40px -15px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .csv-right::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, var(--glow, #818cf8) 0%, transparent 35%, transparent 65%, var(--glow, #818cf8) 100%);
          opacity: 0.35;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .csv-right::after {
          content: '';
          position: absolute;
          width: 280px;
          height: 280px;
          right: -100px;
          top: -100px;
          background: radial-gradient(circle, var(--glow, #818cf8) 0%, transparent 70%);
          opacity: 0.12;
          filter: blur(10px);
          pointer-events: none;
          transition: background 0.5s ease;
        }

        .csv-pipeline { display: flex; flex-direction: column; gap: 14px; position: relative; z-index: 2; }
        .csv-node {
          background: linear-gradient(155deg, #11162355 0%, #0b0f1955 100%);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 12px;
          padding: 16px 22px;
          color: #e5e7eb;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          animation: csvSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
          transform-style: preserve-3d;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease;
          box-shadow: 0 8px 16px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04);
          position: relative;
        }
        .csv-node:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 28px;
          bottom: -15px;
          width: 1px;
          height: 14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.18), transparent);
        }
        .csv-node:hover {
          transform: translateX(6px) translateZ(12px);
          border-color: var(--glow, #818cf8);
          box-shadow: 0 14px 28px -10px rgba(0,0,0,0.6), 0 0 20px -6px var(--glow, #818cf8);
        }
        .csv-node-left { display: flex; align-items: center; gap: 10px; }
        .csv-node-index {
          font-size: 10px;
          color: #4b5563;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.05em;
        }
        .csv-node-status {
          width: 7px;
          height: 7px;
          background: var(--glow, #10b981);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--glow, #10b981), 0 0 2px var(--glow, #10b981);
          animation: csvPulse 2.2s ease-in-out infinite;
        }

        .csv-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          padding-top: 24px;
          margin-top: 28px;
          position: relative;
          z-index: 2;
        }
        .csv-metric-card { display: flex; flex-direction: column; gap: 4px; }
        .csv-metric-card span:nth-child(1) {
          font-size: 10px;
          text-transform: uppercase;
          color: #4b5563;
          letter-spacing: 0.07em;
          font-weight: 600;
        }
        .csv-metric-card span:nth-child(2) {
          font-size: 13.5px;
          color: #d1d5db;
          font-weight: 600;
          background: linear-gradient(90deg, #fff, var(--glow, #818cf8));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes csvSlideIn {
          from { opacity: 0; transform: translateY(14px) translateZ(0); }
          to { opacity: 1; transform: translateY(0) translateZ(0); }
        }
        @keyframes csvPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.85); }
        }

        @media (prefers-reduced-motion: reduce) {
          .csv-node, .csv-tab-btn, .csv-right { animation: none !important; transition: none !important; }
          .csv-node-status { animation: none !important; }
        }
      `}</style>

      <section className="csv-root">
        <div className="csv-container">

          <div className="csv-left">
            <h3 className="csv-title">Engineered to handle your heaviest payloads</h3>
            <p className="csv-subtitle">{activeData.description}</p>

            <div className="csv-tabs">
              <button className={`csv-tab-btn ${activeTab === 'ai' ? 'active' : ''}`} onClick={() => setActiveTab('ai')}>
                <h4>Data Ecosystems</h4>
                <p>Vector node arrays mapping predictive pipelines.</p>
              </button>
              <button className={`csv-tab-btn ${activeTab === 'ecommerce' ? 'active' : ''}`} onClick={() => setActiveTab('ecommerce')}>
                <h4>Global Edge Scaling</h4>
                <p>Distributed real-time ledger transactional arrays.</p>
              </button>
              <button className={`csv-tab-btn ${activeTab === 'saas' ? 'active' : ''}`} onClick={() => setActiveTab('saas')}>
                <h4>Multi-Tenant Core</h4>
                <p>Isolated token authentication secure loops.</p>
              </button>
            </div>
          </div>

          <div className="csv-right-wrap">
            <div
              className="csv-right"
              ref={boardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              style={{
                '--glow': activeData.glow,
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
              }}
            >
              <div className="csv-pipeline">
                {activeData.nodes.map((node, index) => (
                  <div key={`${activeTab}-${index}`} className="csv-node" style={{ animationDelay: `${index * 0.08}s` }}>
                    <div className="csv-node-left">
                      <span className="csv-node-index">{String(index + 1).padStart(2, '0')}</span>
                      <span>{node}</span>
                    </div>
                    <div className="csv-node-status" />
                  </div>
                ))}
              </div>

              <div className="csv-metrics">
                <div className="csv-metric-card">
                  <span>Latency Spec</span>
                  <span>{activeData.metrics.speed}</span>
                </div>
                <div className="csv-metric-card">
                  <span>Network Capacity</span>
                  <span>{activeData.metrics.load}</span>
                </div>
                <div className="csv-metric-card">
                  <span>Security Shield</span>
                  <span>{activeData.metrics.security}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}