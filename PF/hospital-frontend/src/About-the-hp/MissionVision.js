import React from "react";
import "../Style/HospitalInformation.css";

 function MissionVision() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>Mission, Vision & Core Values</h1>
          <h2>Our guiding principles that shape the culture and care at our hospital.</h2>
        </div>
      </section>

      <section className="section">
        <div className="card-grid">
          <div className="card">
            <h3>Mission</h3>
            <p>To provide excellent, safe, and compassionate care for every patient.</p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>To become a nationally recognized leader in healthcare innovation and patient satisfaction.</p>
          </div>
          <div className="card">
            <h3>Core Values</h3>
            <p>Integrity, Compassion, Excellence, Teamwork, Innovation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default MissionVision;