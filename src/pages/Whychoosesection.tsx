// // "use client";
// // import { useInView } from "react-intersection-observer";
// // import { motion } from "framer-motion";

// // const reasons = [
// //   {
// //     num: "01",
// //     icon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
// //       </svg>
// //     ),
// //     title: "UGC Recognised Institute",
// //     desc: "Fully approved and recognised by UGC, ensuring your degree holds national and international credibility.",
// //   },
// //   {
// //     num: "02",
// //     icon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
// //       </svg>
// //     ),
// //     title: "Industry-Expert Faculty",
// //     desc: "Learn from 60+ experienced educators with deep industry knowledge and real-world expertise.",
// //   },
// //   {
// //     num: "03",
// //     icon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
// //       </svg>
// //     ),
// //     title: "900+ Student Community",
// //     desc: "Join a thriving network of students, alumni, and professionals building careers across India.",
// //   },
// //   {
// //     num: "04",
// //     icon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
// //       </svg>
// //     ),
// //     title: "Practical Learning Approach",
// //     desc: "Case studies, live projects, and industry visits that go beyond textbooks to prepare you for the real world.",
// //   },
// //   {
// //     num: "05",
// //     icon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
// //       </svg>
// //     ),
// //     title: "Flexible Program Options",
// //     desc: "Choose from full-time, part-time, and online certifications designed to fit your life and schedule.",
// //   },
// //   {
// //     num: "06",
// //     icon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //       </svg>
// //     ),
// //     title: "Proven Track Record",
// //     desc: "Since 2009, we have maintained excellence in education with thousands of satisfied students and alumni.",
// //   },
// // ];

// // export default function WhyChooseSection() {
// //   const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.2 });
// //   const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.1 });
// //   const { ref: bannerRef, inView: bannerInView } = useInView({ triggerOnce: true, threshold: 0.3 });

// //   return (
// //     <section className="bg-white overflow-hidden">

// //       {/* ── HEADER ── */}
// //       <div ref={headRef} className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">

// //         <div className="flex items-center justify-center gap-3 mb-5">
// //           <motion.span
// //             className="block h-px bg-red-600"
// //             initial={{ width: 0 }}
// //             animate={headInView ? { width: 32 } : {}}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           />
// //           <motion.p
// //             className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold"
// //             initial={{ opacity: 0 }}
// //             animate={headInView ? { opacity: 1 } : {}}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           >
// //             Why Choose Us
// //           </motion.p>
// //           <motion.span
// //             className="block h-px bg-red-600"
// //             initial={{ width: 0 }}
// //             animate={headInView ? { width: 32 } : {}}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           />
// //         </div>

// //         <motion.h2
// //           className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={headInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.65, delay: 0.3 }}
// //         >
// //           The <span className="text-red-600">AIIMES</span> Advantage
// //         </motion.h2>

// //         <motion.p
// //           className="mt-5 text-gray-500 text-sm leading-relaxed max-w-xl mx-auto"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={headInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6, delay: 0.45 }}
// //         >
// //           We don't just offer degrees — we build futures. Here's what sets AIIMES apart
// //           from every other institution.
// //         </motion.p>

// //         {/* Animated divider */}
// //         <motion.div
// //           className="h-1 bg-red-600 mx-auto mt-6 origin-center"
// //           initial={{ scaleX: 0 }}
// //           animate={headInView ? { scaleX: 1 } : {}}
// //           transition={{ duration: 0.6, delay: 0.5 }}
// //           style={{ width: 48 }}
// //         />
// //       </div>

