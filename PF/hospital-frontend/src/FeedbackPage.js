import React, { useState } from "react";

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <div style={{ padding: "150px 50px" }}>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px" }}>
        <textarea placeholder="Write your feedback..." value={feedback} onChange={(e) => setFeedback(e.target.value)} style={{ padding: "10px", minHeight: "120px" }} required />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#DC2626", color: "#fff", fontWeight: 600 }}>Send Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackPage;
