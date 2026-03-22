import React from 'react';
import { Link } from 'react-router-dom';
import '../GetInvolved/GetInvolved.css';

const Contribute = () => {
    const orgContributions = [
        { icon: '🏢', title: 'Corporate Sponsorships', desc: 'Partner with us to fund specific community projects aligned with your CSR goals.', link: '/get-involved/partner', linkText: 'Partner With Us' },
        { icon: '📦', title: 'In-Kind Donations', desc: 'Donate materials, equipment, or services needed for our various service initiatives.', link: '/contact', linkText: 'Contact Us' },
        { icon: '🤝', title: 'NGO Collaborations', desc: 'Join forces on large-scale events to amplify our collective community impact.', link: '/get-involved/partner', linkText: 'Explore Partnership' },
    ];

    const indContributions = [
        { icon: '⏱️', title: 'Time & Skills', desc: 'Register as a volunteer and contribute your unique skills to our projects.', link: '/get-involved/volunteer', linkText: 'Become a Volunteer' },
        { icon: '🩸', title: 'Blood Donation', desc: 'Join our emergency donor registry to save lives when it matters most.', link: '/impact/flagship', linkText: 'Register as Donor' },
        { icon: '💡', title: 'Professional Guidance', desc: 'Offer pro-bono legal, medical, or counseling services through our targeted camps.', link: '/contact', linkText: 'Offer Services' },
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="gi-hero">
                <h1>How You Can Contribute</h1>
                <p>Support our mission of community service through time, resources, or financial contributions.</p>
            </section>

            {/* ===== INTRO ===== */}
            <section className="gi-intro-split" style={{ background: 'var(--color-bg-white)' }}>
                <div className="gi-intro-split-inner">
                    <div className="gi-intro-text">
                        <h2>Every Contribution Counts</h2>
                        <p>At Rotaract Club of Chandigarh, we believe that everyone can contribute to social change in their own unique way. Your support helps us sustain and expand our educational, healthcare, and environmental initiatives.</p>
                        <p>Whether you're an organization looking to fulfill CSR goals, a professional wanting to offer pro-bono services, or an individual ready to volunteer or donate, we have meaningful opportunities for you to make a difference.</p>
                        <a href="#donate" className="gi-intro-btn">Make a Donation</a>
                    </div>
                    <div className="gi-intro-image">
                        <div style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.3)' }}>❤️</div>
                    </div>
                </div>
            </section>

            {/* ===== FOR ORGANIZATIONS ===== */}
            <section className="gi-benefits" style={{ background: 'var(--color-bg-light)' }}>
                <div className="gi-benefits-inner">
                    <div className="gi-section-header">
                        <h2>For Organizations</h2>
                    </div>
                    <div className="gi-benefits-grid-3">
                        {orgContributions.map((item, i) => (
                            <div key={i} className="gi-benefit-card">
                                <div className="gi-benefit-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p style={{ marginBottom: '20px' }}>{item.desc}</p>
                                <Link to={item.link} className="gi-intro-btn" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>{item.linkText}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FOR INDIVIDUALS ===== */}
            <section className="gi-benefits" style={{ background: 'var(--color-bg-white)' }}>
                <div className="gi-benefits-inner">
                    <div className="gi-section-header">
                        <h2>For Individuals & Professionals</h2>
                    </div>
                    <div className="gi-benefits-grid-3">
                        {indContributions.map((item, i) => (
                            <div key={i} className="gi-benefit-card">
                                <div className="gi-benefit-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p style={{ marginBottom: '20px' }}>{item.desc}</p>
                                <Link to={item.link} className="gi-intro-btn" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>{item.linkText}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINANCIAL DONATION ===== */}
            <section className="gi-form-section" id="donate" style={{ background: 'var(--color-bg-light)' }}>
                <div className="gi-form-wrapper" style={{ textAlign: 'center' }}>
                    <div className="gi-section-header">
                        <h2>Make a Financial Contribution</h2>
                        <p>Your donation directly supports our grassroots initiatives. All donations are eligible for tax exemption under 80G.</p>
                    </div>
                    <div style={{ background: 'var(--color-bg-white)', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-grad-end)', marginBottom: '20px' }}>Bank Details</h3>
                        <div style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '30px', textAlign: 'left', background: 'var(--color-bg-light)', padding: '20px', borderRadius: '8px', border: '1px solid #ece6f0' }}>
                            <strong>Account Name:</strong> Rotaract Club of Chandigarh<br/>
                            <strong>Account Number:</strong> XXXXXXXXXXXX<br/>
                            <strong>IFSC Code:</strong> XXXXXXX<br/>
                            <strong>Bank Name:</strong> State Bank of India<br/>
                            <strong>Branch:</strong> Panjab University, Chandigarh
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>Please email the transaction details to our treasurer for receipt generation.</p>
                        <Link to="/contact" className="gi-form-submit" style={{ display: 'inline-block' }}>Contact Treasurer</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contribute;
