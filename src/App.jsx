
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css';
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import ApplyPage from "./pages/Applynow";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

const App=()=>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <div >
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Akshay Dandge"
          studentPhotoUrl="/images/luffy.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>







    <div>
      <Router>
          <Routes>
        <Route path="/" element={<HomePage/>}/>
         <Route path="/home" element={<HomePage/>}/>
         <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/apply" element={<ApplyPage/>}/>

         
        

          </Routes>
          <ChatbotComponent/>

      </Router>
    </div>
    </div>
  )
}
export default App;