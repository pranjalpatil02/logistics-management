import React from "react";
import "./../styles/Footer.css";  // Adjust the path


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Services</h3>
                    <ul>
                        <li>Hardware Maintenance And Repairing</li>
                        <li>Service Desk Management</li>
                        <li>Desktop Management</li>
                        <li>Server And Datacentre Administration</li>
                        <li>Network Management</li>
                        <li>Messaging Administration</li>
                        <li>Back-up Management</li>
                        <li>Professional Security Services</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Our Solution</h3>
                    <ul>
                        <li>Enterprise Solution</li>
                        <li>Server And Storage</li>
                        <li>Wireless Solution</li>
                        <li>Internet Services</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Last Tweets</h3>
                    <ul>
                        <li>Tech Elecon has accomplished ISO 9001-2015 Certification for all its processes</li>
                        <li>Tech Elecon has accomplished ISO 27001-2013 Certification for all its processes</li>
                        <li>Tech Elecon has accomplished ISO 27001-2013 Scope Certification for all its processes</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                All Rights Are Reserved @ Tech Elecon Pvt. Ltd. ©Copyrights 2016 - Designed by TEPL
            </div>
        </footer>
    );
};

export default Footer;
