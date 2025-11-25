import React from "react";
import "../Style/HospitalInformation.css";

export default function HospitalFacilities() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>Hospital Facilities</h1>
          <h2>Modern medical facilities designed for patient comfort and safety.</h2>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Our Key Facilities</h2>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Emergency Room</h3>
            <p>Equipped with advanced life support and trauma care units.</p>
          </div>
          <div className="card">
            <h3>ICU</h3>
            <p>State-of-the-art intensive care with continuous monitoring.</p>
          </div>
          <div className="card">
            <h3>Laboratories</h3>
            <p>Clinical labs with fast processing and accurate results.</p>
          </div>
          <div className="card">
            <h3>Imaging Center</h3>
            <p>MRI, CT, PET, and X-ray services using latest technology.</p>
          </div>
          <div className="card">
            <h3>Rehabilitation</h3>
            <p>Physical therapy and rehab programs for recovery and mobility.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
