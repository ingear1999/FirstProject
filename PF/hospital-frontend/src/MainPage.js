import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/MainPage.css";

function MainPage() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const navigate = useNavigate(); // for navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const features = [
    { title: "Book Appointment", desc: "Schedule your visit easily.", className: "feature-appointment", path: "/appointment" },
    { title: "Health Tips", desc: "Learn ways to stay healthy.", className: "feature-tips", path: "/health-tips" },
    { title: "Search Doctor", desc: "Find doctors and departments.", className: "feature-search", path: "/search-doctor" },
    { title: "Medical Tool", desc: "Calculate BMI or vitals.", className: "feature-tool", path: "/medical-tool" },
    { title: "Feedback", desc: "Send us your comments.", className: "feature-feedback", path: "/feedback" },
  ];

  return (
    <div className="noName">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Hospital</div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link">Department / Medical Staff</a>
            <ul className="dropdown-menu">
              <li><a href="D">Department</a></li>
              <li><a href="M">Medical Staff</a></li>
              <li><a href="S">Specialize Centers</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link">Hospital Information</a>
            <ul className="dropdown-menu">
              <li><a href="P">Practice Information</a></li>
              <li><a href="A">How to find us</a></li>
              <li><a href="P">Parking Information</a></li>
              <li><a href="H">Hospital Facilities</a></li>
              <li><a href="He">Health Information</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link">About This Hospital</a>
            <ul className="dropdown-menu">
              <li><a href="O">Overview</a></li>
              <li><a href="M">Milestone</a></li>
              <li><a href="D">Director's Greetings</a></li>
              <li><a href="M">Mission-Vision-Core Values</a></li>
              <li><a href="H">Hospital Network</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Left Services Cards */}
      <section className="services py-5" id="Services-cards">
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto">
              <div className="d-flex flex-column gap-3">
                <div className="card shadow border-start border-4 border-primary" style={{ width: '300px', height: '120px', cursor: 'pointer' }}>
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">Emergency Care</h5>
                    <p className="card-text text-secondary">24/7 emergency services with highly trained staff.</p>
                  </div>
                </div>

                <div className="card shadow border-start border-4 border-primary" style={{ width: '300px', height: '120px', cursor: 'pointer' }}>
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">Pediatrics</h5>
                    <p className="card-text text-secondary">Comprehensive healthcare for children and adolescents.</p>
                  </div>
                </div>

                <div className="card shadow border-start border-4 border-primary" style={{ width: '300px', height: '120px', cursor: 'pointer' }}>
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">Diagnostics</h5>
                    <p className="card-text text-secondary">Advanced laboratory and imaging services.</p>
                  </div>
                </div>

                <div className="card shadow border-start border-4 border-primary" style={{ width: '300px', height: '120px', cursor: 'pointer' }}>
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">Pharmacy</h5>
                    <p className="card-text text-secondary">Quick and reliable prescription services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right User Features Cards */}
      <div id="UserFeatures-cards">
        {features.map((f, index) => (
          <div
            key={index}
            className={`feature-card ${f.className}`}
            onClick={() => navigate(f.path)}
          >
            <h5>{f.title}</h5>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <footer className="about">
        <div className="about-content fade-in">
          <h2 className="section-title">About Our Hospital</h2>
          <p>Founded in 1990, our hospital has been committed to providing excellent patient care, advanced medical services, and a compassionate environment for all patients.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
