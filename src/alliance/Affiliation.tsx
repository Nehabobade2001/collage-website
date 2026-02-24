"use client";

import { motion } from "framer-motion";

export default function Affiliation() {
  const affiliations = [
    {
      title: "Ministry of Labour & Employment, Government of India",
      logo: "/ministry.png",
    },
    {
      title: "Ministry of Directorate General of Training",
      logo: "/dgt.png",
    },
    {
      title: "Ministry of Micro, Small and Medium Enterprises (MSME)",
      logo: "/msme.png",
    },
    {
      title: "Govt. of India Regd.",
      logo: "/aiimes-regd.jpg",
    },
    {
      title: "Skill India",
      logo: "/skill-india.png",
    },
    {
      title: "DAC (Distance Accreditation Council)",
      logo: "/dac-logo.jpeg",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#f8fafc" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative w-full px-6 lg:px-20">
        <div className="text-center mb-14">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              className="h-px bg-red-600"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">Alliance</span>
            <motion.span
              className="h-px bg-red-600"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </motion.div>

          <motion.h2
            className="font-black text-slate-900 leading-tight mb-3"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.025em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            Affili<span style={{ color: "#ef4444" }}>ation</span>
          </motion.h2>

          <motion.div
            className="h-px mx-auto mt-5"
            style={{ width: 48, background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {affiliations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4, boxShadow: "0 10px 26px rgba(15,23,42,0.14)" }}
              className="relative rounded-2xl min-h-[220px] p-6 flex flex-col items-center justify-center text-center overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(226,232,240,1)",
                boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg,#ef4444,transparent)" }} />
              <div className="h-[72px] flex items-center justify-center mb-4">
                <img src={item.logo} alt={item.title} className="max-h-[72px] w-auto object-contain" />
              </div>
              <p className="text-[16px] leading-snug text-gray-700 max-w-[310px]">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
