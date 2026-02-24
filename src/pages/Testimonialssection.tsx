
"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    course: "MBA — Batch 2022",
    location: "New Delhi",
    rating: 5,
    text: "AIIMES completely transformed my career. The faculty here doesn't just teach theory — they bring real industry experience into every class. I got placed at a top MNC within 2 months of graduating.",
    initials: "PS",
    color: "#dc2626",
  },
  {
    name: "Rahul Verma",
    course: "BBA — Batch 2023",
    location: "Noida",
    rating: 5,
    text: "The practical approach to learning at AIIMES is unmatched. Case studies, live projects, industry visits — everything prepared me for the corporate world. Best decision of my life.",
    initials: "RV",
    color: "#b91c1c",
  },
  {
    name: "Anjali Singh",
    course: "Diploma in Engineering — Batch 2021",
    location: "Gurgaon",
    rating: 5,
    text: "I was skeptical at first, but AIIMES proved me wrong. The infrastructure, the support system, and the mentorship I received here is something I'll always be grateful for.",
    initials: "AS",
    color: "#ef4444",
  },
  {
    name: "Mohit Kapoor",
    course: "Online Certification — 2023",
    location: "Mumbai",
    rating: 4,
    text: "As a working professional, the online certification program was perfect for me. Flexible, well-structured, and the content is genuinely industry-relevant. Highly recommend!",
    initials: "MK",
    color: "#dc2626",
  },
  {
    name: "Sneha Gupta",
    course: "MBA — Batch 2023",
    location: "Pune",
    rating: 5,
    text: "The alumni network and placement support at AIIMES is exceptional. I had 3 job offers before I even graduated. The professors are always available and truly invested in your growth.",
    initials: "SG",
    color: "#b91c1c",
  },
];