// //       {/* ── GRID ── */}
// //       <div ref={gridRef} className="max-w-7xl mx-auto px-6 pb-24">
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
// //           {reasons.map((item, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 40 }}
// //               animate={gridInView ? { opacity: 1, y: 0 } : {}}
// //               transition={{
// //                 duration: 0.55,
// //                 delay: index * 0.1,
// //                 ease: "easeOut",
// //               }}
// //               whileHover={{ backgroundColor: "#fff7f7" }}
// //               className="group bg-white p-8 relative overflow-hidden cursor-default transition-colors duration-300"
// //             >
// //               {/* Hover red corner accent */}
// //               <motion.span
// //                 className="absolute top-0 left-0 w-0 h-0.5 bg-red-600"
// //                 initial={{ width: 0 }}
// //                 whileHover={{ width: "100%" }}
// //                 transition={{ duration: 0.35, ease: "easeInOut" }}
// //               />

// //               {/* Number */}
// //               <motion.p
// //                 className="text-xs tracking-[0.25em] font-bold mb-5 transition-colors duration-300"
// //                 style={{ color: "#d1d5db" }}
// //                 whileHover={{ color: "#dc2626" }}
// //               >
// //                 {item.num}
// //               </motion.p>

// //               {/* Icon */}
// //               <motion.div
// //                 className="text-gray-300 mb-5 group-hover:text-red-600 transition-colors duration-300"
// //                 whileHover={{ scale: 1.1, rotate: -5 }}
// //                 transition={{ type: "spring", stiffness: 300 }}
// //               >
// //                 {item.icon}
// //               </motion.div>

// //               {/* Title */}
// //               <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-red-600 transition-colors duration-300">
// //                 {item.title}
// //               </h3>

// //               {/* Desc */}
// //               <p className="text-sm text-gray-500 leading-relaxed">
// //                 {item.desc}
// //               </p>

// //               {/* Subtle background number watermark */}
// //               <span className="absolute bottom-4 right-5 text-6xl font-black text-gray-50 select-none pointer-events-none leading-none group-hover:text-red-50 transition-colors duration-300">
// //                 {item.num}
// //               </span>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* ── BOTTOM BANNER ── */}
// //       <div ref={bannerRef} className="bg-red-600 overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">

// //           <motion.div
// //             initial={{ opacity: 0, x: -40 }}
// //             animate={bannerInView ? { opacity: 1, x: 0 } : {}}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //           >
// //             <p className="uppercase tracking-[0.25em] text-red-200 text-xs font-semibold mb-3">
// //               Start Your Journey
// //             </p>
// //             <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
// //               Ready to shape your future<br className="hidden md:block" /> with AIIMES?
// //             </h3>
// //           </motion.div>

// //           <motion.div
// //             className="flex gap-4 flex-wrap"
// //             initial={{ opacity: 0, x: 40 }}
// //             animate={bannerInView ? { opacity: 1, x: 0 } : {}}
// //             transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
// //           >
// //             <motion.button
// //               whileHover={{ scale: 1.05, backgroundColor: "#f9f9f9" }}
// //               whileTap={{ scale: 0.97 }}
// //               className="px-8 py-4 bg-white text-red-600 font-bold text-sm uppercase tracking-widest rounded-md transition-colors duration-200"
// //             >
// //               Enroll Now
// //             </motion.button>
// //             <motion.button
// //               whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
// //               whileTap={{ scale: 0.97 }}
// //               className="px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-widest rounded-md transition-colors duration-200"
// //             >
// //               Know More
// //             </motion.button>
// //           </motion.div>

// //         </div>
// //       </div>

// //     </section>
// //   );
// // }

