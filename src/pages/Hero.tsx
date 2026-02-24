// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[85vh] flex items-center justify-center text-center text-white">

//       {/* Background Image */}
//     <div
//   className="absolute inset-0 bg-cover bg-center"
//   style={{
//     backgroundImage:
//       "url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b')",
//   }}
// ></div>

// <div className="absolute inset-0 bg-black/70"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl px-6">
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Empowering Future Leaders in Management & Engineering
//         </h1>

//         <p className="mt-6 text-lg md:text-xl text-gray-200">
//           AIIMES provides industry-relevant education, recognized certifications,
//           and flexible learning options to help students build successful careers.
//         </p>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
//           <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition duration-300">
//             Apply Now
//           </button>

//           <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
//             Explore Courses
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{  minHeight: "90vh" }}>

      {/* ── BG DECORATIVE ELEMENTS ── */}
      {/* Top left dot grid */}
      <div className="absolute top-16 left-10 pointer-events-none"
        style={{
          width: 180, height: 180,
          backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px", opacity: 0.6,
        }} />
      {/* Bottom right dot grid */}
      <div className="absolute bottom-16 right-8 pointer-events-none"
        style={{
          width: 140, height: 140,
          backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px", opacity: 0.45,
        }} />

      {/* Floating circle top-right */}
      <motion.div className="absolute rounded-full pointer-events-none"
        style={{ width: 90, height: 90, top: 80, right: "38%", border: "3px solid rgba(220,38,38,0.25)", background: "transparent" }}
        animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute rounded-full pointer-events-none"
        style={{ width: 60, height: 60, top: 100, right: "calc(38% + 18px)", border: "2px dashed rgba(220,38,38,0.15)", background: "transparent" }}
        animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />

      {/* Yellow blob */}
      <motion.div className="absolute rounded-full pointer-events-none"
        style={{ width: 28, height: 28, top: "35%", right: "34%", background: "#fbbf24" }}
        animate={{ y: [0, -14, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* Red blob small */}
      <motion.div className="absolute rounded-full pointer-events-none"
        style={{ width: 18, height: 18, bottom: "28%", left: "45%", background: "#dc2626" }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />

      {/* Big faded circle behind image */}
      <div className="absolute rounded-full pointer-events-none"
        style={{
          width: 480, height: 480, top: "50%", right: "4%",
          transform: "translateY(-50%)",
        }} />

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-0 flex flex-col md:flex-row items-center justify-between min-h-[90vh] gap-10">

        {/* LEFT: Text */}
        <div className="flex-1 max-w-xl z-10">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626", border: "1px solid rgba(220,38,38,0.2)" }}
          >
            <motion.span className="w-2 h-2 rounded-full bg-red-600"
              animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
            Admissions Open 2026
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-black text-gray-900 leading-tight mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 58px)", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Get{" "}
            <motion.span
              className="text-red-600 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "backOut" }}
            >
              40+
            </motion.span>
            {" "}Industry‑Ready<br />
            Courses at<br />
            <span style={{ color: "#111" }}>AIIMES</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-gray-500 text-base leading-relaxed mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            AIIMES provides industry-relevant education, UGC-recognised certifications,
            and flexible learning options to help you build a successful career.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38 }}
          >
            <motion.a href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-red-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-200 flex items-center gap-2"
            >
              Apply Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
            <motion.a href="#"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "#dc2626", color: "#fff", borderColor: "#dc2626" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold text-sm uppercase tracking-wider rounded-xl transition-colors duration-250 flex items-center gap-2"
            >
              Explore Courses
            </motion.a>
          </motion.div>

          {/* Instructor strip — like EduBlink */}
          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.52 }}
          >
            {/* Stacked avatars */}
            <div className="flex -space-x-3">
              {["PS", "RV", "AS", "MK"].map((init, i) => (
                <div key={i}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-black flex-shrink-0"
                  style={{ background: ["#dc2626", "#b91c1c", "#ef4444", "#991b1b"][i], zIndex: 4 - i }}>
                  {init}
                </div>
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-white bg-red-600 flex items-center justify-center flex-shrink-0" style={{ zIndex: 0 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">
                <span className="text-red-600">900+</span> Students Enrolled
              </div>
              <div className="text-xs text-gray-400">Join our growing community</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Image + floating cards */}
        <div className="flex-1 relative flex justify-center items-center z-10 max-w-lg w-full">

          {/* Image container with clipped bg shape */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            {/* Blob background behind image */}
            <div className="absolute inset-0 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] -z-10"
              />

            {/* Replace this div with your <Image> component */}
            <div className="relative w-72 md:w-96 h-80 md:h-[590px] rounded-3xl overflow-hidden"
            >
                
              {/* Placeholder — swap with: <Image src="/hero-student.png" fill alt="Student" className="object-cover object-top" /> */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                 
 <img
    src="/photo3.png"
    alt="AIIMES Student"
    className="w-full h-full mb-20 object-cover "
  />             
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating card — Stats */}
          <motion.div
            className="absolute -left-6 bottom-16 rounded-2xl px-4 py-3 z-20"
            style={{ background: "#fff", boxShadow: "0 8px 32px rgba(0,0,0,0.10)", border: "1px solid #f0f0f0", minWidth: 150 }}
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ y: -4 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Faculty</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["JK", "SM", "AR"].map((init, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-black"
                    style={{ background: ["#dc2626", "#b91c1c", "#ef4444"][i], zIndex: 3 - i }}>
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <span className="text-sm font-black text-red-600">60+</span>
                <span className="text-xs text-gray-500 ml-1">Instructors</span>
              </div>
            </div>
          </motion.div>

          {/* Floating card — UGC badge */}
          <motion.div
            className="absolute -right-4 top-12 rounded-2xl px-4 py-3 z-20"
            style={{ background: "#fff", boxShadow: "0 8px 32px rgba(0,0,0,0.10)", border: "1px solid #f0f0f0" }}
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <div className="text-xs font-black text-gray-900">UGC Recognised</div>
                <div className="text-[10px] text-gray-400">Govt. of India Regd.</div>
              </div>
            </div>
          </motion.div>

          {/* Floating card — Est. */}
          <motion.div
            className="absolute -right-2 bottom-24 rounded-2xl px-4 py-2.5 z-20"
            style={{ background: "#dc2626", boxShadow: "0 8px 24px rgba(220,38,38,0.3)" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.95, ease: "backOut" }}
            whileHover={{ scale: 1.06, y: -3 }}
          >
            <div className="text-center">
              <div className="text-white font-black text-lg leading-none">2009</div>
              <div className="text-red-200 text-[10px] font-semibold mt-0.5">Est. Year</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── BOTTOM WAVE ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z"
            fill="white" fillOpacity="0.6"/>
        </svg>
      </div>

    </section>
  );
}