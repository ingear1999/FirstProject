import React from "react";
import "../Style/HospitalInformation.css";

export default function PracticeInformation() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>Practice Information</h1>
          <h2>Learn about our hospital’s daily operations, visiting policies, and outpatient/inpatient guidelines.</h2>
          <a href="/appointment" className="btn btn-primary">Book an Appointment</a>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Visiting Hours</h2>
          <p>Hours vary by department.</p>
        </div>
        <ul className="animated-list">
          <li>General Ward: 08:00 AM – 08:00 PM</li>
          <li>ICU: 10:00 AM – 06:00 PM</li>
          <li>Emergency: 24/7</li>
          <li>Pediatrics: 09:00 AM – 07:00 PM</li>
        </ul>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Outpatient & Inpatient Guide</h2>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Outpatient Services</h3>
            <p>Consultations, lab tests, imaging, and follow-up appointments with ease.</p>
          </div>
          <div className="card">
            <h3>Inpatient Services</h3>
            <p>Dedicated wards, 24/7 care, and modern patient rooms for comfort.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
