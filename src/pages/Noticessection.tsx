// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";

// const notices = [
//   {
//     date: "18 Feb 2026",
//     tag: "Admission",
//     tagColor: "#dc2626",
//     tagBg: "#fef2f2",
//     title: "MBA Admissions Open for 2026–28 Batch",
//     desc: "Applications are now open for the MBA program. Last date to apply is 15 March 2026. Limited seats available.",
//     isNew: true,
//   },
//   {
//     date: "15 Feb 2026",
//     tag: "Exam",
//     tagColor: "#d97706",
//     tagBg: "#fffbeb",
//     title: "BBA Semester IV Examination Schedule Released",
//     desc: "The examination schedule for BBA Semester IV has been published. Students are advised to check the portal.",
//     isNew: true,
//   },
//   {
//     date: "10 Feb 2026",
//     tag: "Event",
//     tagColor: "#16a34a",
//     tagBg: "#f0fdf4",
//     title: "Annual Industry Conclave — 5th March 2026",
//     desc: "AIIMES Annual Industry Conclave will be held on 5th March. Top industry leaders will address students.",
//     isNew: false,
//   },
//   {
//     date: "05 Feb 2026",
//     tag: "Notice",
//     tagColor: "#7c3aed",
//     tagBg: "#f5f3ff",
//     title: "Holiday Notice — Holi Vacation (24–26 Feb)",
//     desc: "The institute will remain closed from 24th to 26th February 2026 on account of Holi festival.",
//     isNew: false,
//   },
//   {
//     date: "01 Feb 2026",
//     tag: "Result",
//     tagColor: "#0284c7",
//     tagBg: "#f0f9ff",
//     title: "BBA Semester II Results Declared",
//     desc: "Results for BBA Semester II have been declared. Students can check their results on the student portal.",
//     isNew: false,
//   },
//   {
//     date: "28 Jan 2026",
//     tag: "Admission",
//     tagColor: "#dc2626",
//     tagBg: "#fef2f2",
//     title: "Diploma in Engineering — New Batch Starting March",
//     desc: "A new batch for Diploma in Engineering commences from 1st March 2026. Enroll now to confirm your seat.",
//     isNew: false,
//   },
//   {
//     date: "20 Jan 2026",
//     tag: "Event",
//     tagColor: "#16a34a",
//     tagBg: "#f0fdf4",
//     title: "Guest Lecture: Digital Marketing Trends 2026",
//     desc: "An exclusive guest lecture by industry expert Mr. Vikram Nair on Digital Marketing Trends on 28th Jan.",
//     isNew: false,
//   },
//   {
//     date: "15 Jan 2026",
//     tag: "Notice",
//     tagColor: "#7c3aed",
//     tagBg: "#f5f3ff",
//     title: "Revised Fee Payment Deadline — 28 February 2026",
//     desc: "Students are reminded that the last date for fee payment for the current semester is 28th February 2026.",
//     isNew: false,
//   },
// ];

// export default function NoticesSection() {
//   const sectionRef = useRef(null);
//   const inView = useInView(sectionRef, { once: true, margin: "-80px" });
//   const [activeTag, setActiveTag] = useState("All");
//   const [visibleCount, setVisibleCount] = useState(5);

//   const tags = ["All", "Admission", "Exam", "Event", "Notice", "Result"];

//   const filtered =
//     activeTag === "All"
//       ? notices
//       : notices.filter((n) => n.tag === activeTag);

//   const visible = filtered.slice(0, visibleCount);

//   // Ticker text
//   const tickerItems = notices.filter((n) => n.isNew).map((n) => n.title);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative  py-10 overflow-hidden"
//       style={{ background: "#f9f9f9" }}
//     >
//       {/* BG blobs */}
//       <motion.div
//         className="absolute rounded-full pointer-events-none"
//         style={{
//           width: 380,
//           height: 380,
//           top: "-80px",
//           left: "-100px",
//           background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)",
//         }}
//         animate={{ x: [0, 22, 0], y: [0, 14, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//           opacity: 0.35,
//         }}
//       />

//       <div className="relative w-full  px-32">

//         {/* ── HEADER ── */}
//         <div className="text-center mb-14">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <motion.span
//               className="block h-px bg-red-600"
//               initial={{ width: 0, opacity: 0 }}
//               animate={inView ? { width: 32, opacity: 1 } : {}}
//               transition={{ duration: 0.5, delay: 0.15 }}
//             />
//             <motion.p
//               className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold"
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.4, delay: 0.2 }}
//             >
//               Stay Updated
//             </motion.p>
//             <motion.span
//               className="block h-px bg-red-600"
//               initial={{ width: 0, opacity: 0 }}
//               animate={inView ? { width: 32, opacity: 1 } : {}}
//               transition={{ duration: 0.5, delay: 0.15 }}
//             />
//           </div>

