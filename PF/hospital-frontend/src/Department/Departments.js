import React from "react";
import "../Style/hospital.css";

export default function Departments() {
  return (
    <main className="hospital-container">
      <section className="hospital-hero" aria-labelledby="departments-hero">
        <div className="hospital-hero-left">
          <h1 id="departments-hero">Clinical Departments</h1>
          <p>
            Our hospital offers comprehensive care across multiple specialties —
            from emergency medicine to advanced surgical care. Explore departments
            below to find specialists, services, and how to make an appointment.
          </p>

          <div style={{ display: "flex", gap: 12 }}>
            <a className="hospital-btn hospital-btn-primary" href="/appointment">Book Appointment</a>
            <a className="hospital-btn hospital-btn-ghost" href="/contact">Contact Us</a>
          </div>
        </div>

        <aside className="hospital-hero-card" aria-hidden="true">
          <div className="hospital-kpi">
            <div className="hospital-kpi-item">
              <h3>24 / 7</h3>
              <p>Emergency Care</p>
            </div>
            <div className="hospital-kpi-item">
              <h3>120+</h3>
              <p>Specialists</p>
            </div>
            <div className="hospital-kpi-item">
              <h3>30k+</h3>
              <p>Patients / year</p>
            </div>
          </div>

          <div style={{ marginTop: 8 }}>
            <p className="hospital-small">
              Need help choosing a department? Call our care line at <strong>+82-2-123-4567</strong>
            </p>
          </div>
        </aside>
      </section>

      <section className="hospital-section">
        <div className="hospital-section-title">
          <h2>Our Major Departments</h2>
          <p>Click a department to see services, doctors & visiting hours.</p>
        </div>

        <div className="hospital-card-grid" role="list">
          <article className="hospital-card" role="listitem">
            <h3>Cardiology</h3>
            <p>Heart care, interventional cardiology, heart failure clinic, and rehabilitation.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>Orthopedics</h3>
            <p>Joint replacement, sports injury, trauma surgery and physiotherapy.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>Neurology & Neurosurgery</h3>
            <p>Stroke center, epilepsy clinic, brain & spine surgery.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>Pediatrics</h3>
            <p>Neonatal care, pediatric outpatient services and child development.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>Oncology</h3>
            <p>Medical oncology, radiation therapy, and supportive care.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>General Surgery</h3>
            <p>Minimally invasive surgery, laparoscopic procedures, and day surgery.</p>
          </article>
        </div>
      </section>

      <section className="hospital-cta-banner">
        <div className="hospital-cta-left">
          <h3>Need to speak with a specialist?</h3>
          <p className="hospital-small">
            Our coordinators can direct you to the right department and help with appointments.
          </p>
        </div>
        <div>
          <a className="hospital-btn hospital-btn-primary" href="/appointment">Request Consultation</a>
        </div>
      </section>
    </main>
  );
}
