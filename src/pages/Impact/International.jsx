import React from 'react';
import { Link } from 'react-router-dom';
import './Impact.css';

const International = () => {
    /* ==============================
       PLACEHOLDER DATA — Replace with your club's international service initiatives.
       For images, replace the placeholder div with an <img> tag.
    ============================== */

    const initiatives = [
        {
            title: '[Global Vision]',
            impact: '[Flagship Event - International Reach]',
            desc: '[Description of your flagship international event — e.g. A week-long celebration of global cultures, bringing together Rotaract clubs from multiple countries for collaborative projects, cultural exchange, and workshops on international understanding.]',
            image: null,
        },
        {
            title: '[Project Milan]',
            impact: '[Fellowship - Cross-District Collaboration]',
            desc: '[Description of your fellowship/collaboration initiative — e.g. A fellowship program connecting members with Rotaract clubs across the globe, fostering mutual understanding and joint service projects that address international challenges.]',
            image: null,
        },
        {
            title: '[International Conferences]',
            impact: '[Annual - Global Participation]',
            desc: '[Description of participation in international conferences — e.g. Active participation in Rotary International conferences, district assemblies, and global Rotaract events to represent our club and learn from international best practices.]',
            image: null,
        },
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="imp-hero">
                <h1>International Services</h1>
                <p>Fostering global understanding, cultural exchange, and meaningful international collaboration through strategic partnerships and cross-border initiatives.</p>
            </section>

            {/* ===== INTRO TEXT ===== */}
            <section className="imp-intro">
                <div className="imp-intro-card">
                    <p>
                        The International Service Avenue of the [Rotaract Club of Chandigarh] is dedicated to
                        fostering global understanding, cultural exchange, and meaningful international collaboration.
                        Through strategic partnerships, cross-border initiatives, and active participation in global
                        platforms, our club strives to build strong connections beyond geographical boundaries.
                    </p>
                    <p>
                        By engaging in international conferences, cultural exchanges, fellowship programs, and
                        collaborative service projects, we aim to promote unity, leadership, and mutual respect among
                        young leaders worldwide. Our efforts reflect Rotary's commitment to peace, cooperation, and
                        sustainable global impact, empowering members to think globally while acting responsibly at
                        the local level.
                    </p>
                </div>
            </section>

            {/* ===== INITIATIVES ===== */}
            <section className="imp-initiatives">
                <div className="imp-initiatives-inner">
                    <div className="imp-section-header">
                        <h2>Our International Initiatives</h2>
                        <p>Building bridges and creating positive change worldwide</p>
                    </div>

                    <div className="imp-cards-2">
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
                            <h3>Community Services</h3>
                            <p>Making a lasting difference through dedicated service and impactful initiatives in our local communities.</p>
                            <Link to="/impact/community" className="imp-explore-link">
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

export default International;
