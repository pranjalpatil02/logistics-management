import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import aboutImage from "../assets/about-image.png";
import teamImage from "../assets/team-image.jpg";
import OurTeam from "../assets/Our-Team.jpeg";
import jeanneSegal from "../assets/jeanne-segal.jpg";

// Icons for the statistics section
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const About = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <div className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Elecon, established in 1962, is India's largest industrial gearbox manufacturer and a globally recognized supplier of power transmission solutions.
          </p>
        </div>
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <img src={aboutImage} alt="About Us" />
        </motion.div>
      </div>

      {/* HelpGuide's Story Section */}
      <div className="story-section">
        <motion.div 
          className="team-image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={teamImage} alt="HelpGuide's Story" />
        </motion.div>
        <div className="story-content">
          <h2>Tech Elecon's Story</h2>
          <p>
            Founded in 1951 by the visionary Late Shri Ishwarbhai B. Patel, Elecon Group embarked on a journey of excellence.Initially specializing in conveyor systems, Elecon quickly evolved into a key player in Engineering, Procurement, and Construction projects in India.

Relocating to Vallabh Vidyanagar, Gujarat, in May 1960, Elecon Engineering made significant strides, becoming a publicly listed company on the Bombay Stock Exchange Limited in June 1962 and later on the National Stock Exchange of India Limited in November 2006.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="team-section">
        <div className="team-content">
          <h2>Meet Our Team</h2>
          <p>
          A team of skilled professionals handles these operations—engineers design and build custom and refurbished gearboxes, ensuring top performance. Technicians provide support for power transmission, material handling, and condition monitoring systems, keeping industries running smoothly.Our front-end sales team has continuous support from the technical pre-sales team.
          </p>
          <div className="team-buttons">
            <button className="team-btn">Our Team</button>
            <button className="experts-btn">Our Experts</button>
          </div>
        </div>
        <motion.div 
          className="Our-Team"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={OurTeam} alt="Meet Our Team" />
        </motion.div>
      </div>

      {/* The Legacy of Dr. Jeanne Segal Section */}
      <div className="legacy-section">
        <motion.div 
          className="team-image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={jeanneSegal} alt="Dr. Jeanne Segal" />
        </motion.div>
        <div className="story-content">
          <h2>NAME????</h2>
          <p>
          Our CEO has been leading the company since 1960, driving innovation in gearbox manufacturing and IT solutions. Under their leadership, we have grown into a trusted name in both industries.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-container">
        {[icon1, icon2, icon3, icon4].map((icon, index) => (
          <motion.div
            key={index}
            className="about-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={icon} alt={`Statistic ${index + 1}`} />
            <h2><em>{["21 years", "566 million", "240+", "Non-Profit"][index]}</em></h2>
            <p>{["helping people online", "visits since 1999", "countries & territories", "with no corporate influence"][index]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
