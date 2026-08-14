import React from 'react';
import { Link } from 'react-router-dom';




const milestones = [
  { year: '2020', title: 'Gym Established', description: 'Elite Fitness Gym opened its doors with a single facility focused on personal strength coaching.' },
  { year: '2022', title: 'Expanded Facility', description: 'Upgraded to a 10,000 sq ft location adding dedicated cardio zones and group training studios.' },
  { year: '2024', title: '500+ Active Members', description: 'Reached a major milestone with over 500 active members and expanded to 15+ certified trainers.' },
  { year: '2026', title: 'Digital & Group Innovations', description: 'Launched customized fitness assessment tools and interactive group fitness classes.' }
];

const coreValues = [
  { icon: '🎯', title: 'Excellence in Training', text: 'We prioritize safe, science-backed exercise routines tailored to individual health profiles.' },
  { icon: '🤝', title: 'Inclusive Community', text: 'An encouraging atmosphere designed for beginners and seasoned athletes alike.' },
  { icon: '💡', title: 'Continuous Growth', text: 'Equipped with modern machinery and constantly updated fitness programs.' },
  { icon: '🌱', title: 'Holistic Wellness', text: 'Combining physical training with nutrition advice and active recovery options.' }
];

export default function About() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <span style={styles.tagline}>ABOUT ELITE FITNESS GYM</span>
        <h1 style={styles.title}>Where Fitness Meets Unwavering Dedication</h1>
        <p style={styles.subtitle}>
          Our mission is to empower individuals of all fitness levels to achieve sustainable health, build confidence, and transform their lives through expert guidance and modern facilities.
        </p>
      </section>

      {/* Key Stats Bar */}
      <div style={styles.statsContainer}>
        <div style={styles.statBox}>
          <h2 style={styles.statNumber}>500+</h2>
          <p style={styles.statLabel}>Active Members</p>
        </div>
        <div style={styles.statBox}>
          <h2 style={styles.statNumber}>15+</h2>
          <p style={styles.statLabel}>Professional Trainers</p>
        </div>
        <div style={styles.statBox}>
          <h2 style={styles.statNumber}>5 Years</h2>
          <p style={styles.statLabel}>Industry Experience</p>
        </div>
        <div style={styles.statBox}>
          <h2 style={styles.statNumber}>98%</h2>
          <p style={styles.statLabel}>Member Satisfaction</p>
        </div>
      </div>

      {/* Core Values Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What Drives Us</h2>
        <p style={styles.sectionSubtitle}>The core principles behind our community and coaching philosophy.</p>
        
        <div style={styles.valuesGrid}>
          {coreValues.map((val, idx) => (
            <div key={idx} style={styles.valueCard}>
              <span style={styles.icon}>{val.icon}</span>
              <h3 style={styles.valueTitle}>{val.title}</h3>
              <p style={styles.valueText}>{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Journey</h2>
        <div style={styles.timelineContainer}>
          {milestones.map((item, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={styles.yearBadge}>{item.year}</div>
              <div style={styles.timelineContent}>
                <h3 style={styles.timelineTitle}>{item.title}</h3>
                <p style={styles.timelineDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaCard}>
        <h2 style={styles.ctaTitle}>Ready to Start Your Fitness Journey?</h2>
        <p style={styles.ctaText}>Book a free facility tour or consult with one of our master coaches today.</p>
        <Link to="/MoreDetails" style={{ textDecoration: 'none' }}>
  <button style={styles.ctaBtn}>More Details</button>
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
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#f3f4f6',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  tagline: {
    color: '#ef4444',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '12px 0',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    backgroundColor: '#1e293b',
    padding: '30px 20px',
    borderRadius: '12px',
    textAlign: 'center',
    marginBottom: '60px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
  },
  statBox: {
    padding: '10px',
  },
  statNumber: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#ef4444',
    margin: '0 0 6px 0',
  },
  statLabel: {
    color: '#cbd5e1',
    fontSize: '0.9rem',
    margin: 0,
  },
  section: {
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    textAlign: 'center',
    marginBottom: '8px',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#9ca3af',
    marginBottom: '32px',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
  },
  valueCard: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
  },
  icon: {
    fontSize: '2rem',
  },
  valueTitle: {
    fontSize: '1.2rem',
    margin: '12px 0 8px 0',
  },
  valueText: {
    color: '#9ca3af',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    margin: 0,
  },
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  timelineItem: {
    display: 'flex',
    gap: '20px',
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '10px',
    alignItems: 'center',
  },
  yearBadge: {
    backgroundColor: '#ef4444',
    color: '#fff',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '1rem',
    minWidth: '70px',
    textAlign: 'center',
  },
  timelineContent: {
    flexGrow: 1,
  },
  timelineTitle: {
    fontSize: '1.1rem',
    margin: '0 0 4px 0',
  },
  timelineDesc: {
    color: '#9ca3af',
    fontSize: '0.9rem',
    margin: 0,
  },
  ctaCard: {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '16px',
    padding: '40px 20px',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '1.8rem',
    margin: '0 0 10px 0',
  },
  ctaText: {
    color: '#9ca3af',
    marginBottom: '24px',
  },
  ctaBtn: {
    padding: '12px 28px',
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};