import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer pt-5">
            <div className="container footer-container">
                {/* Column 1: Logo and desc */}
                <div className="footer-col" style={{ flex: '1.5' }}>
                    <Link to="/" className="navbar-logo" style={{ color: 'var(--color-primary)' }}>
                        <h2>Rotaract Club</h2>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>of Chandigarh</span>
                    </Link>
                    <p style={{ marginTop: '1rem', opacity: 0.8 }}>
                        Making a positive impact through community service, leadership development, and international understanding.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col" style={{ flex: '1' }}>
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/about-us/mission-vision">About Us</Link></li>
                        <li><Link to="/impact/community">Our Impact</Link></li>
                        <li><Link to="/get-involved/member">Get Involved</Link></li>
                        <li><Link to="/more/events">Events</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="footer-col" style={{ flex: '1' }}>
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul className="footer-links">
                        <li>Email: hello@racchandigarh.org</li>
                        <li>Phone: +91 98765 43210</li>
                        <li>Location: Chandigarh, India</li>
                    </ul>
                </div>

                {/* Column 4: Social */}
                <div className="footer-col" style={{ flex: '1' }}>
                    <h4 className="footer-heading">Follow Us</h4>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="Instagram">IG</a>
                        <a href="#" aria-label="LinkedIn">IN</a>
                        <a href="#" aria-label="YouTube">YT</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Rotaract Club of Chandigarh. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
