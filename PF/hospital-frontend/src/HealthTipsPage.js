import React, { useState, useEffect } from "react";

const tips = [
  "Drink plenty of water daily.",
  "Walk 30 minutes every day.",
  "Eat a balanced diet rich in vegetables.",
  "Get at least 7-8 hours of sleep.",
  "Monitor your blood pressure regularly."
];

function HealthTipsPage() {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "150px 50px" }}>
      <h2>Health Tips</h2>
      <p style={{ fontSize: "18px", color: "#059669", fontWeight: 600 }}>{tips[tipIndex]}</p>
    </div>
  );
}

export default HealthTipsPage;
