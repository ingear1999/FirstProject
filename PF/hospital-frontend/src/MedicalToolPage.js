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
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6", // optional: light background
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
          minWidth: "300px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>BMI Calculator</h2>
        <form
          onSubmit={calculateBMI}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#D97706",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Calculate
          </button>
        </form>
        {bmi && (
          <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: 500 }}>
            Your BMI: {bmi}
          </p>
        )}
      </div>
    </div>
  );
}

export default MedicalToolPage;
