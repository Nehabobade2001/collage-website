"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const courses = [
  {
    number: "01",
    abbr: "BBA",
    category: "Undergraduate",
    title: "Bachelor of Business Administration",
    desc: "Comprehensive management program with real-world industry exposure and case-based learning methodologies.",
    duration: "3 Years",
    intake: "120 Seats",
    mode: "Full Time",
    image: "/tech2.jpg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    number: "02",
    abbr: "MBA",
    category: "Postgraduate",
    title: "Master of Business Administration",
    desc: "Advanced leadership, strategic thinking, and executive management training at its finest.",
    duration: "2 Years",
    intake: "60 Seats",
    mode: "Full Time",
    image: "/tech3.jpg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    number: "03",
    abbr: "D.Eng",
    category: "Diploma",
    title: "Diploma in Engineering",
    desc: "Hands-on technical programs designed to build practical, job-ready engineering skills.",
    duration: "3 Years",
    intake: "80 Seats",
    mode: "Full Time",
    image: "/tech5.jpg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    number: "04",
    abbr: "OCP",
    category: "Online",
    title: "Online Certification Programs",
    desc: "Flexible, self-paced learning options built for working professionals on the move.",
    duration: "6–12 Months",
    intake: "Open",
    mode: "Online",
    image: "/tech6.jpg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

export default function CoursesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#0a0a0a" }}>

      {/* Animated grid lines */}
      <motion.div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-red-500/20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Animated red glow top-left */}
      <motion.div className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

      {/* Animated red glow bottom-right */}
      <motion.div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />

      {/* Rotating circles */}
      <motion.div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-red-500/10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
      
      <motion.div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full border border-red-500/10 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.45 }}>
              <motion.span className="h-px bg-red-600 block"
                initial={{ width: 0 }} animate={inView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
              <span className="text-red-500 text-xs font-black uppercase tracking-[0.25em]">Academic Programs</span>
            </motion.div>

            <motion.h2 className="font-black text-white leading-tight text-4xl sm:text-5xl md:text-7xl"
              style={{ letterSpacing: "-0.025em" }}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}>
              Our <span className="text-red-600">Courses</span> &{" "}
              <br className="hidden md:block" />Programs
            </motion.h2>
          </div>

          <motion.p className="text-gray-300 md:text-[20px] text-sm leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}>
            Explore UGC-recognised programs crafted for real-world careers in management and engineering.
          </motion.p>
        </div>

        {/* ── COURSE LIST ── */}
        <div className="flex flex-col gap-0">
          {courses.map((course, i) => (
            <motion.div
              key={course.abbr}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col md:flex-row items-center gap-4 md:gap-6 cursor-pointer py-5 md:py-7 text-center md:text-left"
              style={{
                borderTop: i === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Hover full-row red highlight */}
              <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl -mx-4 px-4"
                style={{ background: "rgba(220,38,38,0.04)" }} />

              {/* Left red bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-0.5 bg-red-600 transition-all duration-300 rounded-full" />

              {/* ── Col 1: Number ── */}
              <div className="flex-shrink-0 w-full md:w-12 flex justify-center md:justify-start">
                <span className="font-black text-white/15 leading-none"
                  style={{ fontSize: "clamp(30px, 6vw, 40px)", letterSpacing: "-0.05em" }}>
                  {course.number}
                </span>
              </div>

              {/* ── Col 2: Image + Icon ── */}
              <div className="relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-red-900/80 flex items-center justify-center">
                  <div className="text-white">
                    {course.icon}
                  </div>
                </div>
              </div>

              {/* ── Col 3: Title + desc ── */}
              <div className="flex-1 min-w-0 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-1.5 flex-wrap">
                  <h3 className="font-black text-white text-lg leading-tight group-hover:text-red-400 transition-colors duration-200">
                    {course.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border"
                    style={{ color: "rgba(220,38,38,0.8)", borderColor: "rgba(220,38,38,0.25)", background: "rgba(220,38,38,0.08)" }}>
                    {course.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
                  {course.desc}
                </p>
              </div>

              {/* ── Col 4: Meta ── */}
              <div className="flex-shrink-0 flex flex-wrap justify-center gap-5 md:gap-8 w-full md:w-auto">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Duration</p>
                  <p className="text-white font-black text-sm whitespace-nowrap">{course.duration}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Intake</p>
                  <p className="text-white font-black text-sm">{course.intake}</p>
                </div>
                <div className="text-center hidden lg:block">
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Mode</p>
                  <p className="text-white font-black text-sm">{course.mode}</p>
                </div>
              </div>

              {/* ── Col 5: CTA arrow ── */}
              <div className="flex-shrink-0 self-center md:self-auto">
                <motion.div
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-600 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.08 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM — CTA + Stats ── */}
        <motion.div
          className="mt-14 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.65 }}
        >
          {/* Stats row */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
            {[
              { value: "40+", label: "Programs" },
              { value: "900+", label: "Students" },
              { value: "UGC", label: "Recognised" },
            ].map((s, si) => (
              <div key={si} className="text-center">
                <div className="font-black text-red-500 text-xl leading-none">{s.value}</div>
                <div className="text-gray-600 text-[10px] uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Enroll CTA */}
          <motion.a href="#"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-xl font-black text-sm uppercase tracking-wider text-white"
            style={{ background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)", boxShadow: "0 8px 32px rgba(220,38,38,0.35)" }}>
            Explore All Programs
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>→</motion.span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

