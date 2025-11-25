import React from "react";
import "../Style/hospital.css";

function MedicalStaff() {
  const doctors = [
    { name: "Dr. Minseo Park", title: "Cardiologist" },
    { name: "Dr. Hana Kim", title: "Orthopedic Surgeon" },
    { name: "Dr. Jae Lee", title: "Neurologist" },
    { name: "Dr. Soo Jung", title: "Pediatrician" },
    { name: "Dr. Yoon Ko", title: "Oncologist" },
    { name: "Dr. Eric Choi", title: "General Surgeon" },
    { name: "Dr. Mira Song", title: "Anesthesiologist" },
    { name: "Dr. Daniel Han", title: "Radiologist" },
  ];

  return (
    <main className="hospital-container">
      <section className="hospital-hero" aria-labelledby="medical-hero">
        <div className="hospital-hero-left">
          <h1 id="medical-hero">Doctors & Specialists</h1>
          <p>Meet our medical team — experienced, board-certified specialists committed to patient-centered care.</p>
          <div style={{ display: "flex", gap: 12 }}>
            <a className="hospital-btn hospital-btn-primary" href="/departments">Explore Departments</a>
            <a className="hospital-btn hospital-btn-ghost" href="/appointment">Find a Doctor</a>
          </div>
        </div>

        <aside className="hospital-hero-card" aria-hidden="true">
          <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0 }}>Top Rated</h3>
              <p className="hospital-small">Patient review average: 4.8/5</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <h3 style={{ margin: 0 }}>Years</h3>
              <p className="hospital-small">Avg. experience: 15+</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="hospital-section">
        <div className="hospital-section-title">
          <h2>Our Specialists</h2>
          <p>Click any doctor to view full profile, specialties, and schedule.</p>
        </div>

        <div className="hospital-doctor-grid" role="list">
          {doctors.map((d, i) => (
            <div className="hospital-doctor" key={i} role="listitem">
              <div className="hospital-avatar">
                {d.name.split(" ").slice(1).map(n => n[0]).join("")}
              </div>
              <h4>{d.name}</h4>
              <p>{d.title}</p>
              <div style={{ marginTop: 10 }}>
                <a
                  className="hospital-btn hospital-btn-primary"
                  href={`/doctors/${d.name.replace(/\s+/g, "-").toLowerCase()}`}
                  style={{ fontSize: 13, padding: "8px 12px" }}
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hospital-section" aria-label="recruit">
        <div className="hospital-section-title">
          <h2>Medical Staff Services</h2>
          <p className="hospital-small">Clinical leadership, teaching, and multidisciplinary care programs.</p>
        </div>

        <div className="hospital-card-grid">
          <div className="hospital-card">
            <h3>Multidisciplinary Rounds</h3>
            <p>Daily team rounds that include physicians, nurses and allied staff to coordinate patient care.</p>
          </div>

          <div className="hospital-card">
            <h3>Second Opinion Clinics</h3>
            <p>Specialist second opinions for complex or chronic conditions.</p>
          </div>

          <div className="hospital-card">
            <h3>Telemedicine</h3>
            <p>Virtual consults and follow-ups for eligible patients.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default MedicalStaff;
