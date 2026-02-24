// "use client";
// import { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";

// const stats = [
//   { value: "16+", label: "Years of Excellence" },
//   { value: "10K+", label: "Alumni Worldwide" },
//   { value: "2009", label: "Established" },
//   { value: "UGC", label: "Recognised" },
// ];

// const tabs = [
//   {
//     id: "about",
//     label: "About Us",
//     content: {
//       heading: "Transforming Lives Through Education",
//       paragraphs: [
//         "Established in 2009, All India Institute of Management & Engineering Studies (AIIMES) has emerged as one of India's most trusted and progressive institutions in the field of distance and online higher education.",
//         "For over 16 glorious years, AIIMES has been dedicated to transforming the lives of working professionals, entrepreneurs, and lifelong learners by providing flexible, affordable, and globally relevant educational programs.",
//         "With a strong network of 10,000+ alumni across India and abroad, AIIMES graduates are proudly contributing to reputed multinational corporations, government organizations, and entrepreneurial ventures.",
//         "At AIIMES, we believe that education is not about degrees — it's about direction, development, and destiny.",
//       ],
//     },
//   },
//   {
//     id: "mission",
//     label: "Our Mission",
//     content: {
//       heading: "Bridging Knowledge & Opportunity",
//       paragraphs: [
//         "At AIIMES, our mission is to provide high-quality, flexible, and globally recognized management and professional education through distance learning. We aim to bridge the gap between knowledge and opportunity by offering programs that empower learners to study anytime, anywhere—without compromising on quality.",
//         "We are committed to designing a curriculum that integrates the latest academic insights with practical, industry-relevant applications, ensuring our learners develop the competence, confidence, and creativity required to excel in a competitive global environment.",
//         "Our mission extends beyond imparting education; we seek to cultivate leaders, innovators, and responsible professionals who are capable of driving meaningful change.",
//       ],
//     },
//   },
//   {
//     id: "vision",
//     label: "Our Vision",
//     content: {
//       heading: "Redefining Learning Globally",
//       paragraphs: [
//         "Our vision is to serve society by establishing centers of learning across the globe, where young minds are nurtured with knowledge imparted by expert academicians and industry professionals.",
//         "Each center will provide world-class education focused on holistic personality development, supported by excellent infrastructure, research opportunities, and modern skill development.",
//         "We aspire to blend academic excellence with practical knowledge, ensuring that learners are prepared to meet real-world challenges with competence and confidence. By offering high-quality education at an affordable cost, AIIMES is dedicated to creating opportunities that are inclusive, transformative, and impactful for individuals and communities worldwide.",
//       ],
//     },
//   },
// ];

// const highlights = [
//   {
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
//       </svg>
//     ),
//     text: "UGC Recognised Programs",
//   },
//   {
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//       </svg>
//     ),
//     text: "Study Anytime, Anywhere",
//   },
//   {
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
//       </svg>
//     ),
//     text: "10,000+ Strong Alumni Network",
//   },
//   {
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//       </svg>
//     ),
//     text: "Industry-Relevant Curriculum",
//   },
// ];

// export default function AboutSection() {
//   const sectionRef = useRef(null);
//   const inView = useInView(sectionRef, { once: true, margin: "-60px" });
//   const [activeTab, setActiveTab] = useState("about");

//   const active = tabs.find((t) => t.id === activeTab)!;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-white overflow-hidden py-28"
//     >
//       {/* Dot grid */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//           opacity: 0.35,
//         }}
//       />

//       {/* Red glow top-left */}
//       <div
//         className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
//         style={{
//           background: "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 65%)",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 md:px-12">

//         {/* ── EYEBROW ── */}
//         <motion.div
//           className="flex items-center gap-3 mb-5"
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.45 }}
//         >
//           <motion.span
//             className="h-px bg-red-600 block"
//             initial={{ width: 0 }}
//             animate={inView ? { width: 32 } : {}}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           />
//           <span className="text-red-600 text-xs font-black uppercase tracking-[0.25em]">
//             About AIIMES
//           </span>
//         </motion.div>

//         {/* ── MAIN LAYOUT: left col + right col ── */}
//         <div className="grid lg:grid-cols-2 gap-16 items-start">