//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-gray-900"
//             initial={{ opacity: 0, y: 28 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.28 }}
//           >
//             Latest <span className="text-red-600">Updates</span> &amp; Notices
//           </motion.h2>

//           <motion.p
//             className="mt-4 text-gray-500 text-sm max-w-lg mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Stay informed with the latest announcements, exam schedules, events,
//             and important notices from AIIMES.
//           </motion.p>

//           <motion.div
//             className="h-1 bg-red-600 mx-auto mt-5 origin-center"
//             style={{ width: 48 }}
//             initial={{ scaleX: 0 }}
//             animate={inView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.55, delay: 0.48 }}
//           />
//         </div>

//         {/* ── LIVE TICKER ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="flex items-center gap-0 mb-10 rounded-xl overflow-hidden"
//           style={{
//             border: "1.5px solid rgba(220,38,38,0.2)",
//             background: "#fff",
//             boxShadow: "0 2px 12px rgba(220,38,38,0.07)",
//           }}
//         >
//           {/* Label */}
//           <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-3 flex-shrink-0">
//             <motion.span
//               className="w-2 h-2 rounded-full bg-white"
//               animate={{ opacity: [1, 0.3, 1] }}
//               transition={{ duration: 1.2, repeat: Infinity }}
//             />
//             <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">
//               Live
//             </span>
//           </div>
//           {/* Scrolling text */}
//           <div className="overflow-hidden flex-1 relative h-11">
//             <motion.div
//               className="flex items-center h-full gap-16 whitespace-nowrap absolute"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//             >
//               {[...tickerItems, ...tickerItems].map((item, i) => (
//                 <span key={i} className="text-sm text-gray-700 font-medium flex items-center gap-3">
//                   <span className="text-red-500">●</span>
//                   {item}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* ── FILTER TABS ── */}
//         <motion.div
//           className="flex flex-wrap gap-2 mb-8"
//           initial={{ opacity: 0, y: 16 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.55 }}
//         >
//           {tags.map((tag) => (
//             <motion.button
//               key={tag}
//               onClick={() => { setActiveTag(tag); setVisibleCount(5); }}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               animate={{
//                 backgroundColor: activeTag === tag ? "#dc2626" : "#fff",
//                 color: activeTag === tag ? "#fff" : "#6b7280",
//                 borderColor: activeTag === tag ? "#dc2626" : "#e5e7eb",
//               }}
//               transition={{ duration: 0.2 }}
//               className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border-2"
//             >
//               {tag}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* ── NOTICES LIST ── */}
//         <div className="flex flex-col gap-3">
//           <AnimatePresence mode="popLayout">
//             {visible.map((notice, index) => (
//               <motion.div
//                 key={notice.title}
//                 layout
//                 initial={{ opacity: 0, y: 30, scale: 0.98 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
//                 transition={{
//                   duration: 0.45,
//                   delay: index * 0.07,
//                   ease: "easeOut",
//                 }}
//                 whileHover={{ x: 4 }}
//                 className="group flex items-start gap-5 bg-white rounded-xl px-6 py-5 cursor-pointer"
//                 style={{
//                   border: "1.5px solid #f0f0f0",
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                   transition: "box-shadow 0.25s, border-color 0.25s",
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(220,38,38,0.10)";
//                   (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.25)";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
//                   (e.currentTarget as HTMLElement).style.borderColor = "#f0f0f0";
//                 }}
//               >
//                 {/* Left: date column */}
//                 <div className="flex-shrink-0 text-center min-w-[52px]">
//                   <div className="text-lg font-black text-gray-800 leading-none">
//                     {notice.date.split(" ")[0]}
//                   </div>
//                   <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5 font-semibold">
//                     {notice.date.split(" ")[1]}
//                   </div>
//                   <div className="text-xs text-gray-300 mt-0.5">
//                     {notice.date.split(" ")[2]}
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div className="w-px self-stretch bg-gray-100 group-hover:bg-red-200 transition-colors duration-300" />

