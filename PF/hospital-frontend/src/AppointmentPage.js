import React, { useState } from "react";

function AppointmentPage() {
  const [formData, setFormData] = useState({ name: "", department: "", date: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date} at ${formData.department}`);
    setFormData({ name: "", department: "", date: "" });
  };

  return (
    <div style={{ padding: "150px 50px" }}>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", gap: "15px" }}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#1E3A8A", color: "#fff", fontWeight: 600 }}>Book</button>
      </form>
    </div>
  );
}

export default AppointmentPage;