//           {/* ── LEFT — sticky heading + stats + highlights ── */}
//           <div className="lg:sticky lg:top-24">

//             {/* Big heading */}
//             <motion.h2
//               className="font-black text-gray-900 leading-[1.05] mb-6"
//               style={{ fontSize: "clamp(36px, 4.5vw, 58px)", fontFamily: "Georgia, serif" }}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.65, delay: 0.2 }}
//             >
//               All India Institute of{" "}
//               <span className="text-red-600">Management</span> &{" "}
//               Engineering Studies
//             </motion.h2>

//             {/* Est tag */}
//             <motion.div
//               className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-red-100 bg-red-50"
//               initial={{ opacity: 0, x: -20 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
//               <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
//                 Est. 2009 · New Delhi, India
//               </span>
//             </motion.div>

//             {/* Stats row */}
//             <motion.div
//               className="grid grid-cols-2 gap-3 mb-10"
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.55, delay: 0.35 }}
//             >
//               {stats.map((s, i) => (
//                 <motion.div
//                   key={i}
//                   className="group relative rounded-2xl border border-gray-100 bg-white px-5 py-5 overflow-hidden cursor-default"
//                   style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
//                   whileHover={{ y: -3 }}
//                   transition={{ duration: 0.22 }}
//                 >
//                   {/* hover black fill */}
//                   <motion.div
//                     className="absolute inset-0 pointer-events-none"
//                     initial={{ y: "100%" }}
//                     whileHover={{ y: "0%" }}
//                     transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
//                     style={{ background: "#0a0a0a" }}
//                   />
//                   {/* Red bottom wipe */}
//                   <motion.span
//                     className="absolute bottom-0 left-0 h-0.5 bg-red-600 pointer-events-none"
//                     initial={{ width: 0 }}
//                     whileHover={{ width: "100%" }}
//                     transition={{ duration: 0.32 }}
//                   />
//                   <div
//                     className="relative z-10 font-black text-2xl text-red-600 leading-none mb-1"
//                     style={{ fontFamily: "Georgia, serif" }}
//                   >
//                     {s.value}
//                   </div>
//                   <div className="relative z-10 text-xs text-gray-400 uppercase tracking-widest font-semibold group-hover:text-gray-300 transition-colors duration-300">
//                     {s.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Highlights checklist */}
//             <motion.div
//               className="space-y-3"
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.55, delay: 0.45 }}
//             >
//               {highlights.map((h, i) => (
//                 <motion.div
//                   key={i}
//                   className="flex items-center gap-3 py-3 px-4 rounded-xl border border-gray-100 bg-white"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
//                   whileHover={{ x: 4, borderColor: "rgba(220,38,38,0.3)", backgroundColor: "#fff7f7" }}
//                 >
//                   <div className="w-9 h-9 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0"
//                     style={{ background: "rgba(220,38,38,0.07)" }}>
//                     {h.icon}
//                   </div>
//                   <span className="text-sm font-semibold text-gray-700">{h.text}</span>
//                   <svg className="ml-auto text-red-300 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                     <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* ── RIGHT — tabbed content ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.65, delay: 0.25 }}
//           >
//             {/* Tab buttons */}
//             <div className="flex gap-2 mb-8 p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className="relative flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300"
//                   style={{
//                     background: activeTab === tab.id ? "#0a0a0a" : "transparent",
//                     color: activeTab === tab.id ? "#fff" : "#9ca3af",
//                   }}
//                 >
//                   {activeTab === tab.id && (
//                     <motion.span
//                       layoutId="tab-pill"
//                       className="absolute inset-0 rounded-xl"
//                       style={{ background: "#0a0a0a" }}
//                       transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                     />
//                   )}
//                   <span className="relative z-10">{tab.label}</span>
//                 </button>
//               ))}
//             </div>

//             {/* Tab content */}
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="relative rounded-2xl border border-gray-100 bg-white overflow-hidden"
//               style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
//             >
//               {/* Red top accent */}
//               <div className="h-1 w-full bg-red-600" />