//                 {/* Content */}
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 mb-1.5 flex-wrap">
//                     <span
//                       className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
//                       style={{ color: notice.tagColor, background: notice.tagBg }}
//                     >
//                       {notice.tag}
//                     </span>
//                     {notice.isNew && (
//                       <motion.span
//                         animate={{ opacity: [1, 0.5, 1] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                         className="text-[9px] font-black uppercase tracking-widest text-white bg-red-600 px-2 py-0.5 rounded-full"
//                       >
//                         New
//                       </motion.span>
//                     )}
//                   </div>
//                   <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug group-hover:text-red-700 transition-colors duration-300">
//                     {notice.title}
//                   </h3>
//                   <p className="text-xs text-gray-500 leading-relaxed line-clamp-1">
//                     {notice.desc}
//                   </p>
//                 </div>

//                 {/* Arrow */}
//                 <motion.div
//                   className="flex-shrink-0 self-center text-gray-300 group-hover:text-red-600 transition-colors duration-300"
//                   animate={{ x: 0 }}
//                   whileHover={{ x: 3 }}
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M9 18l6-6-6-6" />
//                   </svg>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* ── View More ── */}
//         {visibleCount < filtered.length && (
//           <motion.div
//             className="flex justify-center mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <motion.button
//               onClick={() => setVisibleCount((v) => v + 3)}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               className="px-8 py-3 border-2 border-red-600 text-red-600 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-250"
//             >
//               View More Notices
//             </motion.button>
//           </motion.div>
//         )}

//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const notices = [
  {
    date: "18 Feb 2026",
    tag: "Admission",
    tagColor: "#dc2626",
    tagBg: "#fef2f2",
    title: "MBA Admissions Open for 2026–28 Batch",
    desc: "Applications are now open for the MBA program. Last date to apply is 15 March 2026. Limited seats available.",
    isNew: true,
  },
  {
    date: "15 Feb 2026",
    tag: "Exam",
    tagColor: "#d97706",
    tagBg: "#fffbeb",
    title: "BBA Semester IV Examination Schedule Released",
    desc: "The examination schedule for BBA Semester IV has been published. Students are advised to check the portal.",
    isNew: true,
  },
  {
    date: "10 Feb 2026",
    tag: "Event",
    tagColor: "#16a34a",
    tagBg: "#f0fdf4",
    title: "Annual Industry Conclave — 5th March 2026",
    desc: "AIIMES Annual Industry Conclave will be held on 5th March. Top industry leaders will address students.",
    isNew: false,
  },
  {
    date: "05 Feb 2026",
    tag: "Notice",
    tagColor: "#7c3aed",
    tagBg: "#f5f3ff",
    title: "Holiday Notice — Holi Vacation (24–26 Feb)",
    desc: "The institute will remain closed from 24th to 26th February 2026 on account of Holi festival.",
    isNew: false,
  },
  {
    date: "01 Feb 2026",
    tag: "Result",
    tagColor: "#0284c7",
    tagBg: "#f0f9ff",
    title: "BBA Semester II Results Declared",
    desc: "Results for BBA Semester II have been declared. Students can check their results on the student portal.",
    isNew: false,
  },
  {
    date: "28 Jan 2026",
    tag: "Admission",
    tagColor: "#dc2626",
    tagBg: "#fef2f2",
    title: "Diploma in Engineering — New Batch Starting March",
    desc: "A new batch for Diploma in Engineering commences from 1st March 2026. Enroll now to confirm your seat.",
    isNew: false,
  },
  {
    date: "20 Jan 2026",
    tag: "Event",
    tagColor: "#16a34a",
    tagBg: "#f0fdf4",
    title: "Guest Lecture: Digital Marketing Trends 2026",
    desc: "An exclusive guest lecture by industry expert Mr. Vikram Nair on Digital Marketing Trends on 28th Jan.",
    isNew: false,
  },
  {
    date: "15 Jan 2026",
    tag: "Notice",
    tagColor: "#7c3aed",
    tagBg: "#f5f3ff",
    title: "Revised Fee Payment Deadline — 28 February 2026",
    desc: "Students are reminded that the last date for fee payment for the current semester is 28th February 2026.",
    isNew: false,
  },
];

