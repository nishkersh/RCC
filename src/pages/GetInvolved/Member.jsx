import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GetInvolved.css';

const Member = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const benefits = [
        { icon: '🌍', title: 'Make a Global Impact', desc: 'Be part of a worldwide network that creates lasting change in communities at home and around the world. Contribute directly to projects that improve lives.' },
        { icon: '🤝', title: 'Build Meaningful Connections', desc: 'Connect with other professionals, community leaders, and like-minded individuals dedicated to service. Form lifelong friendships with people who share your values.' },
        { icon: '🏆', title: 'Develop Leadership Skills', desc: 'Gain valuable skills in leadership, project management, public speaking, and community organization through hands-on experience and mentorship opportunities.' },
        { icon: '💼', title: 'Professional Development', desc: 'Expand your professional network and enhance your resume with demonstrated community leadership. Gain access to mentorship, workshops, and skill-building opportunities.' },
        { icon: '💰', title: 'Personal Fulfillment', desc: "Experience the joy and satisfaction that comes from serving others. Create lasting memories while making a real difference in people's lives." },
    ];

    const steps = [
        { step: '1', title: 'Attend a Meeting', desc: 'Join us at one of our events to meet current members and learn more about the club.' },
        { step: '2', title: 'Submit an Application', desc: 'Fill out our membership application form (below) with your personal information and areas of interest.' },
        { step: '3', title: 'Orientation', desc: "Attend a new member orientation to learn about our club's history, values, and expectations, as well as the benefits and responsibilities of membership." },
        { step: '4', title: 'Welcome Ceremony', desc: "After approval, you'll be formally inducted into the club during a special ceremony where you'll receive your Rotaract pin and membership materials." },
    ];

    const faqs = [
        { q: 'What is the time commitment for members?', a: 'Regular members are expected to attend at least 60% of club meetings (held weekly) and participate in at least one service project per quarter. Overall, members typically commit 4-8 hours per month, though leadership positions may require additional time.' },
        { q: 'What are the membership dues used for?', a: 'Membership dues help cover administrative costs, contribute to our service projects, support leadership training, and include your registration with Rotary International. Dues ensure our club can continue to make a meaningful impact.' },
        { q: "Can I join if I'm over 30 years old?", a: 'While regular membership is for those aged 18-30, we offer associate membership for individuals over 30 who want to contribute to our mission. Associate members participate in projects and events but have different voting rights and dues.' },
        { q: 'What kind of service projects does the club organize?', a: 'Our club focuses on education, healthcare, environmental sustainability, and youth development. Recent projects include literacy programs for underprivileged children, health awareness camps, tree plantation drives, and leadership workshops for students.' },
        { q: 'How can I get involved in leadership roles?', a: 'After joining, members can volunteer for committee positions or project leadership roles. Each year, elections are held for board positions including President, Vice President, Secretary, and Treasurer. We encourage all members to take on leadership responsibilities.' },
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="gi-hero">
                <h1>Become a Member</h1>
                <p>Join our community of dedicated individuals committed to making a positive difference.</p>
            </section>

            {/* ===== INTRO SPLIT ===== */}
            <section className="gi-intro-split">
                <div className="gi-intro-split-inner">
                    <div className="gi-intro-text">
                        <h2>Be Part of Something Bigger</h2>
                        <p>Rotaract Club of Chandigarh brings together young professionals and students who share a passion for service, leadership development, and building lasting friendships.</p>
                        <p>As a member, you'll join a global network of individuals committed to creating positive, lasting change in communities around the world.</p>
                        <a href="#apply-form" className="gi-intro-btn">Apply Now</a>
                    </div>
                    <div className="gi-intro-image">
                        {/* Replace with: <img src="/path/to/image.jpg" alt="Members" /> */}
                        📷
                    </div>
                </div>
            </section>

            {/* ===== BENEFITS ===== */}
            <section className="gi-benefits">
                <div className="gi-benefits-inner">
                    <div className="gi-section-header">
                        <h2>Why Join Rotaract Club?</h2>
                    </div>
                    <div className="gi-benefits-grid-3">
                        {benefits.slice(0, 3).map((item, i) => (
                            <div key={i} className="gi-benefit-card">
                                <div className="gi-benefit-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="gi-benefits-grid-2" style={{ marginTop: '28px' }}>
                        {benefits.slice(3).map((item, i) => (
                            <div key={i} className="gi-benefit-card">
                                <div className="gi-benefit-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HOW TO JOIN (TIMELINE) ===== */}
            <section className="gi-timeline">
                <div className="gi-timeline-inner">
                    <div className="gi-section-header">
                        <h2>How to Join</h2>
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

            {/* ===== FAQ ===== */}
            <section className="gi-faq">
                <div className="gi-faq-inner">
                    <div className="gi-section-header">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    {faqs.map((item, i) => (
                        <div key={i} className="gi-faq-item">
                            <button
                                className="gi-faq-question"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                {item.q}
                                <span className={`gi-faq-chevron ${openFaq === i ? 'open' : ''}`}>▼</span>
                            </button>
                            {openFaq === i && (
                                <div className="gi-faq-answer">{item.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== APPLICATION FORM ===== */}
            <section className="gi-form-section" id="apply-form">
                <div className="gi-form-wrapper">
                    <div className="gi-section-header">
                        <h2>Ready to Join?</h2>
                    </div>
                    <form className="gi-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="gi-form-group">
                            <label>Full Name <span>*</span></label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                        <div className="gi-form-group">
                            <label>Email ID <span>*</span></label>
                            <input type="email" placeholder="Enter your email address" />
                        </div>
                        <div className="gi-form-row">
                            <div className="gi-form-group">
                                <label>Phone Number <span>*</span></label>
                                <input type="tel" placeholder="Enter phone number" />
                            </div>
                            <div className="gi-form-group">
                                <label>Age <span>*</span></label>
                                <input type="number" placeholder="Your age" />
                            </div>
                        </div>
                        <div className="gi-form-group">
                            <label>Occupation / College <span>*</span></label>
                            <input type="text" placeholder="Your current occupation or college" />
                        </div>
                        <div className="gi-form-group">
                            <label>Why do you want to join? <span>*</span></label>
                            <textarea placeholder="Tell us why you'd like to be part of the Rotaract Club of Chandigarh" />
                        </div>
                        <button type="submit" className="gi-form-submit">Submit Application</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Member;
