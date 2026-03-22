import React from 'react';
import { Link } from 'react-router-dom';
import './Impact.css';

const Community = () => {
    /* ==============================
       PLACEHOLDER DATA — Replace with your club's community service initiatives.
       For images, replace the placeholder div with an <img> tag.
    ============================== */

    const initiatives = [
        {
            title: '[Waste Paper Recycling]',
            impact: '[Ongoing - 3000+ KGs recycled]',
            desc: '[Recycling old waste paper into new notebooks that are distributed to children from underprivileged communities. With over 1500 notebooks already provided, this initiative supports both environmental conservation and access to essential educational resources.]',
            image: null, // Replace with image path
        },
        {
            title: '[Upcycling Bedsheets]',
            impact: '[Ongoing - 200+ KGs upcycled]',
            desc: '[Transforming discarded bedsheets and old clothes into useful products while supporting women from underprivileged communities with skill training and steady income opportunities. With sewing machines installed and training sessions conducted, over 1000 products have been created.]',
            image: null,
        },
        {
            title: '[Food Donation Drives]',
            impact: '[Quarterly - Thousands fed]',
            desc: '[Conducting regular food donation drives across the city to provide fresh, nutritious meals to underserved communities. By collaborating with local partners and volunteers, we identify high-need areas, distribute meals responsibly, and work to reduce food insecurity.]',
            image: null,
        },
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="imp-hero">
                <h1>Community Service</h1>
                <p>Making a lasting difference through dedicated service and impactful initiatives in our local communities.</p>
            </section>

            {/* ===== INITIATIVES ===== */}
            <section className="imp-initiatives">
                <div className="imp-initiatives-inner">
                    <div className="imp-section-header">
                        <h2>Community Service Initiatives</h2>
                        <p>Making a tangible impact through hands-on service</p>
                    </div>

                    <div className="imp-cards-3">
                        {initiatives.map((item, i) => (
                            <div key={i} className="imp-card">
                                <div className="imp-card-image">
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} />
                                    ) : (
                                        '📷'
                                    )}
                                </div>
                                <div className="imp-card-body">
                                    <h3>{item.title}</h3>
                                    <div className="imp-card-impact">{item.impact}</div>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EXPLORE OTHER AREAS ===== */}
            <section className="imp-explore">
                <div className="imp-explore-inner">
                    <h2>Explore Our Other Service Areas</h2>

                    <div className="imp-explore-grid">
                        <div className="imp-explore-card">
                            <h3>International Services</h3>
                            <p>Creating positive impact across borders through global partnerships.</p>
                            <Link to="/impact/international" className="imp-explore-link">
                                Learn more →→
                            </Link>
                        </div>
                        <div className="imp-explore-card">
                            <h3>Vocational Services</h3>
                            <p>Empowering individuals through skill development and career growth.</p>
                            <Link to="/impact/vocational" className="imp-explore-link">
                                Learn more →→
                            </Link>
                        </div>
                        <div className="imp-explore-card">
                            <h3>Club Services</h3>
                            <p>Strengthening our organization through effective internal operations.</p>
                            <Link to="/impact/club" className="imp-explore-link">
                                Learn more →→
                            </Link>
                        </div>
                    </div>

                    <div className="imp-flagship-cta">
                        <Link to="/impact/flagship" className="imp-flagship-btn">
                            See Our Flagship Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community;
