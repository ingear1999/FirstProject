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
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "25px", color: "#1E3A8A" }}>Book Appointment</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
            }}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
            }}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#1E3A8A",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#3B82F6"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#1E3A8A"}
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentPage;