export default function NoticesSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeTag, setActiveTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);

  const tags = ["All", "Admission", "Exam", "Event", "Notice", "Result"];

  const filtered =
    activeTag === "All"
      ? notices
      : notices.filter((n) => n.tag === activeTag);

  const visible = filtered.slice(0, visibleCount);

  // Ticker text
  const tickerItems = notices.filter((n) => n.isNew).map((n) => n.title);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 md:py-32 overflow-hidden"
      style={{ background: "#f9f9f9" }}
    >
      {/* BG blobs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 380,
          height: 380,
          top: "-80px",
          left: "-100px",
          background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 22, 0], y: [0, 14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35,
        }}
      />

      {/* ── CONTAINER: responsive horizontal padding ── */}
      <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">

        {/* ── HEADER ── */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span
              className="block h-px bg-red-600"
              initial={{ width: 0, opacity: 0 }}
              animate={inView ? { width: 32, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            />
            <motion.p
              className="uppercase tracking-[0.25em] text-red-600 text-xs font-bold"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Stay Updated
            </motion.p>
            <motion.span
              className="block h-px bg-red-600"
              initial={{ width: 0, opacity: 0 }}
              animate={inView ? { width: 32, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            />
          </div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-gray-900"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            Latest <span className="text-red-600">Updates</span> &amp; Notices
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-500 text-sm max-w-lg mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stay informed with the latest announcements, exam schedules, events,
            and important notices from AIIMES.
          </motion.p>

          <motion.div
            className="h-1 bg-red-600 mx-auto mt-5 origin-center"
            style={{ width: 48 }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.48 }}
          />
        </div>

        {/* ── LIVE TICKER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-0 mb-8 md:mb-10 rounded-xl overflow-hidden"
          style={{
            border: "1.5px solid rgba(220,38,38,0.2)",
            background: "#fff",
            boxShadow: "0 2px 12px rgba(220,38,38,0.07)",
          }}
        >
          {/* Label */}
          <div className="flex items-center gap-2 bg-red-600 text-white px-3 sm:px-4 py-3 flex-shrink-0">
            <motion.span
              className="w-2 h-2 rounded-full bg-white"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              Live
            </span>
          </div>
          {/* Scrolling text */}
          <div className="overflow-hidden flex-1 relative h-11">
            <motion.div
              className="flex items-center h-full gap-16 whitespace-nowrap absolute"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="text-sm text-gray-700 font-medium flex items-center gap-3">
                  <span className="text-red-500">●</span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── FILTER TABS ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          {tags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => { setActiveTag(tag); setVisibleCount(5); }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                backgroundColor: activeTag === tag ? "#dc2626" : "#fff",
                color: activeTag === tag ? "#fff" : "#6b7280",
                borderColor: activeTag === tag ? "#dc2626" : "#e5e7eb",
              }}
              transition={{ duration: 0.2 }}
              className="px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border-2"
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* ── NOTICES LIST ── */}
        <div className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {visible.map((notice, index) => (
              <motion.div
                key={notice.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ x: 4 }}
                className="group flex items-start gap-3 sm:gap-5 bg-white rounded-xl px-4 sm:px-6 py-4 sm:py-5 cursor-pointer"
                style={{
                  border: "1.5px solid #f0f0f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.25s, border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(220,38,38,0.10)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#f0f0f0";
                }}
              >
                {/* Left: date column — hidden on very small screens, shown from sm up */}
                <div className="hidden sm:flex flex-col flex-shrink-0 text-center min-w-[52px]">
                  <div className="text-lg font-black text-gray-800 leading-none">
                    {notice.date.split(" ")[0]}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5 font-semibold">
                    {notice.date.split(" ")[1]}
                  </div>
                  <div className="text-xs text-gray-300 mt-0.5">
                    {notice.date.split(" ")[2]}
                  </div>
                </div>

                {/* Divider — only visible when date column is shown */}
                <div className="hidden sm:block w-px self-stretch bg-gray-100 group-hover:bg-red-200 transition-colors duration-300" />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                      style={{ color: notice.tagColor, background: notice.tagBg }}
                    >
                      {notice.tag}
                    </span>
                    {notice.isNew && (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-[9px] font-black uppercase tracking-widest text-white bg-red-600 px-2 py-0.5 rounded-full"
                      >
                        New
                      </motion.span>
                    )}
                    {/* Date shown inline on mobile */}
                    <span className="sm:hidden text-[10px] text-gray-400 font-medium ml-auto">
                      {notice.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug group-hover:text-red-700 transition-colors duration-300">
                    {notice.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 sm:line-clamp-1">
                    {notice.desc}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  className="flex-shrink-0 self-center text-gray-300 group-hover:text-red-600 transition-colors duration-300"
                  animate={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── View More ── */}
        {visibleCount < filtered.length && (
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setVisibleCount((v) => v + 3)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 sm:px-8 py-3 border-2 border-red-600 text-red-600 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-250"
            >
              View More Notices
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
}

