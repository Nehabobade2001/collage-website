// "use client";
// import { useRef, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { Award, Star, Quote, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
// import AboutPageBanner from "./AboutPageBanner";

// const appreciations = [
//   {
//     id: 1,
//     name: "Vijay Rupani",
//     role: "Chief Minister",
//     region: "Gujarat State",
//     initials: "VR",
//     date: "03/10/2018",
//     ref: "apro/Ug/2018/10/03/dt",
//     color: "#b91c1c",
//     letterImage: "/vijayrupani.jpg",
//     message: `I am pleased to learn that the All India Institute of Management & Engineering Studies (AIIMES) is coming up with a special Souvenir highlighting its activities in education. I, hereby, extend my best wishes to all the students of AIIMES and to those who have worked hard to create the Souvenir, for a glorious success of the publication.`,
//     fullLetter: `Vishwakarma according to the Rigveda is the deity of the creative power that holds the universe together. He is considered to be the original creator, architect and the divine engineer of the universe, since the advent of time. It is highly essential that the discipline like engineering and management play its vital role in the process of advancement and inclusive development.\n\nI am pleased to learn that the All India Institute of Management & Engineering Studies (AIIMES) is coming up with a special Souvenir highlighting its activities in education. I, hereby, extend my best wishes to all the students of AIIMES and to those who have worked hard to create the Souvenir, for a glorious success of the publication.`,
//     to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
//   },
//   {
//     id: 2,
//     name: "Dr. Udit Raj",
//     role: "Member of Parliament, Lok Sabha",
//     region: "North West Delhi",
//     initials: "UR",
//     date: "2018",
//     ref: "MP/NWD/2018",
//     color: "#991b1b",
//     letterImage: "/uditraj.jpg",
//     message: `It gives me immense pleasure to extend my heartfelt appreciation to AIIMES for their outstanding contribution to the field of education. The institute has been a beacon of hope for students across India, especially for those who wish to pursue higher education through distance learning.`,
//     fullLetter: `It gives me immense pleasure to extend my heartfelt appreciation to All India Institute of Management & Engineering Studies (AIIMES) for their outstanding contribution to the field of education.\n\nThe institute has been a beacon of hope for students across India, especially for those who wish to pursue higher education through distance learning. I commend the efforts of the management and faculty in providing quality education at affordable costs.\n\nI wish AIIMES continued success in their noble mission of educating the nation.`,
//     to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
//   },
//   {
//     id: 3,
//     name: "Sarbananda Sonowal",
//     role: "Chief Minister",
//     region: "Assam State",
//     initials: "SS",
//     date: "2018",
//     ref: "CM/AS/2018",
//     color: "#7f1d1d",
//     letterImage: "/sarbananda.jpg",
//     message: `I am delighted to convey my best wishes to All India Institute of Management & Engineering Studies on this special occasion. AIIMES has been doing commendable work in the field of distance education and skill development across India.`,
//     fullLetter: `I am delighted to convey my best wishes to All India Institute of Management & Engineering Studies (AIIMES) on this special occasion.\n\nAIIMES has been doing commendable work in the field of distance education and skill development across India. The institute's commitment to making quality education accessible to all sections of society, especially the underprivileged, is truly praiseworthy.\n\nI extend my heartfelt congratulations to the entire team of AIIMES and wish them all the best in their future endeavours.`,
//     to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
//   },
//   {
//     id: 4,
//     name: "Meenakshi Lekhi",
//     role: "Member of Parliament, Lok Sabha",
//     region: "New Delhi",
//     initials: "ML",
//     date: "2018",
//     ref: "MP/ND/2018",
//     color: "#b91c1c",
//     letterImage: "/meenakshilekhi.jpg",
//     message: `AIIMES has emerged as one of the most trusted institutions in the field of distance and online education. The institute's efforts in providing quality education to working professionals and students across India deserve special recognition.`,
//     fullLetter: `AIIMES has emerged as one of the most trusted institutions in the field of distance and online education. The institute's efforts in providing quality education to working professionals and students across India deserve special recognition.\n\nI am happy to note that AIIMES has been consistently working towards its mission of making higher education accessible and affordable to all. The institute's emphasis on practical knowledge and industry-relevant curriculum is commendable.\n\nI extend my best wishes to the entire AIIMES family.`,
//     to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
//   },
//   {
//     id: 5,
//     name: "Ramesh Bidhuri",
//     role: "Member of Parliament, Lok Sabha",
//     region: "South Delhi",
//     initials: "RB",
//     date: "14 Sept, 2018",
//     ref: "MP/SD/2018",
//     color: "#991b1b",
//     letterImage: "/rameshbidhuri.jpg",
//     message: `It is indeed a matter of pride that All India Institute of Management & Engineering Studies (AIIMES) is bringing out a Special Souvenir. I am happy to understand that AIIMES is contributing to the need of poor and needy in the rural areas by offering various job oriented Health and Physical courses.`,
//     fullLetter: `It is indeed a matter of pride that All India Institute of Management & Engineering Studies (AIIMES) is bringing out a Special Souvenir.\n\nI am happy to understand that AIIMES is contributing to the need of poor and needy in the rural areas by offering various job oriented Health and Physical courses in order to impact quality education in the remote corners of the country. I am sure that AIIMES magazine will represent the spirit, technical and literacy talent hidden of the students and staff of the AIIMES, to share their views.\n\nI would like to convey my heartiest wishes on the occasion of the release of the said magazine.\n\nWith best wishes.`,
//     to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
//   },
//   {
//     id: 6,
//     name: "Dr. Mahesh Sharma",
//     role: "Member of Parliament, Lok Sabha",
//     region: "New Delhi",
//     initials: "MS",
//     date: "2018",
//     ref: "MP/ND2/2018",
//     color: "#7f1d1d",
//     letterImage: "/maheshsharma.jpg",
//     message: `I am pleased to extend my best wishes to AIIMES on the occasion of their special publication. The institute has been making significant contributions to the educational landscape of India through its innovative distance learning programs.`,
//     fullLetter: `I am pleased to extend my best wishes to All India Institute of Management & Engineering Studies (AIIMES) on the occasion of their special publication.\n\nThe institute has been making significant contributions to the educational landscape of India through its innovative distance learning programs. AIIMES stands as a shining example of how quality education can be made accessible to all, regardless of geographical barriers.\n\nI wish the institute and its students a bright and successful future.`,
//     to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
//   },
//   {
//     id: 7,
//     name: "Parvesh Sahib Singh",
//     role: "Member of Parliament, Lok Sabha",
//     region: "West Delhi",
//     initials: "PS",
//     date: "2018",
//     ref: "MP/WD/2018",
//     color: "#b91c1c",
//     letterImage: "/parveshsahib.jpg",
//     message: `AIIMES deserves wholehearted appreciation for their relentless efforts in the field of education. Their commitment to providing quality education at affordable prices to students from all walks of life is truly inspiring.`,
//     fullLetter: `AIIMES deserves wholehearted appreciation for their relentless efforts in the field of education. Their commitment to providing quality education at affordable prices to students from all walks of life is truly inspiring.\n\nI am particularly impressed by AIIMES's focus on distance education which enables students from remote areas to access quality higher education without having to relocate. This is a remarkable service to the nation.\n\nI extend my warmest congratulations and best wishes to the AIIMES family.`,
//     to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
//   },
//   {
//     id: 8,
//     name: "Maheish Giri",
//     role: "Member of Parliament, Lok Sabha",
//     region: "East Delhi",
//     initials: "MG",
//     date: "2018",
//     ref: "MP/ED/2018",
//     color: "#991b1b",
//     letterImage: "/maheshgiri.jpg",
//     message: `It brings me great joy to appreciate the work being done by AIIMES in the field of education. The institute has been a pillar of strength for countless students who aspire to achieve their educational goals while managing their professional and personal commitments.`,
//     fullLetter: `It brings me great joy to appreciate the work being done by AIIMES in the field of education. The institute has been a pillar of strength for countless students who aspire to achieve their educational goals while managing their professional and personal commitments.\n\nAIIMES's dedication to excellence in education and their innovative approach to distance learning has set them apart as a leader in the field. I wish them continued success in their mission to educate and empower India's youth.\n\nWith warm regards and best wishes.`,
//     to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
//   },
// ];

