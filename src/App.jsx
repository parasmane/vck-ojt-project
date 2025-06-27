import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import './styles/Pages.css'
import "./App.css";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return(
    <div class="all " >
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Paras Vijay Mane"
          studentPhotoUrl="/images/p.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/admissions" element={<AdmissionsPage/>}/>
          
        </Routes>
        <ChatbotComponent/>
      </Router>
      </div>
  )

}
export default App;