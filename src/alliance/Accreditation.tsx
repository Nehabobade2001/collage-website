"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import AboutPageBanner from "../about/AboutPageBanner";

export default function Accreditation() {
  const leftPoints = [
    "ISO 9001 : 2015 Certified International Self-Government Autonomous Institute",
    "CANADA | IAF - The International Accreditation Forum, Inc. is the world association of Conformity Assessment Accreditation bodies and other bodies interested in conformity assessment in the field of Management System, Product, Services, Personnel and other similar programs of conformity assessment.",
  ];

  const rightPoints = [
    "AUSTRALIA & NEW ZEALAND | JAS-ANZ - The Joint Accreditation System Government of Australia & New Zealand",
    "CANADA | QASL - Quality Accreditation Services Limited is Independent and non-profitable board responsible for providing Accreditation for Certification bodies.",
    "UAE | DAC - Dubai Accreditation Centre, Approved under The Dubai Municipality Government of Dubai",
  ];

  return (
    <>
    <AboutPageBanner title="ACCREDITATION" breadcrumbLabel="Accreditation" />
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
            className="leading-tight font-black text-gray-900 leading-tight text-4xl sm:text-5xl md:text-7xl mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Official <span className="text-red-500">            Accreditation
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
          className="rounded-3xl p-8 lg:p-12 overflow-hidden relative"
          style={{
            background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
            border: "1px solid rgba(203,213,225,0.8)",
            boxShadow: "0 10px 32px rgba(2,6,23,0.18)",
          }}
        >
          <div
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ border: "18px solid rgba(100,116,139,0.18)" }}
          />
          <div
            className="absolute -bottom-16 -left-8 w-40 h-40 rounded-full pointer-events-none"
            style={{ border: "14px solid rgba(100,116,139,0.14)" }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-10">
            <div className="space-y-6">
              {leftPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <ChevronRight size={16} className="text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-[18px] leading-[1.5] tracking-[0.02em] text-slate-700">{point}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {rightPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <ChevronRight size={16} className="text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-[18px] leading-[1.5] tracking-[0.02em] text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
