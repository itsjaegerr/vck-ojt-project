import React from "react";
import Header from "../components/Header/Header";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <Header />

      {/* Center this whole section */}
      <div className="about-wrapper">
        <div className="maincont">
          <h1>This is about College</h1>

          <p>
            Vivekanand College stands as a beacon of knowledge and integrity, committed
            to delivering transformative education since its inception in 1980.
            Located in the bustling heart of Chembur, Mumbai, our college has
            consistently strived to uphold the highest standards of academic rigor
            and ethical values.
          </p>

          <p id="info">
            Our vision is to empower students with critical thinking skills, a global
            perspective, and a strong sense of social responsibility. We aim to nurture
            individuals who are not only successful in their careers but also contributing
            members of society.
          </p>

          <h2>Our Mission</h2>
          <hr />
          <ul>
            <li>To provide high-quality, accessible education across various disciplines.</li>
            <li>To foster research, innovation, and creativity among students and faculty.</li>
            <li>To cultivate a diverse and inclusive learning environment.</li>
            <li>To instill strong ethical values and leadership qualities.</li>
          </ul>

          <h2>Our Values</h2>
          <hr />
          <p>
            Integrity, Excellence, Innovation, Community, and Respect are the pillars
            upon which Vivekanand College is built. We encourage open dialogue,
            intellectual curiosity, and a relentless pursuit of knowledge.
          </p>

          <h2>Our History</h2>
          <hr />
          <p>
            Our journey began with a vision to make quality education available to all.
            Since then, we've achieved numerous milestones, expanded our academic
            programs, and cultivated a distinguished alumni network that contributes
            across the globe.
          </p>
        </div>
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Courses</h2>
    </div>
  );
};

export default AboutPage;