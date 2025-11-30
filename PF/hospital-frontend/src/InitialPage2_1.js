import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHospitalUser, FaStethoscope, FaPhone, FaComments, FaUserMd } from "react-icons/fa";
import './Style/InitialPage2_1.css';

function InitialPage2_1() {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const show = params.get("show"); 

    // Patient Testimonials state
    const [testimonials, setTestimonials] = useState([
        { id: 1, text: "The doctors and nurses were attentive. Recovery was smooth." },
        { id: 2, text: "I felt safe and cared for. Highly recommend!" },
        { id: 3, text: "Excellent facilities and very professional staff." }
    ]);
    const [newTestimonial, setNewTestimonial] = useState("");
    const [editId, setEditId] = useState(null);

    const handleAdd = () => {
        if (newTestimonial.trim() === "") return;
        if (editId) {
            setTestimonials(prev =>
                prev.map(t => (t.id === editId ? { ...t, text: newTestimonial } : t))
            );
            setEditId(null);
        } else {
            setTestimonials(prev => [
                ...prev,
                { id: Date.now(), text: newTestimonial }
            ]);
        }
        setNewTestimonial("");
    };

    const handleEdit = (id, text) => {
        setEditId(id);
        setNewTestimonial(text);
    };

    const handleDelete = (id) => {
        setTestimonials(prev => prev.filter(t => t.id !== id));
    };

    // Sections data
    const sections = [
        {
            key: "Policy",
            title: "Hospital Policy",
            icon: <FaHospitalUser />,
            content: [
                "Patient-centered care with compassion and integrity.",
                "Visiting hours: 9 AM – 8 PM daily.",
                "Patient privacy and safety are top priorities."
            ]
        },
        {
            key: "ServicesOffered",
            title: "Services Offered",
            icon: <FaStethoscope />,
            content: [
                "General Medicine & Internal Care",
                "Surgery & Emergency Services",
                "Pediatrics & Neonatal Care",
                "Radiology & Lab Testing",
                "Physical Therapy & Rehabilitation"
            ]
        },
        {
            key: "ContactInformation",
            title: "Contact Information",
            icon: <FaPhone />,
            content: [
                "Phone: +1 555-123-4567",
                "Email: info@ourhospital.com",
                "Address: 123 Main Street, City, Country",
                "For emergencies: Call 911"
            ]
        },
        {
            key: "PatientTestimonials",
            title: "Patient Testimonials",
            icon: <FaComments />,
            content: testimonials,
            isTestimonials: true
        },
        {
            key: "MeetOurDoctors",
            title: "Meet Our Doctors",
            icon: <FaUserMd />,
            content: [
                "Please Login or Signup to view doctors."
            ],
            buttons: [
                { label: "Login", action: () => navigate("/") },
                { label: "View Doctors", action: () => navigate("/DoctorsDashBoard") },
                { label: "Signup", action: () => navigate("/signup") }
            ]
        }
    ];

    const currentSection = sections.find(sec => sec.key === show);

    if (!currentSection) return <p className="ipp21-placeholder">Select a section to display</p>;

    return (
        <div className='ipp21-page'>
            <div className='ipp21-card'>
                <div className='ipp21-header'>
                    {currentSection.icon} {currentSection.title}
                </div>

                {currentSection.isTestimonials ? (
                    <>
                        <ul className='ipp21-list'>
                            {testimonials.map(t => (
                                <li key={t.id} className='testimonial-item'>
                                    {t.text}
                                    <div className="testimonial-actions">
                                        <button className='ipp21-small-btn' onClick={() => handleEdit(t.id, t.text)}>Edit</button>
                                        <button className='ipp21-small-btn delete' onClick={() => handleDelete(t.id)}>Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='testimonial-form'>
                            <input 
                                type="text" 
                                placeholder="Write your testimonial..." 
                                value={newTestimonial} 
                                onChange={(e) => setNewTestimonial(e.target.value)}
                            />
                            <button onClick={handleAdd}>{editId ? "Update" : "Add"}</button>
                        </div>
                    </>
                ) : (
                    <ul className='ipp21-list'>
                        {currentSection.content.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                )}

                {currentSection.buttons && (
                    <div className='ipp21-buttons'>
                        {currentSection.buttons.map((btn, idx) => (
                            <button key={idx} onClick={btn.action} className='ipp21-btn'>{btn.label}</button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InitialPage2_1;
