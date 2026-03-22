import React from 'react';
import { Link } from 'react-router-dom';
import './GetInvolved.css';

const Volunteer = () => {

    const benefits = [
        { icon: '⏳', title: 'Flexible Commitment', desc: 'Choose from one-time events, short-term projects, or ongoing initiatives based on your availability and interests.' },
        { icon: '📜', title: 'Receive Certificates', desc: 'Get recognition for your service with official volunteer certificates that validate your contribution and skills gained.' },
        { icon: '📈', title: 'Develop Skills', desc: 'Gain valuable experience in leadership, teamwork, event management, and other transferable skills.' },
    ];

    const steps = [
        { step: '1', title: 'Fill Out Application', desc: 'Complete the volunteer application form below with your details and preferences.' },
        { step: '2', title: 'We\'ll Reach Out', desc: 'Our volunteer coordinator will contact you within 2-3 business days to discuss opportunities.' },
        { step: '3', title: 'Orientation Session', desc: 'Attend a brief orientation where you\'ll learn about our organization, projects, and volunteer guidelines.' },
        { step: '4', title: 'Start Making an Impact', desc: 'Begin volunteering on projects and events, tracking your hours for certificate issuance.' },
    ];

    const stories = [
        { name: 'Priya Sharma', role: 'Education Volunteer', quote: '"Volunteering with the literacy program has been incredibly rewarding. Seeing the children\'s progress week after week makes all the effort worthwhile."' },
        { name: 'Rahul Verma', role: 'Event Coordinator', quote: '"I started as a one-time volunteer for a fundraising event, but the experience was so positive that I\'ve been helping regularly for over a year now. The leadership skills I\'ve gained are invaluable."' },
        { name: 'Ananya Gupta', role: 'Environmental Volunteer', quote: '"The Green Initiative has allowed me to combine my passion for the environment with community service. The team is supportive, and I\'ve made great friends while making a difference."' }
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="gi-hero">
                <h1>Volunteer Opportunities</h1>
                <p>Join us in making a difference, one project at a time.</p>
            </section>

            {/* ===== INTRO SPLIT ===== */}
            <section className="gi-intro-split">
                <div className="gi-intro-split-inner">
                    <div className="gi-intro-text">
                        <h2>Make a Real Impact</h2>
                        <p>Rotaract Club of Chandigarh offers various opportunities for volunteers to contribute their time and skills to meaningful projects that serve our community.</p>
                        <p>Whether you have a few hours or want to get involved in longer-term initiatives, we welcome individuals of all backgrounds who share our passion for service and making a positive difference.</p>
                        <a href="#volunteer-form" className="gi-intro-btn">Apply to Volunteer</a>
                    </div>
                    <div className="gi-intro-image">
                        {/* Replace with: <img src="/path/to/image.jpg" alt="Volunteers" /> */}
                        📷
                    </div>
                </div>
            </section>

            {/* ===== BENEFITS ===== */}
            <section className="gi-benefits">
                <div className="gi-benefits-inner">
                    <div className="gi-section-header">
                        <h2>Why Volunteer With Us?</h2>
                    </div>
                    <div className="gi-benefits-grid-3">
                        {benefits.map((item, i) => (
                            <div key={i} className="gi-benefit-card">
                                <div className="gi-benefit-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS (TIMELINE) ===== */}
            <section className="gi-timeline">
                <div className="gi-timeline-inner">
                    <div className="gi-section-header">
                        <h2>How It Works</h2>
                    </div>
                    <div className="gi-timeline-track">
                        {steps.map((item, i) => (
                            <div key={i} className="gi-timeline-step">
                                <div className="gi-timeline-dot">{item.step}</div>
                                <div className="gi-timeline-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== VOLUNTEER STORIES ===== */}
            <section className="gi-testimonials">
                <div className="gi-testimonials-inner">
                    <div className="gi-section-header">
                        <h2>Volunteer Stories</h2>
                    </div>
                    <div className="gi-testimonials-grid">
                        {stories.map((story, i) => (
                            <div key={i} className="gi-testimonial-card">
                                <p>{story.quote}</p>
                                <h4>{story.name}</h4>
                                <span>{story.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FORM SECTION ===== */}
            <section className="gi-form-section" id="volunteer-form">
                <div className="gi-form-wrapper">
                    <div className="gi-section-header">
                        <h2>Apply to Volunteer</h2>
                    </div>
                    <form className="gi-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="gi-form-row">
                            <div className="gi-form-group">
                                <label>First Name <span>*</span></label>
                                <input type="text" placeholder="Enter first name" />
                            </div>
                            <div className="gi-form-group">
                                <label>Last Name <span>*</span></label>
                                <input type="text" placeholder="Enter last name" />
                            </div>
                        </div>
                        <div className="gi-form-group">
                            <label>Email Address <span>*</span></label>
                            <input type="email" placeholder="Enter email address" />
                        </div>
                        <div className="gi-form-group">
                            <label>Phone Number <span>*</span></label>
                            <input type="tel" placeholder="Enter phone number" />
                        </div>
                        <div className="gi-form-group">
                            <label>Areas of Interest</label>
                            <select>
                                <option>Select an area of interest...</option>
                                <option>Education & Literacy</option>
                                <option>Health & Wellness</option>
                                <option>Environmental Sustainability</option>
                                <option>Event Management</option>
                                <option>Social Media & Design</option>
                                <option>General Volunteering</option>
                            </select>
                        </div>
                        <div className="gi-form-group">
                            <label>Availability</label>
                            <select>
                                <option>Select availability...</option>
                                <option>Weekends only</option>
                                <option>Weekdays only</option>
                                <option>Flexible / Both</option>
                                <option>Specific events only</option>
                            </select>
                        </div>
                        <div className="gi-form-group">
                            <label>Message (Optional)</label>
                            <textarea placeholder="Tell us about your previous volunteer experience or why you want to volunteer with us." />
                        </div>
                        <button type="submit" className="gi-form-submit">Submit Application</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Volunteer;