// export default function AppreciationSection() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   const [selected, setSelected] = useState<typeof appreciations[0] | null>(null);
//   const [page, setPage] = useState(0);
//   const perPage = 4;
//   const totalPages = Math.ceil(appreciations.length / perPage);
//   const visible = appreciations.slice(page * perPage, page * perPage + perPage);

//   return (
//     <>
//     <AboutPageBanner title="APPRECIATION & RECOGNITION" breadcrumbLabel="Appreciation & Recognition" />
//     <section ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#f8fafc" }}>

//       {/* BG grid */}
//       <div className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
//           backgroundSize: "26px 26px",
//         }} />

//       {/* Glows */}
//       <div className="absolute -top-32 left-1/3 w-96 h-96 rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle,rgba(220,38,38,0.08) 0%,transparent 65%)", filter: "blur(60px)" }} />
//       <motion.div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle,rgba(220,38,38,0.06) 0%,transparent 70%)" }}
//         animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

//       <div className="relative  w-full px-20 md:px-32 lg:px-32">

//         {/* ── HEADER ── */}
//         <div className="text-center mb-16">
//           <motion.div className="flex items-center justify-center gap-3 mb-4"
//             initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
//             <motion.span className="h-px bg-red-600"
//               initial={{ width: 0 }} animate={inView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
//             <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">Recognition</span>
//             <motion.span className="h-px bg-red-600"
//               initial={{ width: 0 }} animate={inView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
//           </motion.div>

