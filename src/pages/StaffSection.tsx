// "use client";
// import { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";

// const staff = [
//   {
//     name: "ABD Rashid Khan",
//     role: "Vice Chancellor",
//     desc: "Leading AIIMES with decades of academic excellence and institutional vision.",
//     image: "/tech2.jpg",
//     dept: "Administration",
//     email: "abdrashid@aiimes.edu.in",
//   },
//   {
//     name: "Luyes Figery",
//     role: "Associate Professor",
//     desc: "Entrusted with planning, implementation and evaluation of academic programs.",
//     image: "/tech3.jpg",
//     dept: "Academics",
//     email: "luyes.figery@aiimes.edu.in",
//   },
//   {
//     name: "Mr. Mahabub Alam",
//     role: "Assistant Professor",
//     desc: "Bringing industry expertise and research-driven teaching to every classroom.",
//     image: "/tech6.jpg",
//     dept: "Research",
//     email: "mahabub.alam@aiimes.edu.in",
//   },
//   {
//     name: "Dr. Priya Mehta",
//     role: "Dean of Academics",
//     desc: "Shaping curriculum strategy and fostering a culture of innovation and learning.",
//     image: "/tech3.jpg",
//     dept: "Academics",
//     email: "priya.mehta@aiimes.edu.in",
//   },
//   {
//     name: "Prof. Arvind Joshi",
//     role: "Head of Engineering",
//     desc: "Pioneering technical education with hands-on, industry-relevant methodologies.",
//     image: "/tech5.jpg",
//     dept: "Engineering",
//     email: "arvind.joshi@aiimes.edu.in",
//   },
//   {
//     name: "Ms. Sneha Rawat",
//     role: "Student Coordinator",
//     desc: "Dedicated to student success, placement support and campus life management.",
//     image: "/tech6.jpg",
//     dept: "Student Affairs",
//     email: "sneha.rawat@aiimes.edu.in",
//   },
// ];

// const socials = [
//   { 
//     label: "LinkedIn",
//     icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
//   },
//   { 
//     label: "Twitter",
//     icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
//   },
//   { 
//     label: "Email",
//     icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
//   },
// ];

// function StaffCard({ member, index, inView }: { member: typeof staff[0]; index: number; inView: boolean }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
//     >
//       {/* Image Section */}
//       <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
//         <img
//           src={member.image}
//           alt={member.name}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
//         {/* Department Badge */}
//         <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
//           <span className="text-xs font-bold text-red-600">{member.dept}</span>
//         </div>

//         {/* Social Icons - Show on Hover */}
//         <motion.div 
//           className="absolute top-4 left-4 flex gap-2"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -20 }}
//           transition={{ duration: 0.3 }}
//         >
//           {socials.map((social, i) => (
//             <button
//               key={i}
//               className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300"
//               title={social.label}
//             >
//               {social.icon}
//             </button>
//           ))}
//         </motion.div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6">
//         {/* Name & Role */}
//         <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">
//           {member.name}
//         </h3>
//         <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
//           {member.role}
//         </p>

//         {/* Divider */}
//         <motion.div
//           className="h-1 bg-red-600 rounded-full mb-4"
//           initial={{ width: 0 }}
//           animate={inView ? { width: "50px" } : {}}
//           transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
//         />

//         {/* Description */}
//         <p className="text-gray-600 text-sm leading-relaxed mb-4">
//           {member.desc}
//         </p>

//         {/* Email */}
//         <a
//           href={`mailto:${member.email}`}
//           className="flex items-center gap-2 text-gray-500 hover:text-red-600 text-sm transition-colors duration-300"
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <rect width="20" height="16" x="2" y="4" rx="2"/>
//             <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
//           </svg>
//           <span className="text-xs">{member.email}</span>
//         </a>

//         {/* View Profile Button */}
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="mt-4 w-full py-3 rounded-xl bg-gray-100 group-hover:bg-red-600 text-gray-700 group-hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
//         >
//           View Profile
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <path d="M5 12h14M12 5l7 7-7 7"/>
//           </svg>
//         </motion.button>
//       </div>

//       {/* Bottom Accent */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//     </motion.div>
//   );
// }

// export default function StaffSection() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <section ref={ref} className="relative bg-gradient-to-b from-gray-50 to-white py-6 overflow-hidden">
      
//       {/* Background Decorations */}
//       <motion.div 
//         className="absolute top-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"
//         animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div 
//         className="absolute bottom-20 left-10 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-30"
//         animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative w-full px-32">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <span className="w-8 h-px bg-red-600" />
//             <span className="text-red-600 text-xs font-bold tracking-[0.25em] uppercase">
//               Our Team
//             </span>
//             <span className="w-8 h-px bg-red-600" />
//           </div>

//           <h2 className="font-black text-gray-900 leading-tight mb-4 text-4xl sm:text-5xl md:text-7xl">
//             Our Experienced <span className="text-red-600">Staff</span>
//           </h2>

//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Meet the dedicated educators and administrators who shape the future of every student at AIIMES.
//           </p>
//         </motion.div>

