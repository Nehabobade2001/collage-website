// "use client";

// import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";
// import AboutPageBanner from "../about/AboutPageBanner";

// export default function Registration() {
//   return (
//     <>
//     <AboutPageBanner title="REGISTRATION & RECOGNITION" breadcrumbLabel="Registration & Recognition" />
//     <section className="relative py-16 overflow-hidden" style={{ background: "#f8fafc" }}>
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
//           backgroundSize: "26px 26px",
//         }}
//       />

//       <div className="relative w-full px-6 lg:px-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45 }}
//           className="rounded-3xl overflow-hidden"
//           style={{
//             background: "#ffffff",
//             border: "1px solid rgba(226,232,240,1)",
//             boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
//           }}
//         >
//           <div className="grid lg:grid-cols-2">
//             <div className="relative min-h-[300px] lg:min-h-[460px]">
//               <img src="/photo1.png" alt="Student" className="absolute inset-0 w-full h-full object-cover" />
//               <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(0,0,0,0.35),transparent)" }} />
//             </div>

//             <div
//               className="p-8 lg:p-12"
//               style={{
//                 background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
//                 borderLeft: "1px solid rgba(203,213,225,0.8)",
//               }}
//             >
//               <h1 className="font-light leading-tight mb-1 text-slate-700" style={{ fontSize: "clamp(30px,4vw,52px)" }}>
// Official Registrations         </h1>
//               <h2 className="font-black leading-tight mb-8" style={{ color: "#ef4444", fontSize: "clamp(26px,3.2vw,44px)" }}>
// & Approvals                    </h2>

//               <div className="space-y-10">
//                 <div className="flex items-start gap-3">
//                   <ChevronRight size={16} className="mt-1 text-red-400 flex-shrink-0" />
//                   <p className="text-lg leading-relaxed text-slate-700">
//                     Government of India NCT of Delhi
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <ChevronRight size={16} className="mt-1 text-red-400 flex-shrink-0" />
//                   <p className="text-lg leading-relaxed text-slate-700">
//                     NITI AAYOG - National Institution Transforming India
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="p-8 lg:p-10" style={{ background: "#f8fafc" }}>
//             <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
//               <div className="mx-auto w-44 h-44 rounded-full p-1.5" style={{ border: "4px solid #dc2626" }}>
//                 <div className="w-full h-full rounded-full overflow-hidden border-4" style={{ borderColor: "#d4af37" }}>
//                   <img src="/photo.png" alt="Recognition" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//               <div className="mx-auto w-44 h-44 rounded-full p-1.5" style={{ border: "4px solid #dc2626" }}>
//                 <div className="w-full h-full rounded-full overflow-hidden border-4" style={{ borderColor: "#d4af37" }}>
//                   <img src="/photo3.png" alt="Accredited" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//     </>
//   );
// }
"use client";

import { motion, useInView } from "framer-motion";
import { ChevronRight, CheckCircle, Users } from "lucide-react";
import { useRef } from "react";
import AboutPageBanner from "../about/AboutPageBanner";

// ✅ Only real registrations shown in the navbar ticker & website
const registrations = [
  {
    title: "Government of India – NCT of Delhi",
    desc: "Registered under the Government of National Capital Territory of Delhi.",
  },
  {
    title: "NITI AAYOG",
    desc: "National Institution for Transforming India — premier policy think tank of the Government of India.",
  },
  {
    title: "Ministry of Labour & Employment",
    desc: "Approved by the Ministry of Labour & Employment, Government of India.",
  },
  {
    title: "Ministry of DGT",
    desc: "Directorate General of Training under the Ministry of Skill Development & Entrepreneurship.",
  },
  {
    title: "Ministry of MSME",
    desc: "Ministry of Micro, Small & Medium Enterprises, Government of India.",
  },
  {
    title: "Skill Development & Entrepreneurship",
    desc: "Recognised under the Ministry of Skill Development & Entrepreneurship, Government of India.",
  },
  {
    title: "ISO Certified",
    desc: "Internationally certified for quality management systems.",
  },
  {
    title: "UGC Recognised",
    desc: "Recognised by the University Grants Commission of India.",
  },
];

