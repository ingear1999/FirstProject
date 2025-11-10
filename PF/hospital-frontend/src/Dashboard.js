import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Your Hospital Dashboard</h1>
      <ul>
        <li><Link to="/prescription">Prescription</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/symptom">Input Symptom</Link></li>
        <li><Link to="/about">About the Hospital</Link></li>
        <li><Link to="/cost">Treatment Cost</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;