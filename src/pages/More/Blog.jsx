import React from 'react';
import { Link } from 'react-router-dom';
import '../GetInvolved/GetInvolved.css';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: '[The Impact of Youth Leadership in Community Development]',
            excerpt: '[Explore how young leaders in Rotaract are driving sustainable change in local communities through innovative projects and dedicated service.]',
            date: '[Oct 10, 2024]',
            author: '[Rtr. Aman Singh]',
            category: '[Leadership]',
            image: null
        },
        {
            id: 2,
            title: '[A Day at the Mega Blood Donation Camp]',
            excerpt: '[Read the heartwarming stories of donors and volunteers who came together to save lives during our biggest drive of the year.]',
            date: '[Sep 25, 2024]',
            author: '[Rtr. Priya Sharma]',
            category: '[Community Service]',
            image: null
        },
        {
            id: 3,
            title: '[Why Environmental Sustainability is Everyone\'s Responsibility]',
            excerpt: '[As climate change accelerates, local actions matter more than ever. Discover how our recent tree plantation drive makes a global impact.]',
            date: '[Sep 12, 2024]',
            author: '[Rtr. Rahul Verma]',
            category: '[Environment]',
            image: null
        },
        {
            id: 4,
            title: '[Navigating Professional Life: Insights from Vocational Workshops]',
            excerpt: '[Key takeaways from our latest career counseling and vocational skill building sessions aimed at empowering college students.]',
            date: '[Aug 30, 2024]',
            author: '[Rtr. Sneha Gupta]',
            category: '[Vocational Service]',
            image: null
        },
        {
            id: 5,
            title: '[The Power of Fellowship: Building Bonds Beyond Service]',
            excerpt: '[While service is our core mission, the friendships built along the way are what sustain our club. A look into our recent retreat.]',
            date: '[Aug 15, 2024]',
            author: '[Rtr. Vikram Dutt]',
            category: '[Club Service]',
            image: null
        },
        {
            id: 6,
            title: '[Partnering for Peace: Our Joint Initiative Across Borders]',
            excerpt: '[How local actions can bridge global divides. Reflecting on our recent collaboration with an international Rotaract club.]',
            date: '[Jul 28, 2024]',
            author: '[Rtr. Ananya Mehta]',
            category: '[International Service]',
            image: null
        }
    ];

    return (
        <div className="fade-in">
            {/* ===== HERO ===== */}
            <section className="gi-hero">
                <h1>Our Blog</h1>
                <p>Stories, insights, and perspectives from the members of Rotaract Club of Chandigarh.</p>
            </section>

            {/* ===== FEATURED POST (Optional layout idea) ===== */}
            <section className="gi-intro-split" style={{ background: 'var(--color-bg-white)', paddingTop: '60px', paddingBottom: '40px' }}>
                <div className="gi-intro-split-inner">
                    <div className="gi-intro-image" style={{ height: '400px' }}>
                         {/* Placeholder */}
                         <div style={{ fontSize: '4rem' }}>✍️</div>
                    </div>
                    <div style={{ flex: 1, padding: '40px 50px' }}>
                        <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(152, 215, 194, 0.2)', color: 'var(--color-secondary)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px' }}>FEATURED</span>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '16px', lineHeight: 1.3 }}>{posts[0].title}</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>{posts[0].excerpt}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', color: 'var(--color-bg-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                {posts[0].author[5]} {/* First letter of name after Rtr. */}
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, color: 'var(--color-grad-end)', fontSize: '0.9rem' }}>{posts[0].author}</div>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{posts[0].date}</div>
                            </div>
                        </div>
                        <Link to="#" className="gi-intro-btn">Read Article</Link>
                    </div>
                </div>
            </section>

            {/* ===== BLOG GRID ===== */}
            <section className="gi-opportunities" style={{ background: 'var(--color-bg-light)' }}>
                <div className="gi-opportunities-inner">
                    <div className="gi-section-header">
                        <h2>Latest Articles</h2>
                    </div>
                    
                    <div className="gi-opportunities-grid">
                        {posts.slice(1).map((post) => (
                            <div key={post.id} className="gi-opportunity-card" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="gi-opportunity-icon-area" style={{ height: '200px', background: 'var(--color-grad-dark)' }}>
                                    {post.image ? (
                                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.2)' }}>📰</div>
                                    )}
                                </div>
                                <div className="gi-opportunity-body" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-secondary)', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>{post.category}</span>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: 1.4 }}>{post.title}</h3>
                                    <p style={{ fontSize: '0.95rem', marginBottom: '20px', flex: 1 }}>{post.excerpt}</p>
                                    
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', paddingTop: '16px', marginTop: 'auto' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-primary)', color: 'var(--color-bg-white)', fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                                {post.author[5]}
                                            </div>
                                            <div style={{ fontSize: '0.85rem' }}>
                                                <div style={{ fontWeight: 600, color: 'var(--color-grad-end)' }}>{post.author}</div>
                                                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>{post.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <button className="gi-intro-btn" style={{ background: 'transparent', color: 'var(--color-grad-end)', border: '2px solid var(--color-grad-end)' }}>Load More Articles</button>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="gi-cta">
                <span className="gi-cta-badge">SHARE YOUR STORY</span>
                <h2>Want to Contribute to Our Blog?</h2>
                <p>We welcome guest posts from members and partners. Share your experiences, insights, and service stories.</p>
                <div className="gi-cta-buttons">
                    <Link to="/contact" className="gi-cta-btn primary">Submit an Article</Link>
                </div>
            </section>
        </div>
    );
};

export default Blog;
