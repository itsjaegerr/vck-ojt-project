
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css';
import'./pages/HomePage.css';
import'./pages/AboutPage.css';
import'./pages/Contact.css';
import'./pages/Courses.css';

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

         
        

          </Routes>

      </Router>
    </div>
  )
}
export default App;