//           <motion.h2 className="font-black font-black text-gray-900 leading-tight text-4xl sm:text-5xl md:text-7xl mb-4 text-slate-900 leading-tight mb-3"
   
//               initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.55, delay: 0.15 }}>
//             Recognitions & {" "}
//             <span style={{ color: "#ef4444" }}> Achievements</span>
//           </motion.h2>

//           <motion.p className="text-sm max-w-xl mx-auto"
//             style={{ color: "#64748b" }}
//             initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
//             transition={{ duration: 0.5, delay: 0.28 }}>
//             Acknowledged by honourable Members of Parliament and Chief Ministers across India for our contribution to quality education.
//           </motion.p>

//           <motion.div className="h-px mx-auto mt-5"
//             style={{ width: 48, background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }}
//             initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.5, delay: 0.3 }} />
//         </div>

//         {/* ── COUNT STRIP ── */}
//         <motion.div className="flex items-center justify-center gap-2 mb-12"
//           initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.35 }}>
//           {[
//             { icon: <Award size={14} />, value: "2", label: "Chief Ministers" },
//             { icon: <Star size={14} />, value: "6", label: "MPs, Lok Sabha" },
//             { icon: <Quote size={14} />, value: "8+", label: "Official Letters" },
//           ].map((s, i) => (
//             <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full"
//               style={{
//                 background: "#ffffff",
//                 border: "1px solid rgba(226,232,240,1)",
//               }}>
//               <span className="text-red-400">{s.icon}</span>
//               <span className="font-black text-slate-900 text-sm">{s.value}</span>
//               <span className="text-[10px] uppercase tracking-widest" style={{ color: "#64748b" }}>{s.label}</span>
//             </div>
//           ))}
//         </motion.div>

//         {/* ── CARDS GRID ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10">
//           <AnimatePresence mode="wait">
//             {visible.map((person, i) => (
//               <motion.div
//                 key={person.id}
//                 initial={{ opacity: 0, y: 32 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.45, delay: i * 0.08 }}
//                 whileHover={{ y: -6, transition: { duration: 0.2 } }}
//                 onClick={() => setSelected(person)}
//                 className="group relative rounded-3xl overflow-hidden cursor-pointer min-h-[360px] lg:min-h-[390px]"
//                 style={{
//                   background: "#ffffff",
//                   border: "1px solid rgba(226,232,240,1)",
//                   backdropFilter: "blur(16px)",
//                   boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
//                 }}>

//                 {/* Hover glow */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   style={{ background: `radial-gradient(ellipse at top,${person.color}18,transparent 70%)` }} />

//                 {/* Top red bar */}
//                 <div className="h-1 w-full"
//                   style={{ background: `linear-gradient(90deg,${person.color},transparent)` }} />

//                 <div className="p-6 lg:p-7">
//                   {/* Avatar + emblem row */}
//                   <div className="flex items-center justify-between mb-5">
//                     {/* Avatar */}
//                     <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-white text-xl flex-shrink-0"
//                       style={{
//                         background: `linear-gradient(135deg,${person.color},#ef4444)`,
//                         border: `1px solid ${person.color}44`,
//                         boxShadow: `0 4px 16px ${person.color}30`,
//                       }}>
//                       {person.initials}
//                     </div>

//                     {/* Emblem placeholder */}
//                     <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
//                       style={{ background: "#f8fafc", border: "1px solid rgba(226,232,240,1)" }}>
//                       <Award size={16} style={{ color: "#94a3b8" }} />
//                     </div>
//                   </div>

//                   {/* Name + role */}
//                   <h3 className="font-black text-slate-900 text-[18px] leading-tight mb-1 group-hover:text-red-600 transition-colors duration-200">
//                     {person.name}
//                   </h3>
//                   <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
//                     style={{ color: "rgba(220,38,38,0.7)" }}>
//                     {person.role}
//                   </p>
//                   <p className="text-[10px] uppercase tracking-widest mb-4"
//                     style={{ color: "#64748b" }}>
//                     {person.region}
//                   </p>

//                   {/* Divider */}
//                   <div className="h-px mb-4"
//                     style={{ background: "rgba(148,163,184,0.25)" }} />

//                   {/* Message preview */}
//                   <div className="relative">
//                     <Quote size={14} className="text-red-600 mb-2 opacity-60" />
//                     <p className="text-[14px] leading-relaxed line-clamp-3"
//                       style={{ color: "#334155" }}>
//                       {person.message}
//                     </p>
//                   </div>

