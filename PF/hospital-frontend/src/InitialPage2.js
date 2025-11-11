import React from "react";
import { FaHospitalUser, FaStethoscope, FaPhone, FaComments, FaUserMd } from "react-icons/fa";
import "./Style/InitialPage2.css";

function InitialPage2() {
  return (
    <div className="initial-page2">
      <header className="header1">
        <h1>About Our Hospital</h1>
      </header>

      <div className="list">
        <ul>
          <li><FaHospitalUser className="icon" /><span>Hospital Policy</span></li>
          <li><FaStethoscope className="icon" /><span>Services Offered</span></li>
          <li><FaPhone className="icon" /><span>Contact Information</span></li>
          <li><FaComments className="icon" /><span>Patient Testimonials</span></li>
          <li><FaUserMd className="icon" /><span>Meet Our Doctors</span></li>
        </ul>
      </div>
    </div>
  );
}

export default InitialPage2;
