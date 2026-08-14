import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialTrainers = [
  {
    id: '1',
    name: 'Ali Khan',
    role: 'Certified Fitness Coach',
    experience: '6+ Years Experience',
    fee: 'PKR 8,000 / month',
    bio: 'Specializes in high-intensity interval training (HIIT), body transformation, and personalized weight-loss meal plans.',
    category: 'Weight Loss',
    tags: ['Fat Loss', 'HIIT', 'Metabolic Conditioning'],
    certifications: ['NASM Certified Personal Trainer', 'ACE Nutrition Specialist'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Ahmed Raza',
    role: 'Strength & Conditioning Specialist',
    experience: '8+ Years Experience',
    fee: 'PKR 12,000 / month',
    bio: 'Dedicated to helping athletes and powerlifters build raw strength, correct form, and break through personal strength plateaus.',
    category: 'Strength',
    tags: ['Powerlifting', 'Hypertrophy', 'Form Correction'],
    certifications: ['CSCS Certified Strength Coach', 'USA Powerlifting Coach'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Sara Ahmed',
    role: 'Yoga & Mobility Instructor',
    experience: '5+ Years Experience',
    fee: 'PKR 7,500 / month',
    bio: 'Focuses on posture improvement, active recovery, flexibility, and mindfulness practices for stress reduction.',
    category: 'Yoga',
    tags: ['Vinyasa Yoga', 'Joint Mobility', 'Core Stability'],
    certifications: ['RYT 500-Hour Yoga Teacher', 'Functional Range Conditioning'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Hamza Malik',
    role: 'Bodybuilding & Aesthetics Coach',
    experience: '7+ Years Experience',
    fee: 'PKR 10,000 / month',
    bio: 'Expert in muscle hypertrophy, contest prep, symmetry building, and structured bodybuilding protocols.',
    category: 'Strength',
    tags: ['Muscle Gain', 'Hypertrophy', 'Posing Coach'],
    certifications: ['IFBB Pro Certified', 'ISSA Master Trainer'],
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    name: 'Zainab Fatima',
    role: 'CrossFit & Functional Fitness Coach',
    experience: '4+ Years Experience',
    fee: 'PKR 9,000 / month',
    bio: 'Helps athletes build endurances, stamina, explosive power, and functional athletic movement.',
    category: 'Weight Loss',
    tags: ['CrossFit', 'Calisthenics', 'Stamina Training'],
    certifications: ['CrossFit Level 2 Trainer', 'EXOS Performance Specialist'],
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '6',
    name: 'Dr. Usman Tariq',
    role: 'Rehab & Injury Prevention Specialist',
    experience: '10+ Years Experience',
    fee: 'PKR 15,000 / month',
    bio: 'Specialized physical therapist offering post-injury rehabilitation, spinal alignment, and corrective exercise.',
    category: 'Yoga',
    tags: ['Physiotherapy', 'Post-Op Rehab', 'Corrective Movement'],
    certifications: ['Doctor of Physical Therapy (DPT)', 'Certified Athletic Trainer'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400'
  }
];

export default function Trainers() {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredTrainers = filter === 'All' 
    ? initialTrainers 
    : initialTrainers.filter(t => t.category === filter);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Meet Our Expert Trainers</h1>
        <p style={styles.subtitle}>
          Work with certified, world-class coaches committed to helping you reach your health and performance goals.
        </p>

        {/* Category Filters */}
        <div style={styles.filterGroup}>
          {['All', 'Strength', 'Weight Loss', 'Yoga'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                ...styles.filterBtn,
                ...(filter === cat ? styles.activeFilterBtn : {})
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Trainers Grid */}
      <div style={styles.grid}>
        {filteredTrainers.map((trainer) => (
          <div key={trainer.id} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={trainer.image} alt={trainer.name} style={styles.image} />
              <span style={styles.badge}>{trainer.experience}</span>
            </div>

            <div style={styles.cardBody}>
              <div style={styles.nameHeader}>
                <div>
                  <h2 style={styles.trainerName}>{trainer.name}</h2>
                  <p style={styles.role}>{trainer.role}</p>
                </div>
                <div style={styles.feeContainer}>
                  <span style={styles.feeLabel}>Trainer Fee</span>
                  <span style={styles.feeAmount}>{trainer.fee}</span>
                </div>
              </div>

              <p style={styles.bio}>{trainer.bio}</p>

              <div style={styles.tagsContainer}>
                {trainer.tags.map((tag, idx) => (
                  <span key={idx} style={styles.tag}>{tag}</span>
                ))}
              </div>

              <div style={styles.certSection}>
                <h4 style={styles.certTitle}>Certifications:</h4>
                <ul style={styles.certList}>
                  {trainer.certifications.map((cert, idx) => (
                    <li key={idx} style={styles.certItem}>✓ {cert}</li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => navigate('/membership', { state: { trainer } })}
                style={styles.bookBtn}
              >
                Book a Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#f3f4f6',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '1.1rem',
    maxWidth: '650px',
    margin: '0 auto 24px auto',
  },
  filterGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  filterBtn: {
    padding: '8px 20px',
    borderRadius: '20px',
    border: '1px solid #334155',
    backgroundColor: '#1e293b',
    color: '#94a3b8',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.2s',
  },
  activeFilterBtn: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    borderColor: '#ef4444',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '28px',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #334155',
  },
  imageWrapper: {
    position: 'relative',
    height: '240px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    color: '#38bdf8',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    border: '1px solid #38bdf8',
  },
  cardBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  nameHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
  },
  trainerName: {
    fontSize: '1.4rem',
    margin: 0,
    fontWeight: '700',
  },
  role: {
    color: '#ef4444',
    fontSize: '0.85rem',
    margin: '4px 0 0 0',
    fontWeight: '600',
  },
  feeContainer: {
    textAlign: 'right',
    backgroundColor: '#0f172a',
    padding: '6px 10px',
    borderRadius: '6px',
    border: '1px solid #334155',
  },
  feeLabel: {
    display: 'block',
    fontSize: '0.7rem',
    color: '#94a3b8',
    textTransform: 'uppercase',
  },
  feeAmount: {
    fontSize: '0.95rem',
    fontWeight: 'bold',
    color: '#38bdf8',
  },
  bio: {
    color: '#cbd5e1',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    marginBottom: '16px',
  },
  tagsContainer: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  tag: {
    backgroundColor: '#0f172a',
    color: '#94a3b8',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '0.75rem',
  },
  certSection: {
    marginBottom: '20px',
    flexGrow: 1,
  },
  certTitle: {
    fontSize: '0.85rem',
    color: '#cbd5e1',
    margin: '0 0 6px 0',
  },
  certList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  certItem: {
    fontSize: '0.8rem',
    color: '#94a3b8',
    marginBottom: '4px',
  },
  bookBtn: {
    padding: '12px',
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    fontSize: '0.95rem',
  },
};