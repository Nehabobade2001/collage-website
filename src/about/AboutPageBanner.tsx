"use client";

import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type AboutPageBannerProps = {
  title: string;
  breadcrumbLabel: string;
};

export default function AboutPageBanner({ title, breadcrumbLabel }: AboutPageBannerProps) {
  const isLongTitle = title.length > 18;

  return (
    <div className="relative  w-full overflow-hidden" style={{ minHeight: 300 }}>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #fffdf6 0%, #fff7e8 45%, #fefaf0 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 420' preserveAspectRatio='none'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23fff7e6'/%3E%3Cstop offset='100%25' stop-color='%23fffdf5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='1600' height='420'/%3E%3Cpath d='M0 278 C 250 220, 420 340, 700 282 C 980 224, 1185 342, 1600 248 L1600 420 L0 420 Z' fill='%23f6e2b8' fill-opacity='0.55'/%3E%3Cpath d='M0 315 C 230 260, 470 372, 770 322 C 1045 277, 1278 360, 1600 306 L1600 420 L0 420 Z' fill='%23ecd09a' fill-opacity='0.45'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="absolute -top-20 left-[-80px] w-[360px] h-[360px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(234,179,8,0.2) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        className="absolute -bottom-24 right-[-60px] w-[320px] h-[320px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.14) 0%, transparent 72%)",
          filter: "blur(6px)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-10"
        style={{ background: "linear-gradient(to bottom, transparent, #f8fafc)" }}
      />

      <div className="relative flex flex-col items-center justify-center text-center px-6 py-11 md:py-14" style={{ minHeight: 210 }}>
        <motion.h1
          className="font-black text-slate-900 leading-tight mb-5"
          style={{
            fontSize: isLongTitle ? "clamp(14px, 7.4vw, 38px)" : "clamp(20px, 10vw, 40px)",
            letterSpacing: "0.06em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="h-1 rounded-full mb-6"
          style={{ background: "linear-gradient(90deg, transparent, #dc2626, transparent)" }}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        />

        <motion.div
          className="flex items-center gap-2 text-[12px] font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 transition-colors hover:text-red-400"
            style={{ color: "rgba(15,23,42,0.6)" }}
          >
            <Home size={12} />
            Home
          </Link>
          <ChevronRight size={12} style={{ color: "rgba(100,116,139,0.45)" }} />
          <span className="text-red-400">{breadcrumbLabel}</span>
        </motion.div>
      </div>
    </div>
  );
}
