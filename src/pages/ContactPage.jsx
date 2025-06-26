import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />

      <div className="main2">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have questions about admissions,
          programs, or campus life, our team is here to help.
        </p>

      <section className="contact-info">
        <div className="contact-block">
          <h2>General Enquiries</h2>
          <p><strong>Vivekanand College Main Campus</strong></p>
          <p>Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071</p>
          <p>India</p>
          <p><b>Phone:</b> +91 12345 67890</p>
          <p><b>Email:</b> info@vivekanandcollege.edu</p>
          <p><b>Office Hours:</b> Mon - Fri, 9:00 AM - 5:00 PM IST</p>
        </div>

        <div className="contact-block">
          <h2>Admissions Office</h2>
          <p>For all admission-related queries:</p>
          <p><b>Phone:</b> +91 98765 43210</p>
          <p><b>Email:</b> admissions@vivekanandcollege.edu</p>
        </div>

        <div className="contact-block">
          <h2>Student Support Services</h2>
          <p>For student support and academic advising:</p>
          <p><b>Phone:</b> +91 87654 32109</p>
          <p><b>Email:</b> studentsupport@vivekanandcollege.edu</p>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us on the Map</h2>
        <a
          href="https://www.google.com/maps/place/Mahatma+Gandhi+Road,+Chembur,+Mumbai,+Maharashtra+400071"
          target="_blank"
          rel="noreferrer"
          className="map-btn"
        >
          View on Google Maps
        </a>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      </div>

     
     <Footer/>
    </div>
  );
};

export default Contact;