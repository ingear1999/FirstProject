import React from "react";
import "../Style/HospitalInformation.css";

export default function Overview() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>Hospital Overview</h1>
          <h2>Discover our mission, vision, and the commitment to healthcare excellence.</h2>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>History</h3>
            <p>Founded in 1995, our hospital has grown to become a leading healthcare provider.</p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>To be recognized as a center of excellence in patient care and medical education.</p>
          </div>
          <div className="card">
            <h3>Mission</h3>
            <p>Providing compassionate, high-quality care to every patient, every time.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
