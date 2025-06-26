import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Courses = () => {
  return (
    <div className="courses-page">
      <Header />

      <div className="main1">
        <h1>Our Academic Programs</h1>
        <p>
          Vivekanand College offers a comprehensive range of undergraduate and
          postgraduate programs designed to equip students with the knowledge and
          skills demanded by today's dynamic global landscape.
        </p>
      

      <section className="campus-life">
        <h2>Discover Campus Life</h2>
        <p>Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
        <video controls className="campus-video">
          <source src="/videos/college-tour.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="programs">
        <div className="un">
        <h2>Undergraduate Programs (UG)</h2>
        <ul>
          <li>Bachelor of Science (B.Sc.)
            <ul>
              <li>Computer Science (3 years)</li>
              <li>Information Technology (3 years)</li>
              <li>Biotechnology (3 years)</li>
            </ul>
          </li>
          <li>Bachelor of Commerce (B.Com)
            <ul>
              <li>Accounting & Finance (3 years)</li>
              <li>Banking & Insurance (3 years)</li>
            </ul>
          </li>
          <li>Bachelor of Arts (B.A.)
            <ul>
              <li>English Literature (3 years)</li>
              <li>Psychology (3 years)</li>
            </ul>
          </li>
        </ul>
          </div>
          <div className="un">
        <h2>Postgraduate Programs (PG)</h2>
        <ul>
          <li>Master of Science (M.Sc.)
            <ul>
              <li>Computer Science (2 years)</li>
              <li>Information Technology (2 years)</li>
            </ul>
          </li>
          <li>Master of Commerce (M.Com) (2 years)</li>
          <li>Master of Arts (M.A.) (2 years)</li>
        </ul>
        </div>
      </section>
      
      <section className="fee-table">
        <h2>Program Details & Fee Structure (Annual)</h2>
        <table>
          <thead>
            <tr>
              <th>Program Type</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Annual Fee (INR)</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UG</td>
              <td>B.Sc. Computer Science</td>
              <td>3 Years</td>
              <td>₹ 85,000</td>
              <td>10+2 with PCM (50%)</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>B.Com. Accounting & Finance</td>
              <td>3 Years</td>
              <td>₹ 70,000</td>
              <td>10+2 Commerce (45%)</td>
            </tr>
            <tr>
              <td>PG</td>
              <td>M.Sc. Information Technology</td>
              <td>2 Years</td>
              <td>₹ 95,000</td>
              <td>B.Sc. IT/CS (50%)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="vocational">
        <h2>Specialized & Vocational Courses</h2>
        <p>
          In addition to traditional degree programs, we offer various certificate and diploma
          courses in areas like:
        </p>
        <ul>
          <li>Digital Marketing</li>
          <li>Web Development</li>
          <li>Data Analytics</li>
          <li>Soft Skills Development</li>
        </ul>
        <p>Providing specialized training for career enhancement.</p>
                <a href="/contact">
                

        <button className="inquire-btn">Inquire About Courses</button>
        </a>
      </section>
      </div>
      

      
      <Footer/>

    </div>
  );
};

export default Courses;