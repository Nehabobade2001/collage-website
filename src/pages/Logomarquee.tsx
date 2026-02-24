"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Logo {
  src: string;
  alt: string;
}

interface LogoMarqueeProps {
  logos?: Logo[];
  speed?: number;
  gap?: number;
}

const DEMO_LOGOS: Logo[] = [
  { src: "/1.png", alt: "Logo 1" },
  { src: "/2.png", alt: "Logo 2" },
  { src: "/3.png", alt: "Logo 3" },
  { src: "/4.png", alt: "Logo 4" },
  { src: "/5.png", alt: "Logo 5" },
  { src: "/6.png", alt: "Logo 6" },
  { src: "/1.png", alt: "Logo 1" },
  { src: "/2.png", alt: "Logo 2" },
];

export default function LogoMarquee({
  logos = DEMO_LOGOS,
  speed = 60,
  gap = 80,
}: LogoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [paused, setPaused] = useState(false);
  const allLogos = [...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;
    const duration = halfWidth / speed;
    track.style.setProperty("--marquee-duration", `${duration}s`);
  }, [logos, speed]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-10"
      style={{ background: "#fff" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.4,
        }}
      />

    

      <div className="relative w-full  ">

        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45 }}
          >
            <motion.span
              className="h-px bg-red-600 block"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <span className="text-red-600 text-xs font-black uppercase tracking-[0.25em]">
              Recognitions
            </span>
            <motion.span
              className="h-px bg-red-600 block"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </motion.div>

          <motion.h2
            className="font-black text-gray-900 leading-tight mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            Accredited &{" "}
            <span className="text-red-600">Affiliated</span> Bodies
          </motion.h2>

          <motion.p
            className="text-gray-500 text-sm max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            Recognized by leading government ministries and certification bodies across India.
          </motion.p>

          <motion.div
            className="h-1 bg-red-600 mx-auto mt-5 rounded-full"
            style={{ width: 48 }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.36 }}
          />
        </div>

    {/* ── MARQUEE WRAPPER ── */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.42 }}
  className="relative px-4 md:px-10" // Added horizontal padding
>
  <div
    className="relative rounded-2xl overflow-hidden border border-gray-100 py-10"
    style={{
      background: "linear-gradient(135deg, #fff 0%, #fafafa 100%)",
      boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
      /* YEH HAI MAGIC: 
         Center 60% area solid rahega (original color), 
         aur side ke 20-20% area mein gradient fade hoga.
      */
      WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
    }}
  >
    {/* Baki inner structure same rahega... */}
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex items-center w-max"
        style={{
          gap: `${gap}px`,
          animation: `marquee var(--marquee-duration, 30s) linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {allLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 flex items-center justify-center">
            <div
              className="relative px-6 py-3 transition-all duration-300"
              style={{
                /* Default state ab original color mein rahegi */
                filter: "grayscale(0%)", 
                opacity: 1,
              }}
              /* Hover effect optional hai, aap ise hata bhi sakte hain */
              whileHover={{ scale: 1.1 }} 
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-32 w-auto object-contain"
                draggable={false}
              />
                  {/* Pause hint */}

       
            </div>
          </div>
        ))}
          
      </div>
       <p

            className="text-center text-xs text-gray-300 mt-4 tracking-widest uppercase"

            style={{ fontFamily: "system-ui, sans-serif" }}

          >

            Hover to pause

          </p>
    </div>
  </div>
</motion.div>
        {/* ── STATS STRIP ── */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.55 }}
        >
          {[
            { value: "7+", label: "Govt. Recognitions" },
            { value: "ISO", label: "Certified Institute" },
            { value: "2009", label: "Established" },
            { value: "UGC", label: "Affiliated" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.6 + i * 0.08 }}
              className="group relative flex flex-col items-center text-center py-6 px-4 rounded-2xl bg-white border border-gray-100 overflow-hidden cursor-default"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
            >
              {/* Hover black fill */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ y: "100%" }}
                whileHover={{ y: "0%" }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: "#0a0a0a" }}
              />

              {/* Red bottom wipe */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-red-600 pointer-events-none"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.35 }}
              />

              <span
                className="relative z-10 font-black text-2xl text-red-600 leading-none mb-1 group-hover:text-red-500 transition-colors duration-300"
              >
                {stat.value}
              </span>
              <span
                className="relative z-10 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                style={{ color: "#9ca3af" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Marquee keyframe */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}