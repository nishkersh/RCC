import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
);

const Achievements = () => {
    /* ==============================
       PLACEHOLDER DATA — Replace with your club's achievements.
       type: 'club' | 'individual'
    ============================== */

    const achievements = {
        '2024': [
            {
                org: '[Your Club Name]',
                title: '[Achievement Title]',
                type: 'club',
                desc: '[Description of the achievement, e.g. Over the years, provided scholarships to deserving students]',
                date: '2024',
            },
        ],
        '2023-24': [
            {
                org: '[Your Club Name]',
                title: '[Best Rotaract Club]',
                type: 'club',
                desc: '[Awarded by District Governor for outstanding service and impact]',
                date: '2023-24',
            },
            {
                org: '[Member Name]',
                title: '[Best Charter President]',
                type: 'individual',
                desc: '[Recognized for exceptional leadership in founding year]',
                date: '2023-24',
            },
            {
                org: '[Event Name]',
                title: '[Harmonious Project of the Year]',
                type: 'club',
                desc: '[Recognition for exceptional inter-club collaboration]',
                date: '2023-24',
            },
            {
                org: '[Organization Name]',
                title: '[Excellent Contribution in Community Development]',
                type: 'club',
                desc: '[Recognized for serving 10,000+ glasses of rose milk]',
                date: '2023-24',
            },
            {
                org: '[Event Name]',
                title: '[Host Club - National Event]',
                type: 'club',
                desc: '[Successfully hosted the district-wide national event]',
                date: '2023-24',
            },
            {
                org: '[Competition Name]',
                title: '[Winning Team - District Competition]',
                type: 'club',
                desc: '[District competition winner]',
                date: '2023-24',
            },
            {
                org: '[Your Club Name]',
                title: '[District Official Visit]',
                type: 'club',
                desc: '[Successfully hosted the District Governor Official Visit]',
                date: '2023-24',
            },
        ],
    };

    const [activeFilter, setActiveFilter] = useState('all');

    const filterAchievements = (items) => {
        if (activeFilter === 'all') return items;
        return items.filter((a) => a.type === activeFilter);
    };

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="ach-hero">
                <h1>Our Achievements</h1>
                <p>Celebrating excellence and recognition in community service and leadership.</p>
            </section>

            {/* ===== INTRO + FILTERS ===== */}
            <section className="ach-intro">
                <div className="ach-intro-text">
                    <strong>Our achievements reflect our commitment</strong> to excellence in community service,
                    leadership development, and making a positive impact in society.
                </div>
                <div className="ach-filters">
                    {['all', 'club', 'individual'].map((f) => (
                        <button
                            key={f}
                            className={`ach-filter-btn${activeFilter === f ? ' active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f === 'all' ? 'All Achievements' : f === 'club' ? 'Club' : 'Individual'}
                        </button>
                    ))}
                </div>
            </section>

            {/* ===== TIMELINE ===== */}
            <section className="ach-timeline">
                <div className="ach-timeline-inner">
                    {Object.entries(achievements).map(([year, items]) => {
                        const filtered = filterAchievements(items);
                        if (filtered.length === 0) return null;
                        return (
                            <div key={year}>
                                <div className="ach-year-row">
                                    <span className="ach-year-badge">{year}</span>
                                </div>
                                <div className="ach-year-line" />

                                <div className="ach-cards-grid">
                                    {filtered.map((ach, i) => (
                                        <div key={i} className="ach-card">
                                            <div className="ach-card-org">{ach.org}</div>
                                            <div className="ach-card-header">
                                                <h3>{ach.title}</h3>
                                                <span className={`ach-card-type ${ach.type}`}>
                                                    {ach.type === 'club' ? 'Club Achievement' : 'Individual Recognition'}
                                                </span>
                                            </div>
                                            <div className="ach-card-desc">{ach.desc}</div>
                                            <div className="ach-card-date">
                                                <CalendarIcon /> {ach.date}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="ach-cta">
                <span className="tm-section-badge">JOIN OUR SUCCESS</span>
                <h2>Be Part of Our Journey</h2>
                <p>Join us in creating more achievements and making a lasting impact in our community through service and leadership.</p>
                <div className="ach-cta-buttons">
                    <Link to="/get-involved/member" className="ach-cta-btn primary">
                        Become a Member →
                    </Link>
                    <Link to="/contact" className="ach-cta-btn outline">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Achievements;
