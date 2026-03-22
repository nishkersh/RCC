import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../GetInvolved/GetInvolved.css'; 

const Gallery = () => {
    // Categories for filtering
    const categories = ['All', 'Events', 'Projects', 'Fellowship', 'Awards'];
    const [activeTab, setActiveTab] = useState('All');

    // Placeholder images - using simple colored divs with emojis for visualization
    const images = [
        { id: 1, category: 'Events', icon: '🎤', color: 'var(--color-primary)', title: 'Youth Summit 2023' },
        { id: 2, category: 'Projects', icon: '🩸', color: 'var(--color-secondary)', title: 'Mega Blood Donation Camp' },
        { id: 3, category: 'Fellowship', icon: '🎉', color: 'var(--color-grad-dark)', title: 'Diwali Celebration' },
        { id: 4, category: 'Awards', icon: '🏆', color: 'var(--color-primary)', title: 'Best Club Award' },
        { id: 5, category: 'Projects', icon: '🌳', color: '#8b5a96', title: 'Tree Plantation Drive' },
        { id: 6, category: 'Fellowship', icon: '🏏', color: 'var(--color-secondary)', title: 'Sports Meet' },
        { id: 7, category: 'Events', icon: '🤝', color: 'var(--color-grad-end)', title: 'Installation Ceremony' },
        { id: 8, category: 'Projects', icon: '📚', color: 'var(--color-primary)', title: 'School Book Distribution' },
        { id: 9, category: 'Awards', icon: '🏅', color: 'var(--color-secondary)', title: 'Outstanding President' },
    ];

    const filteredImages = activeTab === 'All' 
        ? images 
        : images.filter(img => img.category === activeTab);

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="gi-hero">
                <h1>Photo Gallery</h1>
                <p>Capturing memories, milestones, and moments of impact.</p>
            </section>

            {/* ===== GALLERY GRID ===== */}
            <section className="gi-benefits" style={{ background: 'var(--color-bg-white)' }}>
                <div className="gi-benefits-inner" style={{ maxWidth: '1200px' }}>
                    
                    {/* Filter Tabs */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '50px',
                                    border: `2px solid ${activeTab === cat ? 'var(--color-grad-end)' : 'var(--color-border)'}`,
                                    background: activeTab === cat ? 'var(--color-grad-end)' : 'var(--color-bg-white)',
                                    color: activeTab === cat ? 'var(--color-bg-white)' : 'var(--color-text-muted)',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                        gap: '24px' 
                    }}>
                        {filteredImages.map((img) => (
                            <div key={img.id} style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                position: 'relative',
                                cursor: 'pointer',
                                height: '280px',
                                background: img.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '4rem',
                                color: 'rgba(255,255,255,0.5)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '0';
                            }}>
                                {/* Replace icon with actual img tag when images are available */}
                                {img.icon}
                                
                                <div className="gallery-overlay" style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                    padding: '30px 20px 20px',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    color: 'var(--color-bg-white)',
                                    textAlign: 'left'
                                }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-secondary)' }}>{img.category}</span>
                                    <h3 style={{ fontSize: '1.2rem', margin: '4px 0 0' }}>{img.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="gi-cta">
                <span className="gi-cta-badge">GET INVOLVED</span>
                <h2>Be in Our Next Photo</h2>
                <p>Join us as a member or volunteer and become part of our growing family.</p>
                <div className="gi-cta-buttons">
                    <Link to="/get-involved/member" className="gi-cta-btn primary">Become a Member</Link>
                    <Link to="/get-involved/volunteer" className="gi-cta-btn outline">Volunteer</Link>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
