"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, User, GraduationCap, ChevronDown,
  Menu, X, Trophy, ArrowRight, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#", hasDropdown: true },
  { label: "Alliance", href: "#", hasDropdown: true  },
  { label: "Courses", href: "#", hasDropdown: true },
  { label: "Specialization", href: "#", hasDropdown: true },
  { label: "Exam", href: "#" },
  { label: "Policies", href: "#" },
  { label: "Download", href: "#" },
  { label: "Career", href: "#" },
];
const aboutDropdown = [
  { label: "About AIIMES",href: "/about",  icon: "🏢" },
  { label: "Appreciation and Recognition",href: "/appreaciations", icon: "🏆" },
  { label: "Contact Us", href: "/contact", icon: "📞" },
];
const allianceDropdown = [
  { label: "Registration", href: "/alliance/registration", icon: "📄" },
  { label: "Affiliation", href: "/alliance/affiliation", icon: "🤝" },
  { label: "Accreditation", href: "/alliance/accreditation", icon: "✅" },
  { label: "Appreciation", href: "/alliance/appreciation", icon: "🏆" },
];
const courseDropdown = [
  { label: "Engineering", icon: "⚙️" },
  { label: "Business Management", icon: "📊" },
  { label: "Hotel Management", icon: "🏨" },
  { label: "Structural Engineering", icon: "🏗️" },
  { label: "Interior Designing", icon: "🎨" },
  { label: "Aviation Management", icon: "✈️" },
  { label: "Mass Communication", icon: "📡" },
  { label: "Library Science", icon: "📚" },
];

const specDropdown = [
  { label: "Management", icon: "💼" },
  { label: "Engineering", icon: "⚙️" },
  { label: "Architecture", icon: "🏛️" },
  { label: "Agriculture", icon: "🌾" },
  { label: "Computer Application", icon: "💻" },
  { label: "Software Technology", icon: "🖥️" },
];

const badges = [
  "Govt. of India – NCT of Delhi",
  "Ministry of Labour & Employment",
  "Ministry of DGT",
  "Skill Development & Entrepreneurship",
  "Ministry of MSME",
  "ISO Certified",
  "UGC Recognised",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) setMobileOpen(false);
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

const getDropdown = (l: string) => {
  if (l === "Courses") return courseDropdown;
  if (l === "Specialization") return specDropdown;
  if (l === "About") return aboutDropdown; 
  if (l === "Alliance") return allianceDropdown;
  return [];
};
  return (
    <>
      {/* ── SLIM RED TICKER TOP ── */}
      <div className="w-full h-8 relative overflow-hidden flex items-center"
        style={{ background: "linear-gradient(90deg,#7f1d1d,#dc2626 40%,#b91c1c 70%,#7f1d1d)" }}>
        <motion.div className="flex items-center gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          {[...badges, ...badges, ...badges, ...badges].map((b, i) => (
            <span key={i} className="flex items-center gap-2 text-white text-[10px] font-semibold flex-shrink-0 uppercase tracking-widest">
              <Zap size={8} className="text-white flex-shrink-0" fill="currentColor" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── FLOATING GLASS NAVBAR ── */}
      <div className="sticky top-0 rounded-2xl z-50 w-full"
        >

        <motion.div
          className="w-full  relative"
          animate={{
            boxShadow: scrolled
              ? "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(220,38,38,0.25), inset 0 1px 0 rgba(220,38,38,0.25)"
              : "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
          style={{
background: "linear-gradient(to bottom, #1a1a1a, #121212)",             
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
            border: "1px solid rgba(255,255,255,0.07)",
            transition: "background 0.3s ease",
          }}
        >
          {/* Subtle inner grid */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }} />

          {/* Red top glow line */}
          <div className="absolute top-0 left-8 right-8 h-px rounded-full"
            style={{ background: "linear-gradient(90deg,transparent,rgba(220,38,38,0.6),transparent)" }} />

          <div className="relative flex items-center px-5 py-3 gap-4">

            {/* ── LOGO ── */}
      {/* ── LOGO ── */}
<motion.a
  href="#"
  className="flex items-center gap-3 flex-shrink-0"
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.15 }}
>

  {/* Logo Image */}
  <div className="w-20 h-20 flex-shrink-0">
    <img
      src="/aiimes-logo.png"
      alt="AIIMES Logo"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Logo Text */}
  <div className="hidden sm:block">
    <div className="font-black text-[15px] leading-none tracking-tight text-white">
      AIIMES
    </div>
    <div className="text-[8px] font-bold uppercase tracking-[0.22em] text-gray-400 mt-0.5">
      Govt. of India Regd.
    </div>
  </div>

