import React from "react";
import "../Style/HospitalInformation.css";
export default function Milestone() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>Hospital Milestones</h1>
          <h2>Key achievements and milestones in our journey of healthcare excellence.</h2>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Timeline</h2>
        </div>
        <ul className="animated-list">
          <li>1995 – Hospital established with 50 beds.</li>
          <li>2005 – Expanded to 200 beds with new ICU and ER.</li>
          <li>2015 – Introduced advanced imaging and diagnostic services.</li>
          <li>2022 – Achieved national recognition for patient safety standards.</li>
        </ul>
      </section>
    </main>
  );
}
