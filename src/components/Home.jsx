import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "../styles/Home.css";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import missionIcon from "../assets/mission.png";
import teamIcon from "../assets/team.png";
import visionIcon from "../assets/vision.png";
import servicesIcon from "../assets/service.png";
import laptopImage from "../assets/laptop.png";
import serverImage from "../assets/server.png";
import enterpriseImage from "../assets/enterprise.jpg";
import storageImage from "../assets/storage.png";
import wirelessImage from "../assets/wireless.png";
import internetImage from "../assets/internet.png";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="hero-slider"
      >
        <SwiperSlide>
          <img src={banner1} alt="Slide 1" className="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Slide 2" className="hero-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Slide 3" className="hero-image" />
        </SwiperSlide>
      </Swiper>

      {/* Info Section */}
      <div className="info-section">
        <div className="info-cards">
          {[
            { icon: missionIcon, title: "OUR MISSION", text: "To provide the most advanced and affordable IT solutions for businesses." },
            { icon: teamIcon, title: "OUR TEAM", text: "We have always believed that people drive a business, not the other way around." },
            { icon: visionIcon, title: "OUR VISION", text: "To develop a sustainable information technology infrastructure." },
            { icon: servicesIcon, title: "OUR SERVICES", text: "With vast experience in IT services, we have successfully adapted to new technologies." },
          ].map((item, index) => (
            <div className="info-card" key={index}>
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Dealer Section */}
      <div className="dealer-section">
        {[
          { image: laptopImage, title: "AUTHORIZED DEALER", subtitle: "ACER COMPUTERS" },
          { image: serverImage, title: "SERVER IMPLEMENTATION", subtitle: "WINDOWS/LINUX SERVER" },
        ].map((dealer, index) => (
          <div className="dealer-card" key={index}>
            <img src={dealer.image} alt={dealer.title} />
            <div className="dealer-overlay">
              <p>{dealer.subtitle}</p>
            </div>
            <div className="dealer-info">
              <h3>{dealer.title}</h3>
              <p>{dealer.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Solutions Section */}
      <div className="solutions-section">
        <h2 style={{ textAlign: "center" }}>OUR SOLUTION</h2>

        <div className="solutions-container">
          {[
            {
              image: enterpriseImage,
              title: "ENTERPRISE SOLUTION",
              text: "A major part of the IT budget and manpower is spent in procuring and maintaining client computing and devices of large enterprises and SMEs."
            },
            {
              image: storageImage,
              title: "SERVER AND STORAGE",
              text: "Planning a scalable server and storage solution for applications like ERP, CRM, E-commerce, messaging and other business vertical applications is a key to success of these applications."
            },
            {
              image: wirelessImage,
              title: "WIRELESS SOLUTION",
              text: "Today Enterprises are experiencing a rising deluge of network traffic, which is overwhelming the typical network connections."
            },
            {
              image: internetImage,
              title: "INTERNET SERVICES",
              text: "TEPL offers a complete range of connectivity system integration solutions/services such as High Speed Internet, Bandwidth on Demand, IP VPN, Data Storage & Security."
            }
          ].map((solution, index) => (
            <div className="solution-card" key={index}>
              <img src={solution.image} alt={solution.title} />
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              <button>CLICK NOW</button>
            </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
