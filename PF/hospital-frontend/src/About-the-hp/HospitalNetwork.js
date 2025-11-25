import React from "react";
import "../Style/HospitalInformation.css";

export default function HospitalNetwork() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>Hospital Network</h1>
          <p>Learn about our affiliated hospitals and medical centers across the region.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Our Network</h2>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>City Hospital Branch</h3>
            <p>Specialized in cardiology and emergency services.</p>
          </div>
          <div className="card">
            <h3>Downtown Medical Center</h3>
            <p>Comprehensive outpatient and diagnostic services.</p>
          </div>
          <div className="card">
            <h3>Suburban Health Campus</h3>
            <p>Advanced pediatric and maternity care.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