function StarRating({ count, small = false }: { count: number; small?: boolean }) {
  const size = small ? 11 : 14;
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width={size} height={size} viewBox="0 0 24 24"
          fill={star <= count ? "#dc2626" : "none"} stroke="#dc2626" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const total = testimonials.length;
  const prev_i = (current - 1 + total) % total;
  const next_i = (current + 1) % total;

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoplay, current]);

  const pause = () => {
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 8000);
  };

  const goNext = () => { setDirection(1); setCurrent((p) => (p + 1) % total); pause(); };
  const goPrev = () => { setDirection(-1); setCurrent((p) => (p - 1 + total) % total); pause(); };
  const goTo = (i: number) => { setDirection(i > current ? 1 : -1); setCurrent(i); pause(); };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.97, transition: { duration: 0.3, ease: "easeIn" } }),
  };

  const t = testimonials[current];
  const tPrev = testimonials[prev_i];
  const tNext = testimonials[next_i];

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-x xl:px-12 md:px-12 lg:px-20 py-24 md:py-10 md:mb-20  overflow-hidden"
    >
      {/* BG */}
      <motion.div className="absolute rounded-full pointer-events-none"
        style={{ width: 500, height: 500, top: "-120px", right: "-150px",
          background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }}
        animate={{ x: [0, -25, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute rounded-full pointer-events-none"
        style={{ width: 350, height: 350, bottom: "-80px", left: "-80px",
          background: "radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "28px 28px", opacity: 0.35 }} />

      <div className="relative  max-w-7xl mx-auto  overflow-hidden ">

        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span className="block h-px bg-red-600"
              initial={{ width: 0, opacity: 0 }}
              animate={inView ? { width: 32, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }} />
            <motion.p className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}>
              Student Stories
            </motion.p>
            <motion.span className="block h-px bg-red-600"
              initial={{ width: 0, opacity: 0 }}
              animate={inView ? { width: 32, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }} />
          </div>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}>
            What Our <span className="text-red-600">Students</span> Say
          </motion.h2>
          <motion.p className="mt-4 text-gray-500 text-sm max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}>
            Real stories from real students who built their careers with AIIMES.
          </motion.p>
          <motion.div className="h-1 bg-red-600 mx-auto mt-5 origin-center" style={{ width: 48 }}
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.48 }} />
        </div>

        {/* ── 3 CARD LAYOUT ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.38 }}
          className="flex items-center w-full md:-px-96 gap-5 justify-center"
        >

          {/* LEFT SIDE CARD */}
          <motion.div
            key={`left-${prev_i}`}
            onClick={goPrev}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            whileHover={{ scale: 1.02, x: 6 }}
            className="hidden lg:flex flex-col cursor-pointer flex-shrink-0 w-64 rounded-2xl p-5 relative overflow-hidden"
            style={{
              background: "#fff",
              border: "1.5px solid #f0f0f0",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              opacity: 0.72,
              filter: "blur(0px)",
            }}
          >
            {/* faded left bar */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-200" />
            <div className="mb-3">
              <StarRating count={tPrev.rating} small />
            </div>
            <p className="text-gray-500 text-xs leading-relaxed italic line-clamp-4 mb-4 flex-1">
              "{tPrev.text}"
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                style={{ background: tPrev.color }}>
                {tPrev.initials}
              </div>
              <div>
                <div className="text-xs font-bold text-gray-700 leading-none">{tPrev.name}</div>
                <div className="text-[10px] text-red-500 mt-0.5">{tPrev.course.split("—")[0].trim()}</div>
              </div>
            </div>
            {/* Arrow hint */}
            {/* <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div> */}
          </motion.div>

          {/* ── CENTER MAIN CARD ── */}
          <div className="relative flex-1 max-w-2xl">
            <div className="relative rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                boxShadow: "0 12px 60px rgba(220,38,38,0.12), 0 4px 20px rgba(0,0,0,0.07)",
                border: "1.5px solid rgba(220,38,38,0.15)",
              }}>
              {/* Red left bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />

              {/* Big quote mark */}
              <div className="absolute top-5 right-7 text-[110px] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(220,38,38,0.05)", fontFamily: "Georgia, serif" }}>
                "
              </div>

              <div className="px-10 py-10 md:px-12 md:py-11">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div key={current} custom={direction}
                    variants={slideVariants} initial="enter" animate="center" exit="exit">

                    <div className="mb-5"><StarRating count={t.rating} /></div>

                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium mb-8"
                      style={{ fontStyle: "italic" }}>
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ background: t.color }}
                        key={current}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                      >
                        {t.initials}
                      </motion.div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                        <div className="text-xs text-red-600 font-semibold mt-0.5">{t.course}</div>
                        <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {t.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dots below center card */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <motion.button key={i} onClick={() => goTo(i)}
                  animate={{ width: i === current ? 28 : 8, backgroundColor: i === current ? "#dc2626" : "#d1d5db" }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full" />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            key={`right-${next_i}`}
            onClick={goNext}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.35 }}
            whileHover={{ scale: 1.02, x: -6 }}
            className="hidden lg:flex flex-col cursor-pointer flex-shrink-0 w-64 rounded-2xl p-5 relative overflow-hidden"
            style={{
              background: "#fff",
              border: "1.5px solid #f0f0f0",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              opacity: 0.72,
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-200" />
            <div className="mb-3"><StarRating count={tNext.rating} small /></div>
            <p className="text-gray-500 text-xs leading-relaxed italic line-clamp-4 mb-4 flex-1">
              "{tNext.text}"
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                style={{ background: tNext.color }}>
                {tNext.initials}
              </div>
              <div>
                <div className="text-xs font-bold text-gray-700 leading-none">{tNext.name}</div>
                <div className="text-[10px] text-red-500 mt-0.5">{tNext.course.split("—")[0].trim()}</div>
              </div>
            </div>
            {/* Arrow hint */}
            {/* <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div> */}
          </motion.div>

        </motion.div>

        {/* ── NAV ARROWS (mobile + desktop) ── */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button onClick={goPrev}
            whileHover={{ scale: 1.1, backgroundColor: "#dc2626", color: "#fff", borderColor: "#dc2626" }}
            whileTap={{ scale: 0.93 }}
            className="w-10 h-10 rounded-full border-2 border-gray-200 text-gray-400 flex items-center justify-center transition-colors duration-200">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>

          <span className="text-xs text-gray-400 font-medium tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          <motion.button onClick={goNext}
            whileHover={{ scale: 1.1, backgroundColor: "#dc2626", color: "#fff", borderColor: "#dc2626" }}
            whileTap={{ scale: 0.93 }}
            className="w-10 h-10 rounded-full border-2 border-gray-200 text-gray-400 flex items-center justify-center transition-colors duration-200">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>

      </div>
    </section>
  );
}