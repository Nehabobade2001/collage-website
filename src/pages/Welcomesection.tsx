import { useState } from "react";

const WelcomeSection = () => {
  // ✅ Default should match exact tab text
  const [activeTab, setActiveTab] = useState("Our History");

  const tabs = ["Our History", "Our Mission", "Our Vision"];

  return (
    <section className="grid md:grid-cols-2 min-h-162.5">
      {/* LEFT SIDE */}
      <div className="bg-white text-black px-8 md:px-16 py-16 flex flex-col justify-center relative">
        <span className="text-red-600 uppercase text-xs font-semibold tracking-widest mb-6">
          Est. 2005 · Premier Institute
        </span>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <span className="text-red-600">AIIMES</span>
        </h2>

        <p className="text-gray-900 mt-6 max-w-md leading-relaxed">
          A premier institute dedicated to nurturing talent, creativity, and
          innovation. We empower students with practical, future-ready
          knowledge.
        </p>

        {/* Tabs */}
        <div className="flex mt-8 border border-gray-900 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-xs uppercase tracking-wider font-semibold transition
                ${
                  activeTab === tab
                    ? "bg-red-600 text-black"
                    : "text-gray-900 hover:text-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 text-gray-900 text-sm leading-relaxed max-w-md">
          {activeTab === "Our History" && (
            <p>
              Founded with a vision to empower learners, AIIMES has grown into a
              trusted educational institution guiding students toward
              excellence.
            </p>
          )}

          {activeTab === "Our Mission" && (
            <p>
              We are committed to creating a learning environment where students
              are encouraged to explore their individuality, nurture their
              creativity, and develop the confidence to succeed in their chosen
              fields.
            </p>
          )}

          {activeTab === "Our Vision" && (
            <p>
              To be a leading institute recognized for excellence in education,
              innovation, and holistic student development, preparing learners
              to become confident professionals and responsible global citizens.
            </p>
          )}
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-10 border-t border-gray-800 pt-8">
          <div>
            <h3 className="text-3xl font-bold text-black">
              15K<span className="text-red-600 text-lg">+</span>
            </h3>
            <p className="text-xs uppercase text-red-500">Alumni</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black">
              200<span className="text-red-600 text-lg">+</span>
            </h3>
            <p className="text-xs uppercase text-red-500">Courses</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black">
              98<span className="text-red-600 text-lg">%</span>
            </h3>
            <p className="text-xs uppercase text-red-500">Placement</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative">
        <img
          src="/about.jpg"
          alt="Students"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute bottom-10 right-10 bg-white p-6 rounded-lg shadow-2xl w-56">
          <h4 className="text-3xl font-bold text-black">98%</h4>
          <p className="text-xs uppercase text-red-600 mt-1">
            Placement Rate 2024
          </p>
          <div className="h-1 bg-gray-900 mt-3 rounded">
            <div className="h-full w-[92%] bg-red-600 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
