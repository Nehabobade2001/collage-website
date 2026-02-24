
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AchievementsSection() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const stats = [
    { number: 900, suffix: "+", label: "STUDENTS" },
    { number: 60, suffix: "+", label: "TEACHERS" },
    { number: 40, suffix: "+", label: "COURSES" },
    { number: 3675, suffix: "%", label: "Satisfied Client" },
  ];

  return (
    <section className="bg-white text-black overflow-hidden">
      {/* ── TOP SPLIT SECTION ── */}
      <div className="w-full px-32 py-36 grid md:grid-cols-2 gap-16">
        {/* LEFT */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.span
              className="block h-px bg-red-600"
              initial={{ width: 0 }}
              animate={inView ? { width: 28 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <p className="uppercase tracking-[0.3em] text-red-600 text-xs font-bold">
              Our Achievements
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            {"Built on ".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.025 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              className="text-red-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55, ease: "backOut" }}
            >
              Trust
            </motion.span>
            {" & ".split("").map((char, i) => (
              <motion.span
                key={`amp-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.65 + i * 0.03 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {"Academic Excellence".split("").map((char, i) => (
              <motion.span
                key={`ae-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.75 + i * 0.03 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="flex flex-col justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          <div className="relative pl-6">
            <motion.span
              className="absolute left-0 top-0 w-0.5 bg-red-600"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            />
            <motion.p
              className="text-black text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              "Building trust through excellence in education and student
              success — since 2009."
            </motion.p>
          </div>

          <motion.p
            className="mt-6 text-xs tracking-[0.3em] text-gray-400 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Est. 2009 / New Delhi, India
          </motion.p>
        </motion.div>
      </div>

      {/* ── STAT STRIP — white bg, cards go black on hover ── */}
      <div className="w-full px-20 py-10 border-b border-gray-200 bg-white">
        <div ref={statsRef} className="grid md:grid-cols-4">
          {stats.map((stat, index) => {
            const [hovered, setHovered] = useState(false);
            const isDefaultDark = index === 0;
            const isDarkCard = isDefaultDark || hovered;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative px-10 py-20 overflow-hidden cursor-default"
                style={{
                  borderRight: index < 3 ? "1px solid #f0f0f0" : "none",
                  background: isDarkCard ? "#0a0a0a" : "white",
                  transition: "background 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {/* Red bottom border wipe on hover */}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-red-600"
                  initial={{ width: 0 }}
                  animate={{ width: hovered ? "100%" : 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                />

                {/* Red top-right corner triangle */}
                <motion.span
                  className="absolute top-0 right-0 pointer-events-none"
                  animate={{ opacity: hovered ? 1 : 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "0 28px 28px 0",
                    borderColor: "transparent #dc2626 transparent transparent",
                  }}
                />
                   <motion.span
                  className="absolute top-2 right-2 pointer-events-none"
                  animate={{ opacity: hovered ? 1 : 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "0 28px 28px 0",
                    borderColor: "transparent #dc2626 transparent transparent",
                  }}
                />

                {/* Index number */}
                <motion.p
                  className="text-xs tracking-[0.3em] mb-8 font-medium"
                  style={{
                    color: isDarkCard ? "rgba(255,255,255,0.25)" : "#d1d5db",
                    transition: "color 0.35s ease",
                  }}
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.12 }}
                >
                  {`0${index + 1}`}
                </motion.p>

                {/* CountUp number */}
                <h3
                  className="text-4xl md:text-5xl font-bold tabular-nums relative"
                  style={{
                    color: isDarkCard ? "white" : "black",
                    transition: "color 0.35s ease",
                  }}
                >
                  {statsInView && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.12,
                        ease: "backOut",
                      }}
                      className="inline-block"
                    >
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2.2}
                        separator=","
                        delay={index * 0.1}
                      />
                    </motion.span>
                  )}
                  <motion.span
                    className="text-red-600"
                    initial={{ opacity: 0, x: -6 }}
                    animate={statsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.12 }}
                  >
                    {stat.suffix}
                  </motion.span>

                  {/* Decorative underline */}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-px block"
                    style={{
                      background: isDarkCard
                        ? "rgba(200,16,46,0.6)"
                        : "rgba(200,16,46,0.2)",
                      transition: "background 0.35s ease",
                    }}
                    initial={{ width: 0 }}
                    animate={statsInView ? { width: "55%" } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.15,
                      ease: "easeOut",
                    }}
                  />
                </h3>

                {/* Label */}
                <motion.p
                  className="mt-6 uppercase tracking-[0.2em] text-xs"
                  style={{
                    color: isDarkCard ? "rgba(255,255,255,0.45)" : "#9ca3af",
                    transition: "color 0.35s ease",
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.12 }}
                >
                  {stat.label}
                </motion.p>

                {/* Pulsing red dot */}
                <motion.span
                  className="absolute bottom-6 left-10 w-1.5 h-1.5 rounded-full bg-red-600"
                  animate={
                    statsInView
                      ? { scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }
                      : { opacity: 0 }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
