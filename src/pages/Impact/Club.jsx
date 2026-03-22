import React from 'react';
import { Link } from 'react-router-dom';
import './Impact.css';

const Club = () => {
    /* ==============================
       PLACEHOLDER DATA — Replace with your club's club service initiatives.
       For images, replace null with your image path.
    ============================== */

    const initiatives = [
        {
            title: '[Club Meetings & Fellowship]',
            desc: '[Description of club meetings — e.g. Regular club meetings serve as the foundation of our club activities. These gatherings bring together members for planning sessions, knowledge sharing, fellowship activities, and collaborative decision-making that drives our club forward.]',
            image: null, // Replace with image path
        },
        {
            title: '[Leadership Development]',
            desc: '[Description of leadership development — e.g. Developing the next generation of leaders through structured training programs, mentorship opportunities, and hands-on leadership experiences. From committee chairpersons to project leads, every member gets the chance to grow and lead.]',
            image: null,
        },
        {
            title: '[Member Mentorship Program]',
            desc: '[Description of mentorship — e.g. The Member Mentorship Program is designed to guide, support, and empower members throughout their Rotaract journey. New and existing members are paired with experienced Rotaractors and club leaders who act as mentors, providing guidance on club functioning, leadership development, personal growth, and active participation in projects and events.]',
            image: null,
        },
        {
            title: '[Member Recognition Program]',
            desc: '[Description of recognition — e.g. The Member Recognition Program aims to acknowledge, appreciate, and celebrate the efforts and achievements of club members. This program recognizes members for their dedication, leadership, teamwork, consistency, and impactful contributions to club activities and projects. Through awards, certificates, appreciations, and special mentions, the club ensures that every effort—big or small—is valued.]',
            image: null,
        },
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="imp-hero">
                <h1>Club Services</h1>
                <p>Strengthening our club through fellowship, leadership development, and effective club operations.</p>
            </section>

            {/* ===== INTRO TEXT ===== */}
            <section className="imp-intro">
                <div className="imp-intro-card">
                    <p>
                        [The Club Service Avenue is the backbone of the Rotaract Club of Chandigarh. It focuses on strengthening the internal functioning of the club and building a strong sense of unity, professionalism, and fellowship among members.]
                    </p>
                    <p>
                        [This avenue is responsible for smooth club operations, member engagement, and maintaining an organized structure. From planning meetings and orientations to managing documentation, communication, and member recognition, Club Service ensures that every Rotaractor feels welcomed, valued, and motivated.]
                    </p>
                    <p>
                        [By promoting teamwork, leadership development, and active participation, the Club Service Avenue creates a positive and inclusive club culture. It lays the foundation that enables all other avenues to function effectively and helps the club grow stronger together.]
                    </p>
                    <p style={{ fontStyle: 'italic' }}>
                        [At Rotaract Club of Chandigarh, Club Service is not just about management—it's about building lasting connections, nurturing leadership, and creating a vibrant Rotaract experience for every member.]
                    </p>
                </div>
            </section>

            {/* ===== INITIATIVES ===== */}
            <section className="imp-initiatives">
                <div className="imp-initiatives-inner">
                    <div className="imp-section-header">
                        <h2>Our Club Service Initiatives</h2>
                        <p>Strengthening our club from within through fellowship and development</p>
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
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginTop: '-24px', marginBottom: '36px' }}>Discover the breadth of our service offerings beyond club services.</p>

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
                            <h3>Vocational Services</h3>
                            <p>Empowering individuals through skill development and career growth.</p>
                            <Link to="/impact/vocational" className="imp-explore-link">
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

export default Club;
