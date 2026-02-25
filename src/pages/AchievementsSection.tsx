// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// export default function AchievementsSection() {
//   const { ref: sectionRef, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const { ref: statsRef, inView: statsInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.15,
//   });

//   const stats = [
//     { 
//       number: 900, 
//       suffix: "+", 
//       label: "Students Enrolled",
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
//           <circle cx="9" cy="7" r="4"/>
//           <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
//           <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//         </svg>
//       )
//     },
//     { 
//       number: 60, 
//       suffix: "+", 
//       label: "Expert Teachers",
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
//           <path d="M6 12v5c3 3 9 3 12 0v-5"/>
//         </svg>
//       )
//     },
//     { 
//       number: 40, 
//       suffix: "+", 
//       label: "Quality Courses",
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
//           <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
//         </svg>
//       )
//     },
//     { 
//       number: 95, 
//       suffix: "%", 
//       label: "Success Rate",
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
//           <polyline points="22 4 12 14.01 9 11.01"/>
//         </svg>
//       )
//     },
//   ];

//   return (
//     <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden py-10">
      
//       {/* Animated Background Decorations */}
//       <motion.div 
//         className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"
//         animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div 
//         className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30"
//         animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />
      
//       {/* Floating Particles */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-red-400/20"
//           style={{ left: `${15 + i * 12}%`, top: `${20 + i * 8}%` }}
//           animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
//           transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
//         />
//       ))}

//       <div className="relative w-full px-2 sm:px-4 lg:px-6 xl:px-8">
        
//         {/* Header Section */}
//         <div className="grid md:grid-cols-2 gap-16 mb-20">
//           {/* LEFT */}
//           <motion.div
//             ref={sectionRef}
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <motion.span
//                 className="block h-px bg-red-600"
//                 initial={{ width: 0 }}
//                 animate={inView ? { width: 32 } : {}}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//               />
//               <p className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold">
//                 Our Achievements
//               </p>
//             </div>

//             <h2 className="font-black leading-tight text-gray-900 text-4xl sm:text-5xl md:text-7xl">
//               Built on{" "}
//               <span className="text-red-600">Trust</span>
//               <br />& Academic Excellence
//             </h2>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             className="flex flex-col justify-end"
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
//           >
//             <div className="relative pl-6 border-l-2 border-red-600">
//               <p className="text-gray-700 text-lg leading-relaxed mb-4">
//                 Building trust through excellence in education and student success since 2009.
//               </p>
//               <p className="text-sm text-gray-500 uppercase tracking-wider">
//                 Est. 2009 • New Delhi, India
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Stats Cards */}
//         <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={statsInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//               className="group relative rounded-2xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
//               style={{
//                 background: "linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)",
//               }}
//             >
//               {/* Subtle Hover Gradient */}
//               <div 
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 style={{
//                   background: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
//                 }}
//               />

//               {/* Icon */}
//               <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm">
//                 {stat.icon}
//               </div>

//               {/* Number */}
//               <div className="relative mb-4">
//                 <h3 className="text-5xl font-black text-gray-900 transition-colors duration-300">
//                   {statsInView && (
//                     <CountUp
//                       start={0}
//                       end={stat.number}
//                       duration={2.5}
//                       separator=","
//                       delay={index * 0.2}
//                     />
//                   )}
//                   <span className="text-red-600">{stat.suffix}</span>
//                 </h3>
                
//                 {/* Animated underline */}
//                 <motion.div
//                   className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"
//                   initial={{ width: 0 }}
//                   animate={statsInView ? { width: "60%" } : {}}
//                   transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
//                 />
//               </div>

//               {/* Label */}
//               <p className="relative text-gray-600 font-semibold text-sm uppercase tracking-wider transition-colors duration-300">
//                 {stat.label}
//               </p>

//               {/* Corner Accent */}
//               <div className="absolute top-0 right-0 w-16 h-16 bg-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
              
//               {/* Pulsing Dot */}
//               <motion.div
//                 className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-red-600"
//                 animate={statsInView ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
//                 transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={statsInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.97 }}
//             className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-200 relative overflow-hidden"
//             style={{
//               background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
//             }}
//           >
//             {/* Animated Gradient Overlay */}
//             <motion.div
//               className="absolute inset-0"
//               style={{
//                 background: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
//               }}
//               animate={{
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
            
//             <span className="relative z-10">View All Achievements</span>
//             <motion.svg 
//               className="relative z-10"
//               width="16" 
//               height="16" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2.5" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               animate={{ x: [0, 5, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"/>
//             </motion.svg>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const stats = [
    {
      number: 900,
      suffix: "+",
      label: "Students Enrolled",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      number: 60,
      suffix: "+",
      label: "Expert Teachers",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      number: 40,
      suffix: "+",
      label: "Quality Courses",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
    },
    {
      number: 95,
      suffix: "%",
      label: "Success Rate",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden py-16 md:py-24">

      {/* BG blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30 pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-red-400/20 pointer-events-none"
          style={{ left: `${15 + i * 12}%`, top: `${20 + i * 8}%` }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      {/* ── CONTAINER — same padding as HeroSection ── */}
      <div className="relative w-full px-6 md:px-12 lg:px-20">

        {/* ── HEADER ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-20">

          {/* LEFT */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.span
                className="block h-px bg-red-600"
                initial={{ width: 0 }}
                animate={inView ? { width: 32 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <p className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold">
                Our Achievements
              </p>
            </div>

            <h2 className="font-black leading-[1.05] text-gray-900 text-4xl sm:text-5xl md:text-7xl"
              style={{ letterSpacing: "0.02em" }}>
              Built on{" "}
              <span className="text-red-600">Trust {" "}</span>
              & {" "} Academic Excellence
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex flex-col justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          >
            <div className="relative pl-6 border-l-2 border-red-600">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Building trust through excellence in education and student success since 2009.
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                Est. 2009 • New Delhi, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── STATS CARDS ── */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)" }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)" }}
              />

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="relative mb-4">
                <h3 className="text-5xl font-black text-gray-900">
                  {statsInView && (
                    <CountUp start={0} end={stat.number} duration={2.5} separator="," delay={index * 0.2} />
                  )}
                  <span className="text-red-600">{stat.suffix}</span>
                </h3>
                <motion.div
                  className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"
                  initial={{ width: 0 }}
                  animate={statsInView ? { width: "60%" } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
              </div>

              {/* Label */}
              <p className="relative text-gray-600 font-semibold text-sm uppercase tracking-wider">
                {stat.label}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />

              {/* Pulsing dot */}
              <motion.div
                className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-red-600"
                animate={statsInView ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-200 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)" }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)" }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">View All Achievements</span>
            <motion.svg
              className="relative z-10"
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </motion.svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}