import React from "react";
import "./VoicesSection.css";

const VoicesRedSection: React.FC = () => {
  return (
    <section className="voices-section">
      
      {/* TOP RED BAND */}
      <div className="top-band">
        <p className="section-label">
          AIIMES Institute — Student Voices
        </p>

       <h2 className="text-4xl md:text-6xl font-bold leading-tight uppercase">
  VOICES OF {" "}
  <span className="stroke-text">SUCCESS</span>
</h2>

        <p className="sub">
          Real experiences, true achievements, and bright futures shared proudly here.
        </p>
      </div>

      {/* TWO COLUMN BLOCK */}
      <div className="tblock">

        {/* LEFT */}
        <div className="t-left">
          <p className="t-quote">
            From my experience with AIIMES Hotel Management students,
            I confidently affirm the program develops well-rounded,
            skilled, and knowledgeable individuals.
          </p>

          <div className="t-person">
            <div className="avatar">B</div>
            <div>
              <div className="p-name">Bhupendra Pal Singh</div>
              <div className="p-role">Manager, Ginger Hotel</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="t-right">
          <p className="t-quote">
            AIIMES Institute helped me discover my individuality in Architecture.
            With excellent exposure and skill development, it built my confidence.
          </p>

          <div className="t-person">
            <div className="avatar">S</div>
            <div>
              <div className="p-name">Shivani Gautam</div>
              <div className="p-role">Engineer, Dimension India</div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="bottom-bar">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>

        <div className="counter">
          <span>02</span> / 03
        </div>
      </div>

    </section>
  );
};

export default VoicesRedSection;
