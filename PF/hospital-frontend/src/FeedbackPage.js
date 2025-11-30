import React, { useState } from "react";

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
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
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "25px", color: "#DC2626" }}>Feedback</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <textarea
            placeholder="Write your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            style={{
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
              minHeight: "150px",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#DC2626",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#EF4444")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#DC2626")}
          >
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackPage;
