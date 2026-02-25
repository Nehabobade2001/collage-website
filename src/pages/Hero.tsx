// // "use client";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // const slides = [
// //   {
// //     id: 1,
// //     badge: "Admissions Open 2026",
// //     title: "Get 40+ Industry‑Ready Courses at AIIMES",
// //     highlight: "40+",
// //     description: "AIIMES provides industry-relevant education, UGC-recognised certifications, and flexible learning options to help you build a successful career.",
// //     image: "/photo3.png",
// //     stats: { count: "900+", label: "Students Enrolled" }
// //   },
// //   {
// //     id: 2,
// //     badge: "World-Class Faculty",
// //     title: "Learn from Industry Experts & Professionals",
// //     highlight: "50+",
// //     description: "Our experienced faculty brings real-world expertise to the classroom, ensuring you get practical knowledge that matters in today's job market.",
// //     image: "/photo3.png",
// //     stats: { count: "50+", label: "Expert Instructors" }
// //   },
// //   {
// //     id: 3,
// //     badge: "100% Placement Support",
// //     title: "Build Your Career with Top Companies",
// //     highlight: "95%",
// //     description: "Join thousands of successful graduates who landed their dream jobs. Get personalized career guidance and placement assistance.",
// //     image: "/photo1.png",
// //     stats: { count: "500+", label: "Companies Hiring" }
// //   }
// // ];

// // export default function HeroSection() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isAutoPlay, setIsAutoPlay] = useState(true);

// //   useEffect(() => {
// //     if (!isAutoPlay) return;
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 2000);
// //     return () => clearInterval(timer);
// //   }, [isAutoPlay, currentSlide]);

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     setIsAutoPlay(false);
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// //     setIsAutoPlay(false);
// //   };

// //   const slide = slides[currentSlide];

// //   return (
// //     <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white min-h-[78vh] md:min-h-[90vh]">
      
// //       {/* Background Decorations */}
// //       <div className="absolute top-16 left-10 pointer-events-none w-[180px] h-[180px] opacity-60"
// //         style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
// //       <div className="absolute bottom-16 right-8 pointer-events-none w-[140px] h-[140px] opacity-45"
// //         style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />

// //       <motion.div className="absolute w-[90px] h-[90px] top-[80px] right-[38%] rounded-full border-[3px] border-red-600/25 pointer-events-none"
// //         animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
      
// //       <motion.div className="absolute w-7 h-7 top-[35%] right-[34%] rounded-full bg-yellow-400 pointer-events-none"
// //         animate={{ y: [0, -14, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />

// //       {/* Main Content */}
// //       <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-10 md:py-0 flex flex-col md:flex-row items-center justify-between md:min-h-[90vh] gap-8 md:gap-10 relative">
        
// //         {/* Left: Text Content */}
// //         <div className="w-full md:w-[52%] lg:w-[54%] max-w-none md:pl-0 lg:pl-4 z-10 text-center md:text-left">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={slide.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ duration: 0.5 }}
// //             >
// //               {/* Badge */}
// //               <motion.div
// //                 className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/8 text-red-600 border border-red-600/20"
// //               >
// //                 <motion.span className="w-2 h-2 rounded-full bg-red-600"
// //                   animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
// //                 {slide.badge}
// //               </motion.div>

// //               {/* Title */}
// //               <h1 className="font-black text-gray-900 leading-tight mb-6"
// //                 style={{ fontSize: "clamp(36px, 5vw, 58px)", letterSpacing: "-0.02em" }}>
// //                 {slide.title.split(slide.highlight)[0]}
// //                 <span className="text-red-600 ml-2">{slide.highlight} </span>
// //                 {slide.title.split(slide.highlight)[1]}
// //               </h1>

// //               {/* Description */}
// //               <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md md:max-w-md mx-auto md:mx-0">
// //                 {slide.description}
// //               </p>

// //               {/* CTA Buttons */}
// //               <div className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
// //                 <motion.a href="#"
// //                   whileHover={{ scale: 1.05, y: -2 }}
// //                   whileTap={{ scale: 0.97 }}
// //                   className="px-8 py-4 bg-red-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-200 flex items-center gap-2"
// //                 >
// //                   Apply Now
// //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                     <path d="M5 12h14M12 5l7 7-7 7"/>
// //                   </svg>
// //                 </motion.a>
// //                 <motion.a href="#"
// //                   whileHover={{ scale: 1.05, y: -2, backgroundColor: "#dc2626", color: "#fff", borderColor: "#dc2626" }}
// //                   whileTap={{ scale: 0.97 }}
// //                   className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold text-sm uppercase tracking-wider rounded-xl transition-colors duration-250 flex items-center gap-2"
// //                 >
// //                   Explore Courses
// //                 </motion.a>
// //               </div>

// //               {/* Stats */}
// //               <div className="mt-8 md:mt-10 flex items-center justify-center md:justify-start gap-4">
// //                 <div className="flex -space-x-3">
// //                   {["PS", "RV", "AS", "MK"].map((init, i) => (
// //                     <div key={i}
// //                       className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-black"
// //                       style={{ background: ["#dc2626", "#b91c1c", "#ef4444", "#991b1b"][i], zIndex: 4 - i }}>
// //                       {init}
// //                     </div>
// //                   ))}
// //                   <div className="w-9 h-9 rounded-full border-2 border-white bg-red-600 flex items-center justify-center">
// //                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
// //                       <path d="M12 5v14M5 12h14"/>
// //                     </svg>
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <div className="text-sm font-bold text-gray-900">
// //                     <span className="text-red-600">{slide.stats.count}</span> {slide.stats.label}
// //                   </div>
// //                   <div className="text-xs text-gray-400">Join our growing community</div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>

