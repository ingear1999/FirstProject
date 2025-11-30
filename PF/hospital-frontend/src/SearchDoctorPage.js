import React, { useState } from "react";

const doctors = [
  { name: "Dr. Alice Smith", department: "Cardiology" },
  { name: "Dr. John Doe", department: "Pediatrics" },
  { name: "Dr. Jane Lee", department: "Radiology" },
  { name: "Dr. Mike Chen", department: "Orthopedics" },
  { name: "Dr. Sara Patel", department: "Neurology" },
  { name: "Dr. Kevin Brown", department: "Dermatology" },
];

function SearchDoctorPage() {
  const [query, setQuery] = useState("");

  const filtered = doctors.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.department.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
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
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h2 style={{ marginBottom: "25px", color: "#1E3A8A", textAlign: "center" }}>
          Search Doctor / Department
        </h2>
        <input
          type="text"
          placeholder="Search by doctor or department"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
            marginBottom: "20px",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#1E3A8A")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {filtered.length > 0 ? (
            filtered.map((d, index) => (
              <li
                key={index}
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                  borderRadius: "6px",
                  marginBottom: "10px",
                  transition: "background-color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f9ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
              >
                <strong>{d.name}</strong> — {d.department}
              </li>
            ))
          ) : (
            <li style={{ padding: "12px", textAlign: "center", color: "#888" }}>
              No doctors found
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchDoctorPage;
