import React from "react";
import { Link } from "react-router-dom";
import "./Style/AuthButtons.css";

function AuthButtons() {
  return (
    <div className="auth-container-right">

      {/* Header for the buttons */}
      <div className="HeaderAuth">Login And Sign Up</div>

      {/* Login button */}
      <Link to="/login">
        <button className="auth-btn login-btn fade-slide">Login</button>
      </Link>

      {/* Signup button */}
      <Link to="/signup">
        <button className="auth-btn signup-btn fade-slide">Sign Up</button>
      </Link>
    </div>
  );
}

export default AuthButtons;