// //         {/* Right: Image Slider */}
// //         <div className="w-full md:w-[48%] lg:w-[46%] relative flex justify-center items-center z-10 max-w-none mt-2 md:mt-0">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={slide.id}
// //               initial={{ opacity: 0, x: 50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -50 }}
// //               transition={{ duration: 0.6 }}
// //               className="relative"
// //             >
// //               <div className="relative w-[88vw] max-w-[380px] sm:max-w-[420px] md:w-full md:max-w-[500px] h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl">
// //                 <img
// //                   src={slide.image}
// //                   alt="AIIMES"
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
// //               </div>

// //               {/* Floating Card */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.3 }}
// //                 className="absolute -bottom-4 left-3 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-xl p-3 md:p-4 border border-gray-100"
// //               >
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
// //                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
// //                       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
// //                       <polyline points="22 4 12 14.01 9 11.01"/>
// //                     </svg>
// //                   </div>
// //                   <div>
// //                     <div className="text-sm font-bold text-gray-900">UGC Approved</div>
// //                     <div className="text-xs text-gray-500">Recognized Degrees</div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>
// //       </div>

// //       {/* Sidebar Navigation */}
// //       <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
// //         {slides.map((s, index) => (
// //           <motion.button
// //             key={s.id}
// //             onClick={() => { setCurrentSlide(index); setIsAutoPlay(false); }}
// //             className="group relative flex items-center"
// //             whileHover={{ scale: 1.1 }}
// //           >
// //             {/* Dot */}
// //             <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
// //               index === currentSlide ? "bg-red-600 scale-125" : "bg-gray-300 hover:bg-red-400"
// //             }`} />
            
// //             {/* Label - shows on hover */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 10 }}
// //               whileHover={{ opacity: 1, x: 0 }}
// //               className="absolute right-full mr-3 px-3 py-1.5 bg-white rounded-lg shadow-lg whitespace-nowrap text-xs font-semibold text-gray-700 pointer-events-none"
// //             >
// //               {s.badge}
// //             </motion.div>
            
// //             {/* Active indicator line */}
// //             {index === currentSlide && (
// //               <motion.div
// //                 layoutId="activeSlide"
// //                 className="absolute right-full mr-1 w-8 h-0.5 bg-red-600"
// //                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //               />
// //             )}
// //           </motion.button>
// //         ))}
// //       </div>

// //       {/* Navigation Controls */}
// //       <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
// //         {/* Prev Button */}
// //         <button
// //           onClick={prevSlide}
// //           className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group"
// //         >
// //           <ChevronLeft className="w-5 h-5" />
// //         </button>

// //         {/* Dots */}
// //         <div className="flex gap-2">
// //           {slides.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => { setCurrentSlide(index); setIsAutoPlay(false); }}
// //               className={`h-2 rounded-full transition-all duration-300 ${
// //                 index === currentSlide ? "w-8 bg-red-600" : "w-2 bg-gray-300 hover:bg-red-400"
// //               }`}
// //             />
// //           ))}
// //         </div>

// //         {/* Next Button */}
// //         <button
// //           onClick={nextSlide}
// //           className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group"
// //         >
// //           <ChevronRight className="w-5 h-5" />
// //         </button>
// //       </div>

// //       {/* Progress Bar */}
// //       <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
// //         <motion.div
// //           key={currentSlide}
// //           className="h-full bg-red-600"
// //           initial={{ width: "0%" }}
// //           animate={{ width: isAutoPlay ? "100%" : "0%" }}
// //           transition={{ duration: 2, ease: "linear" }}
// //         />
// //       </div>
// //     </section>
// //   );
// // }


// // "use client";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight, GraduationCap, Building2, Trophy } from "lucide-react";

// // const slides = [
// //   {
// //     id: 1,
// //     badge: "Admissions Open 2026",
// //     title: "Get 40+ Industry‑Ready Courses at AIIMES",
// //     highlight: "40+",
// //     description: "AIIMES provides industry-relevant education, UGC-recognised certifications, and flexible learning options to help you build a successful career.",
// //     image: "/photo3.png",
// //     stats: { count: "900+", label: "Students Enrolled" }
// //   },
// //   {
// //     id: 2,
// //     badge: "World-Class Faculty",
// //     title: "Learn from Industry Experts & Professionals",
// //     highlight: "50+",
// //     description: "Our experienced faculty brings real-world expertise to the classroom, ensuring you get practical knowledge that matters in today's job market.",
// //     image: "/photo3.png",
// //     stats: { count: "50+", label: "Expert Instructors" }
// //   },
// //   {
// //     id: 3,
// //     badge: "100% Placement Support",
// //     title: "Build Your Career with Top Companies",
// //     highlight: "95%",
// //     description: "Join thousands of successful graduates who landed their dream jobs. Get personalized career guidance and placement assistance.",
// //     image: "/photo1.png",
// //     stats: { count: "500+", label: "Companies Hiring" }
// //   }
// // ];

// // const trustBadges = [
// //   { icon: <GraduationCap size={13} />, label: "UGC Recognised" },
// //   { icon: <Building2 size={13} />, label: "Govt. of India Regd." },
// //   { icon: <Trophy size={13} />, label: "ISO Certified" },
// // ];

// // export default function HeroSection() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isAutoPlay, setIsAutoPlay] = useState(true);

// //   useEffect(() => {
// //     if (!isAutoPlay) return;
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 3500);
// //     return () => clearInterval(timer);
// //   }, [isAutoPlay, currentSlide]);

// //   const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % slides.length); setIsAutoPlay(false); };
// //   const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); setIsAutoPlay(false); };

// //   const slide = slides[currentSlide];

// //   return (
// //     <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#fff5f5 0%,#ffffff 50%,#f8fafc 100%)", minHeight: "100vh" }}>

// //       {/* BG dot patterns */}
// //       <div className="absolute top-0 left-0 w-72 h-72 pointer-events-none opacity-50"
// //         style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
// //       <div className="absolute bottom-0 right-0 w-56 h-56 pointer-events-none opacity-35"
// //         style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />

