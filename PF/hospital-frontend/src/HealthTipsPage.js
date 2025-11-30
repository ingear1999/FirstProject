import React, { useState, useEffect } from "react";

const tips = [
  "Drink plenty of water daily.",
  "Walk 30 minutes every day.",
  "Eat a balanced diet rich in vegetables.",
  "Get at least 7-8 hours of sleep.",
  "Monitor your blood pressure regularly.",
  "Reduce sugar and processed foods.",
  "Practice stress-relief techniques like meditation.",
  "Avoid smoking and excessive alcohol consumption.",
  "Get regular health check-ups.",
  "Maintain a healthy body weight."
];

function HealthTipsPage() {
  const [tipIndex, setTipIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTipIndex((prev) => (prev + 1) % tips.length);
        setFade(true);
      }, 500); // fade-out then fade-in
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "25px", color: "#059669" }}>Health Tips</h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#059669",
            minHeight: "50px",
            transition: "opacity 0.5s ease-in-out",
            opacity: fade ? 1 : 0,
          }}
        >
          {tips[tipIndex]}
        </p>
      </div>
    </div>
  );
}

export default HealthTipsPage;
