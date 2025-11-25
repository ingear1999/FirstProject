import React from "react";
import "../Style/HospitalInformation.css";

export default function ParkingInformation() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>Parking Information</h1>
          <h2>Secure and convenient parking options for visitors and patients.</h2>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Parking Facilities</h2>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Visitor Parking</h3>
            <p>First 2 hours free, located near main entrance.</p>
          </div>
          <div className="card">
            <h3>Patient Parking</h3>
            <p>Reserved slots near outpatient wing, 24/7 access.</p>
          </div>
          <div className="card">
            <h3>Staff Parking</h3>
            <p>Secure lot with badge access, underground garage.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