// //       {/* Spinning ring */}
// //       <motion.div className="absolute w-24 h-24 top-16 right-[42%] rounded-full border-[3px] border-red-500/20 pointer-events-none"
// //         animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />

// //       {/* Floating yellow dot */}
// //       <motion.div className="absolute w-5 h-5 top-[38%] right-[36%] rounded-full bg-yellow-400 pointer-events-none"
// //         animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />

// //       {/* Red blob BG */}
// //       <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
// //         style={{ background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }} />

// //       {/* ── MAIN LAYOUT ── */}
// //       <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between min-h-[92vh] gap-8 relative py-20 md:py-0">

// //         {/* ── LEFT: TEXT ── */}
// //         <div className="flex-1 max-w-[52%] z-10 pt-16 md:pt-0 pb-16 md:pb-0">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={slide.id}
// //               initial={{ opacity: 0, y: 24 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ duration: 0.45 }}
// //             >
// //               {/* Trust badges row */}
// //               <div className="flex flex-wrap gap-2 mb-5">
// //                 {trustBadges.map((b) => (
// //                   <div key={b.label}
// //                     className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-red-600"
// //                     style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.15)" }}>
// //                     <span className="text-red-500 ml-2">{b.icon}</span>
// //                     {b.label}
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Badge */}
// //               <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-red-600"
// //                 style={{ background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.18)" }}>
// //                 <motion.span className="w-2 h-2 rounded-full bg-red-600"
// //                   animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
// //                 {slide.badge}
// //               </motion.div>

// //               {/* Title */}
// //               <h1 className="font-black text-gray-900 leading-[1.05] mb-5"
// // style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.03em" }}                >
// //                 {slide.title.split(slide.highlight)[0]}
// //                 <span className="text-red-600 ml-2">{slide.highlight}</span>
// //                 {slide.title.split(slide.highlight)[1]}
// //               </h1>

// //               {/* Description */}
// //               <p className="text-gray-500 text-[15px] leading-relaxed mb-7 max-w-[480px]">
// //                 {slide.description}
// //               </p>

// //               {/* CTA Buttons */}
// //               <div className="flex gap-3 flex-wrap mb-8">
// //                 <motion.a href="#"
// //                   whileHover={{ scale: 1.04, y: -2 }}
// //                   whileTap={{ scale: 0.97 }}
// //                   className="px-8 py-3.5 bg-red-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-200 flex items-center gap-2">
// //                   Apply Now
// //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                     <path d="M5 12h14M12 5l7 7-7 7"/>
// //                   </svg>
// //                 </motion.a>
// //                 <motion.a href="#"
// //                   whileHover={{ scale: 1.04, y: -2, backgroundColor: "#dc2626", color: "#fff", borderColor: "#dc2626" }}
// //                   whileTap={{ scale: 0.97 }}
// //                   className="px-8 py-3.5 border-2 border-gray-200 text-gray-700 font-bold text-sm uppercase tracking-wider rounded-xl transition-colors duration-200">
// //                   Explore Courses
// //                 </motion.a>
// //               </div>

// //               {/* Divider */}
// //               <div className="h-px bg-gray-100 mb-6 max-w-md" />

// //               {/* Stats row */}
// //               <div className="flex items-center gap-6 flex-wrap">
// //                 {/* Avatars */}
// //                 <div className="flex items-center gap-3">
// //                   <div className="flex -space-x-3">
// //                     {["PS", "RV", "AS", "MK"].map((init, i) => (
// //                       <div key={i}
// //                         className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-black"
// //                         style={{ background: ["#dc2626", "#b91c1c", "#ef4444", "#991b1b"][i], zIndex: 4 - i }}>
// //                         {init}
// //                       </div>
// //                     ))}
// //                     <div className="w-9 h-9 rounded-full border-2 border-white bg-red-600 flex items-center justify-center" style={{ zIndex: 0 }}>
// //                       <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
// //                         <path d="M12 5v14M5 12h14"/>
// //                       </svg>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <div className="text-sm font-bold text-gray-900">
// //                       <span className="text-red-600">{slide.stats.count}</span> {slide.stats.label}
// //                     </div>
// //                     <div className="text-[11px] text-gray-400">Join our growing community</div>
// //                   </div>
// //                 </div>

// //                 {/* Mini stat pills */}
// //                 <div className="flex gap-3">
// //                   {[
// //                     { val: "2009", lbl: "Est." },
// //                     { val: "16+", lbl: "Years" },
// //                   ].map((s) => (
// //                     <div key={s.lbl} className="text-center px-4 py-2 rounded-xl"
// //                       style={{ background: "#fff5f5", border: "1px solid rgba(220,38,38,0.12)" }}>
// //                       <div className="text-base font-black text-red-600 leading-none">{s.val}</div>
// //                       <div className="text-[9px] uppercase tracking-wider text-gray-400 mt-0.5">{s.lbl}</div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>

// //         {/* ── RIGHT: IMAGE ── */}
// //         <div className="flex-shrink-0 relative flex items-center justify-center z-10"
// //           style={{ width: "44%", minWidth: 320 }}>
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={slide.id}
// //               initial={{ opacity: 0, x: 40 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -30 }}
// //               transition={{ duration: 0.55 }}
// //               className="relative w-full"
// //             >
// //               {/* Main image — tall & wide */}
// //               <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
// //                 style={{ height: "clamp(480px, 72vh, 660px)" }}>
// //                 <img src={slide.image} alt="AIIMES" className="w-full h-full object-cover" />
// //                 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 50%)" }} />

// //                 {/* Slide counter overlay */}
// //                 <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-wider"
// //                   style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}>
// //                   {currentSlide + 1} / {slides.length}
// //                 </div>
// //               </div>