// "use client";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// const reasons = [
//   {
//     num: "01",
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//         <path d="M6 12v5c3 3 9 3 12 0v-5" />
//       </svg>
//     ),
//     title: "UGC Recognised Institute",
//     desc: "Fully approved and recognised by UGC, ensuring your degree holds national and international credibility.",
//   },
//   {
//     num: "02",
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="7" width="20" height="14" rx="2" />
//         <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
//         <line x1="12" y1="12" x2="12" y2="16" />
//         <line x1="10" y1="14" x2="14" y2="14" />
//       </svg>
//     ),
//     title: "Industry-Expert Faculty",
//     desc: "Learn from 60+ experienced educators with deep industry knowledge and real-world expertise.",
//   },
//   {
//     num: "03",
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//       </svg>
//     ),
//     title: "900+ Student Community",
//     desc: "Join a thriving network of students, alumni, and professionals building careers across India.",
//   },
//   {
//     num: "04",
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//       </svg>
//     ),
//     title: "Practical Learning Approach",
//     desc: "Case studies, live projects, and industry visits that go beyond textbooks to prepare you for the real world.",
//   },
//   {
//     num: "05",
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="12 6 12 12 16 14" />
//       </svg>
//     ),
//     title: "Flexible Program Options",
//     desc: "Choose from full-time, part-time, and online certifications designed to fit your life and schedule.",
//   },
//   {
//     num: "06",
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//       </svg>
//     ),
//     title: "Proven Track Record",
//     desc: "Since 2009, we have maintained excellence in education with thousands of satisfied students and alumni.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: i * 0.1,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function WhyChooseSection() {
//   const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.05 });
//   const { ref: bannerRef, inView: bannerInView } = useInView({ triggerOnce: true, threshold: 0.3 });

//   return (
//     <section className="bg-white overflow-hidden py-32">

//       {/* ── HEADER ── */}
//       <div ref={headRef} className="w-full  px-32 py-10 text-center">

//         {/* Eyebrow */}
//         <div className="flex items-center justify-center gap-3 mb-5">
//           <motion.span
//             className="block h-px bg-red-600"
//             initial={{ width: 0, opacity: 0 }}
//             animate={headInView ? { width: 32, opacity: 1 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           />
//           <motion.p
//             className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold"
//             initial={{ opacity: 0 }}
//             animate={headInView ? { opacity: 1 } : {}}
//             transition={{ duration: 0.4, delay: 0.25 }}
//           >
//             Why Choose Us
//           </motion.p>
//           <motion.span
//             className="block h-px bg-red-600"
//             initial={{ width: 0, opacity: 0 }}
//             animate={headInView ? { width: 32, opacity: 1 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           />
//         </div>

//         {/* Title */}
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
//           initial={{ opacity: 0, y: 30 }}
//           animate={headInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.65, delay: 0.3 }}
//         >
//           The <span className="text-red-600">AIIMES</span> Advantage
//         </motion.h2>

//         {/* Subtitle */}
//         <motion.p
//           className="mt-5 text-gray-500 text-sm leading-relaxed max-w-xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={headInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.42 }}
//         >
//           We don't just offer degrees — we build futures. Here's what sets AIIMES apart
//           from every other institution.
//         </motion.p>

//         {/* Red divider */}
//         <motion.div
//           className="h-1 bg-red-600 mx-auto mt-6 origin-center"
//           initial={{ scaleX: 0 }}
//           animate={headInView ? { scaleX: 1 } : {}}
//           transition={{ duration: 0.55, delay: 0.5 }}
//           style={{ width: 48 }}
//         />
//       </div>

//       {/* ── GRID ── */}
//       <div ref={gridRef} className="w-full px-32  pb-24">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
//           {reasons.map((item, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               animate={gridInView ? "visible" : "hidden"}
//               whileHover={{ backgroundColor: "#fff7f7", y: -4 }}
//               transition={{ duration: 0.25 }}
//               className="group bg-white p-8 relative overflow-hidden cursor-default"
//             >
//               {/* Top sweep line on hover */}
//               <motion.span
//                 className="absolute top-0 left-0 h-0.5 bg-red-600"
//                 initial={{ width: 0 }}
//                 whileHover={{ width: "100%" }}
//                 transition={{ duration: 0.35, ease: "easeInOut" }}
//               />

//               {/* Number */}
//               <motion.p
//                 className="text-xs tracking-[0.25em] font-bold text-gray-300 mb-5 group-hover:text-red-600 transition-colors duration-300"
//               >
//                 {item.num}
//               </motion.p>