//               <div className="p-8 md:p-10">
//                 {/* Content heading */}
//                 <h3
//                   className="font-black text-gray-900 text-2xl md:text-3xl leading-snug mb-6"
//                   style={{ fontFamily: "Georgia, serif" }}
//                 >
//                   {active.content.heading}
//                 </h3>

//                 {/* Red divider */}
//                 <div className="w-12 h-1 bg-red-600 rounded-full mb-8" />

//                 {/* Paragraphs */}
//                 <div className="space-y-5">
//                   {active.content.paragraphs.map((p, i) => (
//                     <motion.p
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: i * 0.08 }}
//                       className="text-gray-600 text-sm leading-[1.85]"
//                     >
//                       {p}
//                     </motion.p>
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 <div className="flex gap-3 mt-10">
//                   <motion.button
//                     whileHover={{ scale: 1.04, y: -2 }}
//                     whileTap={{ scale: 0.97 }}
//                     className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest text-white"
//                     style={{
//                       background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
//                       boxShadow: "0 6px 24px rgba(220,38,38,0.3)",
//                     }}
//                   >
//                     Enroll Now
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                       <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   </motion.button>

//                   <motion.button
//                     whileHover={{ scale: 1.04, y: -2, borderColor: "#dc2626", color: "#dc2626" }}
//                     whileTap={{ scale: 0.97 }}
//                     className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest text-gray-500 border border-gray-200 transition-colors duration-200"
//                   >
//                     Know More
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Quote block */}
//             <motion.div
//               className="mt-6 relative pl-5 py-4"
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.6, delay: 0.7 }}
//             >
//               <motion.span
//                 className="absolute left-0 top-0 w-0.5 bg-red-600"
//                 initial={{ height: 0 }}
//                 animate={inView ? { height: "100%" } : {}}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//               />
//               <p className="text-gray-400 text-sm leading-relaxed italic">
//                 "Education is not about degrees — it's about{" "}
//                 <span className="text-red-600 font-semibold not-italic">direction</span>,{" "}
//                 <span className="text-red-600 font-semibold not-italic">development</span>, and{" "}
//                 <span className="text-red-600 font-semibold not-italic">destiny</span>."
//               </p>
//               <p className="text-gray-300 text-xs uppercase tracking-widest mt-2 font-semibold">
//                 — AIIMES Philosophy
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section className="relative overflow-hidden" style={{ background: "#060606" }}>

      {/* ── SHARED BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(220,38,38,0.09) 0%,transparent 65%)", filter: "blur(60px)" }} />
      <motion.div className="absolute bottom-40 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(220,38,38,0.06) 0%,transparent 70%)", filter: "blur(40px)" }}
        animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      {/* Vertical accent lines */}
      <div className="absolute top-0 bottom-0 left-[20%] w-px opacity-[0.04]"
        style={{ background: "linear-gradient(180deg,transparent,#dc2626 30%,#dc2626 70%,transparent)" }} />
      <div className="absolute top-0 bottom-0 right-[20%] w-px opacity-[0.03]"
        style={{ background: "linear-gradient(180deg,transparent,#dc2626 30%,#dc2626 70%,transparent)" }} />

      {/* ════════════════════════════════
          PART 1 — ABOUT OVERVIEW
      ════════════════════════════════ */}
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
            <motion.span className="h-px bg-red-600"
              initial={{ width: 0 }} animate={inView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">About AIIMES</span>
            <motion.span className="h-px bg-red-600"
              initial={{ width: 0 }} animate={inView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
          </motion.div>

          <motion.h2 className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)", letterSpacing: "-0.025em" }}
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}>
            Shaping Futures Since{" "}
            <span style={{ color: "#ef4444" }}>2009</span>
          </motion.h2>

          <motion.div className="h-px mx-auto mt-5"
            style={{ width: 48, background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }}
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }} />
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid lg:grid-cols-5 gap-6 mb-12">

          {/* LEFT — Long form text (3 cols) */}
          <motion.div className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}>

            {/* Glass card — main intro */}
            <div className="rounded-3xl p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}>
              {/* Red top accent */}
              <div className="h-px mb-6 -mx-8 -mt-8 rounded-t-3xl"
                style={{ background: "linear-gradient(90deg,transparent,rgba(220,38,38,0.5) 40%,rgba(220,38,38,0.5) 60%,transparent)" }} />

              <p className="text-base leading-[1.8] mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                <span className="text-white font-bold">All India Institute of Management & Engineering Studies (AIIMES)</span> has emerged as one of India's most trusted and progressive institutions in the field of distance and online higher education — serving learners across the nation and globe since 2009.
              </p>
              <p className="text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.4)" }}>
                For over <span className="text-red-400 font-bold">16 glorious years</span>, AIIMES has been dedicated to transforming the lives of working professionals, entrepreneurs, and lifelong learners by providing flexible, affordable, and globally relevant educational programs.
              </p>
            </div>

            {/* Quote glass card */}
            <div className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: "rgba(220,38,38,0.07)",
                border: "1px solid rgba(220,38,38,0.2)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 40px rgba(220,38,38,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}>
              {/* Giant quote mark */}
              <div className="absolute -top-4 -left-2 font-black leading-none select-none pointer-events-none"
                style={{ fontSize: 120, color: "rgba(220,38,38,0.12)" }}>"</div>
              <p className="relative text-lg font-bold italic leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Education is not about degrees — it's about{" "}
                <span className="text-red-400 not-italic font-black">direction</span>,{" "}
                <span className="text-red-400 not-italic font-black">development</span>, and{" "}
                <span className="text-red-400 not-italic font-black">destiny</span>.
              </p>
              <p className="text-xs uppercase tracking-[0.2em] mt-4" style={{ color: "rgba(255,255,255,0.2)" }}>— AIIMES Core Philosophy</p>
            </div>

            {/* Alumni text */}
            <div className="rounded-3xl p-6"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
              <p className="text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.4)" }}>
                With a strong network of <span className="text-white font-bold">10,000+ alumni</span> across India and abroad, AIIMES graduates are proudly contributing to reputed multinational corporations, government organizations, and entrepreneurial ventures — achieving outstanding career growth, promotions, and professional recognition.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Stats + badges (2 cols) */}
          <motion.div className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div key={s.label}
                  whileHover={{ y: -3, borderColor: "rgba(220,38,38,0.3)" }}
                  transition={{ duration: 0.18 }}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}>
                  <div className="font-black text-red-400 leading-none mb-1.5"
                    style={{ fontSize: "clamp(22px,2.5vw,28px)" }}>{s.value}</div>
                  <div className="text-[9px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Why AIIMES card */}
            <div className="flex-1 rounded-3xl p-6"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
              }}>
              <p className="text-[10px] uppercase tracking-[0.22em] font-black mb-5"
                style={{ color: "rgba(255,255,255,0.25)" }}>Why AIIMES?</p>
              {[
                { icon: <Globe size={14} />, text: "Global reach with India-rooted values" },
                { icon: <BookOpen size={14} />, text: "Flexible distance & online programs" },
                { icon: <TrendingUp size={14} />, text: "Practical, industry-focused curriculum" },
                { icon: <Users size={14} />, text: "10,000+ strong alumni community" },
                { icon: <Award size={14} />, text: "UGC & Govt. of India recognised" },
              ].map((item, i) => (
                <motion.div key={i}
                  className="flex items-center gap-3 py-2.5"
                  style={{ borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-red-400"
                    style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.18)" }}>
                    {item.icon}
                  </div>
                  <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 30%,rgba(255,255,255,0.07) 70%,transparent)" }} />
      </div>

      {/* ════════════════════════════════
          PART 2 — VISION & MISSION
      ════════════════════════════════ */}
      <div ref={missionRef} className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }} animate={missionInView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
            <motion.span className="h-px bg-red-600"
              initial={{ width: 0 }} animate={missionInView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">Our Foundation</span>
            <motion.span className="h-px bg-red-600"
              initial={{ width: 0 }} animate={missionInView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
          </motion.div>
          <motion.h2 className="font-black text-white leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
            initial={{ opacity: 0, y: 20 }} animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}>
            Vision & <span style={{ color: "#ef4444" }}>Mission</span>
          </motion.h2>
        </div>

        {/* Vision + Mission cards — side by side */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}>

            {/* Hover red glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top left,rgba(220,38,38,0.07),transparent 60%)" }} />

            {/* Top bar */}
            <div className="h-1 w-full"
              style={{ background: "linear-gradient(90deg,#dc2626,#ef4444 50%,transparent)" }} />

            <div className="p-8">
              {/* Icon header */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0"
                  style={{
                    background: "rgba(220,38,38,0.12)",
                    border: "1px solid rgba(220,38,38,0.25)",
                    boxShadow: "0 4px 16px rgba(220,38,38,0.1)",
                  }}>
                  <Eye size={22} />
                </div>
                <div>
                  <h3 className="font-black text-white text-xl tracking-tight leading-none">Vision</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>Where we're headed</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-5">
                {[
                  "Each centre would provide world class distance education for overall personality development, excellent infrastructure research, modern skills as well as best practical knowledge at an affordable price.",
                  "To serve the society by establishing centres of learning across the globe, where young minds will be imparting knowledge by our expert academicians and industrial personnel.",
                ].map((para, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-1 flex-shrink-0 mt-1.5 rounded-full self-stretch"
                      style={{ background: i === 0 ? "rgba(220,38,38,0.5)" : "rgba(255,255,255,0.08)" }} />
                    <p className="text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.45)" }}>{para}</p>
                  </div>
                ))}
              </div>

              {/* Glass tag */}
              <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)" }}>
                <Globe size={10} className="text-red-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-red-400">World Class Education</span>
              </div>
            </div>
          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="group relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(220,38,38,0.06)",
              border: "1px solid rgba(220,38,38,0.18)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 40px rgba(220,38,38,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}>

            {/* Hover intensify */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at bottom right,rgba(220,38,38,0.1),transparent 60%)" }} />

            {/* Top bar */}
            <div className="h-1 w-full"
              style={{ background: "linear-gradient(90deg,transparent,#ef4444 50%,#dc2626)" }} />

            <div className="p-8">
              {/* Icon header */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-300 flex-shrink-0"
                  style={{
                    background: "rgba(220,38,38,0.18)",
                    border: "1px solid rgba(220,38,38,0.35)",
                    boxShadow: "0 4px 16px rgba(220,38,38,0.15)",
                  }}>
                  <Target size={22} />
                </div>
                <div>
                  <h3 className="font-black text-white text-xl tracking-tight leading-none">Mission</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>How we get there</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-sm leading-[1.85] mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                AIIMES is committed to provide <span className="text-white font-semibold">high quality management education</span> through distance learning across the globe. The key benefit is its flexibility of learning anytime, anywhere.
              </p>
              <p className="text-sm leading-[1.85] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                The curriculum combines latest academic knowledge with international competence. At AIIMES we dedicate our intellectual resources for advancing the frontiers of business knowledge and education for future leaders.
              </p>
              <p className="text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.35)" }}>
                In a global, culturally diverse and technology advanced social arena, characterized by rapid change and complex interdependencies, we aim to <span className="text-red-400 font-semibold">empower business and their leaders</span> to understand and address the far-reaching changes affecting the world.
              </p>

              {/* Mission pillars */}
              <div className="mt-8 grid grid-cols-3 gap-2">
                {["Flexible", "Global", "Future-Ready"].map((tag) => (
                  <div key={tag} className="text-center py-2 rounded-xl text-[10px] font-black uppercase tracking-wider"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── COMMITMENT STRIP ── */}
        <motion.div className="mt-6 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, y: 20 }} animate={missionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0"
              style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)" }}>
              <Lightbulb size={22} />
            </div>
            <div>
              <div className="font-black text-white text-base leading-tight">Our Commitment</div>
              <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                Making quality higher education accessible to <span className="text-red-400 font-semibold">everyone, anywhere in the world</span>.
              </p>
            </div>
          </div>

          <motion.a href="#"
            whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(220,38,38,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-[12px] text-white uppercase tracking-wide flex-shrink-0"
            style={{
              background: "linear-gradient(135deg,#ef4444,#b91c1c)",
              boxShadow: "0 4px 18px rgba(220,38,38,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
              border: "1px solid rgba(220,38,38,0.4)",
            }}>
            Explore Programs
            <motion.svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}