// //               {/* Floating UGC card — bottom left */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 16 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.35 }}
// //                 className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl px-5 py-3.5 border border-gray-100"
// //               >
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
// //                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
// //                       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
// //                       <polyline points="22 4 12 14.01 9 11.01"/>
// //                     </svg>
// //                   </div>
// //                   <div>
// //                     <div className="text-[13px] font-black text-gray-900">UGC Approved</div>
// //                     <div className="text-[11px] text-gray-400">Recognized Degrees</div>
// //                   </div>
// //                 </div>
// //               </motion.div>

// //               {/* Floating stat card — top left */}
// //               <motion.div
// //                 initial={{ opacity: 0, x: -16 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 0.45 }}
// //                 className="absolute top-6 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100"
// //               >
// //                 <div className="text-xl font-black text-red-600 leading-none">{slide.stats.count}</div>
// //                 <div className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">{slide.stats.label}</div>
// //               </motion.div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>
// //       </div>

// //       {/* ── BOTTOM CONTROLS ── */}
// //       <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
// //         <button onClick={prevSlide}
// //           className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-250">
// //           <ChevronLeft className="w-4 h-4" />
// //         </button>
// //         <div className="flex gap-2">
// //           {slides.map((_, index) => (
// //             <button key={index}
// //               onClick={() => { setCurrentSlide(index); setIsAutoPlay(false); }}
// //               className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-red-600" : "w-2 bg-gray-200 hover:bg-red-400"}`} />
// //           ))}
// //         </div>
// //         <button onClick={nextSlide}
// //           className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-250">
// //           <ChevronRight className="w-4 h-4" />
// //         </button>
// //       </div>

// //       {/* ── PROGRESS BAR ── */}
// //       <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
// //         <motion.div
// //           key={currentSlide}
// //           className="h-full bg-red-600"
// //           initial={{ width: "0%" }}
// //           animate={{ width: isAutoPlay ? "100%" : "0%" }}
// //           transition={{ duration: 3.5, ease: "linear" }}
// //         />
// //       </div>
// //     </section>
// //   );
// // }



// // "use client";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight, GraduationCap, Building2, Trophy } from "lucide-react";

// // const slides = [
// //   {
// //     id: 1,
// //     badge: "Admissions Open 2026",
// //     title: "Get 40+ Industry‑Ready Courses at AIIMES",
// //     highlight: "40+",
// //     description: "AIIMES provides industry-relevant education, UGC-recognised certifications, and flexible learning options to help you build a successful career.",
// //     image: "/photo3.png",
// //     stats: { count: "900+", label: "Students Enrolled" }
// //   },
// //   {
// //     id: 2,
// //     badge: "World-Class Faculty",
// //     title: "Learn from Industry Experts & Professionals",
// //     highlight: "50+",
// //     description: "Our experienced faculty brings real-world expertise to the classroom, ensuring you get practical knowledge that matters in today's job market.",
// //     image: "/photo3.png",
// //     stats: { count: "50+", label: "Expert Instructors" }
// //   },
// //   {
// //     id: 3,
// //     badge: "100% Placement Support",
// //     title: "Build Your Career with Top Companies",
// //     highlight: "95%",
// //     description: "Join thousands of successful graduates who landed their dream jobs. Get personalized career guidance and placement assistance.",
// //     image: "/photo1.png",
// //     stats: { count: "500+", label: "Companies Hiring" }
// //   }
// // ];

// // const trustBadges = [
// //   { icon: <GraduationCap size={11} />, label: "UGC Recognised" },
// //   { icon: <Building2 size={11} />, label: "Govt. of India Regd." },
// //   { icon: <Trophy size={11} />, label: "ISO Certified" },
// // ];

// // export default function HeroSection() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isAutoPlay, setIsAutoPlay] = useState(true);

// //   useEffect(() => {
// //     if (!isAutoPlay) return;
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 3500);
// //     return () => clearInterval(timer);
// //   }, [isAutoPlay, currentSlide]);

// //   const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % slides.length); setIsAutoPlay(false); };
// //   const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); setIsAutoPlay(false); };

// //   const slide = slides[currentSlide];

// //   return (
// //     <section
// //       className="relative overflow-hidden"
// //       style={{ background: "linear-gradient(135deg,#fff5f5 0%,#ffffff 50%,#f8fafc 100%)", minHeight: "100svh" }}
// //     >
// //       {/* BG dot patterns */}
// //       <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 pointer-events-none opacity-50"
// //         style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
// //       <div className="absolute bottom-0 right-0 w-36 h-36 md:w-56 md:h-56 pointer-events-none opacity-35"
// //         style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />

// //       {/* Spinning ring — desktop only */}
// //       <motion.div className="hidden md:block absolute w-24 h-24 top-16 right-[42%] rounded-full border-[3px] border-red-500/20 pointer-events-none"
// //         animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />

// //       {/* Floating yellow dot — desktop only */}
// //       <motion.div className="hidden md:block absolute w-5 h-5 top-[38%] right-[36%] rounded-full bg-yellow-400 pointer-events-none"
// //         animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />

// //       {/* Red blob */}
// //       <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
// //         style={{ background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }} />

// //       {/* ── MAIN LAYOUT ── */}
// //       <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 relative pt-10 pb-24 lg:min-h-[100svh] lg:py-0">

// //         {/* ── LEFT: TEXT ── */}
// //         <div className="w-full lg:flex-1 md:mb-36 lg:max-w-[52%] z-10">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={slide.id}
// //               initial={{ opacity: 0, y: 24 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ duration: 0.45 }}
// //             >
// //               {/* Trust badges */}
// //               <div className="flex flex-wrap gap-1.5 mb-4">
// //                 {trustBadges.map((b) => (
// //                   <div key={b.label}
// //                     className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-red-600"
// //                     style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.15)" }}>
// //                     <span className="text-red-500">{b.icon}</span>
// //                     {b.label}
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Slide badge */}
// //               <motion.div
// //                 className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-red-600"
// //                 style={{ background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.18)" }}
// //               >
// //                 <motion.span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"
// //                   animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
// //                 {slide.badge}
// //               </motion.div>

