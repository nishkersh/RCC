import React from 'react';
import { Link } from 'react-router-dom';
import './GetInvolved.css';

const Partner = () => {

    const whyPartner = [
        { icon: '🏢', title: 'Corporate Social Responsibility', desc: 'Fulfill and enhance your CSR objectives through impactful community projects while demonstrating your commitment to social causes.' },
        { icon: '👁️', title: 'Brand Visibility', desc: 'Gain exposure to our extensive network and the wider Rotary community through events, social media, and promotional materials.' },
        { icon: '🎓', title: 'Access to Young Talent', desc: 'Connect with motivated young professionals and potential future employees who demonstrate leadership, initiative, and community mindedness.' },
        { icon: '🎟️', title: 'Exclusive Event Participation', desc: 'Participate in and co-host community events, gaining invaluable networking opportunities with community leaders and other partner organizations.' },
        { icon: '❤️', title: 'Community Goodwill', desc: "Build positive relationships within the local community, enhancing your organization's reputation as a socially responsible entity." },
    ];

    const opportunities = [
        { 
            title: 'Project Sponsorship', 
            desc: "Support specific community service projects aligned with your organization's values and mission.", 
            items: ['Education initiatives for underprivileged children', 'Healthcare awareness and support programs', 'Environmental sustainability projects', 'Youth leadership development workshops'] 
        },
        { 
            title: 'Event Collaboration', 
            desc: 'Co-host community events, fundraisers, or awareness campaigns with our club.', 
            items: ['Community health camps', 'Cultural and educational exhibitions', 'Fundraising galas', 'Awareness marathons and public events'] 
        },
        { 
            title: 'Resource Contribution', 
            desc: 'Provide in-kind donations such as products, services, venues, or expertise.', 
            items: ['Professional services (legal, medical, educational)', 'Technology and equipment', 'Venue spaces for events', 'Training and skill-building workshops'] 
        },
        { 
            title: 'Annual Partnership', 
            desc: 'Become a long-term strategic partner with year-round visibility across all our initiatives.', 
            items: ['Logo presence on all club materials', 'Recognition at every club event', 'Priority involvement in major projects', 'Annual impact report and partnership highlight'] 
        }
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="gi-hero">
                <h1>Partner With Us</h1>
                <p>Join forces with us to create meaningful impact in our community.</p>
            </section>

            {/* ===== INTRO SPLIT ===== */}
            <section className="gi-intro-split">
                <div className="gi-intro-split-inner">
                    <div className="gi-intro-text">
                        <h2>Strategic Partnerships for Community Impact</h2>
                        <p>Rotaract Club of Chandigarh collaborates with businesses, organizations, and institutions to amplify our service initiatives and create lasting positive change in our communities.</p>
                        <p>By partnering with us, you align your brand with community service, social responsibility, and youth leadership development while gaining access to our network of motivated young professionals.</p>
                        <a href="#partner-form" className="gi-intro-btn">Explore Opportunities</a>
                    </div>
                    <div className="gi-intro-image">
                        {/* Replace with: <img src="/path/to/image.jpg" alt="Partners" /> */}
                        📷
                    </div>
                </div>
            </section>

            {/* ===== WHY PARTNER (BENEFITS) ===== */}
            <section className="gi-benefits">
                <div className="gi-benefits-inner">
                    <div className="gi-section-header">
                        <h2>Why Partner With Us?</h2>
                    </div>
                    <div className="gi-benefits-grid-3">
                        {whyPartner.slice(0, 3).map((item, i) => (
                            <div key={i} className="gi-benefit-card">
                                <div className="gi-benefit-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="gi-benefits-grid-2" style={{ marginTop: '28px' }}>
                        {whyPartner.slice(3).map((item, i) => (
                            <div key={i} className="gi-benefit-card">
                                <div className="gi-benefit-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PARTNERSHIP OPPORTUNITIES ===== */}
            <section className="gi-partnership-types">
                <div className="gi-partnership-types-inner">
                    <div className="gi-section-header">
                        <h2>Partnership Opportunities</h2>
                        <p>Discover the various ways we can work together</p>
                    </div>
                    <div className="gi-partnership-grid">
                        {opportunities.map((item, i) => (
                            <div key={i} className="gi-partnership-card">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <ul>
                                    {item.items.map((li, j) => (
                                        <li key={j}>{li}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIAL ===== */}
            <section className="gi-testimonials">
                <div className="gi-testimonials-inner" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <div className="gi-section-header">
                        <h2>Our Current Partners</h2>
                        <p>We're proud to collaborate with these organizations who share our commitment to community service and social impact.</p>
                    </div>
                    <blockquote style={{ 
                        fontStyle: 'italic', 
                        fontSize: '1.2rem', 
                        color: 'var(--color-text-muted)', 
                        padding: '24px 40px', 
                        background: 'var(--color-bg-white)', 
                        borderRadius: '16px',
                        borderLeft: '6px solid var(--color-secondary)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                        margin: '0 auto'
                    }}>
                        "Our partnership with the Rotaract Club has been transformative for our CSR strategy. Their expertise in community development and our resources have created sustainable solutions that wouldn't have been possible working alone."
                        <div style={{ marginTop: '16px', fontSize: '1rem', fontWeight: 700, color: 'var(--color-grad-end)', fontStyle: 'normal' }}>— Corporate Partner</div>
                    </blockquote>
                </div>
            </section>

            {/* ===== FORM SECTION ===== */}
            <section className="gi-form-section" id="partner-form">
                <div className="gi-form-wrapper">
                    <div className="gi-section-header">
                        <h2>Become a Partner</h2>
                        <p>Ready to make a difference together? Get in touch with us.</p>
                    </div>
                    <form className="gi-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="gi-form-group">
                            <label>Organization Name <span>*</span></label>
                            <input type="text" placeholder="Enter organization name" />
                        </div>
                        <div className="gi-form-row">
                            <div className="gi-form-group">
                                <label>Contact Person <span>*</span></label>
                                <input type="text" placeholder="Enter your full name" />
                            </div>
                            <div className="gi-form-group">
                                <label>Designation <span>*</span></label>
                                <input type="text" placeholder="Enter your designation" />
                            </div>
                        </div>
                        <div className="gi-form-row">
                            <div className="gi-form-group">
                                <label>Email Address <span>*</span></label>
                                <input type="email" placeholder="Enter email address" />
                            </div>
                            <div className="gi-form-group">
                                <label>Phone Number <span>*</span></label>
                                <input type="tel" placeholder="Enter phone number" />
                            </div>
                        </div>
                        <div className="gi-form-group">
                            <label>Partnership Interest</label>
                            <select>
                                <option>Select partnership type...</option>
                                <option>Project Sponsorship</option>
                                <option>Event Collaboration</option>
                                <option>Resource Contribution</option>
                                <option>Annual Partnership</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="gi-form-group">
                            <label>Message</label>
                            <textarea placeholder="Tell us about your organization and how you'd like to collaborate..." />
                        </div>
                        <button type="submit" className="gi-form-submit">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Partner;
