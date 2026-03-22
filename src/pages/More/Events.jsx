import React from 'react';
import { Link } from 'react-router-dom';
import '../GetInvolved/GetInvolved.css'; // Reusing GetInvolved styles for consistency

const Events = () => {
    const upcomingEvents = [
        {
            title: '[Annual Blood Donation Drive]',
            date: '[October 15, 2024]',
            time: '[9:00 AM - 2:00 PM]',
            location: '[Sector 17 Plaza, Chandigarh]',
            desc: '[Join us for our mega blood donation camp to help save lives in our community. All donors will receive a certificate of appreciation and refreshments.]',
            image: null // Replace with image path
        },
        {
            title: '[Youth Leadership Summit]',
            date: '[November 5, 2024]',
            time: '[10:00 AM - 4:00 PM]',
            location: '[Panjab University Auditorium]',
            desc: '[A day-long workshop featuring inspiring speakers, interactive sessions, and networking opportunities for aspiring young leaders.]',
            image: null
        },
        {
            title: '[Winter Clothing Distribution]',
            date: '[December 10, 2024]',
            time: '[5:00 PM - 8:00 PM]',
            location: '[Various Slum Areas, Chandigarh]',
            desc: '[Help us distribute warm clothes and blankets to the underprivileged before the harsh winter sets in. Volunteers needed for sorting and distribution.]',
            image: null
        }
    ];

    const pastEvents = [
        {
            title: '[Tree Plantation Drive]',
            date: '[July 2024]',
            desc: '[Planted 500+ saplings across the city to promote environmental sustainability.]'
        },
        {
            title: '[Health Checkup Camp]',
            date: '[May 2024]',
            desc: '[Free medical consultation and basic health screening for over 300 residents.]'
        },
        {
            title: '[Career Counseling Workshop]',
            date: '[March 2024]',
            desc: '[Guided high school students from local government schools on future career paths.]'
        }
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="gi-hero">
                <h1>Upcoming Events</h1>
                <p>Stay engaged and participate in our latest community initiatives and club gatherings.</p>
            </section>

            {/* ===== UPCOMING EVENTS ===== */}
            <section className="gi-opportunities" style={{ background: 'var(--color-bg-light)' }}>
                <div className="gi-opportunities-inner">
                    <div className="gi-section-header">
                        <h2>Join Us Next</h2>
                        <p>Mark your calendars for these upcoming opportunities to make a difference.</p>
                    </div>
                    
                    <div className="gi-opportunities-grid" style={{ gridTemplateColumns: '1fr' }}>
                        {upcomingEvents.map((event, i) => (
                            <div key={i} className="gi-opportunity-card" style={{ display: 'flex', flexDirection: 'row', minHeight: '220px' }}>
                                <div className="gi-opportunity-icon-area" style={{ width: '30%', position: 'relative' }}>
                                    {event.image ? (
                                        <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.3)' }}>📅</div>
                                    )}
                                </div>
                                <div className="gi-opportunity-body" style={{ width: '70%', padding: '32px' }}>
                                    <h3 style={{ fontSize: '1.4rem' }}>{event.title}</h3>
                                    <div style={{ color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.95rem', margin: '12px 0 6px' }}>
                                        🗓️ {event.date} | 🕒 {event.time}
                                    </div>
                                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
                                        📍 {event.location}
                                    </div>
                                    <p>{event.desc}</p>
                                    <div style={{ marginTop: '20px' }}>
                                        <Link to="/contact" className="gi-intro-btn" style={{ padding: '10px 24px' }}>Register Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PAST HIGHLIGHTS ===== */}
            <section className="gi-benefits" style={{ background: 'var(--color-bg-white)' }}>
                <div className="gi-benefits-inner">
                    <div className="gi-section-header">
                        <h2>Past Highlights</h2>
                        <p>A look back at some of our successful events.</p>
                    </div>
                    <div className="gi-benefits-grid-3">
                        {pastEvents.map((event, i) => (
                            <div key={i} className="gi-benefit-card" style={{ textAlign: 'left', padding: '30px' }}>
                                <div style={{ color: 'var(--color-secondary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '8px' }}>{event.date}</div>
                                <h3 style={{ fontSize: '1.25rem' }}>{event.title}</h3>
                                <p style={{ marginTop: '12px' }}>{event.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link to="/more/gallery" className="gi-intro-btn">View Event Gallery</Link>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="gi-cta">
                <span className="gi-cta-badge">STAY UPDATED</span>
                <h2>Never Miss an Event</h2>
                <p>Follow us on our social media channels to get real-time updates on our upcoming projects and events.</p>
                <div className="gi-cta-buttons">
                    <a href="#" className="gi-cta-btn primary">Follow on Instagram</a>
                    <a href="#" className="gi-cta-btn outline">Follow on LinkedIn</a>
                </div>
            </section>

            {/* Inline CSS for responsive adjustments */}
            <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 768px) {
                    .gi-opportunity-card {
                        flex-direction: column !important;
                    }
                    .gi-opportunity-icon-area {
                        width: 100% !important;
                        height: 200px !important;
                    }
                    .gi-opportunity-body {
                        width: 100% !important;
                        padding: 24px !important;
                    }
                }
            `}} />
        </div>
    );
};

export default Events;
