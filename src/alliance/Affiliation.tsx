// // "use client";

// // import { motion } from "framer-motion";
// // import AboutPageBanner from "../about/AboutPageBanner";

// // export default function Affiliation() {
// //   const affiliations = [
// //     {
// //       title: "Ministry of Labour & Employment, Government of India",
// //       logo: "/ministry.png",
// //     },
// //     {
// //       title: "Ministry of Directorate General of Training",
// //       logo: "/dgt.png",
// //     },
// //     {
// //       title: "Ministry of Micro, Small and Medium Enterprises (MSME)",
// //       logo: "/msme.png",
// //     },
// //     {
// //       title: "Govt. of India Regd.",
// //       logo: "/aiimes-regd.jpg",
// //     },
// //     {
// //       title: "Skill India",
// //       logo: "/skill-india.png",
// //     },
// //     {
// //       title: "DAC (Distance Accreditation Council)",
// //       logo: "/dac-logo.jpeg",
// //     },
// //   ];

// //   return (
// //     <>
// //     <AboutPageBanner title="AFFILIATION" breadcrumbLabel="Affiliation" />
// //     <section className="relative py-16 overflow-hidden" style={{ background: "#f8fafc" }}>
// //       <div
// //         className="absolute inset-0 pointer-events-none"
// //         style={{
// //           backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
// //           backgroundSize: "26px 26px",
// //         }}
// //       />

// //       <div className="relative w-full px-6 lg:px-20">
// //         <div className="text-center mb-10">
// //           <motion.h2
// //             className="leading-tight font-black text-gray-900 leading-tight text-4xl sm:text-5xl md:text-7xl mb-1"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.1 }}
// //           >
// //             Official <span className="text-red-600">            Affiliations
// // </span>
// //           </motion.h2>
       
// //           <motion.div
// //             className="h-px mx-auto"
// //             style={{ width: 72, background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }}
// //             initial={{ scaleX: 0 }}
// //             animate={{ scaleX: 1 }}
// //             transition={{ duration: 0.45, delay: 0.22 }}
// //           />
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
// //           {affiliations.map((item, i) => (
// //             <motion.div
// //               key={item.title}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.45, delay: i * 0.06 }}
// //               whileHover={{ y: -4, boxShadow: "0 10px 26px rgba(15,23,42,0.14)" }}
// //               className="relative rounded-2xl min-h-[220px] p-6 flex flex-col items-center justify-center text-center overflow-hidden"
// //               style={{
// //                 background: "#ffffff",
// //                 border: "1px solid rgba(226,232,240,1)",
// //                 boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
// //               }}
// //             >
// //               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg,#ef4444,transparent)" }} />
// //               <div className="h-[72px] flex items-center justify-center mb-4">
// //                 <img src={item.logo} alt={item.title} className="max-h-[72px] w-auto object-contain" />
// //               </div>
// //               <p className="text-[16px] leading-snug text-gray-900 max-w-[310px]">{item.title}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //     </>
// //   );
// // }
// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Award, ExternalLink } from "lucide-react";
// import AboutPageBanner from "../about/AboutPageBanner";

// export default function Affiliation() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   const affiliations = [
//     {
//       title: "Ministry of Labour & Employment, Government of India",
//       logo: "/ministry.png",
//       tag: "Govt. of India",
//       color: "#b91c1c",
//     },
//     {
//       title: "Ministry of Directorate General of Training",
//       logo: "/dgt.png",
//       tag: "DGT",
//       color: "#991b1b",
//     },
//     {
//       title: "Ministry of Micro, Small and Medium Enterprises (MSME)",
//       logo: "/msme.png",
//       tag: "MSME",
//       color: "#7f1d1d",
//     },
//     {
//       title: "Govt. of India Regd.",
//       logo: "/aiimes-regd.jpg",
//       tag: "Registered",
//       color: "#b91c1c",
//     },
//     {
//       title: "Skill India",
//       logo: "/skill-india.png",
//       tag: "Skill Development",
//       color: "#991b1b",
//     },
//     {
//       title: "DAC (Distance Accreditation Council)",
//       logo: "/dac-logo.jpeg",
//       tag: "Accreditation",
//       color: "#7f1d1d",
//     },
//   ];