//               {/* Icon — always red, bounces on hover */}
//               <motion.div
//                 className="text-red-600 mb-5"
//                 whileHover={{ scale: 1.15, rotate: -8 }}
//                 transition={{ type: "spring", stiffness: 350, damping: 12 }}
//               >
//                 {item.icon}
//               </motion.div>

//               {/* Title */}
//               <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-red-600 transition-colors duration-300">
//                 {item.title}
//               </h3>

//               {/* Desc */}
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 {item.desc}
//               </p>

//               {/* Watermark number */}
//               <span className="absolute bottom-1 right-4 text-6xl font-black text-gray-200 select-none pointer-events-none leading-none group-hover:text-red-500 transition-colors duration-300">
//                 {item.num}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── BOTTOM BANNER ── */}
//       <div ref={bannerRef} className="bg-red-600 overflow-hidden relative">

//         {/* Decorative animated circles */}
//         <motion.div
//           className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-red-500 opacity-40"
//           animate={{ scale: [1, 1.08, 1] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-red-700 opacity-30"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//         />

//         <div className="relative w-full px-32  py-16 flex flex-col md:flex-row items-center justify-between gap-8">

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={bannerInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <p className="uppercase tracking-[0.25em] text-red-200 text-xs font-semibold mb-3">
//               Start Your Journey
//             </p>
//             <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
//               Ready to shape your future<br className="hidden md:block" /> with AIIMES?
//             </h3>
//           </motion.div>

//           <motion.div
//             className="flex gap-4 flex-wrap"
//             initial={{ opacity: 0, x: 40 }}
//             animate={bannerInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.96 }}
//               className="px-8 py-4 bg-white text-red-600 font-bold text-sm uppercase tracking-widest rounded-md shadow-md"
//             >
//               Enroll Now
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
//               whileTap={{ scale: 0.96 }}
//               className="px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-widest rounded-md transition-colors duration-200"
//             >
//               Know More
//             </motion.button>
//           </motion.div>

//         </div>
//       </div>

//     </section>
//   );
// }

"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const reasons = [
  {
    num: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "UGC Recognised Institute",
    desc: "Fully approved and recognised by UGC, ensuring your degree holds national and international credibility.",
  },
  {
    num: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Industry-Expert Faculty",
    desc: "Learn from 60+ experienced educators with deep industry knowledge and real-world expertise.",
  },
  {
    num: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "900+ Student Community",
    desc: "Join a thriving network of students, alumni, and professionals building careers across India.",
  },
  {
    num: "04",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Practical Learning Approach",
    desc: "Case studies, live projects, and industry visits that go beyond textbooks to prepare you for the real world.",
  },
  {
    num: "05",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Flexible Program Options",
    desc: "Choose from full-time, part-time, and online certifications designed to fit your life and schedule.",
  },
  {
    num: "06",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Proven Track Record",
    desc: "Since 2009, we have maintained excellence in education with thousands of satisfied students and alumni.",
  },
];

