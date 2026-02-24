import React from "react";

const marqueeItems: string[] = [
  "Trending Courses",
  "Certified Faculty",
  "World-Class Library",
  "98% Placement Rate",
  "15,000+ Alumni",
  "200+ Programs",
];

const MarqueeBand: React.FC = () => {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-black overflow-hidden py-5 border-b-4 border-red-600">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee-scroll 18s linear infinite;
        }
      `}</style>

      <div className="marquee-track flex w-max">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="text-white text-4xl tracking-widest px-12 flex items-center gap-6 whitespace-nowrap font-semibold uppercase"
          >
            <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBand;
