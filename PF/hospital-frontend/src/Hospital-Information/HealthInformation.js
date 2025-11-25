import React from "react";
import "../Style/HospitalInformation.css";

export default function HealthInformation() {
  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-left">
          <h1>Health Information</h1>
          <h2>Educational resources to promote a healthy lifestyle and preventive care.</h2>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Wellness Guides</h2>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Nutrition Tips</h3>
            <p>Learn about balanced diets, meal planning, and healthy eating habits.</p>
          </div>
          <div className="card">
            <h3>Exercise & Fitness</h3>
            <p>Guidelines for safe workouts, cardio, and strength training routines.</p>
          </div>
          <div className="card">
            <h3>Preventive Screening</h3>
            <p>Early detection tips and recommended medical check-ups.</p>
          </div>
          <div className="card">
            <h3>Mental Health</h3>
            <p>Resources and strategies to reduce stress and improve mental well-being.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
