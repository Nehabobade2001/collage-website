"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const staff = [
  {
    name: "ABD Rashid Khan",
    role: "Vice Chancellor",
    desc: "Leading AIIMES with decades of academic excellence and institutional vision.",
    initials: "AK",
    dept: "Administration",
    email: "abdrashid@aiimes.edu.in",
  },
  {
    name: "Luyes Figery",
    role: "Associate Professor",
    desc: "Entrusted with planning, implementation and evaluation of academic programs.",
    initials: "LF",
    dept: "Academics",
    email: "luyes.figery@aiimes.edu.in",
  },
  {
    name: "Mr. Mahabub Alam",
    role: "Assistant Professor",
    desc: "Bringing industry expertise and research-driven teaching to every classroom.",
    initials: "MA",
    dept: "Research",
    email: "mahabub.alam@aiimes.edu.in",
  },
  {
    name: "Dr. Priya Mehta",
    role: "Dean of Academics",
    desc: "Shaping curriculum strategy and fostering a culture of innovation and learning.",
    initials: "PM",
    dept: "Academics",
    email: "priya.mehta@aiimes.edu.in",
  },
  {
    name: "Prof. Arvind Joshi",
    role: "Head of Engineering",
    desc: "Pioneering technical education with hands-on, industry-relevant methodologies.",
    initials: "AJ",
    dept: "Engineering",
    email: "arvind.joshi@aiimes.edu.in",
  },
  {
    name: "Ms. Sneha Rawat",
    role: "Student Coordinator",
    desc: "Dedicated to student success, placement support and campus life management.",
    initials: "SR",
    dept: "Student Affairs",
    email: "sneha.rawat@aiimes.edu.in",
  },
];

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const socials = [
  { label: "Facebook", icon: <FacebookIcon /> },
  { label: "LinkedIn", icon: <LinkedInIcon /> },
  { label: "Twitter", icon: <TwitterIcon /> },
];

function StaffCard({ member, index, inView }: { member: typeof staff[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-2xl overflow-hidden"
      style={{
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.32), 0 0 0 1.5px rgba(200,16,46,0.18)"
          : "0 2px 20px rgba(0,0,0,0.14)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        minHeight: "320px",
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: hovered ? "linear-gradient(90deg,#dc2626,#ef4444)" : "#efefef",
          transition: "background 0.4s ease",
        }}
      />

      {/* ── CARD FRONT CONTENT ── */}
      <div className="p-7">
        {/* Avatar + Dept */}
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-base font-bold tracking-wider"
              style={{
                background: "#f4f4f4",
                color: "#999",
              }}
            >
              {member.initials}
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white"
              style={{ background: "#dc2626",}}
            />
          </div>
          <span
            className="text-xs px-3 py-1 rounded-full border font-medium"
            style={{
              background: "#fafafa",
              borderColor: "#eaeaea",
              color: "#aaa",
            }}
          >
            {member.dept}
          </span>
        </div>

        {/* Name */}
        <h3
          className="text-lg font-bold leading-snug mb-1"
          style={{ color: "#111" }}
        >
          {member.name}
        </h3>

        {/* Role */}
        <p
          className="text-xs font-semibold uppercase tracking-[0.14em] mb-4"
        >
          {member.role}
        </p>

        <div className="h-px bg-[#f0f0f0] mb-4" />

        {/* Short desc preview */}
        <p
          className="text-sm leading-relaxed"
        >
          {member.desc.slice(0, 60)}…
        </p>
      </div>

      {/* ── SLIDE-UP OVERLAY ── */}
      <motion.div
        initial={false}
        animate={{ y: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex flex-col justify-between p-7 rounded-2xl"
        style={{ background: "#dc2626" }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10">
          {/* Name + role */}
          <div className="mb-4">
            <h3
              className="text-white text-xl font-bold leading-snug mb-1"
            >
              {member.name}
            </h3>
            <p
              className="text-white/70 text-xs font-semibold uppercase tracking-[0.16em]"
            >
              {member.role}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 mb-4" />

          {/* Full bio */}
          <p
            className="text-white/85 text-sm leading-relaxed mb-5"
          >
            {member.desc}
          </p>

          {/* Email */}
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-2 text-white/80 text-xs mb-5 hover:text-white transition-colors"
          >
            <EmailIcon />
            <span>{member.email}</span>
          </a>

          {/* Divider */}
          <div className="h-px bg-white/20 mb-4" />

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map((s, si) => (
              <motion.button
                key={si}
                initial={{ opacity: 0, y: 10 }}
                animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: hovered ? 0.18 + si * 0.07 : 0, duration: 0.25 }}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                title={s.label}
              >
                {s.icon}
              </motion.button>
            ))}
          </div>
        </div>

        {/* View Profile CTA */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: hovered ? 0.32 : 0, duration: 0.25 }}
          className="relative z-10 flex items-center justify-between w-full px-5 py-3 rounded-xl text-sm font-semibold text-[#c8102e] bg-white hover:bg-white/90 transition-colors"
        >
          View Full Profile
          <ArrowIcon />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default function StaffSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0d0d0d] py-24 px-4 md:px-12 overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[440px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(220,38,38,0.09) 0%, transparent 68%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-red-600" />
            <span
              className="text-red-600 text-xs font-semibold tracking-[0.28em] uppercase"
            >
              Our Team
            </span>
            <span className="w-8 h-px bg-red-600" />
          </div>

          <h2
            className="text-white text-4xl md:text-6xl font-bold mb-5"
          >
            Our Experienced{" "}
            <span style={{ color: "#dc2626" }}>Staff</span>
          </h2>

          <p
            className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed"
          >
            Meet the dedicated educators and administrators who shape the future
            of every student at AIIMES.
          </p>
        </motion.div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member, i) => (
            <StaffCard key={i} member={member} index={i} inView={inView} />
          ))}
        </div>

        {/* ── FOOTER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/[0.06]"
        >
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div
                className="text-3xl font-bold text-white"
              >
                60<span style={{ color: "#dc2626" }}>+</span>
              </div>
              <div
                className="text-gray-600 text-xs uppercase tracking-widest mt-1"
              >
                Expert Faculty
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div
                className="text-3xl font-bold text-white"
              >
                18<span style={{ color: "#dc2626" }}>+</span>
              </div>
              <div
                className="text-gray-600 text-xs uppercase tracking-widest mt-1"
              >
                Departments
              </div>
            </div>
          </div>

          <button
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
            style={{
background: "#dc2626",        boxShadow: "0 4px 24px rgba(220,38,38,0.35)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 10px 36px rgba(200,16,46,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(200,16,46,0.35)";
            }}
          >
            Meet All Faculty
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="16" height="16" viewBox="0 0 16 16" fill="none"
            >
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}