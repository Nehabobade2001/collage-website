"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Lightbulb, Globe, Users, Award, TrendingUp, BookOpen } from "lucide-react";

const stats = [
  { value: "2009", label: "Established" },
  { value: "16+", label: "Years of Excellence" },
  { value: "10K+", label: "Alumni Network" },
  { value: "Global", label: "Reach" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const missionRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden" style={{ background: "#f8fafc" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(220,38,38,0.08) 0%,transparent 65%)", filter: "blur(60px)" }}
      />

      <div ref={ref} className="relative w-full px-20 md:px-32 pt-24 pb-20">
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              className="h-px bg-red-600"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <span className="text-red-500 text-[10px]  font-black uppercase tracking-[0.28em]">About AIIMES</span>
            <motion.span
              className="h-px bg-red-600"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </motion.div>

          <motion.h2
            className="font-black text-slate-900 leading-tight mb-4"
            
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)", letterSpacing: "0.02em" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Shaping Futures Since <span style={{ color: "#ef4444" }}>2009</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mb-12">
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(226,232,240,1)",
                boxShadow: "0 8px 30px rgba(15,23,42,0.06)",
              }}
            >
              <p className="text-base leading-[1.8] mb-5 text-slate-700">
                <span className="text-slate-900 font-bold">All India Institute of Management & Engineering Studies (AIIMES)</span> has emerged as one of India's most trusted and progressive institutions in the field of distance and online higher education — serving learners across the nation and globe since 2009.
              </p>
              <p className="text-sm leading-[1.85] text-slate-600">
                For over <span className="text-red-600 font-bold">16 glorious years</span>, AIIMES has been dedicated to transforming the lives of working professionals, entrepreneurs, and lifelong learners by providing flexible, affordable, and globally relevant educational programs.
              </p>
            </div>

            <div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: "#fff5f5",
                border: "1px solid rgba(254,202,202,1)",
                boxShadow: "0 8px 24px rgba(220,38,38,0.08)",
              }}
            >
              <p className="relative text-lg font-bold italic leading-relaxed text-slate-800">
                Education is not about degrees — it's about <span className="text-red-600 not-italic font-black">direction</span>, <span className="text-red-600 not-italic font-black">development</span>, and <span className="text-red-600 not-italic font-black">destiny</span>.
              </p>
              <p className="text-xs uppercase tracking-[0.2em] mt-4 text-slate-500">— AIIMES Core Philosophy</p>
            </div>

            <div
              className="rounded-3xl p-6"
              style={{ background: "#ffffff", border: "1px solid rgba(226,232,240,1)" }}
            >
              <p className="text-sm leading-[1.85] text-slate-600">
                With a strong network of <span className="text-slate-900 font-bold">10,000+ alumni</span> across India and abroad, AIIMES graduates are proudly contributing to reputed multinational corporations, government organizations, and entrepreneurial ventures.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -3, borderColor: "rgba(220,38,38,0.3)" }}
                  transition={{ duration: 0.18 }}
                  className="rounded-2xl p-5 text-center bg-white"
                  style={{ border: "1px solid rgba(226,232,240,1)" }}
                >
                  <div className="font-black text-red-600 leading-none mb-1.5" style={{ fontSize: "clamp(22px,2.5vw,28px)" }}>
                    {s.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex-1 rounded-3xl p-6 bg-white" style={{ border: "1px solid rgba(226,232,240,1)" }}>
              <p className="text-[10px] uppercase tracking-[0.22em] font-black mb-5 text-slate-500">Why AIIMES?</p>
              {[
                { icon: <Globe size={14} />, text: "Global reach with India-rooted values" },
                { icon: <BookOpen size={14} />, text: "Flexible distance & online programs" },
                { icon: <TrendingUp size={14} />, text: "Practical, industry-focused curriculum" },
                { icon: <Users size={14} />, text: "10,000+ strong alumni community" },
                { icon: <Award size={14} />, text: "UGC & Govt. of India recognised" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 py-2.5"
                  style={{ borderBottom: i < 4 ? "1px solid rgba(226,232,240,1)" : "none" }}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-red-600" style={{ background: "#fee2e2" }}>
                    {item.icon}
                  </div>
                  <span className="text-[12px] font-semibold text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div ref={missionRef} className="relative  w-full px-20 md:px-32 px-6 py-10">
        <div className="text-center mb-14">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={missionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <motion.span className="h-px bg-red-600" initial={{ width: 0 }} animate={missionInView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">Our Foundation</span>
            <motion.span className="h-px bg-red-600" initial={{ width: 0 }} animate={missionInView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
          </motion.div>

          <motion.h2
            className="font-black text-slate-900 leading-tight"
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)", letterSpacing: "0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            Vision & <span style={{ color: "#ef4444" }}>Mission</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden bg-white"
            style={{ border: "1px solid rgba(226,232,240,1)", boxShadow: "0 8px 30px rgba(15,23,42,0.06)" }}
          >
            <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#dc2626,#ef4444 50%,transparent)" }} />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0" style={{ background: "#fee2e2" }}>
                  <Eye size={22} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-xl tracking-tight leading-none">Vision</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-slate-500">Where we're headed</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  "Each centre would provide world class distance education for overall personality development, excellent infrastructure research, modern skills as well as best practical knowledge at an affordable price.",
                  "To serve the society by establishing centres of learning across the globe, where young minds will be imparting knowledge by our expert academicians and industrial personnel.",
                ].map((para, i) => (
                  <div key={i} className="flex gap-3">
                    <div
                      className="w-1 flex-shrink-0 mt-1.5 rounded-full self-stretch"
                      style={{ background: i === 0 ? "rgba(220,38,38,0.5)" : "rgba(148,163,184,0.35)" }}
                    />
                    <p className="text-sm leading-[1.85] text-slate-600">{para}</p>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: "#fff1f2", border: "1px solid rgba(220,38,38,0.2)" }}
              >
                <Globe size={10} className="text-red-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600">World Class Education</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="rounded-3xl overflow-hidden bg-white"
            style={{ border: "1px solid rgba(226,232,240,1)", boxShadow: "0 8px 30px rgba(15,23,42,0.06)" }}
          >
            <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,transparent,#ef4444 50%,#dc2626)" }} />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0" style={{ background: "#fee2e2" }}>
                  <Target size={22} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-xl tracking-tight leading-none">Mission</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-slate-500">How we get there</p>
                </div>
              </div>
              <p className="text-sm leading-[1.85] mb-5 text-slate-600">
                AIIMES is committed to provide <span className="text-slate-900 font-semibold">high quality management education</span> through distance learning across the globe. The key benefit is its flexibility of learning anytime, anywhere.
              </p>
              <p className="text-sm leading-[1.85] mb-5 text-slate-600">
                The curriculum combines latest academic knowledge with international competence. At AIIMES we dedicate our intellectual resources for advancing the frontiers of business knowledge and education for future leaders.
              </p>
              <p className="text-sm leading-[1.85] text-slate-600">
                In a global, culturally diverse and technology advanced social arena, characterized by rapid change and complex interdependencies, we aim to <span className="text-red-600 font-semibold">empower business and their leaders</span> to understand and address the far-reaching changes affecting the world.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-2">
                {["Flexible", "Global", "Future-Ready"].map((tag) => (
                  <div
                    key={tag}
                    className="text-center py-2 rounded-xl text-[10px] font-black uppercase tracking-wider"
                    style={{ color: "#64748b", background: "#f8fafc", border: "1px solid rgba(226,232,240,1)" }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between bg-white"
          style={{ border: "1px solid rgba(226,232,240,1)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0" style={{ background: "#fee2e2" }}>
              <Lightbulb size={22} />
            </div>
            <div>
              <div className="font-black text-slate-900 text-base leading-tight">Our Commitment</div>
              <p className="text-sm mt-0.5 text-slate-600">Making quality higher education accessible to everyone, anywhere in the world.</p>
            </div>
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(220,38,38,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-[12px] text-white uppercase tracking-wide flex-shrink-0"
            style={{
              background: "linear-gradient(135deg,#ef4444,#b91c1c)",
              boxShadow: "0 4px 18px rgba(220,38,38,0.3)",
              border: "1px solid rgba(220,38,38,0.4)",
            }}
          >
            Explore Programs
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