//         {/* Staff Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {staff.map((member, i) => (
//             <StaffCard key={i} member={member} index={i} inView={inView} />
//           ))}
//         </div>

//         {/* Footer Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-gray-200"
//         >
//           <div className="flex items-center gap-12">
//             <div className="text-center">
//               <div className="text-4xl font-black text-gray-900">
//                 60<span className="text-red-600">+</span>
//               </div>
//               <div className="text-gray-500 text-sm uppercase tracking-wider mt-1">
//                 Expert Faculty
//               </div>
//             </div>
//             <div className="w-px h-12 bg-gray-200" />
//             <div className="text-center">
//               <div className="text-4xl font-black text-gray-900">
//                 18<span className="text-red-600">+</span>
//               </div>
//               <div className="text-gray-500 text-sm uppercase tracking-wider mt-1">
//                 Departments
//               </div>
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.97 }}
//             className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white flex items-center gap-3 relative overflow-hidden"
//             style={{
//               background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
//             }}
//           >
//             <span className="relative z-10">Meet All Faculty</span>
//             <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path d="M5 12h14M12 5l7 7-7 7"/>
//             </svg>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const staff = [
  {
    name: "ABD Rashid Khan",
    role: "Vice Chancellor",
    desc: "Leading AIIMES with decades of academic excellence and institutional vision.",
    image: "/tech2.jpg",
    dept: "Administration",
    email: "abdrashid@aiimes.edu.in",
  },
  {
    name: "Luyes Figery",
    role: "Associate Professor",
    desc: "Entrusted with planning, implementation and evaluation of academic programs.",
    image: "/tech3.jpg",
    dept: "Academics",
    email: "luyes.figery@aiimes.edu.in",
  },
  {
    name: "Mr. Mahabub Alam",
    role: "Assistant Professor",
    desc: "Bringing industry expertise and research-driven teaching to every classroom.",
    image: "/tech6.jpg",
    dept: "Research",
    email: "mahabub.alam@aiimes.edu.in",
  },
  {
    name: "Dr. Priya Mehta",
    role: "Dean of Academics",
    desc: "Shaping curriculum strategy and fostering a culture of innovation and learning.",
    image: "/tech3.jpg",
    dept: "Academics",
    email: "priya.mehta@aiimes.edu.in",
  },
  {
    name: "Prof. Arvind Joshi",
    role: "Head of Engineering",
    desc: "Pioneering technical education with hands-on, industry-relevant methodologies.",
    image: "/tech5.jpg",
    dept: "Engineering",
    email: "arvind.joshi@aiimes.edu.in",
  },
  {
    name: "Ms. Sneha Rawat",
    role: "Student Coordinator",
    desc: "Dedicated to student success, placement support and campus life management.",
    image: "/tech6.jpg",
    dept: "Student Affairs",
    email: "sneha.rawat@aiimes.edu.in",
  },
];

const socials = [
  {
    label: "LinkedIn",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: "Twitter",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
  },
  {
    label: "Email",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  },
];

function StaffCard({ member, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Department Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm">
          <span className="text-xs font-bold text-red-600">{member.dept}</span>
        </div>

        {/* Social Icons - Show on Hover */}
        <motion.div
          className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          {socials.map((social, i) => (
            <button
              key={i}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300"
              title={social.label}
            >
              {social.icon}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
          {member.role}
        </p>

        {/* Divider */}
        <motion.div
          className="h-1 bg-red-600 rounded-full mb-3 sm:mb-4"
          initial={{ width: 0 }}
          animate={inView ? { width: "50px" } : {}}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        />

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {member.desc}
        </p>

        {/* Email */}
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-2 text-gray-500 hover:text-red-600 text-sm transition-colors duration-300 min-w-0"
        >
          <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span className="text-xs truncate">{member.email}</span>
        </a>

        {/* View Profile Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 w-full py-2.5 sm:py-3 rounded-xl bg-gray-100 group-hover:bg-red-600 text-gray-700 group-hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
        >
          View Profile
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.button>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}

export default function StaffSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-gray-50 to-white py-10 sm:py-14 md:py-16 overflow-hidden">

      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-red-100 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-52 sm:w-80 h-52 sm:h-80 bg-red-50 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="w-8 h-px bg-red-600" />
            <span className="text-red-600 text-xs font-bold tracking-[0.25em] uppercase whitespace-nowrap">
              Our Team
            </span>
            <span className="w-8 h-px bg-red-600" />
          </div>

          <h2 className="font-black text-gray-900 leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Our Experienced <span className="text-red-600">Staff</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Meet the dedicated educators and administrators who shape the future of every student at AIIMES.
          </p>
        </motion.div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {staff.map((member, i) => (
            <StaffCard key={i} member={member} index={i} inView={inView} />
          ))}
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 pt-10 sm:pt-12 border-t border-gray-200"
        >
          <div className="flex items-center gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-gray-900">
                60<span className="text-red-600">+</span>
              </div>
              <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mt-1">
                Expert Faculty
              </div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-gray-900">
                18<span className="text-red-600">+</span>
              </div>
              <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mt-1">
                Departments
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white flex items-center justify-center gap-3 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)" }}
          >
            <span className="relative z-10">Meet All Faculty</span>
            <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}