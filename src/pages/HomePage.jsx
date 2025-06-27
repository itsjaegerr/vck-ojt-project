import { useState } from "react";
import Header from "../components/Header/Header";
/*import Popup from "../components/Popup/Popup";*/ // make sure Popup.jsx is placed correctly
import Footer from "../components/Footer/Footer";
import ApplyPage from "./Applynow";
import { Link } from "react-router-dom";


const HomePage = () => {
//  /* const [showPopup, setShowPopup] = useState(true);

//   const handleClosePopup = () => {
//     setShowPopup(false);*/
//   };

  return (
    <div className="homepage">
    

      <Header />
       



      <div className="main-content">
        
       
        
      <div className="Banner">
        <div className="banner-text">
          <h1>Welcome to Vivekanand College!</h1>
          <p>Your journey to excellence starts here.</p>
          <Link to="/apply" className="Apply1">Apply Now!</Link>
        </div>
      </div>
        <div className="intro">
          <p>
            <b>Vivekanand College</b> is a premier educational institution
            dedicated to fostering academic excellence, innovation, and holistic
            development. Established in 1980, we’ve proudly served generations of
            students, empowering them to achieve their full potential.
          </p>
          <p>
            Our vibrant learning environment, modern facilities, and experienced
            faculty create an ecosystem where curiosity thrives and leaders are
            shaped.
          </p>
        </div>

        <section className="why-choose">
          <h2>Why Choose Vivekanand College?</h2>
          <hr />
          <ul>
            <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
            <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
            <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
            <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
            <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
          </ul>
          <h3 className="why-choose">Campus Life & Facilities</h3>
          <div className="imgs">
          
          <img src="/public/images/vckimg.jpg" alt="Student Profiles"/>
          <img src="/public/images/vckimg1.jpg" alt="campus"/>
        </div>
        
          <p className="cta-text">Ready to begin your journey with us?</p>
          <div className="exp">
          <Link to="/courses">Explore Courses</Link>
          </div>
        </section>
      </div>
      <Footer/>

      
    </div>
  );
}
export default HomePage;