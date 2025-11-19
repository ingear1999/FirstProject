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
          <li>
            <a href="/InitialPage2_1?show=Policy">
              <FaHospitalUser className="icon" />
              <span>Hospital Policy</span>
            </a>
          </li>

          <li>
            <a href="/InitialPage2_1?show=ServicesOffered">
              <FaStethoscope className="icon" />
              <span>Services Offered</span>
            </a>
          </li>

          <li>
            <a href="/InitialPage2_1?show=ContactInformation">
              <FaPhone className="icon" />
              <span>Contact Information</span>
            </a>
          </li>

          <li>
            <a href="/InitialPage2_1?show=PatientTestimonials">
              <FaComments className="icon" />
              <span>Patient Testimonials</span>
            </a>
          </li>

          <li>
            <a href="/InitialPage2_1?show=MeetOurDoctors">
              <FaUserMd className="icon" />
              <span>Meet Our Doctors</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InitialPage2;
