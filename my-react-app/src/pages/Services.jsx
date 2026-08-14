import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '🏋️‍♂️',
    title: 'Weight & Resistance Training',
    desc: 'Build muscle mass, increase strength, and boost metabolism with our top-of-the-line free weights and strength machines.',
    features: ['Free Weights & Power Racks', 'Plate-Loaded Machines', 'Form Correction Support', 'Custom Workout Split Creation'],
  },
  {
    icon: '🏃‍♂️',
    title: 'Cardio & Endurance Training',
    desc: 'Improve cardiovascular health, burn calories, and build stamina using modern treadmills, ellipticals, and rowers.',
    features: ['Heart-Rate Tracked Equipment', 'HIIT Zone Access', 'Stamina & Endurance Coaching', 'Interactive Virtual Courses'],
  },
  {
    icon: '🎯',
    title: '1-on-1 Personal Coaching',
    desc: 'Work directly with dedicated, certified personal trainers tailored to your specific fitness levels and goals.',
    features: ['Dedicated 1-on-1 Sessions', 'Customized Diet & Workout Plans', 'Weekly Progress Tracking', 'Injury Prevention & Rehab'],
  },
  {
    icon: '🧘‍♀️',
    title: 'Group Fitness Classes',
    desc: 'Stay motivated in high-energy group environments ranging from Zumba and Spin to Yoga and Functional Circuit Training.',
    features: ['Flexible Daily Timings', 'Motivating Group Dynamics', 'Certified Group Instructors', 'All Fitness Levels Welcome'],
  },
];

const amenities = [
  { icon: '🚿', title: 'Luxury Showers & Lockers', desc: 'Secure digital lockers, private hot showers, and complimentary toiletries.' },
  { icon: '🧘', title: 'Recovery Zone & Sauna', desc: 'Infrared saunas, foam rolling stations, and massage guns for optimal recovery.' },
  { icon: '🥤', title: 'Nutrition & Juice Bar', desc: 'Fresh protein shakes, pre-workout drinks, and healthy snacks prepared on site.' },
  { icon: '🅿️', title: 'Free Private Parking', desc: 'Dedicated parking space reserved exclusively for Elite Fitness members.' },
];

const schedule = [
  { day: 'Monday - Friday', hours: '6:00 AM – 11:00 PM', classes: 'HIIT, Yoga, Powerlifting' },
  { day: 'Saturday', hours: '7:00 AM – 10:00 PM', classes: 'Spinning, Functional Circuit' },
  { day: 'Sunday', hours: '8:00 AM – 8:00 PM', classes: 'Open Gym & Active Recovery' },
];

const faqs = [
  { q: 'Do I need to bring my own lock or towel?', a: 'We provide lockers and fresh gym towels free of charge for all members.' },
  { q: 'Can I book a single personal training session?', a: 'Yes! We offer single-session bookings as well as multi-session coaching packages.' },
  { q: 'Are group classes included in gym access?', a: 'Yes, all members have complimentary access to our daily group fitness classes.' },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={styles.container}>
      {/* Header */}
      <section style={styles.headerSection}>
        <h1 style={styles.mainTitle}>Our Services & Programs</h1>
        <p style={styles.subtitle}>
          Explore our wide range of professional fitness services tailored to help you reach your peak performance.
        </p>
      </section>

      {/* Main Services Grid */}
      <div style={styles.servicesGrid}>
        {services.map((item, idx) => (
          <div key={idx} style={styles.serviceCard}>
            <div style={styles.cardIcon}>{item.icon}</div>
            <h2 style={styles.cardTitle}>{item.title}</h2>
            <p style={styles.cardDesc}>{item.desc}</p>
            <ul style={styles.featureList}>
              {item.features.map((feat, fIdx) => (
                <li key={fIdx} style={styles.featureItem}>
                  <span style={styles.checkIcon}>✓</span> {feat}
                </li>
              ))}
            </ul>
            <Link to="/subscription" style={{ textDecoration: 'none' }}>
              <button style={styles.learnBtn}>Book Session</button>
            </Link>
          </div>
        ))}
      </div>

      {/* NEW SECTION 1: Gym Amenities */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>World-Class Gym Amenities</h2>
        <p style={styles.sectionSubtitle}>Designed to make your workout experience comfortable and seamless.</p>

        <div style={styles.amenitiesGrid}>
          {amenities.map((item, idx) => (
            <div key={idx} style={styles.amenityCard}>
              <span style={styles.amenityIcon}>{item.icon}</span>
              <h3 style={styles.amenityTitle}>{item.title}</h3>
              <p style={styles.amenityDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION 2: Facility Operating Hours */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Facility Hours & Class Schedule</h2>
        <p style={styles.sectionSubtitle}>Flexible timings to accommodate early birds and late night sessions.</p>

        <div style={styles.scheduleTable}>
          {schedule.map((row, idx) => (
            <div key={idx} style={styles.scheduleRow}>
              <div>
                <strong style={styles.dayText}>{row.day}</strong>
                <p style={styles.classesText}>Featured: {row.classes}</p>
              </div>
              <span style={styles.hoursBadge}>{row.hours}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION 3: FAQ Accordion */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <p style={styles.sectionSubtitle}>Got questions? We've got answers.</p>

        <div style={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={styles.faqItem}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div style={styles.faqQuestion}>
                <span>{faq.q}</span>
                <span style={styles.faqToggle}>{openFaq === idx ? '−' : '+'}</span>
              </div>
              {openFaq === idx && <p style={styles.faqAnswer}>{faq.a}</p>}
            </div>
          ))}
        </div>
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
  headerSection: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '12px',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '1.1rem',
    maxWidth: '650px',
    margin: '0 auto',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    marginBottom: '70px',
  },
  serviceCard: {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '16px',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    marginBottom: '10px',
  },
  cardDesc: {
    color: '#9ca3af',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px 0',
    flexGrow: 1,
  },
  featureItem: {
    fontSize: '0.88rem',
    color: '#cbd5e1',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  checkIcon: {
    color: '#ef4444',
    fontWeight: 'bold',
  },
  learnBtn: {
    width: '100%',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    padding: '10px 0',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  section: {
    marginBottom: '70px',
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
  amenitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
  amenityCard: {
    backgroundColor: '#1e293b',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #334155',
  },
  amenityIcon: {
    fontSize: '2rem',
  },
  amenityTitle: {
    fontSize: '1.1rem',
    margin: '12px 0 6px 0',
  },
  amenityDesc: {
    color: '#9ca3af',
    fontSize: '0.85rem',
    lineHeight: '1.4',
    margin: 0,
  },
  scheduleTable: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    border: '1px solid #334155',
    padding: '16px 24px',
    maxWidth: '700px',
    margin: '0 auto',
  },
  scheduleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
    borderBottom: '1px solid #334155',
  },
  dayText: {
    fontSize: '1rem',
    color: '#f3f4f6',
  },
  classesText: {
    margin: '4px 0 0 0',
    color: '#9ca3af',
    fontSize: '0.85rem',
  },
  hoursBadge: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    color: '#ef4444',
    border: '1px solid #ef4444',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
  faqList: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  faqItem: {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '8px',
    padding: '16px 20px',
    marginBottom: '12px',
    cursor: 'pointer',
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '600',
    fontSize: '1rem',
  },
  faqToggle: {
    color: '#ef4444',
    fontSize: '1.2rem',
  },
  faqAnswer: {
    color: '#9ca3af',
    fontSize: '0.9rem',
    marginTop: '10px',
    lineHeight: '1.5',
  },
};