//   return (
//     <>
//       <AboutPageBanner title="AFFILIATION" breadcrumbLabel="Affiliation" />

//       <section
//         ref={ref}
//         className="relative pt-8 sm:pt-10 pb-14 sm:pb-20 overflow-hidden"
//         style={{ background: "#f8fafc" }}
//       >
//         {/* BG grid */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
//             backgroundSize: "26px 26px",
//           }}
//         />

//         {/* Glows */}
//         <div
//           className="absolute -top-32 left-1/3 w-96 h-96 rounded-full pointer-events-none"
//           style={{
//             background: "radial-gradient(circle,rgba(220,38,38,0.08) 0%,transparent 65%)",
//             filter: "blur(60px)",
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(circle,rgba(220,38,38,0.06) 0%,transparent 70%)" }}
//           animate={{ scale: [1, 1.12, 1] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="relative w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32">

//           {/* ── HEADER ── */}
//           <div className="text-center mb-10 sm:mb-14">
//             <motion.div
//               className="flex items-center justify-center gap-3 mb-4"
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.4 }}
//             >
//               <motion.span
//                 className="h-px bg-red-600"
//                 initial={{ width: 0 }}
//                 animate={inView ? { width: 32 } : {}}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//               />
//               <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">
//                 Official Partners
//               </span>
//               <motion.span
//                 className="h-px bg-red-600"
//                 initial={{ width: 0 }}
//                 animate={inView ? { width: 32 } : {}}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//               />
//             </motion.div>

//             <motion.h2
//               className="font-black text-slate-900 leading-tight mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.55, delay: 0.15 }}
//             >
//               Official{" "}
//               <span style={{ color: "#ef4444" }}>Affiliations</span>
//             </motion.h2>

//             <motion.p
//               className="text-sm max-w-xl mx-auto px-2"
//               style={{ color: "#64748b" }}
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.5, delay: 0.28 }}
//             >
//               AIIMES is proudly affiliated with key Government of India ministries and nationally recognised bodies.
//             </motion.p>

//             <motion.div
//               className="h-px mx-auto mt-5"
//               style={{ width: 48, background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }}
//               initial={{ scaleX: 0 }}
//               animate={inView ? { scaleX: 1 } : {}}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             />
//           </div>

//           {/* ── COUNT STRIP ── */}
//           <motion.div
//             className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
//             initial={{ opacity: 0, y: 12 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.35 }}
//           >
//             {[
//               { icon: <Award size={14} />, value: "6+", label: "Affiliations" },
//               { icon: <Award size={14} />, value: "2009", label: "Since" },
//               { icon: <Award size={14} />, value: "Govt.", label: "Recognised" },
//             ].map((s, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full"
//                 style={{
//                   background: "#ffffff",
//                   border: "1px solid rgba(226,232,240,1)",
//                 }}
//               >
//                 <span className="text-red-400">{s.icon}</span>
//                 <span className="font-black text-slate-900 text-sm">{s.value}</span>
//                 <span className="text-[10px] uppercase tracking-widest" style={{ color: "#64748b" }}>
//                   {s.label}
//                 </span>
//               </div>
//             ))}
//           </motion.div>

//           {/* ── CARDS GRID ── */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
//             {affiliations.map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 32 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
//                 whileHover={{ y: -6, transition: { duration: 0.2 } }}
//                 className="group relative rounded-3xl overflow-hidden cursor-pointer"
//                 style={{
//                   background: "#ffffff",
//                   border: "1px solid rgba(226,232,240,1)",
//                   boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
//                 }}
//               >
//                 {/* Hover glow */}
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   style={{ background: `radial-gradient(ellipse at top,${item.color}14,transparent 70%)` }}
//                 />

