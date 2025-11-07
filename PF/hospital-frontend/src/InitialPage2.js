import React from "react";
import { FaHospitalUser, FaStethoscope, FaPhone, FaComments, FaUserMd } from "react-icons/fa"; // hospital-related icons
import "./InitialPage2.css";

function InitialPage2() {
  return (
    <div className="initial-page2">
      <header className="header1">
        <h1>About Our Hospital</h1>
      </header>

      <div className="list">
        <ul>
          <li id="l1">
            <FaHospitalUser className="icon" />
            <h>Hospital Policy</h>
          </li>
          <li id="l2">
            <FaStethoscope className="icon" />
            <h>Services Offered</h>
          </li>
          <li id="l3">
            <FaPhone className="icon" />
            <h>Contact Information</h>
          </li>
          <li id="l4">
            <FaComments className="icon" />
            <h>Patient Testimonials</h>
          </li>
          <li id="l5">
            <FaUserMd className="icon" />
            <h>Meet Our Doctors</h>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InitialPage2;
