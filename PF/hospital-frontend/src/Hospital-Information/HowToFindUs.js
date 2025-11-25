import React from "react";
import "../Style/HospitalInformation.css";

export default function HowToFindUs() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>How to Find Us</h1>
          <h2>Directions and transportation options to reach our hospital efficiently.</h2>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Location</h2>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Main Entrance</h3>
            <p>123 Hospital Road, City, Country</p>
          </div>
          <div className="card">
            <h3>Public Transport</h3>
            <p>Metro: Line 1, Station A, 5 min walk. Bus: Routes 12, 15, 18.</p>
          </div>
          <div className="card">
            <h3>Taxi / Car</h3>
            <p>Accessible via Main Street, parking available nearby.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
