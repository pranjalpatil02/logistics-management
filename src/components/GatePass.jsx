import React, { useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai"; // Import Close Icon
import "../styles/GatePass.css"; // Import CSS file

const GatepassForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    type: "entry",
    name: "",
    email: "",
    date: "",
    time: "",
    purpose: "",
    otherPurpose: "",
    companyPlace: "",
  });

  const [showOther, setShowOther] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "purpose") setShowOther(value === "other");
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return email.endsWith("@gmail.com") || email.endsWith("@elecon.com");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Invalid email. It must end with @gmail.com or @elecon.com.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/gatepass/add", formData);
      alert(response.data.message);
      setFormData({
        type: "entry",
        name: "",
        email: "",
        date: "",
        time: "",
        purpose: "",
        otherPurpose: "",
        companyPlace: "",
      });
    } catch (error) {
      console.error("Error submitting gatepass:", error);
      alert("Failed to generate gatepass. Please try again.");
    }
  };

  return (
    <div className="gatepass-container">
      {/* Close Icon */}
      <AiOutlineClose className="close-icon" onClick={onClose} />

      <h2 className="gatepass-heading">Gatepass Generation Form</h2>

      <form onSubmit={handleSubmit} className="gatepass-form">
        {/* Entry / Exit Selection */}
        <div className="gatepass-radio-group">
          <label>
            <input type="radio" name="type" value="entry" checked={formData.type === "entry"} onChange={handleChange} />
            Entry
          </label>
          <label>
            <input type="radio" name="type" value="exit" checked={formData.type === "exit"} onChange={handleChange} />
            Exit
          </label>
        </div>

        {/* Name Field */}
        <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required className="gatepass-input" />

        {/* Email Field */}
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required className="gatepass-input" />

        {/* Date Field */}
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="gatepass-input" />

        {/* Time Field */}
        <input type="time" name="time" value={formData.time} onChange={handleChange} required className="gatepass-input" />

        {/* Purpose Dropdown */}
        <select name="purpose" value={formData.purpose} onChange={handleChange} required className="gatepass-input">
          <option value="" disabled>Select Reason</option>
          <option value="employee">Employee</option>
          <option value="visitor">Visitor</option>
          <option value="temporary">Temporary</option>
          <option value="vehicle">Vehicle</option>
          <option value="returnable material">Returnable Material</option>
          <option value="non-material material">Non-Material Material</option>
          <option value="other">Other</option>
        </select>

        {/* Textarea for "Other" Purpose */}
        {showOther && <textarea name="otherPurpose" placeholder="Type other purpose" value={formData.otherPurpose} onChange={handleChange} className="gatepass-textarea" />}

        {/* Company Place Dropdown (Restored) */}
        <select name="companyPlace" value={formData.companyPlace} onChange={handleChange} required className="gatepass-input">
          <option value="" disabled>Select Location</option>
          <option value="TECH ELECON PVT. LTD.">TECH ELECON PVT. LTD.</option>
          <option value="Elecon Engineering Co. Ltd.">Elecon Engineering Co. Ltd.</option>
          <option value="Eimco Elecon Manufacturing">Eimco Elecon Manufacturing</option>
          <option value="Elecon Peripherals Limited">Elecon Peripherals Limited</option>
          <option value="Elecon Cricket Academy">Elecon Cricket Academy</option>
          <option value="Elecon Tennis Academy">Elecon Tennis Academy</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="gatepass-button">Generate Gatepass</button>
      </form>
    </div>
  );
};

export default GatepassForm;
