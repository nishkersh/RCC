import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    const handleMouseEnter = (menu) => setDropdown(menu);
    const handleMouseLeave = () => setDropdown(null);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <h2>Rotaract Club</h2>
                    <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>of Chandigarh</span>
                </Link>

                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? '✖' : '☰'}
                </div>

                <ul className={`navbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>

                    {/* About Us */}
                    <li className="nav-item dropdown" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave} onClick={() => setDropdown(dropdown === 'about' ? null : 'about')}>
                        <span className="nav-links">About Us ▾</span>
                        {dropdown === 'about' && (
                            <ul className="dropdown-menu">
                                <li><Link to="/about-us/mission-vision" onClick={closeMobileMenu}>Our Mission & Vision</Link></li>
                                <li><Link to="/about-us/history-legacy" onClick={closeMobileMenu}>Our History & Legacy</Link></li>
                                <li><Link to="/about-us/team" onClick={closeMobileMenu}>Our Team</Link></li>
                                <li><Link to="/about-us/achievements" onClick={closeMobileMenu}>Our Achievements</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Our Impact */}
                    <li className="nav-item dropdown" onMouseEnter={() => handleMouseEnter('impact')} onMouseLeave={handleMouseLeave} onClick={() => setDropdown(dropdown === 'impact' ? null : 'impact')}>
                        <span className="nav-links">Our Impact ▾</span>
                        {dropdown === 'impact' && (
                            <ul className="dropdown-menu">
                                <li><Link to="/impact/community" onClick={closeMobileMenu}>Community Service</Link></li>
                                <li><Link to="/impact/international" onClick={closeMobileMenu}>International Services</Link></li>
                                <li><Link to="/impact/vocational" onClick={closeMobileMenu}>Vocational Services</Link></li>
                                <li><Link to="/impact/club" onClick={closeMobileMenu}>Club Services</Link></li>
                                <li><Link to="/impact/flagship" onClick={closeMobileMenu}>Flagship Projects</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Get Involved */}
                    <li className="nav-item dropdown" onMouseEnter={() => handleMouseEnter('involved')} onMouseLeave={handleMouseLeave} onClick={() => setDropdown(dropdown === 'involved' ? null : 'involved')}>
                        <span className="nav-links">Get Involved ▾</span>
                        {dropdown === 'involved' && (
                            <ul className="dropdown-menu">
                                <li><Link to="/get-involved/member" onClick={closeMobileMenu}>Become a Member</Link></li>
                                <li><Link to="/get-involved/volunteer" onClick={closeMobileMenu}>Volunteer Opportunities</Link></li>
                                <li><Link to="/get-involved/partner" onClick={closeMobileMenu}>Partner With Us</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* More */}
                    <li className="nav-item dropdown" onMouseEnter={() => handleMouseEnter('more')} onMouseLeave={handleMouseLeave} onClick={() => setDropdown(dropdown === 'more' ? null : 'more')}>
                        <span className="nav-links">More ▾</span>
                        {dropdown === 'more' && (
                            <ul className="dropdown-menu">
                                <li><Link to="/more/events" onClick={closeMobileMenu}>Events</Link></li>
                                <li><Link to="/more/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
                                <li><Link to="/more/blog" onClick={closeMobileMenu}>Blog</Link></li>
                                <li><Link to="/more/contribute" onClick={closeMobileMenu}>Contribute</Link></li>
                                <li><Link to="/more/resources" onClick={closeMobileMenu}>Resources</Link></li>
                                <li><Link to="/contact-us" onClick={closeMobileMenu}>Contact Us</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item mobile-only" style={{ padding: '0', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <button onClick={toggleTheme} style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: '50px', padding: '8px 16px', color: 'var(--color-text-main)', fontSize: '1rem', cursor: 'pointer', display: 'flex', gap: '8px', alignItems: 'center' }}>
                            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                        </button>
                        <div className="navbar-action">
                             <Link to="/get-involved/member" className="btn btn-primary" onClick={closeMobileMenu}>Join the Club</Link>
                        </div>
                    </li>
                </ul>

                <div className="navbar-action desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: 'var(--color-text-main)', fontSize: '1.4rem', cursor: 'pointer', transition: 'transform 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%' }} aria-label="Toggle Theme">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                    <Link to="/get-involved/member" className="btn btn-primary">Join the Club</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