//                   {/* Date + CTA */}
//                   <div className="flex items-center justify-between mt-5">
//                     <span className="text-[9px] uppercase tracking-widest"
//                       style={{ color: "#64748b" }}>
//                       Dt. {person.date}
//                     </span>
//                     <motion.div
//                       className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-red-500"
//                       animate={{ x: [0, 3, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
//                       Read Letter <ExternalLink size={10} />
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* Hover border */}
//                 <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   style={{ boxShadow: `inset 0 0 0 1px ${person.color}40` }} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* ── PAGINATION ── */}
//         <div className="flex items-center justify-center gap-3">
//           <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
//             onClick={() => setPage(p => Math.max(0, p - 1))}
//             disabled={page === 0}
//             className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
//             style={{
//               background: page === 0 ? "#f1f5f9" : "rgba(220,38,38,0.1)",
//               border: `1px solid ${page === 0 ? "rgba(203,213,225,1)" : "rgba(220,38,38,0.25)"}`,
//               color: page === 0 ? "#94a3b8" : "#ef4444",
//             }}>
//             <ChevronLeft size={16} />
//           </motion.button>

//           {Array.from({ length: totalPages }).map((_, i) => (
//             <motion.button key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
//               onClick={() => setPage(i)}
//               className="w-2.5 h-2.5 rounded-full transition-all duration-200"
//               style={{
//                 background: i === page ? "#ef4444" : "rgba(148,163,184,0.35)",
//                 transform: i === page ? "scale(1.3)" : "scale(1)",
//               }} />
//           ))}

//           <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
//             onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
//             disabled={page === totalPages - 1}
//             className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
//             style={{
//               background: page === totalPages - 1 ? "#f1f5f9" : "rgba(220,38,38,0.1)",
//               border: `1px solid ${page === totalPages - 1 ? "rgba(203,213,225,1)" : "rgba(220,38,38,0.25)"}`,
//               color: page === totalPages - 1 ? "#94a3b8" : "#ef4444",
//             }}>
//             <ChevronRight size={16} />
//           </motion.button>
//         </div>

//       </div>

//       {/* ════════════════════════════════
//           LETTER MODAL
//       ════════════════════════════════ */}
//       <AnimatePresence>
//         {selected && (
//           <>
//             {/* Backdrop */}
//             <motion.div className="fixed inset-0 z-50"
//               style={{ backdropFilter: "blur(8px)", background: "rgba(15,23,42,0.28)" }}
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               onClick={() => setSelected(null)} />

//             {/* Modal */}
//             <motion.div
//               className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto rounded-3xl"
//               style={{
//                 background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
//                 backdropFilter: "blur(18px) saturate(140%)",
//                 border: "1px solid rgba(226,232,240,1)",
//                 boxShadow: "0 30px 80px rgba(15,23,42,0.22), 0 0 0 1px rgba(220,38,38,0.08)",
//               }}
//               initial={{ opacity: 0, scale: 0.93, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.93, y: 20 }}
//               transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>

//               {/* Red top line */}
//               <div className="h-1 w-full rounded-t-3xl"
//                 style={{ background: `linear-gradient(90deg,transparent,${selected.color},transparent)` }} />

//               {/* Grid bg in modal */}
//               <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
//                 style={{
//                   backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.14) 1px, transparent 1px)",
//                   backgroundSize: "22px 22px",
//                 }} />

//               <div className="relative p-8 md:p-12">
//                 {/* Close */}
//                 <button onClick={() => setSelected(null)}
//                   className="absolute top-6 right-6 w-9 h-9 rounded-xl flex items-center justify-center z-10 transition-colors hover:bg-slate-100"
//                   style={{ background: "#ffffff", border: "1px solid rgba(226,232,240,1)" }}>
//                   <X size={16} style={{ color: "#64748b" }} />
//                 </button>

//                 {/* Letter header — mimics official letter */}
//                 <div className="max-w-2xl mx-auto">

//                   {/* Official header */}
//                   <div className="flex items-start justify-between mb-8 pb-6"
//                     style={{ borderBottom: "1px solid rgba(203,213,225,0.6)" }}>
//                     <div>
//                       {/* Emblem area */}
//                       <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
//                         style={{
//                           background: `linear-gradient(135deg,${selected.color}22,rgba(0,0,0,0))`,
//                           border: `1px solid ${selected.color}33`,
//                         }}>
//                         <Award size={24} style={{ color: selected.color }} />
//                       </div>
//                       <div className="font-black text-2xl text-slate-900 leading-tight">{selected.name}</div>
//                       <div className="font-bold text-sm mt-1" style={{ color: "#ef4444" }}>{selected.role}</div>
//                       <div className="text-xs mt-0.5 uppercase tracking-widest" style={{ color: "#64748b" }}>{selected.region}</div>
//                     </div>

//                     {/* Date + ref */}
//                     <div className="text-right flex-shrink-0">
//                       {selected.ref && (
//                         <p className="text-[10px] mb-1" style={{ color: "#64748b" }}>
//                           Ref: {selected.ref}
//                         </p>
//                       )}
//                       <p className="text-[11px] font-bold" style={{ color: "#475569" }}>
//                         Dt. {selected.date}
//                       </p>
//                     </div>
//                   </div>

//                   {/* MESSAGE label */}
//                   <div className="text-center mb-6">
//                     <span className="text-xs font-black uppercase tracking-[0.3em]"
//                       style={{ color: "#64748b" }}>— Message —</span>
//                   </div>

