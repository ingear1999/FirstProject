import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style/DoctorDashBoard.css";
import d1 from "./images/d1.jpg";
import d2 from "./images/d2.jpg";
import d3 from "./images/d3.jpg";

function DoctorDashboard() {
  const navigate = useNavigate();

  const doctors = [
    { id: 1, name: "Dr. John Smith", department: "Heart Specialist", image: d1, contact: "010-1234-5678" },
    { id: 2, name: "Dr. Emily Johnson", department: "Pediatrician", image: d2, contact: "010-9876-4321" },
    { id: 3, name: "Dr. Michael Lee", department: "Neurologist", image: d3, contact: "010-5555-1111" },
  ];

  return (
    <div className="doctor-dashboard">
      <h2 className="dashboard-title">Meet Our Doctors</h2>
      <div className="doctor-grid">
        {doctors.map((doc) => (
          <div key={doc.id} className="doctor-card">
            <div className="doctor-image">
              <img src={doc.image} alt={doc.name} />
            </div>
            <div className="doctor-info">
              <h3 className="doctor-name">{doc.name}</h3>
              <p className="doctor-department">{doc.department}</p>
              <p className="doctor-contact">Contact: {doc.contact}</p>
              <div className="doctor-buttons">
                <button className="btn-primary" onClick={() => navigate("/appointment")}>Book Appointment</button>
                <button className="btn-secondary" onClick={() => alert(`Consulting: ${doc.name}`)}>Get Consultation</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorDashboard;