// //               {/* Title */}
// //               <h1
// //                 className="font-black text-gray-900 leading-[1.05] mb-4 text-4xl sm:text-5xl md:text-7xl lg:text-7xl"
// //                 style={{ letterSpacing: "0.025em" }}
// //               >
// //                 {slide.title.split(slide.highlight)[0]}
// //                 <span className="text-red-600 md:ml-2">{slide.highlight}</span>
// //                 {slide.title.split(slide.highlight)[1]}
// //               </h1>

// //               {/* Description */}
// //               <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-6 max-w-lg">
// //                 {slide.description}
// //               </p>

// //               {/* CTA Buttons */}
// //               <div className="flex gap-3 flex-wrap mb-7">
// //                 <motion.a href="#"
// //                   whileHover={{ scale: 1.04, y: -2 }}
// //                   whileTap={{ scale: 0.97 }}
// //                   className="px-6 sm:px-8 py-3 sm:py-3.5 bg-red-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-200 flex items-center gap-2">
// //                   Apply Now
// //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                     <path d="M5 12h14M12 5l7 7-7 7"/>
// //                   </svg>
// //                 </motion.a>
// //                 <motion.a href="#"
// //                   whileHover={{ scale: 1.04, y: -2, backgroundColor: "#dc2626", color: "#fff", borderColor: "#dc2626" }}
// //                   whileTap={{ scale: 0.97 }}
// //                   className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-gray-200 text-gray-700 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors duration-200">
// //                   Explore Courses
// //                 </motion.a>
// //               </div>

// //               {/* Divider */}
// //               <div className="h-px bg-gray-100 mb-5 max-w-md" />

// //               {/* Stats row */}
// //               <div className="flex flex-wrap items-center gap-4 sm:gap-6">
// //                 <div className="flex items-center gap-3">
// //                   <div className="flex -space-x-3">
// //                     {["PS", "RV", "AS", "MK"].map((init, i) => (
// //                       <div key={i}
// //                         className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] sm:text-[10px] font-black"
// //                         style={{ background: ["#dc2626", "#b91c1c", "#ef4444", "#991b1b"][i], zIndex: 4 - i }}>
// //                         {init}
// //                       </div>
// //                     ))}
// //                     <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-red-600 flex items-center justify-center" style={{ zIndex: 0 }}>
// //                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
// //                         <path d="M12 5v14M5 12h14"/>
// //                       </svg>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <div className="text-xs sm:text-sm font-bold text-gray-900">
// //                       <span className="text-red-600">{slide.stats.count}</span> {slide.stats.label}
// //                     </div>
// //                     <div className="text-[10px] sm:text-[11px] text-gray-400">Join our growing community</div>
// //                   </div>
// //                 </div>

// //                 {/* Mini pills */}
// //                 <div className="flex gap-2 sm:gap-3">
// //                   {[{ val: "2009", lbl: "Est." }, { val: "16+", lbl: "Years" }].map((s) => (
// //                     <div key={s.lbl} className="text-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl"
// //                       style={{ background: "#fff5f5", border: "1px solid rgba(220,38,38,0.12)" }}>
// //                       <div className="text-sm sm:text-base font-black text-red-600 leading-none">{s.val}</div>
// //                       <div className="text-[9px] uppercase tracking-wider text-gray-400 mt-0.5">{s.lbl}</div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>

// //         {/* ── RIGHT: IMAGE ── */}
// //         <div className="w-full lg:w-[44%] lg:flex-shrink-0 relative flex items-center justify-center z-10">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={slide.id}
// //               initial={{ opacity: 0, x: 40 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -30 }}
// //               transition={{ duration: 0.55 }}
// //               className="relative w-full"
// //             >
// //               {/* Image */}
// //               <div
// //                 className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
// //                 style={{ height: "clamp(260px, 45vw, 660px)" }}
// //               >
// //                 <img src={slide.image} alt="AIIMES" className="w-full h-full object-cover" />
// //                 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 50%)" }} />
// //                 <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider"
// //                   style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}>
// //                   {currentSlide + 1} / {slides.length}
// //                 </div>
// //               </div>

// //               {/* UGC card — sm+ only */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 16 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.35 }}
// //                 className="hidden sm:block absolute -bottom-4 -left-4 md:-bottom-5 md:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-xl px-4 py-3 border border-gray-100"
// //               >
// //                 <div className="flex items-center gap-2 sm:gap-3">
// //                   <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
// //                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
// //                       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
// //                       <polyline points="22 4 12 14.01 9 11.01"/>
// //                     </svg>
// //                   </div>
// //                   <div>
// //                     <div className="text-[12px] sm:text-[13px] font-black text-gray-900">UGC Approved</div>
// //                     <div className="text-[10px] sm:text-[11px] text-gray-400">Recognized Degrees</div>
// //                   </div>
// //                 </div>
// //               </motion.div>

// //               {/* Stat card — sm+ only */}
// //               <motion.div
// //                 initial={{ opacity: 0, x: -16 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 0.45 }}
// //                 className="hidden sm:block absolute top-4 -left-4 md:top-6 md:-left-8 bg-white rounded-xl sm:rounded-2xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 border border-gray-100"
// //               >
// //                 <div className="text-lg sm:text-xl font-black text-red-600 leading-none">{slide.stats.count}</div>
// //                 <div className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">{slide.stats.label}</div>
// //               </motion.div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>
// //       </div>

// //       {/* ── BOTTOM CONTROLS ── */}
// //       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
// //         <button onClick={prevSlide}
// //           className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-200">
// //           <ChevronLeft className="w-4 h-4" />
// //         </button>
// //         <div className="flex gap-2">
// //           {slides.map((_, index) => (
// //             <button key={index}
// //               onClick={() => { setCurrentSlide(index); setIsAutoPlay(false); }}
// //               className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-red-600" : "w-2 bg-gray-200 hover:bg-red-400"}`} />
// //           ))}
// //         </div>
// //         <button onClick={nextSlide}
// //           className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-200">
// //           <ChevronRight className="w-4 h-4" />
// //         </button>
// //       </div>