//                   {/* Letter body */}
//                   <div className="mb-10">
//                     {selected.letterImage ? (
//                       <div className="rounded-2xl overflow-hidden"
//                         style={{ border: "1px solid rgba(226,232,240,1)", background: "#ffffff" }}>
//                         <img
//                           src={selected.letterImage}
//                           alt={`${selected.name} letter`}
//                           className="w-full h-auto object-contain"
//                           loading="lazy"
//                         />
//                       </div>
//                     ) : (
//                       <div className="space-y-5">
//                         {selected.fullLetter.split("\n\n").map((para, i) => (
//                           <p key={i} className="text-sm leading-[2]" style={{ color: "#475569" }}>
//                             {para}
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* Signature area */}
//                   <div className="flex items-end justify-between pt-6"
//                     style={{ borderTop: "1px solid rgba(203,213,225,0.6)" }}>
//                     <div>
//                       {/* Signature placeholder */}
//                       <div className="font-black text-3xl mb-1"
//                         style={{
//                           fontFamily: "cursive",
//                           background: `linear-gradient(135deg,${selected.color},#ef4444)`,
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                         }}>
//                         {selected.name.split(" ").map(n => n[0]).join("")}
//                       </div>
//                       <div className="font-bold text-sm text-slate-900">({selected.name})</div>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "#64748b" }}>To</p>
//                       <p className="text-xs font-semibold" style={{ color: "#475569" }}>{selected.to}</p>
//                     </div>
//                   </div>

//                   {/* Official stamp placeholder */}
//                   <div className="flex justify-center mt-8">
//                     <div className="w-20 h-20 rounded-full border-2 flex items-center justify-center"
//                       style={{
//                         borderColor: `${selected.color}33`,
//                         background: `${selected.color}08`,
//                         borderStyle: "dashed",
//                       }}>
//                       <Award size={28} style={{ color: `${selected.color}50` }} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//     </section>
//     </>
//   );
// }
"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Award, Star, Quote, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import AboutPageBanner from "./AboutPageBanner";

