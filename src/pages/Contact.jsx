import React from 'react';
import './GetInvolved/GetInvolved.css';

const Contact = () => {
    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="gi-hero">
                <h1>Contact Us</h1>
                <p>Have questions, want to partner, or just want to say hi? We'd love to hear from you!</p>
            </section>

            {/* ===== CONTACT CARDS ===== */}
            <section className="gi-benefits" style={{ background: 'var(--color-bg-white)' }}>
                <div className="gi-benefits-inner">
                    <div className="gi-benefits-grid-3">
                        {/* Address */}
                        <div className="gi-benefit-card" style={{ background: 'var(--color-bg-light)', border: '1px solid var(--color-accent)' }}>
                            <div className="gi-benefit-icon" style={{ fontSize: '1.8rem' }}>📍</div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '14px' }}>Visit Us</h3>
                            <p style={{ margin: 0 }}>
                                Panjab University<br />
                                Sector 14, Chandigarh<br />
                                India - 160014
                            </p>
                        </div>

                        {/* Email */}
                        <div className="gi-benefit-card" style={{ background: 'var(--color-bg-light)', border: '1px solid var(--color-accent)' }}>
                            <div className="gi-benefit-icon" style={{ fontSize: '1.8rem' }}>✉️</div>
                            <h3 style={{ fontSize: '1.3rem', margin: '14px 0' }}>Email Us</h3>
                            <p style={{ margin: 0 }}>
                                <a href="mailto:info@racddl.com" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>info@racchandigarh.org</a><br />
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>We reply within 24 hours</span>
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="gi-benefit-card" style={{ background: 'var(--color-bg-light)', border: '1px solid var(--color-accent)' }}>
                            <div className="gi-benefit-icon" style={{ fontSize: '1.8rem' }}>📞</div>
                            <h3 style={{ fontSize: '1.3rem', margin: '14px 0' }}>Call Us</h3>
                            <p style={{ margin: 0 }}>
                                <a href="tel:+919876543210" style={{ color: 'var(--color-grad-end)', fontWeight: 600 }}>+91 98765 43210</a><br />
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>President / Secretary</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT FORM & MAP SPLIT ===== */}
            <section className="gi-intro-split" style={{ background: 'var(--color-bg-light)', paddingTop: '40px', paddingBottom: '100px' }}>
                <div className="gi-intro-split-inner" style={{ alignItems: 'flex-start' }}>
                    
                    {/* FORM */}
                    <div className="gi-intro-text" style={{ background: 'var(--color-bg-white)', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Send us a Message</h2>
                        <p style={{ marginBottom: '30px', fontSize: '0.95rem' }}>Fill out the form below and our team will get back to you shortly.</p>
                        <form className="gi-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="gi-form-row">
                                <div className="gi-form-group">
                                    <label>First Name <span>*</span></label>
                                    <input type="text" placeholder="John" required />
                                </div>
                                <div className="gi-form-group">
                                    <label>Last Name <span>*</span></label>
                                    <input type="text" placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="gi-form-group">
                                <label>Email Address <span>*</span></label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div className="gi-form-group">
                                <label>Subject <span>*</span></label>
                                <select required>
                                    <option value="">Select a topic...</option>
                                    <option value="membership">Membership Enquiry</option>
                                    <option value="partnership">Partnership / Sponsorship</option>
                                    <option value="volunteering">Volunteering</option>
                                    <option value="general">General Query</option>
                                </select>
                            </div>
                            <div className="gi-form-group">
                                <label>Message <span>*</span></label>
                                <textarea placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="gi-form-submit" style={{ marginTop: '10px' }}>Send Message</button>
                        </form>
                    </div>

                    {/* MAP PLACEHOLDER */}
                    <div className="gi-intro-image" style={{ height: '100%', minHeight: '550px', background: '#e0dce4' }}>
                        <div style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🗺️</div>
                            <h3>Map Integration</h3>
                            <p style={{ fontSize: '0.9rem', maxWidth: '250px', margin: '0 auto', opacity: 0.8 }}>Embed Google Maps iframe here centering on Chandigarh.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