</motion.a>
            {/* Divider */}
            <div className="hidden lg:block w-px h-6 flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.08)" }} />

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}>

<Link
  to={item.href}                    onClick={() => setActiveItem(item.label)}
                    className="relative flex items-center gap-1 px-3 py-1.5 rounded-xl text-[12px] font-bold transition-colors duration-150 group"
                    style={{ color: "#ffffff" }}
                    whileHover={{ color: "#fff" }}>

                    {/* Animated glass pill for active */}
                    {activeItem === item.label && (
                      <motion.span layoutId="glass-nav-pill"
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: "rgba(220,38,38,0.15)",
                          border: "1px solid rgba(220,38,38,0.35)",
                          boxShadow: "0 0 12px rgba(220,38,38,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
                        }}
                        transition={{ type: "spring", stiffness: 420, damping: 32 }} />
                    )}

                    {activeItem !== item.label && (
                      <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-120"
                        style={{ background: "rgba(255,255,255,0.04)" }} />
                    )}

                    <span className="relative z-10">{item.label}</span>
                    {item.hasDropdown && (
                      <motion.span className="relative z-10"
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.18 }}>
                        <ChevronDown size={10} />
                      </motion.span>
                    )}
   </Link>
                  {/* Glass Dropdown */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 6, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute top-full left-0 z-50 rounded-2xl overflow-hidden"
                          style={{
                            background: "rgba(8,8,8,0.88)",
                            backdropFilter: "blur(24px) saturate(180%)",
                            WebkitBackdropFilter: "blur(24px) saturate(180%)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(220,38,38,0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
                            minWidth: 224,
                          }}>
                          {/* Top red line */}
                          <div className="h-px w-full"
                            style={{ background: "linear-gradient(90deg,transparent,#dc2626 40%,#ef4444 60%,transparent)" }} />
                         <div className="p-2">
  {getDropdown(item.label).map((sub, si) => (
    <motion.div
      key={sub.label}
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.12, delay: si * 0.025 }}
      whileHover={{ x: 3 }}
    >
      <Link
        to={sub.href || "/about"}
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[12px] font-semibold transition-all duration-100"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        <span className="text-sm leading-none">{sub.icon}</span>
        {sub.label}
      </Link>
    </motion.div>
  ))}