const appreciations = [
  {
    id: 1,
    name: "Vijay Rupani",
    role: "Chief Minister",
    region: "Gujarat State",
    initials: "VR",
    date: "03/10/2018",
    ref: "apro/Ug/2018/10/03/dt",
    color: "#b91c1c",
    letterImage: "/vijayrupani.jpg",
    message: `I am pleased to learn that the All India Institute of Management & Engineering Studies (AIIMES) is coming up with a special Souvenir highlighting its activities in education. I, hereby, extend my best wishes to all the students of AIIMES and to those who have worked hard to create the Souvenir, for a glorious success of the publication.`,
    fullLetter: `Vishwakarma according to the Rigveda is the deity of the creative power that holds the universe together. He is considered to be the original creator, architect and the divine engineer of the universe, since the advent of time. It is highly essential that the discipline like engineering and management play its vital role in the process of advancement and inclusive development.\n\nI am pleased to learn that the All India Institute of Management & Engineering Studies (AIIMES) is coming up with a special Souvenir highlighting its activities in education. I, hereby, extend my best wishes to all the students of AIIMES and to those who have worked hard to create the Souvenir, for a glorious success of the publication.`,
    to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
  },
  {
    id: 2,
    name: "Dr. Udit Raj",
    role: "Member of Parliament, Lok Sabha",
    region: "North West Delhi",
    initials: "UR",
    date: "2018",
    ref: "MP/NWD/2018",
    color: "#991b1b",
    letterImage: "/uditraj.jpg",
    message: `It gives me immense pleasure to extend my heartfelt appreciation to AIIMES for their outstanding contribution to the field of education. The institute has been a beacon of hope for students across India, especially for those who wish to pursue higher education through distance learning.`,
    fullLetter: `It gives me immense pleasure to extend my heartfelt appreciation to All India Institute of Management & Engineering Studies (AIIMES) for their outstanding contribution to the field of education.\n\nThe institute has been a beacon of hope for students across India, especially for those who wish to pursue higher education through distance learning. I commend the efforts of the management and faculty in providing quality education at affordable costs.\n\nI wish AIIMES continued success in their noble mission of educating the nation.`,
    to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
  },
  {
    id: 3,
    name: "Sarbananda Sonowal",
    role: "Chief Minister",
    region: "Assam State",
    initials: "SS",
    date: "2018",
    ref: "CM/AS/2018",
    color: "#7f1d1d",
    letterImage: "/sarbananda.jpg",
    message: `I am delighted to convey my best wishes to All India Institute of Management & Engineering Studies on this special occasion. AIIMES has been doing commendable work in the field of distance education and skill development across India.`,
    fullLetter: `I am delighted to convey my best wishes to All India Institute of Management & Engineering Studies (AIIMES) on this special occasion.\n\nAIIMES has been doing commendable work in the field of distance education and skill development across India. The institute's commitment to making quality education accessible to all sections of society, especially the underprivileged, is truly praiseworthy.\n\nI extend my heartfelt congratulations to the entire team of AIIMES and wish them all the best in their future endeavours.`,
    to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
  },
  {
    id: 4,
    name: "Meenakshi Lekhi",
    role: "Member of Parliament, Lok Sabha",
    region: "New Delhi",
    initials: "ML",
    date: "2018",
    ref: "MP/ND/2018",
    color: "#b91c1c",
    letterImage: "/meenakshilekhi.jpg",
    message: `AIIMES has emerged as one of the most trusted institutions in the field of distance and online education. The institute's efforts in providing quality education to working professionals and students across India deserve special recognition.`,
    fullLetter: `AIIMES has emerged as one of the most trusted institutions in the field of distance and online education. The institute's efforts in providing quality education to working professionals and students across India deserve special recognition.\n\nI am happy to note that AIIMES has been consistently working towards its mission of making higher education accessible and affordable to all. The institute's emphasis on practical knowledge and industry-relevant curriculum is commendable.\n\nI extend my best wishes to the entire AIIMES family.`,
    to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
  },
  {
    id: 5,
    name: "Ramesh Bidhuri",
    role: "Member of Parliament, Lok Sabha",
    region: "South Delhi",
    initials: "RB",
    date: "14 Sept, 2018",
    ref: "MP/SD/2018",
    color: "#991b1b",
    letterImage: "/rameshbidhuri.jpg",
    message: `It is indeed a matter of pride that All India Institute of Management & Engineering Studies (AIIMES) is bringing out a Special Souvenir. I am happy to understand that AIIMES is contributing to the need of poor and needy in the rural areas by offering various job oriented Health and Physical courses.`,
    fullLetter: `It is indeed a matter of pride that All India Institute of Management & Engineering Studies (AIIMES) is bringing out a Special Souvenir.\n\nI am happy to understand that AIIMES is contributing to the need of poor and needy in the rural areas by offering various job oriented Health and Physical courses in order to impact quality education in the remote corners of the country. I am sure that AIIMES magazine will represent the spirit, technical and literacy talent hidden of the students and staff of the AIIMES, to share their views.\n\nI would like to convey my heartiest wishes on the occasion of the release of the said magazine.\n\nWith best wishes.`,
    to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
  },
  {
    id: 6,
    name: "Dr. Mahesh Sharma",
    role: "Member of Parliament, Lok Sabha",
    region: "New Delhi",
    initials: "MS",
    date: "2018",
    ref: "MP/ND2/2018",
    color: "#7f1d1d",
    letterImage: "/maheshsharma.jpg",
    message: `I am pleased to extend my best wishes to AIIMES on the occasion of their special publication. The institute has been making significant contributions to the educational landscape of India through its innovative distance learning programs.`,
    fullLetter: `I am pleased to extend my best wishes to All India Institute of Management & Engineering Studies (AIIMES) on the occasion of their special publication.\n\nThe institute has been making significant contributions to the educational landscape of India through its innovative distance learning programs. AIIMES stands as a shining example of how quality education can be made accessible to all, regardless of geographical barriers.\n\nI wish the institute and its students a bright and successful future.`,
    to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
  },
  {
    id: 7,
    name: "Parvesh Sahib Singh",
    role: "Member of Parliament, Lok Sabha",
    region: "West Delhi",
    initials: "PS",
    date: "2018",
    ref: "MP/WD/2018",
    color: "#b91c1c",
    letterImage: "/parveshsahib.jpg",
    message: `AIIMES deserves wholehearted appreciation for their relentless efforts in the field of education. Their commitment to providing quality education at affordable prices to students from all walks of life is truly inspiring.`,
    fullLetter: `AIIMES deserves wholehearted appreciation for their relentless efforts in the field of education. Their commitment to providing quality education at affordable prices to students from all walks of life is truly inspiring.\n\nI am particularly impressed by AIIMES's focus on distance education which enables students from remote areas to access quality higher education without having to relocate. This is a remarkable service to the nation.\n\nI extend my warmest congratulations and best wishes to the AIIMES family.`,
    to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
  },
  {
    id: 8,
    name: "Maheish Giri",
    role: "Member of Parliament, Lok Sabha",
    region: "East Delhi",
    initials: "MG",
    date: "2018",
    ref: "MP/ED/2018",
    color: "#991b1b",
    letterImage: "/maheshgiri.jpg",
    message: `It brings me great joy to appreciate the work being done by AIIMES in the field of education. The institute has been a pillar of strength for countless students who aspire to achieve their educational goals while managing their professional and personal commitments.`,
    fullLetter: `It brings me great joy to appreciate the work being done by AIIMES in the field of education. The institute has been a pillar of strength for countless students who aspire to achieve their educational goals while managing their professional and personal commitments.\n\nAIIMES's dedication to excellence in education and their innovative approach to distance learning has set them apart as a leader in the field. I wish them continued success in their mission to educate and empower India's youth.\n\nWith warm regards and best wishes.`,
    to: "Dr. Vikram Singh Chauhan, Managing Director, AIIMES",
  },
];

