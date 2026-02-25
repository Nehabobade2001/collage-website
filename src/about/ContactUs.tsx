"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AboutPageBanner from "./AboutPageBanner";

type EnquiryForm = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: EnquiryForm = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
    <AboutPageBanner title="CONTACT US" breadcrumbLabel="Contact Us" />
    <section ref={ref} className="relative pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden" style={{ background: "#f8fafc" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        className="absolute -top-32 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(220,38,38,0.08) 0%,transparent 65%)", filter: "blur(60px)" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(220,38,38,0.06) 0%,transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative w-full px-6 lg:px-32">
        <div className="text-center mb-14">
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
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.28em]">Get In Touch</span>
            <motion.span
              className="h-px bg-red-600"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </motion.div>

          <motion.h2
            className="font-black font-black text-gray-900 leading-tight text-4xl sm:text-5xl md:text-7xl mb-4 text-slate-900 leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            Contact <span style={{ color: "#ef4444" }}>AIIMES</span>
          </motion.h2>

          <motion.p
            className="text-sm max-w-2xl mx-auto"
            style={{ color: "#64748b" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            Reach us for admissions, support, and programme guidance. Our team is available to help you with your enquiry.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            className="lg:col-span-2 rounded-3xl p-6 lg:p-7"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: "#ffffff",
              border: "1px solid rgba(226,232,240,1)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
            }}
          >
            <div className="h-1 w-full mb-6 rounded-full" style={{ background: "linear-gradient(90deg,#dc2626,transparent)" }} />
            <h3 className="font-black text-slate-900 text-xl mb-6">Contact Information</h3>

            <div className="space-y-10">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-red-400" style={{ background: "rgba(220,38,38,0.12)" }}>
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#000" }}>Address</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
Plot No. 28/7, Kapashera, Near Police
    Station, Delhi - 110037, India                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-red-400" style={{ background: "rgba(220,38,38,0.12)" }}>
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#000" }}>Phone</p>
                  <a href="tel:+919319821280" className="text-sm hover:text-red-600 transition-colors" style={{ color: "#6B7280" }}>
                    +91-9319821280
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-red-400" style={{ background: "rgba(220,38,38,0.12)" }}>
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#000" }}>Email</p>
                  <a href="mailto:info@aiimes.in" className="text-sm hover:text-red-600 transition-colors" style={{ color: "#6B7280" }}>
                    info@aiimes.in
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-red-400" style={{ background: "rgba(220,38,38,0.12)" }}>
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#000" }}>Office Hours</p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>Mon - Sat, 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="lg:col-span-3 rounded-3xl p-6 lg:p-7"
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
            style={{
              background: "#ffffff",
              border: "1px solid rgba(226,232,240,1)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
            }}
          >
            <div className="h-1 w-full mb-6 rounded-full" style={{ background: "linear-gradient(90deg,transparent,#dc2626,transparent)" }} />
            <h3 className="font-black text-slate-900 text-xl mb-6">Enquiry Form</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="h-12 rounded-xl px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                style={{ background: "#f8fafc", border: "1px solid rgba(226,232,240,1)" }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="h-12 rounded-xl px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                style={{ background: "#f8fafc", border: "1px solid rgba(226,232,240,1)" }}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="h-12 rounded-xl px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none md:col-span-2"
                style={{ background: "#f8fafc", border: "1px solid rgba(226,232,240,1)" }}
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="h-12 rounded-xl px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none md:col-span-2"
                style={{ background: "#f8fafc", border: "1px solid rgba(226,232,240,1)" }}
              />
              <textarea
                placeholder="Write your enquiry"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                required
                className="rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none md:col-span-2 resize-none"
                style={{ background: "#f8fafc", border: "1px solid rgba(226,232,240,1)" }}
              />
            </div>

            <div className="flex items-center gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(220,38,38,0.45)" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[12px] text-white uppercase tracking-wide"
                style={{
                  background: "linear-gradient(135deg,#ef4444,#b91c1c)",
                  boxShadow: "0 4px 18px rgba(220,38,38,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                  border: "1px solid rgba(220,38,38,0.35)",
                }}
              >
                Send Enquiry
                <Send size={14} />
              </motion.button>

              {submitted && (
                <p className="text-xs uppercase tracking-wider" style={{ color: "#64748b" }}>
                  Thank you. We will contact you soon.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
    </>
  );
}
