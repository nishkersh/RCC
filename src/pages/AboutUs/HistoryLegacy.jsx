import React from 'react';
import { Link } from 'react-router-dom';
import './HistoryLegacy.css';

const HistoryLegacy = () => {
    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="hl-hero">
                <h1>Our History & Legacy</h1>
                <p>Building a legacy of service and impact since our founding.</p>
            </section>

            {/* ===== A YOUNG CLUB ===== */}
            <section className="hl-young-club">
                <div className="hl-young-inner">
                    <div className="hl-young-left">
                        {/* Update badge text with your founding date */}
                        <span className="hl-pill-badge">SINCE [FOUNDING YEAR]</span>
                        <h2 className="hl-young-heading">A Young Club with <span>Remarkable Impact</span></h2>
                        <div className="hl-young-accent"></div>
                    </div>
                    <div className="hl-glass-card">
                        <p>
                            The <span className="highlight">Rotaract Club of Chandigarh</span> is one of the passionate
                            Rotaract clubs in our district, bringing together experienced members to form a dynamic team
                            with years of Rotaract experience.
                        </p>
                        <div className="hl-glass-divider"></div>
                        <p>
                            We've united members from diverse backgrounds to create a club driven by
                            <span className="highlight"> service</span>, <span className="highlight">innovation</span>, and <span className="highlight">impact</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE ===== */}
            <section className="hl-timeline-section">
                <div className="hl-timeline-header">
                    <h2>Our Journey Through Time</h2>
                    <p>Years of impactful service and continuous growth</p>
                </div>

                <div className="hl-timeline">
                    {/* --- Tenure 1 --- */}
                    <div className="hl-year-badge gold">
                        {/* Update with actual year range */}
                        YEAR 1
                    </div>

                    <div className="hl-tenure-card gold-border">
                        <div className="hl-tenure-header">
                            <div className="hl-tenure-info">
                                <span className="hl-tenure-pill gold-pill">CHARTER YEAR</span>
                                <h3>Foundation & Establishment</h3>
                                <p className="hl-president-name">
                                    Charter President: <span>[President Name]</span>
                                </p>
                            </div>
                            {/* Replace with actual photo */}
                            <div className="hl-tenure-avatar">👤</div>
                        </div>
                        <p className="hl-tenure-desc">
                            This tenure marked the foundation of the club. Under the Charter President's leadership,
                            we laid our core principles and launched impactful service projects that set a high benchmark
                            from the very beginning.
                        </p>
                        <div className="hl-tenure-grid">
                            <div className="hl-tenure-sub-card">
                                <h4>🏆 Key Achievements</h4>
                                <ul>
                                    <li>Officially chartered and established</li>
                                    <li>Launched signature service projects — impacting thousands of lives</li>
                                    <li>Won "Best Club" awards</li>
                                    <li>Best Charter President award 🏆</li>
                                </ul>
                            </div>
                            <div className="hl-tenure-sub-card">
                                <h4>💪 Challenges Overcome</h4>
                                <ul>
                                    <li>Built strong foundation in minimal time</li>
                                    <li>Mobilized high-impact projects with limited resources</li>
                                    <li>United members under shared vision</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* --- Tenure 2 --- */}
                    <div className="hl-year-badge purple">
                        {/* Update with actual year range */}
                        YEAR 2
                    </div>

                    <div className="hl-tenure-card purple-border">
                        <div className="hl-tenure-header">
                            <div className="hl-tenure-info">
                                <span className="hl-tenure-pill purple-pill">EXPANSION YEAR</span>
                                <h3>Expansion & Innovation</h3>
                                <p className="hl-president-name">
                                    President: <span>[President Name]</span>
                                </p>
                            </div>
                            {/* Replace with actual photo */}
                            <div className="hl-tenure-avatar">👤</div>
                        </div>
                        <p className="hl-tenure-desc">
                            A phase of dynamic expansion and innovation. The club scaled new heights — launching socially
                            impactful projects and significantly growing its member base.
                        </p>
                        <div className="hl-tenure-grid">
                            <div className="hl-tenure-sub-card">
                                <h4>🏆 Key Achievements</h4>
                                <ul>
                                    <li>Expanded operations with broader outreach</li>
                                    <li>Launched multiple new flagship projects</li>
                                    <li>120% membership increase</li>
                                </ul>
                            </div>
                            <div className="hl-tenure-sub-card">
                                <h4>💪 Challenges Overcome</h4>
                                <ul>
                                    <li>Managed rapid expansion with quality</li>
                                    <li>Diverse projects: women, health, sustainability</li>
                                    <li>Sustained volunteer motivation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== GROWING IMPACT ===== */}
            <section className="hl-impact">
                <div className="hl-impact-header">
                    <span className="hl-impact-badge">OUR IMPACT</span>
                    <h2>Growing Impact</h2>
                    <p>Transforming communities through dedicated service and sustainable initiatives</p>
                </div>
                <div className="hl-impact-grid">
                    {/* Environment - Dark Purple */}
                    <div className="hl-impact-card card-dark">
                        <div className="hl-impact-card-icon">🌍</div>
                        <h3>Environment</h3>
                        <p>Recycled thousands of KGs of waste, created eco-products, empowered women.</p>
                    </div>
                    {/* Healthcare - White */}
                    <div className="hl-impact-card card-light">
                        <div className="hl-impact-card-icon">❤️</div>
                        <h3>Healthcare</h3>
                        <p>Collected hundreds of units of blood, cancer awareness, mental health awareness.</p>
                    </div>
                    {/* Humanitarian - Gold */}
                    <div className="hl-impact-card card-gold">
                        <div className="hl-impact-card-icon">🤲</div>
                        <h3>Humanitarian</h3>
                        <p>Fed thousands of people, donated blankets to street dwellers, essentials for women.</p>
                    </div>
                    {/* Leadership - Lavender */}
                    <div className="hl-impact-card card-lavender">
                        <div className="hl-impact-card-icon">👥</div>
                        <h3>Leadership</h3>
                        <p>Developed leaders, exchanges, and partners across multiple districts.</p>
                    </div>
                </div>
            </section>

            {/* ===== CUMULATIVE IMPACT STATS ===== */}
            <section className="hl-stats">
                <div className="hl-stats-card">
                    <div className="hl-stats-header">
                        <h3>Cumulative Impact</h3>
                    </div>
                    <div className="hl-stats-grid">
                        {/* Update these stats with your actual numbers */}
                        <div className="hl-stat-item">
                            <div className="hl-stat-number">[XX,XXX]+</div>
                            <div className="hl-stat-label">Lives Impacted</div>
                        </div>
                        <div className="hl-stat-item">
                            <div className="hl-stat-number">[XX]+</div>
                            <div className="hl-stat-label">Projects Completed</div>
                        </div>
                        <div className="hl-stat-item">
                            <div className="hl-stat-number">[XX]+</div>
                            <div className="hl-stat-label">Active Members</div>
                        </div>
                        <div className="hl-stat-item">
                            <div className="hl-stat-number">[XX]+</div>
                            <div className="hl-stat-label">Partner Organizations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="hl-cta">
                <h2>Be Part of Our Journey</h2>
                <p>Join our dynamic team as we build on our strong foundation and create lasting impact in our communities.</p>
                <div className="hl-cta-buttons">
                    <Link to="/get-involved/member" className="hl-cta-btn primary">
                        Become a Member →
                    </Link>
                    <Link to="/impact/flagship" className="hl-cta-btn outline">
                        Explore Our Projects →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HistoryLegacy;
