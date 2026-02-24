"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Registration() {
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
            Registration <span style={{ color: "#ef4444" }}>& Recognition</span>
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
          className="rounded-3xl overflow-hidden"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(226,232,240,1)",
            boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
          }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[300px] lg:min-h-[460px]">
              <img src="/photo1.png" alt="Student" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(0,0,0,0.35),transparent)" }} />
            </div>

            <div
              className="p-8 lg:p-12"
              style={{
                background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
                borderLeft: "1px solid rgba(203,213,225,0.8)",
              }}
            >
              <h1 className="font-light leading-tight mb-1 text-slate-700" style={{ fontSize: "clamp(30px,4vw,52px)" }}>
                Registration
              </h1>
              <h2 className="font-black leading-tight mb-8" style={{ color: "#ef4444", fontSize: "clamp(26px,3.2vw,44px)" }}>
                & Recognition
              </h2>

              <div className="space-y-10">
                <div className="flex items-start gap-3">
                  <ChevronRight size={16} className="mt-1 text-red-400 flex-shrink-0" />
                  <p className="text-lg leading-relaxed text-slate-700">
                    Government of India NCT of Delhi
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight size={16} className="mt-1 text-red-400 flex-shrink-0" />
                  <p className="text-lg leading-relaxed text-slate-700">
                    NITI AAYOG - National Institution Transforming India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-10" style={{ background: "#f8fafc" }}>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="mx-auto w-44 h-44 rounded-full p-1.5" style={{ border: "4px solid #dc2626" }}>
                <div className="w-full h-full rounded-full overflow-hidden border-4" style={{ borderColor: "#d4af37" }}>
                  <img src="/photo.png" alt="Recognition" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="mx-auto w-44 h-44 rounded-full p-1.5" style={{ border: "4px solid #dc2626" }}>
                <div className="w-full h-full rounded-full overflow-hidden border-4" style={{ borderColor: "#d4af37" }}>
                  <img src="/photo3.png" alt="Accredited" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
