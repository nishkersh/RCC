import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page fade-in">
            {/* Hero Section */}
            <section className="hero" style={{
                background: 'linear-gradient(135deg, var(--color-primary), #3a1c40)',
                color: 'var(--color-text-light)',
                padding: '6rem 1rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 className="hero-heading">Making a positive impact together for a better tomorrow</h1>
                    <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', marginTop: '1.5rem', opacity: 0.9 }}>
                        Dedicated to community service and helping people in need
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/about-us/mission-vision" className="btn btn-primary">Learn About Our Legacy</Link>
                        <Link to="/impact/community" className="btn btn-outline">See Our Projects</Link>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section style={{
                backgroundColor: 'var(--color-accent)',
                padding: '5rem 1rem',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="section-heading">Who We Are</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        The Rotaract Club of Chandigarh is a community-driven organization of dedicated individuals united in their commitment to creating positive social impact through service above self.
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                        We are a team of passionate individuals dedicated to making a positive impact through education, awareness, and impactful solutions to community challenges. Our diverse members work together to implement projects that create meaningful change and touch as many lives as possible.
                    </p>
                    <Link to="/about-us/mission-vision" className="btn btn-outline" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>Learn More About Us</Link>
                </div>
            </section>

            {/* Club Impact Snapshot */}
            <section style={{ padding: '5rem 1rem' }}>
                <div className="container">
                    <h2 className="section-heading">Club Impact Snapshot</h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                        Our recent public updates are focused on outcomes, not announcements — what changed, who we supported, and what we learned next.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { label: 'Upcoming events in focus', stat: '1', desc: 'Health Check-up Camp currently in priority queue' },
                            { label: 'Volunteers engaged', stat: '40+', desc: 'Across planning, outreach, and field support' },
                            { label: 'Partners currently collaborating', stat: '6', desc: 'Schools, NGOs, professional networks, and local sponsors' },
                            { label: 'Total initiative learnings', stat: '12', desc: 'Operational learnings captured for better execution' }
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--color-bg-white)', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{item.stat}</div>
                                <p style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{item.label}</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Flagship Projects */}
            <section style={{ backgroundColor: 'var(--color-accent)', padding: '5rem 1rem' }}>
                <div className="container">
                    <h2 className="section-heading">Our Flagship Projects</h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Signature initiatives creating lasting positive change in our communities</p>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/impact/flagship" className="btn btn-primary">Explore Projects</Link>
                    </div>
                </div>
            </section>

            {/* Our Impact in Action */}
            <section style={{ padding: '5rem 1rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-heading">Our Impact in Action</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>See how our initiatives are creating real change in communities</p>
                    <Link to="/impact/community" className="btn btn-outline" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>View All Our Initiatives</Link>
                </div>
            </section>

            {/* Why Get Involved */}
            <section style={{ backgroundColor: 'var(--color-accent)', padding: '5rem 1rem' }}>
                <div className="container">
                    <h2 className="section-heading">Why Get Involved?</h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Join our community of changemakers and make a real difference</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg-white)', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Make a Real Difference</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Your involvement directly impacts lives in our community. Every hour you contribute helps us achieve our mission of service above self.</p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg-white)', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Develop Leadership Skills</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Take on leadership roles in our projects and committees. Gain valuable experience in project management, public speaking, and team collaboration.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/get-involved/member" className="btn btn-primary">Find Out How to Join</Link>
                    </div>
                </div>
            </section>

            {/* Ready to Make a Difference CTA */}
            <section style={{ padding: '5rem 1rem', background: 'linear-gradient(135deg, var(--color-primary), #3a1c40)', color: 'var(--color-text-light)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'var(--color-text-light)', marginBottom: '1rem', fontSize: '2rem' }}>Ready to Make a Difference?</h2>
                    <p style={{ marginBottom: '2rem', opacity: 0.9, fontSize: '1.1rem' }}>Join our community of dedicated individuals working together to create positive change.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/get-involved/member" className="btn btn-primary">Become a Member</Link>
                        <Link to="/get-involved/partner" className="btn btn-outline">Partner With Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
