// "use client";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// const reasons = [
//   {
//     num: "01",
//     icon: (
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//       </svg>
//     ),
//     title: "Practical Learning Approach",
//     desc: "Case studies, live projects, and industry visits that go beyond textbooks to prepare you for the real world.",
//   },
//   {
//     num: "05",
//     icon: (
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//       </svg>
//     ),
//     title: "Proven Track Record",
//     desc: "Since 2009, we have maintained excellence in education with thousands of satisfied students and alumni.",
//   },
// ];

// export default function WhyChooseSection() {
//   const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.05 });
//   const { ref: bannerRef, inView: bannerInView } = useInView({ triggerOnce: true, threshold: 0.3 });

//   return (
//     <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden py-10">
      
//       {/* Background Decorations */}
//       <motion.div 
//         className="absolute top-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"
//         animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div 
//         className="absolute bottom-20 left-10 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-30"
//         animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative w-full px-32 ">
        
//         {/* Header */}
//         <div ref={headRef} className="text-center mb-16">
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <motion.span
//               className="block h-px bg-red-600"
//               initial={{ width: 0 }}
//               animate={headInView ? { width: 32 } : {}}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             />
//             <motion.p
//               className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold"
//               initial={{ opacity: 0 }}
//               animate={headInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.4, delay: 0.25 }}
//             >
//               Why Choose Us
//             </motion.p>
//             <motion.span
//               className="block h-px bg-red-600"
//               initial={{ width: 0 }}
//               animate={headInView ? { width: 32 } : {}}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             />
//           </div>

//           <motion.h2
//             className="font-black text-gray-900 leading-tight mb-4 text-4xl sm:text-5xl md:text-6xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={headInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.65, delay: 0.3 }}
//           >
//             The <span className="text-red-600">AIIMES</span> Advantage
//           </motion.h2>

//           <motion.p
//             className="text-gray-600 text-lg max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={headInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.42 }}
//           >
//             We don't just offer degrees — we build futures. Here's what sets AIIMES apart from every other institution.
//           </motion.p>
//         </div>

//         {/* Cards Grid */}
//         <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
//           {reasons.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={gridInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//               className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:bg-black hover:border-black hover:shadow-2xl transition-all duration-300 overflow-hidden"
//             >
//               {/* Number Badge */}
//               <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-red-50 group-hover:bg-red-600 flex items-center justify-center transition-all duration-300">
//                 <span className="font-black text-red-600 group-hover:text-white text-sm transition-colors duration-300">{item.num}</span>
//               </div>

//               {/* Icon */}
//               <div className="relative w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="relative text-xl font-black text-gray-900 group-hover:text-white mb-3 leading-tight transition-colors duration-300">
//                 {item.title}
//               </h3>

//               {/* Divider */}
//               <motion.div
//                 className="h-1 bg-red-600 rounded-full mb-4"
//                 initial={{ width: 0 }}
//                 animate={gridInView ? { width: "50px" } : {}}
//                 transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
//               />

//               {/* Description */}
//               <p className="relative text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
//                 {item.desc}
//               </p>

//               {/* Bottom Border on Hover */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
//               {/* Pulsing Dot */}
//               <motion.div
//                 className="absolute bottom-6 left-8 w-2 h-2 rounded-full bg-red-600"
//                 animate={gridInView ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
//                 transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom CTA Banner */}
//         <motion.div
//           ref={bannerRef}
//           initial={{ opacity: 0, y: 30 }}
//           animate={bannerInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="relative rounded-3xl p-12 overflow-hidden"
//           style={{
//             background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
//           }}
//         >
//           {/* Animated Background Blobs */}
//           <motion.div
//             className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-red-500 opacity-30"
//             animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-red-700 opacity-20"
//             animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           />

//           <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
//             <div>
//               <p className="uppercase tracking-[0.25em] text-red-100 text-xs font-bold mb-3">
//                 Start Your Journey
//               </p>
//               <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
//                 Ready to shape your future<br className="hidden md:block" /> with AIIMES?
//               </h3>
//             </div>

//             <div className="flex gap-4 flex-wrap">
//               <motion.button
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="px-8 py-4 bg-white text-red-600 font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg"
//               >
//                 Enroll Now
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/10 transition-colors duration-300"
//               >
//                 Know More
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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

export default function WhyChooseSection() {
  const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: bannerRef, inView: bannerInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden py-10 sm:py-14 md:py-16">

      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-red-100 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-52 sm:w-80 h-52 sm:h-80 bg-red-50 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Container — responsive horizontal padding */}
      <div className="relative w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32">

        {/* Header */}
        <div ref={headRef} className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <motion.span
              className="block h-px bg-red-600"
              initial={{ width: 0 }}
              animate={headInView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.p
              className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={headInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              Why Choose Us
            </motion.p>
            <motion.span
              className="block h-px bg-red-600"
              initial={{ width: 0 }}
              animate={headInView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>

          <motion.h2
            className="font-black text-gray-900 leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            The <span className="text-red-600">AIIMES</span> Advantage
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.42 }}
          >
            We don't just offer degrees — we build futures. Here's what sets AIIMES apart from every other institution.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-200 hover:bg-black hover:border-black hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Number Badge */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-50 group-hover:bg-red-600 flex items-center justify-center transition-all duration-300">
                <span className="font-black text-red-600 group-hover:text-white text-xs sm:text-sm transition-colors duration-300">{item.num}</span>
              </div>

              {/* Icon */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-4 sm:mb-6 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-lg sm:text-xl font-black text-gray-900 group-hover:text-white mb-3 leading-tight transition-colors duration-300">
                {item.title}
              </h3>

              {/* Divider */}
              <motion.div
                className="h-1 bg-red-600 rounded-full mb-3 sm:mb-4"
                initial={{ width: 0 }}
                animate={gridInView ? { width: "50px" } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              />

              {/* Description */}
              <p className="relative text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                {item.desc}
              </p>

              {/* Bottom Border on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Pulsing Dot */}
              <motion.div
                className="absolute bottom-5 left-6 sm:bottom-6 sm:left-8 w-2 h-2 rounded-full bg-red-600"
                animate={gridInView ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          ref={bannerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={bannerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)" }}
        >
          {/* Animated Background Blobs */}
          <motion.div
            className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-red-500 opacity-30"
            animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-red-700 opacity-20"
            animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            <div>
              <p className="uppercase tracking-[0.25em] text-red-100 text-xs font-bold mb-2 sm:mb-3">
                Start Your Journey
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                Ready to shape your future<br className="hidden md:block" /> with AIIMES?
              </h3>
            </div>

            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                Know More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}