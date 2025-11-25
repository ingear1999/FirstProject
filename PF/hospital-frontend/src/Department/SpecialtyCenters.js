import React from "react";
import "../Style/hospital.css";

export default function SpecialtyCenters() {
  return (
    <main className="hospital-container">
      <section className="hospital-hero" aria-labelledby="centers-hero">
        <div className="hospital-hero-left">
          <h1 id="centers-hero">Specialty Centers</h1>
          <h2>Our specialty centers concentrate expertise and technology to treat complex conditions with multidisciplinary teams.</h2>

          <div style={{ display: "flex", gap: 12 }}>
            <a className="hospital-btn hospital-btn-primary" href="/appointment">Refer a Patient</a>
            <a className="hospital-btn hospital-btn-ghost" href="/contact">Contact Center</a>
          </div>
        </div>

        <aside className="hospital-hero-card" aria-hidden="true">
          <h3 style={{ margin: 0 }}>Featured Center</h3>
          <p className="hospital-small" style={{ marginTop: 8 }}>
            Comprehensive Cancer Center — advanced diagnostics, radiation therapy and clinical trials.
          </p>
        </aside>
      </section>

      <section className="hospital-section">
        <div className="hospital-section-title">
          <h2>Our Specialty Centers</h2>
          <p className="hospital-small">Centers built around high-acuity conditions and coordinated multidisciplinary support.</p>
        </div>

        <div className="hospital-card-grid" role="list">
          <article className="hospital-card" role="listitem">
            <h3>Comprehensive Cancer Center</h3>
            <p>Medical & radiation oncology, surgical oncology, and clinical trials.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>Heart & Vascular Center</h3>
            <p>Interventional cardiology, heart surgery, valve clinic and cardiac rehab.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>Orthopedic & Spine Center</h3>
            <p>Joint preservation, joint replacement, and spine surgery programs.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>Stroke & Neurovascular Center</h3>
            <p>24/7 thrombectomy-capable stroke service, rehabilitation and neurocritical care.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>Women’s Health & Maternity Center</h3>
            <p>High-risk obstetrics, neonatal intensive care and comprehensive women’s services.</p>
          </article>

          <article className="hospital-card" role="listitem">
            <h3>Advanced Imaging & Diagnostic Center</h3>
            <p>High-field MRI, PET-CT, and interventional radiology.</p>
          </article>
        </div>
      </section>

      <section className="hospital-cta-banner">
        <div className="hospital-cta-left">
          <h3>Looking for specialized care?</h3>
          <p className="hospital-small">Our care coordinator can help route your referral to the appropriate center.</p>
        </div>
        <div>
          <a className="hospital-btn hospital-btn-primary" href="/referrals">Refer Now</a>
        </div>
      </section>
    </main>
  );
}
