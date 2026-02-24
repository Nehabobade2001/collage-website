"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const quickLinks = ["Home", "About Us", "Franchise", "Specialization", "Courses", "Career", "Latest Blogs", "Contact Us"];
  const ourCourses = ["Engineering", "Business Management", "Hotel Management", "Structural Engineering", "Interior Designing", "Aviation Management", "Mass Communication", "Library Science"];
  const programs = ["Management", "Engineering", "Architecture", "Agriculture", "Computer Application", "Hardware & Networking", "Software Technology", "Animation & Multimedia"];

  const socials = [
    { label: "Facebook", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { label: "Google+", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg> },
    { label: "Twitter", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg> },
    { label: "Pinterest", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
    { label: "Vimeo", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.48 4.807z"/></svg> },
  ];

  const offices = [
    {
      code: "IN", country: "India Office", flag: "🇮🇳", color: "#dc2626",
      address: "Plot No. 28/7, Kapashera, Near Police Station, Delhi - 110037, India",
      phone: "+91-9319821280", email: "info@aiimes.in",
    },
    {
      code: "UA", country: "Ukraine Office", flag: "🇺🇦", color: "#1d4ed8",
      address: "223, Druzba, Narodnaya Office-12, Kharkiv, Ukraine",
      phone: "+380 93 570 7360", email: "ukraine@aiimes.in",
    },
  ];

  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: mainRef, inView: mainInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: officeRef, inView: officeInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const Arr = () => (
    <svg width="6" height="6" viewBox="0 0 8 8" fill="#dc2626" className="flex-shrink-0 mt-[4px]">
      <polygon points="0,0 8,4 0,8"/>
    </svg>
  );

  return (
    <footer style={{ background: "#000" }} className="text-white overflow-hidden">

      {/* ── RED CTA BAND ── */}
      <div ref={ctaRef} className="relative overflow-hidden" style={{ background: "#dc2626" }}>
        <motion.div className="absolute -right-24 -top-24 w-96 h-96 rounded-full"
          style={{ background: "rgba(255,255,255,0.07)" }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full"
          style={{ background: "rgba(0,0,0,0.15)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />

        <div className="relative max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="text-white text-[11px] uppercase tracking-[0.25em] font-bold mb-2">Join AIIMES Today</p>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Shape your future — Admissions open for 2026
            </h3>
          </motion.div>

          <motion.div
            className="flex gap-3 flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          >
            <motion.a href="#" whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }}
              className="px-7 py-3 bg-white text-red-600 font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg">
              Enroll Now
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.06, y: -2, backgroundColor: "rgba(255,255,255,0.15)" }} whileTap={{ scale: 0.96 }}
              className="px-7 py-3 border-2 border-white/50 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors duration-200">
              Know More
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN LINKS SECTION ── */}
      <div ref={mainRef} className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Brand col */}
          <motion.div className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-5">
              <motion.div className="w-28 h-20 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "transparent" }}
                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
              >
                <img src="/logo-footer.png" alt="AIIMES" className="w-10 h-10 md:w-36 md:h-36 object-contain" />
              </motion.div>
              <div>
                <div className="font-black text-white text-2xl tracking-tight leading-none">AIIMES</div>
                <div className="text-[9px] uppercase tracking-[0.16em] text-white-900 mt-1 leading-tight">
                  All India Institute of Management<br />& Engineering Studies
                </div>
              </div>
            </div>

            <motion.div className="w-8 h-0.5 bg-red-600 mb-4 origin-left"
              initial={{ scaleX: 0 }}
              animate={mainInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            <p className="text-white text-sm leading-relaxed mb-5">
              We seek to develop you to be successful business leaders of tomorrow.
              But we need your commitment to learn, to imbibe and contribute to the process.
            </p>

            <div className="flex gap-2 flex-wrap">
              {socials.map((s, i) => (
                <motion.a key={s.label} href="#" aria-label={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={mainInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                  whileHover={{ scale: 1.15, y: -4, backgroundColor: "#dc2626", borderColor: "#dc2626", color: "#fff" }}
                  whileTap={{ scale: 0.92 }}
                  className="w-9 h-9 rounded-lg border border-white/10 text-white flex items-center justify-center transition-all duration-200">
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 3 link columns */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { title: "Quick Links", items: quickLinks },
              { title: "Our Courses", items: ourCourses },
              { title: "Programs", items: programs },
            ].map((col, ci) => (
              <motion.div key={col.title}
                initial={{ opacity: 0, y: 30 }}
                animate={mainInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + ci * 0.1, ease: "easeOut" }}
              >
                <h4 className="text-white text-[11px] font-black uppercase tracking-[0.22em] mb-1">{col.title}</h4>
                <motion.div className="w-8 h-0.5 bg-red-600 mb-5 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={mainInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + ci * 0.1 }}
                />
                <ul className="space-y-3">
                  {col.items.map((item, i) => (
                    <motion.li key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={mainInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.3 + ci * 0.08 + i * 0.04 }}
                    >
                      <motion.a href="#"
                        whileHover={{ x: 5, color: "#ef4444" }}
                        transition={{ duration: 0.15 }}
                        className="text-white text-sm flex items-center gap-2.5 transition-colors duration-200">
                        <Arr /> {item}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OFFICE SECTION — NO BOXES, open clean layout ── */}
      <div ref={officeRef} className="max-w-7xl mx-auto px-6 pb-14">

        {/* Divider with label */}
        <div className="flex items-center gap-4 mb-10">
          <motion.div className="h-px bg-white/8 flex-1 origin-left"
            initial={{ scaleX: 0 }} animate={officeInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.span
            className="text-[12px] uppercase tracking-[0.25em] text-white font-bold flex-shrink-0 flex items-center gap-2"
            initial={{ opacity: 0 }} animate={officeInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="w-3 h-0.5 bg-red-600 inline-block" />
            Our Offices
            <span className="w-3 h-0.5 bg-red-600 inline-block" />
          </motion.span>
          <motion.div className="h-px bg-white/8 flex-1 origin-right"
            initial={{ scaleX: 0 }} animate={officeInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {offices.map((office, oi) => (
            <motion.div key={office.code}
              initial={{ opacity: 0, y: 25 }}
              animate={officeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + oi * 0.15, ease: "easeOut" }}
              className="group"
            >
              {/* Office title row */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-xs flex-shrink-0"
                  style={{ background: office.color }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {office.code}
                </motion.div>
                <div>
                  <div className="text-white font-bold text-base leading-none">{office.country}</div>
                  <div className="text-white text-[12px] mt-0.5">{office.flag} International Office</div>
                </div>
                {/* animated underline on hover */}
                <motion.div className="flex-1 h-px bg-white/5 ml-2" />
              </div>

              {/* Contact items — horizontal, no boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pl-1">

                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white font-bold mb-1">Address</p>
                    <p className="text-white text-[12px] leading-relaxed">{office.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.27 6.27l1.94-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white-900 font-bold mb-1">Phone</p>
                    <motion.a href={`tel:${office.phone}`}
                      whileHover={{ color: "#ef4444" }}
                      className="text-white-900 text-xs font-semibold transition-colors duration-200">
                      {office.phone}
                    </motion.a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white-900 font-bold mb-1">Email</p>
                    <motion.a href={`mailto:${office.email}`}
                      whileHover={{ color: "#ef4444" }}
                      className="text-white-900 text-xs font-semibold transition-colors duration-200">
                      {office.email}
                    </motion.a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: "1px solid #1c1c1c", background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <motion.p className="text-white text-[14px] text-center md:text-left"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
          >
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">AIIMES</span> — All India Institute of
            Management & Engineering Studies. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item, i) => (
              <motion.a key={item} href="#"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.55 + i * 0.08 }}
                whileHover={{ color: "#dc2626", y: -1 }}
                className="text-white text-xs transition-colors duration-200">
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