//                 {/* Top accent bar */}
//                 <div
//                   className="h-1 w-full"
//                   style={{ background: `linear-gradient(90deg,${item.color},transparent)` }}
//                 />

//                 <div className="p-6 sm:p-7 flex flex-col items-center text-center">
//                   {/* Tag badge */}
//                   <div
//                     className="self-end mb-3 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest"
//                     style={{
//                       background: `${item.color}10`,
//                       border: `1px solid ${item.color}25`,
//                       color: item.color,
//                     }}
//                   >
//                     {item.tag}
//                   </div>

//                   {/* Logo */}
//                   <div
//                     className="w-full h-[90px] flex items-center justify-center mb-5 rounded-2xl"
//                     style={{ background: "#f8fafc", border: "1px solid rgba(226,232,240,0.8)" }}
//                   >
//                     <img
//                       src={item.logo}
//                       alt={item.title}
//                       className="max-h-[68px] max-w-[160px] w-auto object-contain"
//                     />
//                   </div>

//                   {/* Divider */}
//                   <motion.div
//                     className="h-1 rounded-full mb-4"
//                     style={{ background: `linear-gradient(90deg,${item.color},transparent)` }}
//                     initial={{ width: 0 }}
//                     animate={inView ? { width: "40px" } : {}}
//                     transition={{ duration: 0.7, delay: 0.3 + i * 0.09 }}
//                   />

//                   {/* Title */}
//                   <p className="text-[14px] font-black leading-snug text-slate-900 group-hover:text-red-600 transition-colors duration-200 mb-4">
//                     {item.title}
//                   </p>

//                   {/* Verified badge */}
//                   <div className="mt-auto flex items-center gap-1.5">
//                     <div
//                       className="w-4 h-4 rounded-full flex items-center justify-center"
//                       style={{ background: "#dcfce7" }}
//                     >
//                       <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </div>
//                     <span className="text-[10px] font-bold uppercase tracking-wider text-green-600">
//                       Officially Affiliated
//                     </span>
//                   </div>
//                 </div>

//                 {/* Bottom hover border */}
//                 <div
//                   className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
//                   style={{ background: item.color }}
//                 />

//                 {/* Hover border ring */}
//                 <div
//                   className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   style={{ boxShadow: `inset 0 0 0 1px ${item.color}35` }}
//                 />
//               </motion.div>
//             ))}
//           </div>

//           {/* ── BOTTOM NOTE ── */}
//           <motion.div
//             className="mt-10 sm:mt-14 rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 justify-between"
//             style={{
//               background: "#ffffff",
//               border: "1px solid rgba(226,232,240,1)",
//               boxShadow: "0 4px 16px rgba(15,23,42,0.05)",
//             }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.55, delay: 0.7 }}
//           >
//             <div className="flex items-start sm:items-center gap-4">
//               <div
//                 className="w-11 h-11 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0"
//                 style={{ background: "#fee2e2" }}
//               >
//                 <Award size={20} />
//               </div>
//               <div>
//                 <div className="font-black text-slate-900 text-base leading-tight mb-0.5">
//                   Government Recognised Institution
//                 </div>
//                 <p className="text-sm text-slate-500">
//                   All AIIMES affiliations are officially verified and updated. Your degree is legally valid and nationally recognised.
//                 </p>
//               </div>
//             </div>

           
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import AboutPageBanner from "../about/AboutPageBanner";

