import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address!");
      emailRef.current.focus();
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // Store token
        localStorage.setItem("userRole", response.data.role); // Store role

        if (email === "pranjaladmin@techelecon.com") {   
          localStorage.setItem("userRole", "admin");  
          alert("Admin login successful!");  
          navigate("/gatepassestoday");  
        } else if (email.endsWith("employee@techelecon.com")) {  
          localStorage.setItem("userRole", "employee");
          alert("Employee login successful!");  
          navigate("/employee-dash");  
        } else if (email.endsWith("manager@techelecon.com")) {    
          localStorage.setItem("userRole", "manager");  
          alert("Manager login successful!");  
          navigate("/dashman");  
        }  
        
      } else {
        setError(response.data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError(error.response?.data?.error || "Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="brand">Tech Elecon</h2>
        <h1 className="title">Login Here!</h1>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            ref={emailRef}
            required
          />

          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="*******************"
              value={formData.password}
              onChange={handleChange}
              ref={passwordRef}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>

        <p className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <div className="button_R1">
          <p>Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
