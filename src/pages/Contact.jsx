import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success/Error message

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus(data.error || "Something went wrong!");
      }
    } catch (error) {
      setStatus("Server error! Try again later.");
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        "Connect with Us – Your Trusted Partner for Cutting-Edge Technology, Innovation, and Seamless Solutions!" 
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>Anand - Sojitra Road, Vallabh Vidhyanagar</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>561-456-2321</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>pranjal@email.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />

            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />

            <textarea 
              name="message"
              placeholder="Type your message..." 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>

            <button type="submit">Send</button>

            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
