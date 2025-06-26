
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css';
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import ApplyPage from "./pages/Applynow";


const App=()=>{
  return(

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
  )
}
export default App;