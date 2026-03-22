import React from 'react';
import { Link } from 'react-router-dom';
import './Impact.css';

const Vocational = () => {
    /* ==============================
       PLACEHOLDER DATA — Replace with your club's vocational service initiatives.
       For images, replace the placeholder div with an <img> tag.
    ============================== */

    const initiatives = [
        {
            title: '[Capacity Building & Member Development]',
            impact: '[Ongoing - Multiple trainings attended & conducted]',
            desc: '[Description of your capacity building initiative — e.g. Strengthening members\' professional and leadership capabilities through a combination of external learning opportunities and internally organized training sessions. By participating in workshops, speaker sessions, and developmental programs, as well as conducting our own structured training focused on communication skills, digital professionalism, career readiness, and leadership excellence.]',
            image: null,
        },
        {
            title: '[Fostering Creativity, Confidence & Emotional Well-Being in Children]',
            impact: '[Ongoing - Multiple child-focused initiatives]',
            desc: '[Description of your child-focused initiative — e.g. We work towards the holistic development of children by creating safe and engaging spaces that nurture self-expression, confidence, and emotional balance. Through thoughtfully designed activities, we encourage creativity, build communication skills, and introduce age-appropriate coping strategies that support mental well-being.]',
            image: null,
        },
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="imp-hero">
                <h1>Vocational Services</h1>
                <p>Empowering individuals through skill development, mentorship, and professional growth opportunities.</p>
            </section>

            {/* ===== INITIATIVES ===== */}
            <section className="imp-initiatives">
                <div className="imp-initiatives-inner">
                    <div className="imp-section-header">
                        <h2>Empowering Through Skills</h2>
                        <p>Building capabilities and creating pathways to professional success</p>
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
                            <h3>International Services</h3>
                            <p>Creating positive impact across borders through global partnerships.</p>
                            <Link to="/impact/international" className="imp-explore-link">
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

export default Vocational;
