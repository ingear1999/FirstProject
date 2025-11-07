import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InitialPage from "./InitialPage";
import InitialPage2 from "./InitialPage2";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={{ textAlign: "right", margin: "10px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "15px" }}>About</Link>
        <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>

      {/* Route Mapping */}
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/about" element={<InitialPage2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
