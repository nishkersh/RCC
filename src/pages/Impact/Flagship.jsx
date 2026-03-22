import React from 'react';
import { Link } from 'react-router-dom';
import './Impact.css';

const Flagship = () => {
    /* ==============================
       PLACEHOLDER DATA — Replace with your club's flagship projects.
       For images, replace null with your image path.
       Update stats with your real numbers.
    ============================== */

    const projects = [
        {
            title: '[Project Name 1]',
            desc: '[Description — e.g. Transforming waste paper into eco-friendly notebooks for underprivileged students, turning discarded pages into opportunities for a brighter future.]',
            stats: [
                { value: '[5000+]', label: '[notebooks]' },
                { value: '[3000+]', label: '[kg recycled]' },
            ],
            image: null, // Replace with image path
            reverse: false,
        },
        {
            title: '[Project Name 2]',
            desc: '[Description — e.g. Empowering women through sustainable upcycling of fabric waste into beautiful products, creating livelihood opportunities.]',
            stats: [
                { value: '[150+]', label: '[women]' },
                { value: '[2000+]', label: '[products]' },
            ],
            image: null,
            reverse: true,
        },
        {
            title: '[Project Name 3]',
            desc: '[Description — e.g. Building bridges of life through regular blood donation camps, connecting generous donors with those in urgent need.]',
            stats: [
                { value: '[2000+]', label: '[lives]' },
                { value: '[12]', label: '[camps yearly]' },
            ],
            image: null,
            reverse: false,
        },
        {
            title: '[Project Name 4]',
            desc: '[Description — e.g. A heartfelt mega initiative organizing grand bhandaras (community food donations) to serve nutritious meals to those in need, embodying the spirit of compassion and unity.]',
            stats: [
                { value: '[1000+]', label: '[People served per event]' },
                { value: '[80+]', label: '[Volunteers per event]' },
            ],
            image: null,
            reverse: true,
        },
        {
            title: '[Project Name 5]',
            desc: '[Description — e.g. A heartwarming summer initiative serving refreshing rose milk to beat the heat and uplift spirits. Rooted in the values of seva and compassion, this collaborative effort brings together clubs and individuals to spread joy through simple acts of service.]',
            stats: [
                { value: '[10,000+]', label: '[Glasses served]' },
                { value: '[100+]', label: '[Volunteers engaged]' },
            ],
            image: null,
            reverse: false,
        },
        {
            title: '[Project Name 6]',
            desc: '[Description — e.g. Breaking mental health stigma through support, awareness, and healing. We create safe spaces for emotional well-being through free therapy sessions and healing circles, fostering a community where mental health conversations are normalized.]',
            stats: [
                { value: '[150+]', label: '[Sessions conducted]' },
                { value: '[500+]', label: '[Participants reached]' },
            ],
            image: null,
            reverse: true,
        },
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="imp-hero">
                <h1>Flagship Projects</h1>
                <p>Our signature initiatives creating lasting positive change in our communities.</p>
            </section>

            {/* ===== INTRO TEXT ===== */}
            <section className="imp-intro">
                <div className="imp-intro-card">
                    <p>
                        [Our flagship projects represent the heart of our service mission. Each initiative addresses a specific community need with sustainable, long-term solutions that create measurable impact.]
                    </p>
                    <p>
                        [Through dedicated volunteer efforts, strategic partnerships, and innovative approaches, these projects have touched thousands of lives and continue to grow in scope and impact each year.]
                    </p>
                </div>
            </section>

            {/* ===== PROJECTS ===== */}
            <section className="imp-initiatives" style={{ paddingBottom: '20px' }}>
                <div className="imp-initiatives-inner">
                    {projects.map((project, i) => (
                        <div key={i} className={`flagship-project ${project.reverse ? 'reverse' : ''}`}>
                            <div className="flagship-project-image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="flagship-placeholder-img">📷</div>
                                )}
                            </div>
                            <div className="flagship-project-content">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="flagship-stats">
                                    {project.stats.map((stat, j) => (
                                        <div key={j} className="flagship-stat">
                                            <span className="flagship-stat-value">{stat.value}</span>
                                            <span className="flagship-stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="#" className="flagship-learn-more">Learn More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="imp-cta">
                <span className="imp-cta-badge">GET INVOLVED</span>
                <h2>Be Part of Something Bigger</h2>
                <p>Join us in creating lasting positive change through our flagship initiatives.</p>
                <div className="imp-cta-buttons">
                    <Link to="/get-involved/member" className="imp-cta-btn primary">Become a Member</Link>
                    <Link to="/get-involved/volunteer" className="imp-cta-btn outline">Volunteer With Us</Link>
                </div>
            </section>
        </div>
    );
};

export default Flagship;