// //       {/* ── PROGRESS BAR ── */}
// //       <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
// //         <motion.div
// //           key={currentSlide}
// //           className="h-full bg-red-600"
// //           initial={{ width: "0%" }}
// //           animate={{ width: isAutoPlay ? "100%" : "0%" }}
// //           transition={{ duration: 3.5, ease: "linear" }}
// //         />
// //       </div>
// //     </section>
// //   );
// // }
// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, GraduationCap, Building2, Trophy } from "lucide-react";

// const slides = [
//   {
//     id: 1,
//     badge: "Admissions Open 2026",
//     title: "Get 40+ Industry‑Ready Courses at AIIMES",
//     highlight: "40+",
//     description: "AIIMES provides industry-relevant education, UGC-recognised certifications, and flexible learning options to help you build a successful career.",
//     image: "/photo3.png",
//     stats: { count: "900+", label: "Students Enrolled" }
//   },
//   {
//     id: 2,
//     badge: "World-Class Faculty",
//     title: "Learn from Industry Experts & Professionals",
//     highlight: "50+",
//     description: "Our experienced faculty brings real-world expertise to the classroom, ensuring you get practical knowledge that matters in today's job market.",
//     image: "/photo3.png",
//     stats: { count: "50+", label: "Expert Instructors" }
//   },
//   {
//     id: 3,
//     badge: "100% Placement Support",
//     title: "Build Your Career with Top Companies",
//     highlight: "95%",
//     description: "Join thousands of successful graduates who landed their dream jobs. Get personalized career guidance and placement assistance.",
//     image: "/photo1.png",
//     stats: { count: "500+", label: "Companies Hiring" }
//   }
// ];

// const trustBadges = [
//   { icon: <GraduationCap size={11} />, label: "UGC Recognised" },
//   { icon: <Building2 size={11} />, label: "Govt. of India Regd." },
//   { icon: <Trophy size={11} />, label: "ISO Certified" },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlay) return;
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, [isAutoPlay, currentSlide]);

//   const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % slides.length); setIsAutoPlay(false); };
//   const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); setIsAutoPlay(false); };

//   const slide = slides[currentSlide];

//   return (
//     <section
//       className="relative overflow-hidden"
//       style={{ background: "linear-gradient(135deg,#fff5f5 0%,#ffffff 50%,#f8fafc 100%)", minHeight: "100svh" }}
//     >
//       {/* BG dot patterns */}
//       <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 pointer-events-none opacity-50"
//         style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
//       <div className="absolute bottom-0 right-0 w-36 h-36 md:w-56 md:h-56 pointer-events-none opacity-35"
//         style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />

//       {/* Spinning ring — lg+ only */}
//       <motion.div className="hidden lg:block absolute w-24 h-24 top-16 right-[42%] rounded-full border-[3px] border-red-500/20 pointer-events-none"
//         animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />

//       {/* Floating yellow dot — lg+ only */}
//       <motion.div className="hidden lg:block absolute w-5 h-5 top-[38%] right-[36%] rounded-full bg-yellow-400 pointer-events-none"
//         animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />

//       {/* Red blob */}
//       <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }} />

//       {/* ── MAIN LAYOUT ── */}
//       <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-6 relative pt-10 pb-6 lg:min-h-[100svh] lg:py-0">

//         {/* ── RIGHT: IMAGE (order-1 on mobile/md so image shows first) ── */}
//         <div className="w-full lg:w-[44%] lg:flex-shrink-0 relative flex flex-col items-center z-10 order-1 lg:order-2">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slide.id}
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -30 }}
//               transition={{ duration: 0.55 }}
//               className="relative w-full"
//             >
//               {/* Image — fixed heights per breakpoint */}
//               <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-[220px] sm:h-[300px] md:h-[340px] lg:h-[clamp(420px,55vh,660px)]">
//                 <img src={slide.image} alt="AIIMES" className="w-full h-full object-cover" />
//                 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 50%)" }} />
//                 <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider"
//                   style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}>
//                   {currentSlide + 1} / {slides.length}
//                 </div>
//               </div>

//               {/* UGC card — sm+ only */}
//               <motion.div
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.35 }}
//                 className="hidden sm:block absolute -bottom-4 -left-4 md:-bottom-5 md:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-xl px-4 py-3 border border-gray-100"
//               >
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
//                       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
//                       <polyline points="22 4 12 14.01 9 11.01"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <div className="text-[12px] sm:text-[13px] font-black text-gray-900">UGC Approved</div>
//                     <div className="text-[10px] sm:text-[11px] text-gray-400">Recognized Degrees</div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Stat card — sm+ only */}
//               <motion.div
//                 initial={{ opacity: 0, x: -16 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.45 }}
//                 className="hidden sm:block absolute top-4 -left-4 md:top-6 md:-left-8 bg-white rounded-xl sm:rounded-2xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 border border-gray-100"
//               >
//                 <div className="text-lg sm:text-xl font-black text-red-600 leading-none">{slide.stats.count}</div>
//                 <div className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">{slide.stats.label}</div>
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>

//           {/* ── SLIDE CONTROLS — inline below image on mobile/md ── */}
//           <div className="lg:hidden flex items-center gap-3 mt-5 z-20">
//             <button onClick={prevSlide}
//               className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-200">
//               <ChevronLeft className="w-4 h-4" />
//             </button>
//             <div className="flex gap-2">
//               {slides.map((_, index) => (
//                 <button key={index}
//                   onClick={() => { setCurrentSlide(index); setIsAutoPlay(false); }}
//                   className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-red-600" : "w-2 bg-gray-200 hover:bg-red-400"}`} />
//               ))}
//             </div>
//             <button onClick={nextSlide}
//               className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-200">
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* ── LEFT: TEXT ── */}
//         <div className="w-full lg:flex-1 lg:max-w-[52%] z-10 order-2 lg:order-1 md:mb-32 pb-6 lg:pb-0">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slide.id}
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.45 }}
//             >
//               {/* Trust badges */}
//               <div className="flex flex-wrap gap-1.5 mb-4">
//                 {trustBadges.map((b) => (
//                   <div key={b.label}
//                     className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-red-600"
//                     style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.15)" }}>
//                     <span className="text-red-500">{b.icon}</span>
//                     {b.label}
//                   </div>
//                 ))}
//               </div>

