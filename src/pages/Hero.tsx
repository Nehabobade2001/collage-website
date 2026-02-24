"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "/photo2.png",
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

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isAutoPlay, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white" style={{ minHeight: "90vh" }}>
      
      {/* Background Decorations */}
      <div className="absolute top-16 left-10 pointer-events-none w-[180px] h-[180px] opacity-60"
        style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
      <div className="absolute bottom-16 right-8 pointer-events-none w-[140px] h-[140px] opacity-45"
        style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />

      <motion.div className="absolute w-[90px] h-[90px] top-[80px] right-[38%] rounded-full border-[3px] border-red-600/25 pointer-events-none"
        animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
      
      <motion.div className="absolute w-7 h-7 top-[35%] right-[34%] rounded-full bg-yellow-400 pointer-events-none"
        animate={{ y: [0, -14, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-0 flex flex-col md:flex-row items-center justify-between min-h-[90vh] gap-10 relative">
        
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/8 text-red-600 border border-red-600/20"
              >
                <motion.span className="w-2 h-2 rounded-full bg-red-600"
                  animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                {slide.badge}
              </motion.div>

              {/* Title */}
              <h1 className="font-black text-gray-900 leading-tight mb-6"
                style={{ fontSize: "clamp(36px, 5vw, 58px)", letterSpacing: "-0.02em" }}>
                {slide.title.split(slide.highlight)[0]}
                <span className="text-red-600">{slide.highlight}</span>
                {slide.title.split(slide.highlight)[1]}
              </h1>

              {/* Description */}
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-wrap">
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
              </div>

              {/* Stats */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["PS", "RV", "AS", "MK"].map((init, i) => (
                    <div key={i}
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-black"
                      style={{ background: ["#dc2626", "#b91c1c", "#ef4444", "#991b1b"][i], zIndex: 4 - i }}>
                      {init}
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-red-600 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    <span className="text-red-600">{slide.stats.count}</span> {slide.stats.label}
                  </div>
                  <div className="text-xs text-gray-400">Join our growing community</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Image Slider */}
        <div className="flex-1 relative flex justify-center items-center z-10 max-w-lg w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-72 md:w-96 h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={slide.image}
                  alt="AIIMES"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">UGC Approved</div>
                    <div className="text-xs text-gray-500">Recognized Degrees</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((s, index) => (
          <motion.button
            key={s.id}
            onClick={() => { setCurrentSlide(index); setIsAutoPlay(false); }}
            className="group relative flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            {/* Dot */}
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-600 scale-125" : "bg-gray-300 hover:bg-red-400"
            }`} />
            
            {/* Label - shows on hover */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 px-3 py-1.5 bg-white rounded-lg shadow-lg whitespace-nowrap text-xs font-semibold text-gray-700 pointer-events-none"
            >
              {s.badge}
            </motion.div>
            
            {/* Active indicator line */}
            {index === currentSlide && (
              <motion.div
                layoutId="activeSlide"
                className="absolute right-full mr-1 w-8 h-0.5 bg-red-600"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => { setCurrentSlide(index); setIsAutoPlay(false); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-red-600" : "w-2 bg-gray-300 hover:bg-red-400"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
        <motion.div
          key={currentSlide}
          className="h-full bg-red-600"
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlay ? "100%" : "0%" }}
          transition={{ duration: 2, ease: "linear" }}
        />
      </div>
    </section>
  );
}
