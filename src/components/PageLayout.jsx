import React from 'react';

const PageLayout = ({ title, description, children }) => {
    return (
        <div className="page-layout fade-in">
            <section className="page-hero" style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-text-light)',
                padding: '4rem 1rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 className="hero-heading" style={{ fontSize: '2.5rem' }}>{title}</h1>
                    {description && <p style={{ fontSize: '1.2rem', marginTop: '1rem', opacity: 0.9 }}>{description}</p>}
                </div>
            </section>

            <section className="page-content" style={{ padding: '4rem 1rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    {children}
                </div>
            </section>
        </div>
    );
};

export default PageLayout;