//               {/* Slide badge */}
//               <motion.div
//                 className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-red-600"
//                 style={{ background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.18)" }}
//               >
//                 <motion.span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"
//                   animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
//                 {slide.badge}
//               </motion.div>

//               {/* Title */}
//               <h1
//                 className="font-black text-gray-900 leading-[1.05] mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
//                 style={{ letterSpacing: "0.025em" }}
//               >
//                 {slide.title.split(slide.highlight)[0]}
//                 <span className="text-red-600 md:ml-2">{slide.highlight}</span>
//                 {slide.title.split(slide.highlight)[1]}
//               </h1>

//               {/* Description */}
//               <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-6 max-w-lg">
//                 {slide.description}
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex gap-3 flex-wrap mb-7">
//                 <motion.a href="#"
//                   whileHover={{ scale: 1.04, y: -2 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="px-6 sm:px-8 py-3 sm:py-3.5 bg-red-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-200 flex items-center gap-2">
//                   Apply Now
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M5 12h14M12 5l7 7-7 7"/>
//                   </svg>
//                 </motion.a>
//                 <motion.a href="#"
//                   whileHover={{ scale: 1.04, y: -2, backgroundColor: "#dc2626", color: "#fff", borderColor: "#dc2626" }}
//                   whileTap={{ scale: 0.97 }}
//                   className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-gray-200 text-gray-700 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors duration-200">
//                   Explore Courses
//                 </motion.a>
//               </div>

//               {/* Divider */}
//               <div className="h-px bg-gray-100 mb-5 max-w-md" />

//               {/* Stats row */}
//               <div className="flex flex-wrap items-center gap-4 sm:gap-6">
//                 <div className="flex items-center gap-3">
//                   <div className="flex -space-x-3">
//                     {["PS", "RV", "AS", "MK"].map((init, i) => (
//                       <div key={i}
//                         className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] sm:text-[10px] font-black"
//                         style={{ background: ["#dc2626", "#b91c1c", "#ef4444", "#991b1b"][i], zIndex: 4 - i }}>
//                         {init}
//                       </div>
//                     ))}
//                     <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-red-600 flex items-center justify-center" style={{ zIndex: 0 }}>
//                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
//                         <path d="M12 5v14M5 12h14"/>
//                       </svg>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-xs sm:text-sm font-bold text-gray-900">
//                       <span className="text-red-600">{slide.stats.count}</span> {slide.stats.label}
//                     </div>
//                     <div className="text-[10px] sm:text-[11px] text-gray-400">Join our growing community</div>
//                   </div>
//                 </div>

//                 {/* Mini pills */}
//                 <div className="flex gap-2 sm:gap-3">
//                   {[{ val: "2009", lbl: "Est." }, { val: "16+", lbl: "Years" }].map((s) => (
//                     <div key={s.lbl} className="text-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl"
//                       style={{ background: "#fff5f5", border: "1px solid rgba(220,38,38,0.12)" }}>
//                       <div className="text-sm sm:text-base font-black text-red-600 leading-none">{s.val}</div>
//                       <div className="text-[9px] uppercase tracking-wider text-gray-400 mt-0.5">{s.lbl}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* ── BOTTOM CONTROLS — lg+ only, absolute positioned ── */}
//       <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-3 z-20">
//         <button onClick={prevSlide}
//           className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-200">
//           <ChevronLeft className="w-4 h-4" />
//         </button>
//         <div className="flex gap-2">
//           {slides.map((_, index) => (
//             <button key={index}
//               onClick={() => { setCurrentSlide(index); setIsAutoPlay(false); }}
//               className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-red-600" : "w-2 bg-gray-200 hover:bg-red-400"}`} />
//           ))}
//         </div>
//         <button onClick={nextSlide}
//           className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-200">
//           <ChevronRight className="w-4 h-4" />
//         </button>
//       </div>

//       {/* ── PROGRESS BAR ── */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
//         <motion.div
//           key={currentSlide}
//           className="h-full bg-red-600"
//           initial={{ width: "0%" }}
//           animate={{ width: isAutoPlay ? "100%" : "0%" }}
//           transition={{ duration: 3.5, ease: "linear" }}
//         />
//       </div>
//     </section>
//   );
// }

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { GraduationCap, Building2, Trophy } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Admissions Open 2026",
    title: "Get 40+ Industry‑Ready Courses at AIIMES",
    highlight: "40+",
    description: "AIIMES provides industry-relevant education, UGC-recognised certifications, and flexible learning options to help you build a successful career.",
    image: "/photo3.png",
    stats: { count: "900+", label: "Students Enrolled" }
  },
  {
    id: 2,
    badge: "World-Class Faculty",
    title: "Learn from Industry Experts & Professionals",
    highlight: "50+",
    description: "Our experienced faculty brings real-world expertise to the classroom, ensuring you get practical knowledge that matters in today's job market.",
    image: "/photo3.png",
    stats: { count: "50+", label: "Expert Instructors" }
  },
  {
    id: 3,
    badge: "100% Placement Support",
    title: "Build Your Career with Top Companies",
    highlight: "95%",
    description: "Join thousands of successful graduates who landed their dream jobs. Get personalized career guidance and placement assistance.",
    image: "/photo1.png",
    stats: { count: "500+", label: "Companies Hiring" }
  }
];

