import React from "react";
import "../Style/HospitalInformation.css";
import directorPic from "../images/Directorgreeing.jpg";

export default function DirectorGreetings() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>Director's Greetings</h1>
          <h2>Message from our hospital director welcoming patients and staff.</h2>
        </div>
      </section>

      <section className="section">
        <div className="card-grid">
          <div className="card">
            <img src={directorPic} alt="Director" style={{ borderRadius: '12px', width: '100%', height: 'auto', marginBottom: '16px' }} />
            <h3>Dr. John Smith</h3>
            <p>“Our commitment is to provide world-class healthcare while fostering a compassionate environment for patients and families.”</p>
          </div>
        </div>
      </section>
    </main>
  );
}
