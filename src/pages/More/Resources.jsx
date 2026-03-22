import React from 'react';
import { Link } from 'react-router-dom';
import '../GetInvolved/GetInvolved.css';

const Resources = () => {
    const resources = [
        {
            category: "Member Essentials",
            items: [
                { title: "Club Bylaws & Constitution", desc: "The governing documents outlining club rules, structure, and member responsibilities." },
                { title: "Member Handbook 2024-25", desc: "A comprehensive guide for new and existing members covering everything you need to know." },
                { title: "Meeting Protocol Guide", desc: "Standard procedures and etiquette for attending our regular club meetings." }
            ]
        },
        {
            category: "Rotary & Leadership",
            items: [
                { title: "The 4-Way Test", desc: "Rotary's ethical guide for personal and professional relationships." },
                { title: "Rotaract Policy Manual", desc: "Official Rotary International policies concerning Rotaract clubs." },
                { title: "Leadership Development Program", desc: "Materials and resources from our club's leadership training workshops." }
            ]
        },
        {
            category: "Branding & Media",
            items: [
                { title: "Club Brand Guidelines", desc: "Rules for using the Rotaract Club of Chandigarh logo and brand assets." },
                { title: "Official Logos & Assets", desc: "High-resolution club logos, Rotary masterbrand signatures, and presentation templates." },
                { title: "PR Toolkit", desc: "Guidelines for social media posting, event promotion, and press releases." }
            ]
        }
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="gi-hero">
                <h1>Club Resources</h1>
                <p>Essential documents, brand assets, and guides for our members and partners.</p>
            </section>

            {/* ===== RESOURCES SECTIONS ===== */}
            <section className="gi-opportunities" style={{ background: 'var(--color-bg-light)' }}>
                <div className="gi-opportunities-inner">
                    
                    {resources.map((section, idx) => (
                        <div key={idx} style={{ marginBottom: '60px' }}>
                            <div className="gi-section-header" style={{ textAlign: 'left', marginBottom: '30px' }}>
                                <h2 style={{ fontSize: '1.8rem' }}>{section.category}</h2>
                            </div>
                            <div className="gi-opportunities-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                                {section.items.map((item, i) => (
                                    <div key={i} className="gi-opportunity-card" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div className="gi-opportunity-body" style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(152, 215, 194, 0.2)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', marginBottom: '16px' }}>
                                                📄
                                            </div>
                                            <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--color-grad-end)' }}>{item.title}</h3>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px', flex: 1 }}>{item.desc}</p>
                                            <button className="gi-intro-btn" style={{ 
                                                background: 'transparent', 
                                                color: 'var(--color-primary)', 
                                                border: '1px solid var(--color-primary)',
                                                padding: '8px 16px',
                                                fontSize: '0.85rem',
                                                width: 'fit-content'
                                            }}>
                                                Download / View
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="gi-cta">
                <span className="gi-cta-badge">NEED HELP?</span>
                <h2>Can't find what you're looking for?</h2>
                <p>If you need a specific document or resource not listed here, please contact the club secretariat.</p>
                <div className="gi-cta-buttons">
                    <Link to="/contact" className="gi-cta-btn primary">Contact Secretary</Link>
                </div>
            </section>
        </div>
    );
};

export default Resources;
