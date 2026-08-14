import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  { icon: '🏋️', title: 'Top-Tier Equipment', text: 'State-of-the-art strength and cardio machines maintained for safety and maximum performance.' },
  { icon: '🔥', title: 'Certified Coaches', text: 'Train alongside certified fitness professionals dedicated to helping you achieve real results.' },
  { icon: '⏰', title: 'Flexible Working Hours', text: 'Open early mornings to late nights so you can work out on your own schedule.' },
  { icon: '🥗', title: 'Custom Diet Plans', text: 'Get tailored nutrition advice to complement your physical training and accelerate goals.' }
];

const highlights = [
  { title: 'Personal Training', desc: '1-on-1 customized coaching designed specifically around your fitness targets.', image: '🏋️‍♂️' },
  { title: 'Group Classes', desc: 'High-energy group workouts including HIIT, Yoga, Spin, and Functional Fitness.', image: '🧘‍♀️' },
  { title: 'Cardio & Strength', desc: 'Comprehensive zones dedicated to building endurance and raw muscle strength.', image: '🏃' }
];

export default function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <span style={styles.badge}>WELCOME TO ELITE FITNESS</span>
          <h1 style={styles.heroTitle}>Build Strength. Burn Fat. Transform Your Life.</h1>
          <p style={styles.heroSubtitle}>
            Join Karachi's premier fitness community equipped with modern gear, expert personal trainers, and high-intensity group classes.
          </p>
          
          <div style={styles.buttonGroup}>
            <Link to="/subscription" style={{ textDecoration: 'none' }}>
              <button style={styles.primaryBtn}>Join Now</button>
            </Link>

            <Link to="/subscription" style={{ textDecoration: 'none' }}>
              <button style={styles.secondaryBtn}>Book Free Trial</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div style={styles.statsBar}>
        <div style={styles.statItem}>
          <h2 style={styles.statNum}>500+</h2>
          <p style={styles.statLabel}>Active Members</p>
        </div>
        <div style={styles.statItem}>
          <h2 style={styles.statNum}>15+</h2>
          <p style={styles.statLabel}>Expert Trainers</p>
        </div>
        <div style={styles.statItem}>
          <h2 style={styles.statNum}>30+</h2>
          <p style={styles.statLabel}>Weekly Classes</p>
        </div>
        <div style={styles.statItem}>
          <h2 style={styles.statNum}>100%</h2>
          <p style={styles.statLabel}>Commitment to Results</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Elite Fitness?</h2>
        <p style={styles.sectionSubtitle}>Everything you need to reach peak performance under one roof.</p>
        
        <div style={styles.featuresGrid}>
          {features.map((item, index) => (
            <div key={index} style={styles.featureCard}>
              <span style={styles.featureIcon}>{item.icon}</span>
              <h3 style={styles.featureTitle}>{item.title}</h3>
              <p style={styles.featureText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Preview */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Fitness Programs</h2>
        <div style={styles.programGrid}>
          {highlights.map((program, idx) => (
            <div key={idx} style={styles.programCard}>
              <div style={styles.programIcon}>{program.image}</div>
              <h3 style={styles.programTitle}>{program.title}</h3>
              <p style={styles.programDesc}>{program.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={styles.ctaBanner}>
        <h2 style={styles.ctaTitle}>Ready to Start Your Transformation?</h2>
        <p style={styles.ctaSubtitle}>Claim your 1-day free pass and experience our facilities firsthand.</p>
        <Link to="/subscription" style={{ textDecoration: 'none' }}>
          <button style={styles.ctaButton}>Get Your Free Pass</button>
        </Link>
      </section>
    </div>
  );
}

// Inline CSS Styles
const styles = {
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#f3f4f6',
  },

  heroSection: {
    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '16px',
    padding: '80px 20px',
    textAlign: 'center',
    marginBottom: '40px',
  },
  heroOverlay: {
    maxWidth: '750px',
    margin: '0 auto',
  },
  badge: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    color: '#ef4444',
    border: '1px solid #ef4444',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  heroTitle: {
    fontSize: '2.8rem',
    fontWeight: '800',
    margin: '16px 0',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    color: '#d1d5db',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    padding: '14px 32px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    padding: '14px 32px',
    borderRadius: '8px',
    border: '1px solid #ffffff',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  statsBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    backgroundColor: '#1e293b',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    marginBottom: '60px',
  },
  statItem: {
    padding: '10px',
  },
  statNum: {
    fontSize: '2.2rem',
    color: '#ef4444',
    margin: '0 0 4px 0',
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#9ca3af',
    fontSize: '0.9rem',
    margin: 0,
  },
  section: {
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '8px',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#9ca3af',
    marginBottom: '36px',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '24px',
  },
  featureCard: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
  },
  featureIcon: {
    fontSize: '2.2rem',
  },
  featureTitle: {
    fontSize: '1.2rem',
    margin: '12px 0 8px 0',
  },
  featureText: {
    color: '#9ca3af',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    margin: 0,
  },
  programGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  programCard: {
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '12px',
    padding: '28px 20px',
    textAlign: 'center',
  },
  programIcon: {
    fontSize: '2.5rem',
    marginBottom: '12px',
  },
  programTitle: {
    fontSize: '1.3rem',
    margin: '0 0 8px 0',
  },
  programDesc: {
    color: '#9ca3af',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    margin: 0,
  },
  ctaBanner: {
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    padding: '40px 20px',
    textAlign: 'center',
    border: '1px solid #334155',
  },
  ctaTitle: {
    fontSize: '1.8rem',
    margin: '0 0 8px 0',
  },
  ctaSubtitle: {
    color: '#9ca3af',
    marginBottom: '24px',
  },
  ctaButton: {
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};