export default function Affiliation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const affiliations = [
    {
      title: "Ministry of Labour & Employment, Government of India",
      logo: "/ministry.png",
      tag: "Govt. of India",
      color: "#ef4444",
    },
    {
      title: "Ministry of Directorate General of Training",
      logo: "/dgt.png",
      tag: "DGT",
      color: "#ef4444",
    },
    {
      title: "Ministry of Micro, Small and Medium Enterprises (MSME)",
      logo: "/msme.png",
      tag: "MSME",
      color: "#ef4444",
    },
    {
      title: "Govt. of India Regd.",
      logo: "/aiimes-regd.jpg",
      tag: "Registered",
      color: "#ef4444",
    },
    {
      title: "Skill India",
      logo: "/skill-india.png",
      tag: "Skill Development",
      color: "#ef4444",
    },
    {
      title: "DAC (Distance Accreditation Council)",
      logo: "/dac-logo.jpeg",
      tag: "Accreditation",
      color: "#ef4444",
    },
  ];

  return (
    <>
      <AboutPageBanner title="AFFILIATION" breadcrumbLabel="Affiliation" />

      <section
        ref={ref}
        className="relative pt-8 sm:pt-10 pb-14 sm:pb-20 overflow-hidden"
        style={{ background: "#f8fafc" }}
      >
        {/* BG grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Glows */}
        <div
          className="absolute -top-32 left-1/3 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle,rgba(220,38,38,0.08) 0%,transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(220,38,38,0.06) 0%,transparent 70%)" }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32">

          {/* ── HEADER ── */}
          <div className="text-center mb-10 sm:mb-14">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="h-px bg-red-600"
                initial={{ width: 0 }}
                animate={inView ? { width: 32 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">
                Official Partners
              </span>
              <motion.span
                className="h-px bg-red-600"
                initial={{ width: 0 }}
                animate={inView ? { width: 32 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </motion.div>

            <motion.h2
              className="font-black text-slate-900 leading-tight mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              Official{" "}
              <span style={{ color: "#ef4444" }}>Affiliations</span>
            </motion.h2>

            <motion.p
              className="text-sm max-w-xl mx-auto px-2"
              style={{ color: "#64748b" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              AIIMES is proudly affiliated with key Government of India ministries and nationally recognised bodies.
            </motion.p>

            <motion.div
              className="h-px mx-auto mt-5"
              style={{ width: 48, background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>

          {/* ── COUNT STRIP ── */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {[
              { icon: <Award size={14} />, value: "6+", label: "Affiliations" },
              { icon: <Award size={14} />, value: "2009", label: "Since" },
              { icon: <Award size={14} />, value: "Govt.", label: "Recognised" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(226,232,240,1)",
                }}
              >
                <span className="text-red-400">{s.icon}</span>
                <span className="font-black text-slate-900 text-sm">{s.value}</span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: "#64748b" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ── CARDS GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {affiliations.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(226,232,240,1)",
                  boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top,${item.color}14,transparent 70%)` }}
                />

                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg,${item.color},transparent)` }}
                />

                <div className="p-6 sm:p-7 flex flex-col items-center text-center">
                  {/* Tag badge */}
                  <div
                    className="self-end mb-3 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest"
                    style={{
                      background: `${item.color}10`,
                      border: `1px solid ${item.color}25`,
                      color: item.color,
                    }}
                  >
                    {item.tag}
                  </div>

                  {/* Logo */}
                  <div
                    className="w-full h-[90px] flex items-center justify-center mb-5 rounded-2xl"
                    style={{ background: "#f8fafc", border: "1px solid rgba(226,232,240,0.8)" }}
                  >
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="max-h-[68px] max-w-[160px] w-auto object-contain"
                    />
                  </div>

                  {/* Divider */}
                  <motion.div
                    className="h-1 rounded-full mb-4"
                    style={{ background: `linear-gradient(90deg,${item.color},transparent)` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: "40px" } : {}}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.09 }}
                  />

                  {/* Title */}
                  <p className="text-[14px] font-black leading-snug text-slate-900 group-hover:text-red-600 transition-colors duration-200 mb-4">
                    {item.title}
                  </p>

                  {/* Verified badge */}
                  <div className="mt-auto flex items-center gap-1.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: "#dcfce7" }}
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-600">
                      Officially Affiliated
                    </span>
                  </div>
                </div>

                {/* Bottom hover border */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: item.color }}
                />

                {/* Hover border ring */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${item.color}35` }}
                />
              </motion.div>
            ))}
          </div>

        
        </div>
      </section>
    </>
  );
}