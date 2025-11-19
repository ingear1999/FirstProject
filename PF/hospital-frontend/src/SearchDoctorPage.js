import React, { useState } from "react";

const doctors = [
  { name: "Dr. Alice Smith", department: "Cardiology" },
  { name: "Dr. John Doe", department: "Pediatrics" },
  { name: "Dr. Jane Lee", department: "Radiology" },
  { name: "Dr. Mike Chen", department: "Orthopedics" },
];

function SearchDoctorPage() {
  const [query, setQuery] = useState("");

  const filtered = doctors.filter(d => d.name.toLowerCase().includes(query.toLowerCase()) || d.department.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ padding: "150px 50px" }}>
      <h2>Search Doctor / Department</h2>
      <input type="text" placeholder="Search by doctor or department" value={query} onChange={(e) => setQuery(e.target.value)} style={{ padding: "10px", width: "300px", marginBottom: "20px" }} />
      <ul>
        {filtered.map((d, index) => (
          <li key={index} style={{ padding: "10px 0", borderBottom: "1px solid #ddd" }}>
            <strong>{d.name}</strong> — {d.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchDoctorPage;