</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* ── RIGHT ACTIONS ── */}
            <div className="flex items-center gap-2 ml-auto flex-shrink-0">

              {/* Glass portal pills — desktop xl */}
              <div className="hidden xl:flex items-center rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)", color:"#fff"
                }}>
                {[
                  { icon: <GraduationCap size={10} />, label: "Center" },
                  { icon: <User size={10} />, label: "Student" },
                  { icon: <Trophy size={10} />, label: "Result" },
                ].map((item, i) => (
                  <motion.button key={item.label}
                    whileHover={{ backgroundColor: "rgba(220,38,38,0.14)", color: "#fff" }}
                    className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold transition-all duration-120"
                    style={{
  color: "#ffffff",
                      borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}>
                    <span className="text-red-400">{item.icon}</span>
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Phone md */}
              <motion.a href="tel:+919319821280"
                whileHover={{ scale: 1.04, color: "#fff" }}
                className="hidden md:flex xl:hidden items-center gap-1.5 px-3 py-2 rounded-xl text-[10px] font-semibold transition-colors"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}>
                <Phone size={10} className="text-red-400" />
                +91-9319821280
              </motion.a>

              {/* ENROLL button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(220,38,38,0.55)" }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-black text-[11px] text-white uppercase tracking-wide"
                style={{
                  background: "linear-gradient(135deg,#ef4444 0%,#b91c1c 100%)",
                  boxShadow: "0 4px 18px rgba(220,38,38,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                  border: "1px solid rgba(220,38,38,0.5)",
                }}>
                Enroll Now
                <ArrowRight size={12} />
              </motion.button>

              {/* Hamburger */}
              <motion.button
                className="lg:hidden p-2 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(p => !p)}>
                <AnimatePresence mode="wait">
                  {mobileOpen
                    ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><X size={17} className="text-white" /></motion.span>
                    : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={17} style={{ color: "rgba(255,255,255,0.5)" }} /></motion.span>
                  }
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── MOBILE GLASS DRAWER — slides from right ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div className="fixed inset-0 z-40 lg:hidden"
              style={{ backdropFilter: "blur(10px)", background: "rgba(0,0,0,0.65)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)} />

            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col"
              style={{
                width: "min(300px, 90vw)",
                background: "rgba(7,7,7,0.94)",
                backdropFilter: "blur(32px) saturate(200%)",
                WebkitBackdropFilter: "blur(32px) saturate(200%)",
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "-16px 0 60px rgba(0,0,0,0.8)",
              }}
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>

              {/* Red top line */}
              <div className="h-px w-full"
                style={{ background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }} />

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-xl overflow-hidden"
                    style={{ border: "1px solid rgba(220,38,38,0.3)", boxShadow: "0 0 12px rgba(220,38,38,0.15)" }}>
                    <div className="absolute inset-0 bg-black" />
                    <div className="absolute bottom-0 left-0 right-0 h-[45%]" style={{ background: "#dc2626" }} />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span className="text-white font-black text-xs">AI</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-black text-[15px] text-white tracking-tight">AII<span className="text-red-500">MES</span></div>
                    <div className="text-[8px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.2)" }}>Govt. of India Regd.</div>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <X size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
                </button>
              </div>

              {/* Portals */}
              <div className="grid grid-cols-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {[{ icon: <User size={12} />, label: "Student" }, { icon: <GraduationCap size={12} />, label: "Center" }, { icon: <Trophy size={12} />, label: "Result" }].map((b, i) => (
                  <button key={b.label}
                    className="flex flex-col items-center gap-1.5 py-3.5 text-[10px] font-bold hover:text-red-400 transition-colors"
                    style={{ color: "rgba(255,255,255,0.28)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span className="text-red-500">{b.icon}</span>{b.label}
                  </button>
                ))}
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto py-2">
                {navItems.map((item, i) => (
                  <motion.div key={item.label}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18, delay: i * 0.04 }}>
                    <button
                      onClick={() => {
                        if (item.hasDropdown) setMobileExpanded(p => p === item.label ? null : item.label);
                        else { setActiveItem(item.label); setMobileOpen(false); }
                      }}
                      className="w-full flex items-center justify-between px-5 py-3.5 text-[13px] font-bold transition-all"
                      style={{
                        color: activeItem === item.label ? "#ef4444" : "rgba(255,255,255,0.42)",
                        background: activeItem === item.label ? "rgba(220,38,38,0.07)" : "transparent",
                        borderRight: activeItem === item.label ? "3px solid #dc2626" : "3px solid transparent",
                      }}>
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <motion.span animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }} transition={{ duration: 0.18 }}>
                          <ChevronDown size={12} style={{ color: "rgba(255,255,255,0.18)" }} />
                        </motion.span>
                      )}
                    </button>
                    <AnimatePresence>
                      {item.hasDropdown && mobileExpanded === item.label && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                          style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                          {getDropdown(item.label).map(sub => (
                            <Link key={sub.label} to={sub.href || "/about"}
                              className="flex items-center gap-3 px-8 py-2.5 text-[12px] font-medium hover:text-red-400 transition-colors"
                              style={{ color: "rgba(255,255,255,0.28)" }}>
                              <span>{sub.icon}</span>{sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 space-y-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <motion.button whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 text-white font-black text-[13px] py-3.5 rounded-xl uppercase tracking-wide"
                  style={{
                    background: "linear-gradient(135deg,#ef4444,#b91c1c)",
                    boxShadow: "0 4px 20px rgba(220,38,38,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                    border: "1px solid rgba(220,38,38,0.35)",
                  }}>
                  Enroll Now <ArrowRight size={14} />
                </motion.button>
                <div className="flex gap-2">
                  {[
                    { href: "tel:+919319821280", icon: <Phone size={11} className="text-red-400" />, label: "Call Us" },
                    { href: "mailto:info@aiimes.in", icon: <Mail size={11} className="text-red-400" />, label: "Email" },
                  ].map(b => (
                    <a key={b.label} href={b.href}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-[11px] font-bold hover:text-white transition-colors"
                      style={{
                        color: "rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "rgba(255,255,255,0.03)",
                      }}>
                      {b.icon}{b.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
