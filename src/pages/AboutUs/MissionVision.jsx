import React from 'react';
import { Link } from 'react-router-dom';
import './MissionVision.css';

const MissionVision = () => {
    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="mv-hero">
                <h1>Our Mission & Vision</h1>
                <p>The guiding principles that drive our commitment to community service and positive change.</p>
            </section>

            {/* ===== WHO WE ARE ===== */}
            <section className="mv-who-we-are">
                <div className="mv-who-inner">
                    <div className="mv-who-left">
                        <span className="mv-pill-badge">DISCOVER OUR STORY</span>
                        <h2 className="mv-who-heading">Who <span>We Are</span></h2>
                        <div className="mv-who-accent"></div>
                    </div>
                    <div className="mv-glass-card">
                        <p>
                            The <span className="highlight">Rotaract Club of Chandigarh</span> is a
                            youth-led organisation committed to creating meaningful, sustainable impact across a wide range
                            of social issues.
                        </p>
                        <div className="mv-glass-divider"></div>
                        <p>
                            Bringing together driven individuals from diverse backgrounds, we channel our collective energy into
                            <span className="highlight"> service</span>, <span className="highlight">innovation</span>, and <span className="highlight">empathy</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== OUR VISION ===== */}
            <section className="mv-vision">
                <div className="mv-vision-inner">
                    <div className="mv-vision-badge">
                        👁️ Our Vision
                    </div>
                    <span className="mv-vision-quote-mark top">"</span>
                    <p className="mv-vision-text">
                        To co-create a world where <strong>every individual</strong> has access to opportunities,
                        resources, and support — enabling them to lead lives of <strong>dignity</strong> and <strong>purpose</strong>.
                    </p>
                    <span className="mv-vision-quote-mark bottom">"</span>
                </div>
            </section>

            {/* ===== OUR MISSION (4 Pillars) ===== */}
            <section className="mv-mission">
                <div className="mv-mission-header">
                    <h2>Our Mission</h2>
                    <p>Four pillars that guide our every action and initiative</p>
                </div>
                <div className="mv-mission-grid">
                    {/* SERVE */}
                    <div className="mv-pillar serve">
                        <div className="mv-pillar-icon">🤝</div>
                        <div className="mv-pillar-label">SERVE</div>
                        <h3>Community Impact</h3>
                        <p>Serve local communities through need-based, high-impact initiatives that create lasting change.</p>
                    </div>

                    {/* EMPOWER */}
                    <div className="mv-pillar empower">
                        <div className="mv-pillar-icon">👥</div>
                        <div className="mv-pillar-label">EMPOWER</div>
                        <h3>Youth Leaders</h3>
                        <p>Empower young people to become compassionate and capable leaders.</p>
                    </div>

                    {/* COLLABORATE */}
                    <div className="mv-pillar collaborate">
                        <div className="mv-pillar-icon">🌐</div>
                        <div className="mv-pillar-label">COLLABORATE</div>
                        <h3>Scale Impact</h3>
                        <p>Partner with institutions, NGOs, and government to amplify our reach.</p>
                    </div>

                    {/* PROMOTE - Full Width */}
                    <div className="mv-pillar promote">
                        <div>
                            <div className="mv-pillar-icon">💎</div>
                            <div className="mv-pillar-label">PROMOTE</div>
                            <h3>Values That Matter</h3>
                            <p>Promote values of empathy, inclusivity, and integrity in all our efforts — because how we serve matters as much as what we achieve.</p>
                        </div>
                        <div className="mv-promote-tags">
                            <span className="mv-promote-tag">Empathy</span>
                            <span className="mv-promote-tag">Inclusivity</span>
                            <span className="mv-promote-tag">Integrity</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CORE VALUES - SMILE ===== */}
            <section className="mv-smile">
                <div className="mv-smile-header">
                    <h2>Our Core Values – SMILE</h2>
                    <p>The principles that guide our actions and shape our impact</p>
                </div>
                <div className="mv-smile-grid">
                    {[
                        { letter: 'S', title: 'Service', desc: 'Service above self in everything we do' },
                        { letter: 'M', title: 'Mental Health', desc: 'Creating safe, supportive spaces for emotional wellbeing' },
                        { letter: 'I', title: 'Integrity', desc: 'Acting with transparency, honesty, and accountability' },
                        { letter: 'L', title: 'Love', desc: 'Bringing kindness and respect to every interaction' },
                        { letter: 'E', title: 'Empower', desc: 'Enabling individuals and communities to stand on their own' },
                    ].map((v, i) => (
                        <div key={i} className="mv-smile-card">
                            <div className="mv-smile-icon">{v.letter}</div>
                            <h4>{v.letter}</h4>
                            <div className="mv-smile-title">{v.title}</div>
                            <p className="mv-smile-desc">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== PRESIDENT'S MESSAGE ===== */}
            <section className="mv-president">
                <div className="mv-president-inner">
                    <div className="mv-president-left">
                        <div className="mv-quote-icon">"</div>
                        <h2>Building something <span>sustainable</span> and <span>impactful</span></h2>
                        <p>
                            We believe in projects that bring real change to society — and we're committed to doing that in a way which is sustainable, scalable, and truly impactful.
                        </p>
                        <p>
                            From mental health initiatives to education drives, every project we undertake is designed with long-term community benefit in mind. Our members don't just participate — they lead, innovate, and grow alongside the communities we serve.
                        </p>
                        <p>
                            If you share our vision and want to be part of something meaningful, I invite you to connect with us and explore how we can create impact together.
                        </p>
                    </div>
                    <div className="mv-president-card">
                        {/* Replace with actual photo */}
                        <div className="mv-president-avatar">👤</div>
                        <h3>President</h3>
                        <div className="mv-role">President, Rotaract Club of Chandigarh</div>
                        <div className="mv-pres-quote">"Real impact comes from consistent, purposeful action."</div>
                    </div>
                </div>
            </section>

            {/* ===== UNITED IN SERVICE ===== */}
            <section className="mv-united">
                {/* Replace background with team photo via CSS */}
                <div className="mv-united-content">
                    <span className="mv-united-badge">📸 Our Team</span>
                    <h2>United in Service</h2>
                    <p>50+ passionate changemakers working together to transform communities across Chandigarh.</p>
                </div>
            </section>

            {/* ===== JOIN OUR MOVEMENT ===== */}
            <section className="mv-join">
                <div className="mv-join-header">
                    <h2>Join Our Movement</h2>
                    <p>Choose how you want to be part of our mission to create lasting change.</p>
                </div>
                <div className="mv-join-grid">
                    <Link to="/get-involved/member" className="mv-join-card" style={{ textDecoration: 'none' }}>
                        <div className="mv-join-icon" style={{ background: 'rgba(241,196,15,0.2)' }}>👤</div>
                        <h3>Become a Member</h3>
                        <p>Join our community of dedicated individuals committed to service, leadership, and creating positive change.</p>
                        <span className="mv-join-link">Learn More →</span>
                    </Link>
                    <Link to="/get-involved/partner" className="mv-join-card" style={{ textDecoration: 'none' }}>
                        <div className="mv-join-icon" style={{ background: 'rgba(255,255,255,0.1)' }}>🤝</div>
                        <h3>Partner With Us</h3>
                        <p>Collaborate with us to amplify impact through strategic partnerships and shared resources.</p>
                        <span className="mv-join-link">Learn More →</span>
                    </Link>
                    <Link to="/get-involved/volunteer" className="mv-join-card" style={{ textDecoration: 'none' }}>
                        <div className="mv-join-icon" style={{ background: 'rgba(255,182,193,0.15)' }}>🙋</div>
                        <h3>Volunteer</h3>
                        <p>Contribute your time and skills to meaningful projects that serve our community.</p>
                        <span className="mv-join-link">Learn More →</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MissionVision;
