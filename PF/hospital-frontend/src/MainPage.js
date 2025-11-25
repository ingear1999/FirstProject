import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Style/MainPage.css";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";

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

    {/* Department / Medical Staff */}
    <li className="nav-item dropdown">
      <span className="nav-link">Department / Medical Staff</span>
      <ul className="dropdown-menu">
        <li><Link to="/Departments">Department</Link></li>
        <li><Link to="/MedicalStaff">Medical Staff</Link></li>
        <li><Link to="/SpecialtyCenters">Specialize Centers</Link></li>
      </ul>
    </li>

    {/* Hospital Information */}
    <li className="nav-item dropdown">
      <span className="nav-link">Hospital Information</span>
      <ul className="dropdown-menu">
        <li><Link to="/practice-information">Practice Information</Link></li>
        <li><Link to="/find-us">How to find us</Link></li>
        <li><Link to="/parking-information">Parking Information</Link></li>
        <li><Link to="/hospital-facilities">Hospital Facilities</Link></li>
        <li><Link to="/health-information">Health Information</Link></li>
      </ul>
    </li>

    {/* About This Hospital */}
    <li className="nav-item dropdown">
      <span className="nav-link">About This Hospital</span>
      <ul className="dropdown-menu">
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/milestone">Milestone</Link></li>
        <li><Link to="/director-greetings">Director's Greetings</Link></li>
        <li><Link to="/MissionVision">Mission-Vision-Core Values</Link></li>
        <li><Link to="/hospital-network">Hospital Network</Link></li>
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
      <section className="about-images-section">
        <div className="about-images-frame">
          <img src={pic1} alt="Hospital View 1" className="about-img" />
          <img src={pic2} alt="Hospital View 2" className="about-img" />
        </div>
      </section>

    </div>
  );
}

export default MainPage;
