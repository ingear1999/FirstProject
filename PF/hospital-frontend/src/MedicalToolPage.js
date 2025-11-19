import React, { useState } from "react";

function MedicalToolPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    setBmi((w / (h * h)).toFixed(2));
  };

  return (
    <div style={{ padding: "150px 50px" }}>
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI} style={{ display: "flex", flexDirection: "column", maxWidth: "300px", gap: "10px" }}>
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} required />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#D97706", color: "#fff", fontWeight: 600 }}>Calculate</button>
      </form>
      {bmi && <p style={{ marginTop: "20px", fontSize: "18px" }}>Your BMI: {bmi}</p>}
    </div>
  );
}

export default MedicalToolPage;