const trustBadges = [
  { icon: <GraduationCap size={11} />, label: "UGC Recognised" },
  { icon: <Building2 size={11} />, label: "Govt. of India Regd." },
  { icon: <Trophy size={11} />, label: "ISO Certified" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isAutoPlay, currentSlide]);

  const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % slides.length); setIsAutoPlay(false); };
  const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); setIsAutoPlay(false); };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#fff5f5 0%,#ffffff 50%,#f8fafc 100%)", minHeight: "100svh" }}
    >
      {/* BG dot patterns */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 pointer-events-none opacity-50"
        style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
      <div className="absolute bottom-0 right-0 w-36 h-36 md:w-56 md:h-56 pointer-events-none opacity-35"
        style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />

      {/* Spinning ring — lg+ only, overlaps top of image */}
      {/* <motion.div className="hidden lg:block absolute w-24 h-24 rounded-full border-[3px] border-red-500/30 pointer-events-none"
        style={{ top: "calc(50% - 240px)", right: "calc(44% - 48px)" }}
        animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} /> */}

      {/* Floating yellow dot — lg+ only */}
      <motion.div className="hidden lg:block absolute w-5 h-5 top-[38%] right-[36%] rounded-full bg-yellow-400 pointer-events-none"
        animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* Red blob */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }} 
        />

      {/* ── MAIN LAYOUT ── */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-6 relative pt-10 pb-10 lg:min-h-[100svh] lg:py-0">

        {/* ── LEFT: TEXT — always order-1 (first on all screens) ── */}
        <div className="w-full lg:flex-1 lg:max-w-[52%] z-10 md:mb-32 order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              {/* Trust badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {trustBadges.map((b) => (
                  <div key={b.label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-red-600"
                    style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.15)" }}>
                    <span className="text-red-500">{b.icon}</span>
                    {b.label}
                  </div>
                ))}
              </div>

              {/* Slide badge */}
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-red-600"
                style={{ background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.18)" }}
              >
                <motion.span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"
                  animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                {slide.badge}
              </motion.div>

              {/* Title */}
              <h1
                className="font-black text-gray-900 leading-[1.05] mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ letterSpacing: "0.025em" }}
              >
                {slide.title.split(slide.highlight)[0]}
                <span className="text-red-600 md:ml-2">{slide.highlight}</span>
                {slide.title.split(slide.highlight)[1]}
              </h1>

              {/* Description */}
              <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-6 max-w-lg">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-3 flex-wrap mb-7">
                <motion.a href="#"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 sm:px-8 py-3 sm:py-3.5 bg-red-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-200 flex items-center gap-2">
                  Apply Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.a>
                <motion.a href="#"
                  whileHover={{ scale: 1.04, y: -2, backgroundColor: "#dc2626", color: "#fff", borderColor: "#dc2626" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-gray-200 text-gray-700 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors duration-200">
                  Explore Courses
                </motion.a>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-5 max-w-md" />

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {["PS", "RV", "AS", "MK"].map((init, i) => (
                      <div key={i}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] sm:text-[10px] font-black"
                        style={{ background: ["#dc2626", "#b91c1c", "#ef4444", "#991b1b"][i], zIndex: 4 - i }}>
                        {init}
                      </div>
                    ))}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-red-600 flex items-center justify-center" style={{ zIndex: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900">
                      <span className="text-red-600">{slide.stats.count}</span> {slide.stats.label}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-gray-400">Join our growing community</div>
                  </div>
                </div>

                {/* Mini pills */}
                <div className="flex gap-2 sm:gap-3">
                  {[{ val: "2009", lbl: "Est." }, { val: "16+", lbl: "Years" }].map((s) => (
                    <div key={s.lbl} className="text-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl"
                      style={{ background: "#fff5f5", border: "1px solid rgba(220,38,38,0.12)" }}>
                      <div className="text-sm sm:text-base font-black text-red-600 leading-none">{s.val}</div>
                      <div className="text-[9px] uppercase tracking-wider text-gray-400 mt-0.5">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── RIGHT: IMAGE + vertical dots beside it (all screens) ── */}
        <div className="w-full lg:w-[46%] lg:flex-shrink-0 z-10 order-2 flex items-center gap-3">

          {/* Image */}
          <div className="relative flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.55 }}
                className="relative w-full"
              >
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-[220px] sm:h-[300px] md:h-[340px] lg:h-[clamp(420px,55vh,660px)]">
                  <img src={slide.image} alt="AIIMES" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 50%)" }} />
                  {/* Slide counter — lg only */}
                  <div className="hidden lg:block absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider"
                    style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}>
                    {currentSlide + 1} / {slides.length}
                  </div>
                </div>

                {/* UGC card — sm+ only */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="hidden sm:block absolute -bottom-4 -left-4 md:-bottom-5 md:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-xl px-4 py-3 border border-gray-100"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[12px] sm:text-[13px] font-black text-gray-900">UGC Approved</div>
                      <div className="text-[10px] sm:text-[11px] text-gray-400">Recognized Degrees</div>
                    </div>
                  </div>
                </motion.div>

                {/* Stat card — sm+ only */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                  className="hidden sm:block absolute top-4 -left-4 md:top-6 md:-left-8 bg-white rounded-xl sm:rounded-2xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 border border-gray-100"
                >
                  <div className="text-lg sm:text-xl font-black text-red-600 leading-none">{slide.stats.count}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">{slide.stats.label}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── VERTICAL DOTS — beside image on ALL screens ── */}
          <div className="flex flex-col items-center gap-2.5 flex-shrink-0">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentSlide(index); setIsAutoPlay(false); }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-2 h-8 bg-red-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-red-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
        <motion.div
          key={currentSlide}
          className="h-full bg-red-600"
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlay ? "100%" : "0%" }}
          transition={{ duration: 3.5, ease: "linear" }}
        />
      </div>
    </section>
  );
}