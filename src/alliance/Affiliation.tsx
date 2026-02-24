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
    <section className="relative py-24 overflow-hidden" style={{ background: "#060606" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
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
            className="font-black text-white leading-tight mb-3"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl p-8 lg:p-12"
          style={{
            background: "linear-gradient(180deg,#f3f4f6 0%,#ececec 100%)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {affiliations.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.18 }}
                className="rounded-2xl min-h-[220px] p-6 flex flex-col items-center justify-center text-center"
                style={{
                  background: "rgba(255,255,255,0.86)",
                  border: "1px solid rgba(209,213,219,0.8)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                <div className="h-[72px] flex items-center justify-center mb-4">
                  <img src={item.logo} alt={item.title} className="max-h-[72px] w-auto object-contain" />
                </div>
                <p className="text-[16px] leading-snug text-gray-700 max-w-[310px]">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
