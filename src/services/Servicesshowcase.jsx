import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { servicesData, serviceLinks } from "./servicesData";
import { useService } from "../context/ServiceContext";

export default function ServicesShowcase() {
  const { activeServiceId, setActiveServiceId } = useService();

  const handleToggle = (id) => {
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop) {
      setActiveServiceId(id);
    } else {
      setActiveServiceId((prev) => (prev === id ? null : id));
    }
  };

  // Fixed: activeId -> activeServiceId
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && activeServiceId === null) {
        setActiveServiceId(serviceLinks[0].id);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeServiceId]);

  const active = servicesData[activeServiceId];

  return (
    <div
      className="w-full min-h-screen"
      style={{
        "--ink": "#0A0F1C",
        "--panel": "#111A2C",
        "--panel-raised": "#152036",
        "--line": "#233152",
        "--fog": "#8592AA",
        "--white": "#EAF0FB",
        "--signal": "#5EEAD4",
        "--amber": "#F5B84E",
        background: "var(--ink)",
        color: "var(--white)",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-0">
        <div className="py-8">
          <h1 className="text-4xl font-semibold">What we build</h1>
        </div>

        {/* --- MOBILE VIEW: Accordion --- */}
        <div className="lg:hidden flex flex-col gap-4 pb-8">
          {serviceLinks.map((s) => {
            const isOpen = activeServiceId === s.id; // Fixed: activeId -> activeServiceId
            const data = servicesData[s.id];
            return (
              <div key={s.id} className="border rounded-2xl overflow-hidden" style={{ borderColor: "var(--line)" }}>
                <button
                  onClick={() => handleToggle(s.id)}
                  className="w-full flex items-center justify-between p-5 bg-[var(--panel-raised)]"
                >
                  <span className="font-medium">{s.label}</span>
                </button>
                
                {isOpen && (
                  <div className="bg-[var(--panel)] border-t" style={{ borderColor: "var(--line)" }}>
                    <div className="h-48 w-full">
                      <img src={data.icon} alt={data.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
                      <p className="text-[var(--signal)] mb-4">{data.tagline}</p>
                      <p className="text-[var(--fog)] mb-6 text-sm leading-relaxed">{data.description}</p>
                      <div className="text-[var(--amber)] font-bold mb-4">Metric: {data.metric}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --- DESKTOP VIEW: Sidebar Layout --- */}
        <div className="hidden lg:grid grid-cols-[300px_1fr] gap-8 pb-10">
          <nav className="flex flex-col gap-2">
            {serviceLinks.map((s) => {
              const isActive = s.id === activeServiceId; // Fixed: activeId -> activeServiceId
              const data = servicesData[s.id];
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveServiceId(s.id)} // Fixed: setActiveId -> setActiveServiceId
                  className="flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all border"
                  style={{
                    background: isActive ? "var(--panel-raised)" : "transparent",
                    borderColor: isActive ? "var(--signal)" : "var(--line)",
                  }}
                >
                  <img src={data.icon} alt="" className="w-5 h-5" />
                  <span className="text-sm font-medium">{s.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="rounded-3xl border overflow-hidden" style={{ background: "var(--panel)", borderColor: "var(--line)" }}>
            {active ? (
              <>
                <div className="h-64 relative border-b" style={{ borderColor: "var(--line)" }}>
                  <img src={active.icon} alt={active.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-transparent to-transparent opacity-90"></div>
                </div>
                <div className="p-10">
                  <h2 className="text-4xl font-bold mb-4">{active.title}</h2>
                  <p className="text-lg mb-6 text-[var(--signal)]">{active.tagline}</p>
                  <p className="text-base mb-10 text-[var(--fog)]">{active.description}</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-2xl border p-6" style={{ borderColor: "var(--line)" }}>
                      <ul className="flex flex-col gap-4">
                        {active.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm">
                            <Check size={18} style={{ color: "var(--signal)" }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border p-6 flex flex-col justify-center" style={{ background: "var(--panel-raised)", borderColor: "var(--line)" }}>
                      <span className="text-[10px] uppercase text-[var(--fog)]">Impact Metric</span>
                      <div className="text-3xl font-bold text-[var(--amber)]">{active.metric}</div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}