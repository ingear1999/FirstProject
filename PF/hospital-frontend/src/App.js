import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
