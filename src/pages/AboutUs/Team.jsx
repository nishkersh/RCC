import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = () => {
    /* ==============================
       PLACEHOLDER DATA — Update these with your actual team info.
       For photos, replace the emoji with an <img> tag or set
       background-image in CSS on the photo div.
    ============================== */

    const coreTeam = [
        { name: '[Name]', role: 'Vice-President', emoji: '👤' },
        { name: '[Name]', role: 'Secretary', emoji: '👤' },
        { name: '[Name]', role: 'Treasurer', emoji: '👤' },
        { name: '[Name]', role: 'Sergeant-At-Arms', emoji: '👤' },
        { name: '[Name]', role: 'Joint Secretary', emoji: '👤' },
    ];

    const boardOfDirectors = [
        { name: '[Name]', role: 'Director of Community Services', emoji: '👤' },
        { name: '[Name]', role: 'Director of Club Services', emoji: '👤' },
        { name: '[Name]', role: 'Director of International Services', emoji: '👤' },
        { name: '[Name]', role: 'Director of Vocational Services', emoji: '👤' },
        { name: '[Name]', role: 'Director of Motions and Stills', emoji: '👤' },
        { name: '[Name]', role: 'Rotaract-Interact Chair', emoji: '👤' },
        { name: '[Name]', role: 'Club Designer', emoji: '👤' },
        { name: '[Name]', role: 'Club Photographer', emoji: '👤' },
    ];

    const advisors = [
        { name: '[Name]', role: 'Immediate Past President (IPP)', emoji: '👤' },
        { name: '[Name]', role: 'Club Foundation Chair', emoji: '👤' },
        { name: '[Name]', role: 'Club Advisor', emoji: '👤' },
        { name: '[Name]', role: 'Club Ambassador', emoji: '👤' },
        { name: '[Name]', role: 'Club Observer', emoji: '👤' },
        { name: '[Name]', role: 'Club Mentor', emoji: '👤' },
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="tm-hero">
                <h1>Our Team & Leadership</h1>
                <p>Meet the dedicated individuals who guide our club's vision and mission.</p>
            </section>

            {/* ===== INTRO TEXT ===== */}
            <section className="tm-intro">
                <div className="tm-intro-text">
                    <strong>Our team is the backbone of everything we do.</strong> The dedication, passion, and
                    commitment of our members have helped us achieve remarkable milestones in just a
                    short span of time.
                </div>
            </section>

            {/* ===== CORE TEAM ===== */}
            <section className="tm-core">
                <span className="tm-section-badge dark">CORE TEAM</span>
                <h2>Core Team</h2>

                {/* President Featured Card */}
                <div className="tm-president-card">
                    <span className="tm-president-role-badge">President</span>
                    {/* Replace with actual photo */}
                    <div className="tm-president-photo">👤</div>
                    <h3>[President Name]</h3>
                    <div className="tm-year">[Year Range, e.g. 2025-26]</div>
                </div>

                {/* Core Members Grid */}
                <div className="tm-core-grid">
                    {coreTeam.map((member, i) => (
                        <div key={i} className="tm-core-member">
                            {/* Replace with actual photo */}
                            <div className="tm-member-photo">{member.emoji}</div>
                            <h4>{member.name}</h4>
                            <div className="tm-role">{member.role}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== BOARD OF DIRECTORS ===== */}
            <section className="tm-board">
                <span className="tm-section-badge light">BOARD OF DIRECTORS</span>
                <h2>Board of Directors</h2>

                <div className="tm-board-grid">
                    {boardOfDirectors.map((member, i) => (
                        <div key={i} className="tm-board-card">
                            {/* Replace with actual photo */}
                            <div className="tm-board-photo">{member.emoji}</div>
                            <h4>{member.name}</h4>
                            <div className="tm-role">{member.role}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== ADVISORS ===== */}
            <section className="tm-advisors">
                <span className="tm-section-badge light">ADVISORS</span>
                <h2>Advisors</h2>

                <div className="tm-advisors-grid">
                    {advisors.map((member, i) => (
                        <div key={i} className="tm-advisor">
                            {/* Replace with actual photo */}
                            <div className="tm-advisor-photo">{member.emoji}</div>
                            <h4>{member.name}</h4>
                            <div className="tm-role">{member.role}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="tm-cta">
                <span className="tm-section-badge dark">JOIN US</span>
                <h2>Join Our Leadership Team</h2>
                <p>Be part of a passionate team that drives real change in community.</p>
                <div className="tm-cta-buttons">
                    <Link to="/get-involved/member" className="tm-cta-btn primary">
                        Become a Member →
                    </Link>
                    <Link to="/contact" className="tm-cta-btn outline">
                        Contact Us →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Team;
