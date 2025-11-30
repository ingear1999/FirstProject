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
import DoctorDashboard from "./DoctorsDashBoard";

import Departments from "./Department/Departments";
import MedicalStaff from "./Department/MedicalStaff";
import SpecialtyCenters from "./Department/SpecialtyCenters";
import MedicalEquipment from "./MedicalEquipment";

import PracticeInformation from "./Hospital-Information/PracticeInformation";
import HowToFindUs from "./Hospital-Information/HowToFindUs";
import ParkingInformation from "./Hospital-Information/ParkingInformation";
import HospitalFacilities from "./Hospital-Information/HospitalFacilities";
import HealthInformation from "./Hospital-Information/HealthInformation";

import Overview from "./About-the-hp/Overview";
import Milestone from "./About-the-hp/Milestone";
import DirectorGreetings from "./About-the-hp/DirectorGreetings";
import MissionVision from "./About-the-hp/MissionVision";
import HospitalNetwork from "./About-the-hp/HospitalNetwork";

import SymptomChecker from "./Symtomcheck-feather/SymptomChecker";

import MedicalTerminology from "./Medical-Terminology/MedicalTerminology";

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
        <Route path="/DoctorsDashBoard" element={<DoctorDashboard />} />

        <Route path="/Departments" element={<Departments />} />
        <Route path="/MedicalStaff" element={<MedicalStaff />} />
        <Route path="/SpecialtyCenters" element={<SpecialtyCenters />} />
        <Route path="/MedicalEquipment" element={<MedicalEquipment />} />

        <Route path="/practice-information" element={<PracticeInformation />} />
        <Route path="/find-us" element={<HowToFindUs />} />
        <Route path="/parking-information" element={<ParkingInformation />} />
        <Route path="/hospital-facilities" element={<HospitalFacilities />} />
        <Route path="/health-information" element={<HealthInformation />} />

        <Route path="/overview" element={<Overview />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/director-greetings" element={<DirectorGreetings />} />
        <Route path="/MissionVision" element={<MissionVision />} />
        <Route path="/hospital-network" element={<HospitalNetwork />} />

        <Route path="/symptom-checker" element={<SymptomChecker />} />
        
        <Route path="/MedicalTerminology" element={<MedicalTerminology />} />

      </Routes>
    </Router>
  );
}

export default App;
