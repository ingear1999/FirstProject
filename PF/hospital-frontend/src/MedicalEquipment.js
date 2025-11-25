// MedicalEquipment.jsx
import React from "react";
import "./Style/hospital.css";

export default function MedicalEquipment() {
  const equipment = [
    { name: "3T MRI", desc: "High-resolution imaging for neurological and musculoskeletal diagnostics." },
    { name: "PET-CT", desc: "Advanced hybrid imaging for oncology staging and response assessment." },
    { name: "Da Vinci Surgical System", desc: "Robot-assisted minimally invasive surgery platform." },
    { name: "Hybrid OR", desc: "Integrated imaging and surgical suite for complex endovascular and cardiac cases." },
    { name: "Linear Accelerator", desc: "Precision radiation therapy with image-guided delivery." },
    { name: "ECMO", desc: "Extracorporeal membrane oxygenation for advanced cardiac & respiratory support." }
  ];

  return (
    <main className="page-container">
      <section className="hero" aria-labelledby="equip-hero">
        <div className="hero-left">
          <h1 id="equip-hero">Advanced Medical Equipment</h1>
          <p>We invest in technology to deliver safer, faster and more precise care. Our equipment list below highlights capabilities available at our hospital.</p>

          <div style={{ display: "flex", gap: 12 }}>
            <a className="btn btn-primary" href="/hospital-facilities">View Facilities</a>
            <a className="btn btn-ghost" href="/contact">Equipment Inquiry</a>
          </div>
        </div>

        <aside className="hero-card" aria-hidden="true">
          <h3 style={{ margin: 0 }}>Innovation & Safety</h3>
          <p className="small" style={{ marginTop: 8 }}>All equipment is maintained to international safety standards and operated by certified staff.</p>
        </aside>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Key Technologies</h2>
          <p className="small">Technology that enables modern diagnosis and treatment.</p>
        </div>

        <div className="card-grid">
          {equipment.map((e, i) => (
            <article key={i} className="card">
              <h3>{e.name}</h3>
              <p>{e.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>How our equipment helps patients</h2>
          <p className="small">Examples of clinical impact and patient benefits.</p>
        </div>

        <div className="card-grid">
          <div className="card">
            <h3>Faster Diagnosis</h3>
            <p>High-resolution imaging reduces time-to-diagnosis and shortens patient pathways.</p>
          </div>

          <div className="card">
            <h3>Minimally Invasive Treatment</h3>
            <p>Robotic and image-guided procedures reduce recovery time and complications.</p>
          </div>

          <div className="card">
            <h3>Better Outcomes</h3>
            <p>Precision tools and multidisciplinary review support personalized treatment plans.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
