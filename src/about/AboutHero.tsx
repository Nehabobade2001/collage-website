
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Lightbulb, Globe, Users, Award, TrendingUp, BookOpen, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <>
      {/* ── HERO BANNER ── */}
      <div className="relative  w-full overflow-hidden" style={{ minHeight: 280 }}>
        {/* Light base */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #fffdf6 0%, #fff7e8 45%, #fefaf0 100%)",
          }}
        />

        {/* Generated abstract image layer */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 420' preserveAspectRatio='none'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23fff7e6'/%3E%3Cstop offset='100%25' stop-color='%23fffdf5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='1600' height='420'/%3E%3Cpath d='M0 278 C 250 220, 420 340, 700 282 C 980 224, 1185 342, 1600 248 L1600 420 L0 420 Z' fill='%23f6e2b8' fill-opacity='0.55'/%3E%3Cpath d='M0 315 C 230 260, 470 372, 770 322 C 1045 277, 1278 360, 1600 306 L1600 420 L0 420 Z' fill='%23ecd09a' fill-opacity='0.45'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Neutral soft glows */}
        <div
          className="absolute -top-20 left-[-80px] w-[360px] h-[360px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(234,179,8,0.2) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        <div
          className="absolute -bottom-24 right-[-60px] w-[320px] h-[320px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(217,119,6,0.14) 0%, transparent 72%)",
            filter: "blur(6px)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to bottom, transparent, #f8fafc)" }}
        />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-24" style={{ minHeight: 280 }}>
          {/* Top label */}
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* <span className="h-px bg-red-500 block w-8" />
            <span
              className="text-[10px] font-black uppercase tracking-[0.3em]"
              style={{ color: "rgba(15,23,42,0.55)" }}
            >
              AIIMES
            </span>
            <span className="h-px bg-red-500 block w-8" /> */}
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="font-black text-slate-900 leading-tight mb-5"
            style={{ fontSize: "clamp(20px, 10vw, 40px)", letterSpacing: "0.06em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ABOUT US
          </motion.h1>

          {/* Red underline */}
          <motion.div
            className="h-1 rounded-full mb-6"
            style={{ background: "linear-gradient(90deg, transparent, #dc2626, transparent)" }}
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          />

          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-[12px] font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Link
              to="/"
              className="flex items-center gap-1.5 transition-colors hover:text-red-400"
              style={{ color: "rgba(15,23,42,0.6)" }}
            >
              <Home size={12} />
              Home
            </Link>
            <ChevronRight size={12} style={{ color: "rgba(100,116,139,0.45)" }} />
            <span className="text-red-400">About Us</span>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN ABOUT SECTION ── */}
      <section className="relative overflow-hidden" style={{ background: "#f8fafc" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div
          className="absolute top-0  left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle,rgba(220,38,38,0.08) 0%,transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        <div ref={ref} className="relative w-full px-4 sm:px-8 md:px-20 lg:px-32 pt-12 sm:pt-20 md:pt-28 pb-20">
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
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">About AIIMES</span>
              <motion.span
                className="h-px bg-red-600"
                initial={{ width: 0 }}
                animate={inView ? { width: 32 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </motion.div>

            <motion.h2
              className="font-black text-slate-900 font-black text-gray-900 leading-tight text-4xl sm:text-5xl md:text-7xl mb-4 leading-tight mb-4"
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
                className="rounded-3xl p-6 md:p-8"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(226,232,240,1)",
                  boxShadow: "0 8px 30px rgba(15,23,42,0.06)",
                }}
              >
                <p className="text-base leading-[1.8] mb-5 text-slate-700">
                  <span className="text-slate-900 md:text-[16px] font-bold">
                    All India Institute of Management & Engineering Studies (AIIMES)
                  </span>{" "}
                  has emerged as one of India's most trusted and progressive institutions in the field of distance and online higher education — serving learners across the nation and globe since 2009.
                </p>
                <p className="leading-[1.85] md:text-[16px] text-slate-600">
                  For over{" "}
                  <span className="text-red-600 font-bold">16 glorious years</span>, AIIMES has been dedicated to transforming the lives of working professionals, entrepreneurs, and lifelong learners by providing flexible, affordable, and globally relevant educational programs.
                </p>
              </div>

              <div
                className="relative rounded-3xl p-6 md:p-8 overflow-hidden"
                style={{
                  background: "#fff5f5",
                  border: "1px solid rgba(254,202,202,1)",
                  boxShadow: "0 8px 24px rgba(220,38,38,0.08)",
                }}
              >
                <p className="relative text-lg font-bold italic leading-relaxed text-slate-800">
                  Education is not about degrees — it's about{" "}
                  <span className="text-red-600 not-italic font-black">direction</span>,{" "}
                  <span className="text-red-600 not-italic font-black">development</span>, and{" "}
                  <span className="text-red-600 not-italic font-black">destiny</span>.
                </p>
                <p className="text-xs uppercase tracking-[0.2em] mt-4 text-slate-500">— AIIMES Core Philosophy</p>
              </div>

              <div
                className="rounded-3xl p-6"
                style={{ background: "#ffffff", border: "1px solid rgba(226,232,240,1)" }}
              >
                <p className="text-sm md:text-[16px] leading-[1.85] text-slate-600">
                  With a strong network of{" "}
                  <span className="text-slate-900 font-bold">10,000+ alumni</span> across India and abroad, AIIMES graduates are proudly contributing to reputed multinational corporations, government organizations, and entrepreneurial ventures.
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
                    <div
                      className="font-black text-red-600 leading-none mb-1.5"
                      style={{ fontSize: "clamp(22px,2.5vw,28px)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <div
                className="flex-1 rounded-3xl p-6 bg-white"
                style={{ border: "1px solid rgba(226,232,240,1)" }}
              >
                <p className="text-[10px] uppercase tracking-[0.22em] md:text-[14px] font-black mb-5 text-red-600">Why AIIMES?</p>
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
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-red-600"
                      style={{ background: "#fee2e2" }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-[12px] font-semibold text-slate-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── VISION & MISSION ── */}
        <div ref={missionRef} className="relative w-full px-4 sm:px-8 md:px-20 lg:px-32 py-10">
          <div className="text-center mb-14">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={missionInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="h-px bg-red-600"
                initial={{ width: 0 }}
                animate={missionInView ? { width: 32 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">Our Foundation</span>
              <motion.span
                className="h-px bg-red-600"
                initial={{ width: 0 }}
                animate={missionInView ? { width: 32 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </motion.div>

            <motion.h2
              className="font-black font-black text-gray-900 leading-tight text-4xl sm:text-5xl md:text-7xl mb-4 text-slate-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              Vision & <span style={{ color: "#ef4444" }}>Mission</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl overflow-hidden bg-white"
              style={{ border: "1px solid rgba(226,232,240,1)", boxShadow: "0 8px 30px rgba(15,23,42,0.06)" }}
            >
              <div
                className="h-1 w-full"
                style={{ background: "linear-gradient(90deg,#dc2626,#ef4444 50%,transparent)" }}
              />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-7">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0"
                    style={{ background: "#fee2e2" }}
                  >
                    <Eye size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-xl   md:text-3xl tracking-tight leading-none">Vision</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-slate-500">Where we're headed</p>
                  </div>
                </div>
                <div className="space-y-5 ">
                  {[
                    "Each centre would provide world class distance education for overall personality development, excellent infrastructure research, modern skills as well as best practical knowledge at an affordable price.",
                    "To serve the society by establishing centres of learning across the globe, where young minds will be imparting knowledge by our expert academicians and industrial personnel.",
                  ].map((para, i) => (
                    <div key={i} className="flex gap-3">
                      <div
                        className="w-1 flex-shrink-0 mt-1.5 rounded-full self-stretch"
                        style={{ background: i === 0 ? "rgba(220,38,38,0.5)" : "rgba(148,163,184,0.35)" }}
                      />
                      <p className="text-sm leading-[1.85] text-slate-600 md:text-[16px]">{para}</p>
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

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="rounded-3xl overflow-hidden bg-white"
              style={{ border: "1px solid rgba(226,232,240,1)", boxShadow: "0 8px 30px rgba(15,23,42,0.06)" }}
            >
              <div
                className="h-1 w-full"
                style={{ background: "linear-gradient(90deg,transparent,#ef4444 50%,#dc2626)" }}
              />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-7">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0"
                    style={{ background: "#fee2e2" }}
                  >
                    <Target size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-xl tracking-tight   md:text-3xl leading-none">Mission</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-slate-500">How we get there</p>
                  </div>
                </div>
                <p className="text-sm leading-[1.85]md:text-[16px] mb-5 text-slate-600">
                  AIIMES is committed to provide{" "}
                  <span className="text-slate-900 md:text-[16px] font-semibold">high quality management education</span> through distance learning across the globe. The key benefit is its flexibility of learning anytime, anywhere.
                </p>
                <p className="text-sm leading-[1.85] mb-5 md:text-[16px] text-slate-600">
                  The curriculum combines latest academic knowledge with international competence. At AIIMES we dedicate our intellectual resources for advancing the frontiers of business knowledge and education for future leaders.
                </p>
                <p className="text-sm leading-[1.85] md:text-[16px] text-slate-600">
                  In a global, culturally diverse and technology advanced social arena, characterized by rapid change and complex interdependencies, we aim to{" "}
                  <span className="text-red-600 font-semibold md:text-[16px]">empower business and their leaders</span> to understand and address the far-reaching changes affecting the world.
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

          {/* Commitment bar */}
          <motion.div
            className="mt-6 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between bg-white"
            style={{ border: "1px solid rgba(226,232,240,1)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0"
                style={{ background: "#fee2e2" }}
              >
                <Lightbulb size={22} />
              </div>
              <div>
                <div className="font-black text-slate-900 md:text-[20px] text-base leading-tight">Our Commitment</div>
                <p className="text-sm mt-0.5 md:text-[16px] text-slate-600">
                  Making quality higher education accessible to everyone, anywhere in the world.
                </p>
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
    </>
  );
}
