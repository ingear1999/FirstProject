import React from 'react';
import { FaHospitalUser, FaStethoscope, FaPhone, FaComments, FaUserMd } from "react-icons/fa";
import './Style/InitialPage2_1.css';

function InitialPage2_1() {
    const params = new URLSearchParams(window.location.search);
    const show = params.get("show"); 

    return (
        <div className='styleInitialPage2_1'>
            {show === "Policy" && (
                <div className='Policy'>
                    <div className="section-header"><FaHospitalUser /> 1️⃣ Hospital Policy</div>
                    <ul>
                        <li>Our hospital is committed to providing patient-centered care with compassion and integrity.</li>
                        <li>Visiting hours: 9 AM – 8 PM daily.</li>
                        <li>Patient privacy and safety are our top priorities.</li>
                    </ul>
                </div>
            )}

            {show === "ServicesOffered" && (
                <div className='ServicesOffered'>
                    <div className="section-header"><FaStethoscope /> 2️⃣ Services Offered</div>
                    <ul>
                        <li>General Medicine & Internal Care</li>
                        <li>Surgery & Emergency Services</li>
                        <li>Pediatrics & Neonatal Care</li>
                        <li>Radiology & Lab Testing</li>
                        <li>Physical Therapy & Rehabilitation</li>
                    </ul>
                </div>
            )}

            {show === "ContactInformation" && (
                <div className='ContactInformation'>
                    <div className="section-header"><FaPhone /> 3️⃣ Contact Information</div>
                    <ul>
                        <li>Phone: +1 555-123-4567</li>
                        <li>Email: info@ourhospital.com</li>
                        <li>Address: 123 Main Street, City, Country</li>
                        <li>For emergencies: Call 911</li>
                    </ul>
                </div>
            )}

            {show === "PatientTestimonials" && (
                <div className='PatientTestimonials'>
                    <div className="section-header"><FaComments /> 4️⃣ Patient Testimonials</div>
                    <ul>
                        <li>“The doctors and nurses were so attentive. My recovery was smooth and comfortable.” – Jane D.</li>
                        <li>“I felt safe and cared for every step of the way. Highly recommend!” – Mark P.</li>
                        <li>“Excellent facilities and very professional staff.” – Linda R.</li>
                    </ul>
                </div>
            )}

            {show === "MeetOurDoctors" && (
                <div className='MeetOurDoctors'>
                    <div className="section-header"><FaUserMd /> 5️⃣ Meet Our Doctors</div>
                    <h2>Require To Join For Visit This Feathur</h2>
                    <button onClick={() => window.location.href = '/login'}> Login</button>
                    <button onClick={() => window.location.href = '/signup'}> Signup</button>
                </div>
            )}
        </div>
    );
}

export default InitialPage2_1;
