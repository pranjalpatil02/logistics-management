import React, { useState } from "react";
import { Link } from "react-router-dom";  
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import GatePass from "./GatePass";  // ✅ Import GatePass Component

const Navbar = () => {
  // State to control modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
        <div className="nav-buttons">
          <Link to="/login">
            <button className="login-btn">LOGIN</button>
          </Link>
          {/* Updated GATE PASS Button to open modal */}
          <button className="gatepass-btn" onClick={openModal}>GATE PASS</button>
        </div>
      </div>

      {/* Modal for GatePass */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>X</button>
            <GatePass />  {/* ✅ Render GatePass component inside modal */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