export default function Registration() {
  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const inView1 = useInView(sec1, { once: true, margin: "-60px" });
  const inView2 = useInView(sec2, { once: true, margin: "-60px" });

  return (
    <>
      <AboutPageBanner title="REGISTRATION " breadcrumbLabel="Registration" />

      {/* ── HERO CARD ── */}
      <section className="relative pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-12 sm:pb-14 md:pb-16 overflow-hidden" style={{ background: "#f8fafc" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative w-full px-6 lg:px-20">
          <div className="text-center mb-10">
            <motion.h2
              className=" leading-tight mb-1  font-black text-gray-900 leading-tight text-4xl sm:text-5xl md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Official Registrations <span  className="font-black leading-tight font-black text-red-600 leading-tight text-4xl sm:text-5xl md:text-7xl mb-4">
                Approvals
              </span>
            </motion.h2>
        
            <motion.div
              className="h-px mx-auto"
              style={{ width: 72, background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.22 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(226,232,240,1)",
              boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
            }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-[460px]">
                <img src="/photo1.png" alt="AIIMES Campus" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(0,0,0,0.35),transparent)" }} />
              </div>

              <div
                className="p-8 lg:p-12"
                style={{
                  background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
                  borderLeft: "1px solid rgba(203,213,225,0.8)",
                }}
              >
                <div className="space-y-5  pt-1">
                  {[
                    "Government of India – NCT of Delhi",
                    "NITI AAYOG — National Institution for Transforming India",
                    "Ministry of Labour & Employment",
                    "Ministry of Skill Development & Entrepreneurship",
                    "Ministry of MSME",
                    "Ministry of DGT",
                    "ISO Certified",
                    "UGC Recognised",
                  ].map((item) => (
                    <div key={item} className="flex  items-start gap-3">
                      <ChevronRight size={15} className="mt-0.5 text-red-400 flex-shrink-0" />
                      <p className="text-sm leading-relaxed md:text-[16px] text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificate seals */}
            <div className="p-8 lg:p-10" style={{ background: "#f8fafc", borderTop: "1px solid rgba(226,232,240,1)" }}>
              <p className="text-center text-[10px] uppercase tracking-[0.25em] font-black text-slate-400 mb-8">
                Official Certificates &amp; Seals
              </p>
              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="mx-auto w-44 h-44 rounded-full p-1.5" style={{ border: "4px solid #dc2626" }}>
                  <div className="w-full h-full rounded-full overflow-hidden border-4" style={{ borderColor: "#d4af37" }}>
                    <img src="/photo.png" alt="Recognition Certificate" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="mx-auto w-44 h-44 rounded-full p-1.5" style={{ border: "4px solid #dc2626" }}>
                  <div className="w-full h-full rounded-full overflow-hidden border-4" style={{ borderColor: "#d4af37" }}>
                    <img src="/photo3.png" alt="Accreditation Seal" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REGISTRATIONS CARDS ── */}
      <section ref={sec1} className="relative py-16 overflow-hidden" style={{ background: "#ffffff" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(220,38,38,0.05) 0%,transparent 70%)", filter: "blur(50px)" }}
        />

        <div className="relative w-full px-6 lg:px-20">
          <div className="text-center mb-12">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={inView1 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <motion.span className="h-px bg-red-600 block" initial={{ width: 0 }} animate={inView1 ? { width: 32 } : {}} transition={{ duration: 0.5 }} />
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">Official</span>
              <motion.span className="h-px bg-red-600 block" initial={{ width: 0 }} animate={inView1 ? { width: 32 } : {}} transition={{ duration: 0.5 }} />
            </motion.div>
            <motion.h2
              className="font-black text-slate-900 font-black text-gray-900 leading-tight text-4xl sm:text-5xl md:text-7xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              All Registrations &amp; <span style={{ color: "#ef4444" }}>Recognitions</span>
            </motion.h2>
            <motion.div
              className="h-1 bg-red-600 mx-auto mt-4 rounded-full"
              style={{ width: 48 }}
              initial={{ scaleX: 0 }}
              animate={inView1 ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {registrations.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(220,38,38,0.1)" }}
                className="rounded-2xl p-5 bg-white"
                style={{
                  border: "1px solid rgba(226,232,240,1)",
                  boxShadow: "0 4px 14px rgba(15,23,42,0.04)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
              >
                <div className="h-1 w-10 rounded-full bg-red-600 mb-4" />
                <h3 className="font-black text-slate-900 text-[13px] md:text-[16px] leading-snug mb-2">{item.title}</h3>
                <p className="text-[11px] leading-relaxed text-slate-500 md:text-[14px] mb-4">{item.desc}</p>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={11} className="text-green-600" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-green-600">Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──
      <section
        ref={sec2}
        className="relative py-14 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#7f1d1d 0%,#991b1b 40%,#7f1d1d 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(251,191,36,0.08) 0%, transparent 55%)" }}
        />

        <div className="relative w-full px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users size={14} className="text-red-300" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                Enroll Today
              </span>
            </div>
            <h2
              className="font-black text-white leading-tight mb-4"
              style={{ fontSize: "clamp(24px,3.5vw,42px)" }}
            >
              Study at a <span style={{ color: "#fbbf24" }}>Govt. Recognised</span> Institution
            </h2>
            <p className="text-sm max-w-lg mx-auto mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              AIIMES is officially registered with multiple Government of India ministries. Your degree and certification will be legally valid and recognised.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-[12px] text-red-700 uppercase tracking-wide"
                style={{ background: "#ffffff", boxShadow: "0 4px 18px rgba(0,0,0,0.2)" }}
              >
                Enroll Now <ChevronRight size={14} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-[12px] text-white uppercase tracking-wide"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                View Courses <ChevronRight size={14} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </>
  );
}
