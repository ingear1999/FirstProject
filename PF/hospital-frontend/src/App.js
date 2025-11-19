import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageAlignment from "./PageAlignment";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import InitialPage2_1 from "./InitialPage2_1";
import MainPage from "./MainPage";
import AppointmentPage from "./AppointmentPage";
import HealthTipsPage from "./HealthTipsPage";
import SearchDoctorPage from "./SearchDoctorPage";
import MedicalToolPage from "./MedicalToolPage";
import FeedbackPage from "./FeedbackPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageAlignment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/InitialPage2_1" element={<InitialPage2_1 />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/health-tips" element={<HealthTipsPage />} />
        <Route path="/search-doctor" element={<SearchDoctorPage />} />
        <Route path="/medical-tool" element={<MedicalToolPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
