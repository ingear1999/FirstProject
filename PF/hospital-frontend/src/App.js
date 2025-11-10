import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageAlignment from "./PageAlignment.js";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      

      {/* Route Mapping */}
      <Routes>
        <Route path="/" element={<PageAlignment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;