function ReasonCard({ item, index, gridInView }: { item: typeof reasons[0]; index: number; gridInView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 50 }}
      animate={gridInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-default"
      style={{
        background: hovered ? "#0a0a0a" : "white",
        transition: "background 0.4s cubic-bezier(0.22,1,0.36,1)",
        padding: "48px 40px",
        minHeight: 300,
      }}
    >
      {/* Red top border wipe */}
      <motion.span
        className="absolute top-0 left-0 h-0.5 bg-red-600"
        animate={{ width: hovered ? "100%" : 0 }}
        transition={{ duration: 0.38, ease: "easeInOut" }}
      />

      {/* Red corner triangle */}
      <motion.span
        className="absolute top-0 right-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 32px 32px 0",
          borderColor: "transparent #dc2626 transparent transparent",
        }}
      />

      {/* Watermark number */}
      <span
        className="absolute bottom-2 right-5 text-7xl font-black select-none pointer-events-none leading-none"
        style={{
          color: hovered ? "rgba(220,38,38,0.08)" : "rgba(0,0,0,0.04)",
          transition: "color 0.4s ease",
        }}
      >
        {item.num}
      </span>

      {/* Number */}
      <p
        className="text-xs tracking-[0.25em] font-bold mb-6"
        style={{
          color: hovered ? "rgba(255,255,255,0.25)" : "#d1d5db",
          transition: "color 0.35s ease",
        }}
      >
        {item.num}
      </p>

      {/* Icon box */}
      <motion.div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        animate={{
          background: hovered ? "#dc2626" : "rgba(220,38,38,0.07)",
          color: hovered ? "#fff" : "#dc2626",
        }}
        transition={{ duration: 0.35 }}
        style={{ border: `1px solid ${hovered ? "#dc2626" : "rgba(220,38,38,0.2)"}` }}
        whileHover={{ scale: 1.1, rotate: -6 }}
      >
        {item.icon}
      </motion.div>

      {/* Title */}
      <h3
        className="text-lg font-bold mb-3 leading-snug"
        style={{
          color: hovered ? "#ffffff" : "#111827",
          transition: "color 0.35s ease",
        }}
      >
        {item.title}
      </h3>

      {/* Divider */}
      <div
        className="h-px mb-4 w-12"
        style={{
          background: hovered ? "rgba(220,38,38,0.6)" : "#f0f0f0",
          transition: "background 0.35s ease",
        }}
      />

      {/* Desc */}
      <p
        className="text-sm leading-relaxed"
        style={{
          color: hovered ? "rgba(255,255,255,0.55)" : "#6b7280",
          transition: "color 0.35s ease",
        }}
      >
        {item.desc}
      </p>

      {/* Pulsing red dot — bottom left */}
      <motion.span
        className="absolute bottom-6 left-10 w-1.5 h-1.5 rounded-full bg-red-600"
        animate={
          gridInView
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
}

export default function WhyChooseSection() {
  const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: bannerRef, inView: bannerInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-white overflow-hidden py-32">

      {/* ── HEADER ── */}
      <div ref={headRef} className="w-full px-32 py-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <motion.span
            className="block h-px bg-red-600"
            initial={{ width: 0, opacity: 0 }}
            animate={headInView ? { width: 32, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold"
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            Why Choose Us
          </motion.p>
          <motion.span
            className="block h-px bg-red-600"
            initial={{ width: 0, opacity: 0 }}
            animate={headInView ? { width: 32, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3 }}
        >
          The <span className="text-red-600">AIIMES</span> Advantage
        </motion.h2>

        <motion.p
          className="mt-5 text-gray-500 text-sm leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          We don't just offer degrees — we build futures. Here's what sets AIIMES apart
          from every other institution.
        </motion.p>

        <motion.div
          className="h-1 bg-red-600 mx-auto mt-6 origin-center"
          initial={{ scaleX: 0 }}
          animate={headInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
          style={{ width: 48 }}
        />
      </div>

      {/* ── GRID ── */}
      <div ref={gridRef} className="w-full px-32 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {reasons.map((item, index) => (
            <ReasonCard key={index} item={item} index={index} gridInView={gridInView} />
          ))}
        </div>
      </div>

      {/* ── BOTTOM BANNER ── */}
      <div ref={bannerRef} className="bg-red-600 overflow-hidden relative">
        <motion.div
          className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-red-500 opacity-40"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-red-700 opacity-30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <div className="relative w-full px-32 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={bannerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="uppercase tracking-[0.25em] text-red-200 text-xs font-semibold mb-3">
              Start Your Journey
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to shape your future<br className="hidden md:block" /> with AIIMES?
            </h3>
          </motion.div>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={bannerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-white text-red-600 font-bold text-sm uppercase tracking-widest rounded-md shadow-md"
            >
              Enroll Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-widest rounded-md transition-colors duration-200"
            >
              Know More
            </motion.button>
          </motion.div>
        </div>
      </div>

    </section>
  );
}