export default function AppreciationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(appreciations.length / perPage);
  const visible = appreciations.slice(page * perPage, page * perPage + perPage);

  return (
    <>
      <AboutPageBanner title="APPRECIATION & RECOGNITION" breadcrumbLabel="Appreciation & Recognition" />
      <section ref={ref} className="relative pt-7 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 overflow-hidden" style={{ background: "#f8fafc" }}>


        {/* BG grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }} />

        {/* Glows */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(220,38,38,0.08) 0%,transparent 65%)", filter: "blur(60px)" }} />
        <motion.div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(220,38,38,0.06) 0%,transparent 70%)" }}
          animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

        {/* Container — responsive padding */}
        <div className="relative w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32">

          {/* ── HEADER ── */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.div className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
              <motion.span className="h-px bg-red-600"
                initial={{ width: 0 }} animate={inView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">Recognition</span>
              <motion.span className="h-px bg-red-600"
                initial={{ width: 0 }} animate={inView ? { width: 32 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
            </motion.div>

            <motion.h2
              className="font-black text-slate-900 leading-tight mb-3 text-4xl sm:text-5xl md:text-5xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}>
              Recognitions & {" "}
              <span style={{ color: "#ef4444" }}>Achievements</span>
            </motion.h2>

            <motion.p className="text-sm max-w-xl mx-auto px-2"
              style={{ color: "#64748b" }}
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.28 }}>
              Acknowledged by honourable Members of Parliament and Chief Ministers across India for our contribution to quality education.
            </motion.p>

            <motion.div className="h-px mx-auto mt-5"
              style={{ width: 48, background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }}
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }} />
          </div>

          {/* ── COUNT STRIP ── */}
          <motion.div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}>
            {[
              { icon: <Award size={14} />, value: "2", label: "Chief Ministers" },
              { icon: <Star size={14} />, value: "6", label: "MPs, Lok Sabha" },
              { icon: <Quote size={14} />, value: "8+", label: "Official Letters" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(226,232,240,1)",
                }}>
                <span className="text-red-400">{s.icon}</span>
                <span className="font-black text-slate-900 text-sm">{s.value}</span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: "#64748b" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* ── CARDS GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
            <AnimatePresence mode="wait">
              {visible.map((person, i) => (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setSelected(person)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(226,232,240,1)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
                  }}>

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top,${person.color}18,transparent 70%)` }} />

                  {/* Top red bar */}
                  <div className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg,${person.color},transparent)` }} />

                  <div className="p-5 sm:p-6 lg:p-7">
                    {/* Avatar + emblem row */}
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-xl flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg,${person.color},#ef4444)`,
                          border: `1px solid ${person.color}44`,
                          boxShadow: `0 4px 16px ${person.color}30`,
                        }}>
                        {person.initials}
                      </div>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "#f8fafc", border: "1px solid rgba(226,232,240,1)" }}>
                        <Award size={16} style={{ color: "#94a3b8" }} />
                      </div>
                    </div>

                    {/* Name + role */}
                    <h3 className="font-black text-slate-900 text-base sm:text-[18px] leading-tight mb-1 group-hover:text-red-600 transition-colors duration-200">
                      {person.name}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                      style={{ color: "rgba(220,38,38,0.7)" }}>
                      {person.role}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest mb-4"
                      style={{ color: "#64748b" }}>
                      {person.region}
                    </p>

                    {/* Divider */}
                    <div className="h-px mb-4" style={{ background: "rgba(148,163,184,0.25)" }} />

                    {/* Message preview */}
                    <div className="relative">
                      <Quote size={14} className="text-red-600 mb-2 opacity-60" />
                      <p className="text-[13px] sm:text-[14px] leading-relaxed line-clamp-3"
                        style={{ color: "#334155" }}>
                        {person.message}
                      </p>
                    </div>

                    {/* Date + CTA */}
                    <div className="flex items-center justify-between mt-4 sm:mt-5">
                      <span className="text-[9px] uppercase tracking-widest" style={{ color: "#64748b" }}>
                        Dt. {person.date}
                      </span>
                      <motion.div
                        className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-red-500"
                        animate={{ x: [0, 3, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                        Read Letter <ExternalLink size={10} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${person.color}40` }} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ── PAGINATION ── */}
          <div className="flex items-center justify-center gap-3">
            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all"
              style={{
                background: page === 0 ? "#f1f5f9" : "rgba(220,38,38,0.1)",
                border: `1px solid ${page === 0 ? "rgba(203,213,225,1)" : "rgba(220,38,38,0.25)"}`,
                color: page === 0 ? "#94a3b8" : "#ef4444",
              }}>
              <ChevronLeft size={16} />
            </motion.button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <motion.button key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={() => setPage(i)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                style={{
                  background: i === page ? "#ef4444" : "rgba(148,163,184,0.35)",
                  transform: i === page ? "scale(1.3)" : "scale(1)",
                }} />
            ))}

            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all"
              style={{
                background: page === totalPages - 1 ? "#f1f5f9" : "rgba(220,38,38,0.1)",
                border: `1px solid ${page === totalPages - 1 ? "rgba(203,213,225,1)" : "rgba(220,38,38,0.25)"}`,
                color: page === totalPages - 1 ? "#94a3b8" : "#ef4444",
              }}>
              <ChevronRight size={16} />
            </motion.button>
          </div>

        </div>

        {/* ════════════ LETTER MODAL ════════════ */}
        <AnimatePresence>
          {selected && (
            <>
              {/* Backdrop */}
              <motion.div className="fixed inset-0 z-50"
                style={{ backdropFilter: "blur(8px)", background: "rgba(15,23,42,0.28)" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelected(null)} />

              {/* Modal — full screen on mobile, inset on larger */}
              <motion.div
                className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto rounded-2xl sm:rounded-3xl"
                style={{
                  background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
                  border: "1px solid rgba(226,232,240,1)",
                  boxShadow: "0 30px 80px rgba(15,23,42,0.22), 0 0 0 1px rgba(220,38,38,0.08)",
                }}
                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 20 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>

                {/* Red top line */}
                <div className="h-1 w-full rounded-t-2xl sm:rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg,transparent,${selected.color},transparent)` }} />

                {/* Grid bg */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none overflow-hidden"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.14) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }} />

                <div className="relative p-5 sm:p-8 md:p-12">
                  {/* Close */}
                  <button onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-xl flex items-center justify-center z-10 transition-colors hover:bg-slate-100"
                    style={{ background: "#ffffff", border: "1px solid rgba(226,232,240,1)" }}>
                    <X size={16} style={{ color: "#64748b" }} />
                  </button>

                  <div className="max-w-2xl mx-auto">

                    {/* Official header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6"
                      style={{ borderBottom: "1px solid rgba(203,213,225,0.6)" }}>
                      <div>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4"
                          style={{
                            background: `linear-gradient(135deg,${selected.color}22,rgba(0,0,0,0))`,
                            border: `1px solid ${selected.color}33`,
                          }}>
                          <Award size={22} style={{ color: selected.color }} />
                        </div>
                        <div className="font-black text-xl sm:text-2xl text-slate-900 leading-tight">{selected.name}</div>
                        <div className="font-bold text-sm mt-1" style={{ color: "#ef4444" }}>{selected.role}</div>
                        <div className="text-xs mt-0.5 uppercase tracking-widest" style={{ color: "#64748b" }}>{selected.region}</div>
                      </div>

                      {/* Date + ref */}
                      <div className="sm:text-right flex-shrink-0">
                        {selected.ref && (
                          <p className="text-[10px] mb-1" style={{ color: "#64748b" }}>
                            Ref: {selected.ref}
                          </p>
                        )}
                        <p className="text-[11px] font-bold" style={{ color: "#475569" }}>
                          Dt. {selected.date}
                        </p>
                      </div>
                    </div>

                    {/* MESSAGE label */}
                    <div className="text-center mb-5 sm:mb-6">
                      <span className="text-xs font-black uppercase tracking-[0.3em]"
                        style={{ color: "#64748b" }}>— Message —</span>
                    </div>

                    {/* Letter body */}
                    <div className="mb-8 sm:mb-10">
                      {selected.letterImage ? (
                        <div className="rounded-xl sm:rounded-2xl overflow-hidden"
                          style={{ border: "1px solid rgba(226,232,240,1)", background: "#ffffff" }}>
                          <img
                            src={selected.letterImage}
                            alt={`${selected.name} letter`}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="space-y-4 sm:space-y-5">
                          {selected.fullLetter.split("\n\n").map((para, i) => (
                            <p key={i} className="text-sm leading-[2]" style={{ color: "#475569" }}>
                              {para}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Signature area */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-5 sm:pt-6"
                      style={{ borderTop: "1px solid rgba(203,213,225,0.6)" }}>
                      <div>
                        <div className="font-black text-2xl sm:text-3xl mb-1"
                          style={{
                            fontFamily: "cursive",
                            background: `linear-gradient(135deg,${selected.color},#ef4444)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}>
                          {selected.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className="font-bold text-sm text-slate-900">({selected.name})</div>
                      </div>
                      <div className="sm:text-right">
                        <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "#64748b" }}>To</p>
                        <p className="text-xs font-semibold" style={{ color: "#475569" }}>{selected.to}</p>
                      </div>
                    </div>

                    {/* Official stamp */}
                    <div className="flex justify-center mt-6 sm:mt-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor: `${selected.color}33`,
                          background: `${selected.color}08`,
                          borderStyle: "dashed",
                        }}>
                        <Award size={24} style={{ color: `${selected.color}50` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </section>
    </>
  );
}
