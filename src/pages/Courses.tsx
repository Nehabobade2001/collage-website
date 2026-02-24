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
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-red-50 border border-red-100"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-red-600 text-xs font-bold uppercase tracking-wider">Academic Programs</span>
          </motion.div>

          <motion.h2
            className="font-black text-gray-900 mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our <span className="text-red-600">Courses</span> & Programs
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore UGC-recognised programs crafted for real-world careers in management and engineering.
          </motion.p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {courses.map((course, i) => (
            <motion.div
              key={course.abbr}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <span className="font-black text-red-600 text-lg">{course.number}</span>
              </div>

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {course.icon}
              </div>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100 mb-4">
                {course.category}
              </span>

              {/* Title */}
              <h3 className="font-black text-gray-900 text-2xl mb-3 group-hover:text-red-600 transition-colors duration-300">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {course.desc}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</p>
                  <p className="font-bold text-gray-900">{course.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Intake</p>
                  <p className="font-bold text-gray-900">{course.intake}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Mode</p>
                  <p className="font-bold text-gray-900">{course.mode}</p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wider bg-gray-900 text-white group-hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Details
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats & CTA */}
        <motion.div
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Stats */}
            <div className="flex items-center gap-12">
              {[
                { value: "40+", label: "Programs" },
                { value: "900+", label: "Students" },
                { value: "UGC", label: "Recognised" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-black text-4xl mb-1">{stat.value}</div>
                  <div className="text-red-100 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white text-red-600 font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2"
            >
              Explore All Programs
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
