import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 'basic',
    name: 'Basic Access',
    price: 'PKR 5,000',
    period: '/ month',
    badge: 'Starter',
    features: [
      'Full Gym Floor Access',
      'Locker Room & Shower Access',
      '1 Complimentary Assessment',
      'Standard Machine Access'
    ],
    notIncluded: ['Group Classes', 'Personal Trainer', 'Sauna Access']
  },
  {
    id: 'pro',
    name: 'Pro Pass',
    price: 'PKR 9,000',
    period: '/ month',
    badge: 'Most Popular',
    popular: true,
    features: [
      'Full Gym Floor Access',
      'Unlimited Group Fitness Classes',
      '1-on-1 Personal Trainer Orientation',
      'Customized Diet Consultation',
      'Sauna & Steam Room Access'
    ],
    notIncluded: ['Dedicated 1-on-1 Sessions']
  },
  {
    id: 'vip',
    name: 'VIP Elite',
    price: 'PKR 20,000',
    period: '/ month',
    badge: 'Ultimate',
    features: [
      'All Pro Pass Perks Included',
      '12 Personal Training Sessions / Month',
      'Custom Diet & Supplement Blueprint',
      'Priority Locker & Machine Booking',
      '2 Guest Passes per Month'
    ],
    notIncluded: []
  }
];

export default function Subscription() {


  
  const navigate = useNavigate(); // Add this line
  
  // ... rest of your states
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={styles.container}>
      {/* Header Banner */}
      <header style={styles.header}>
        <span style={styles.tagline}>MEMBERSHIP PLANS & PRICING</span>
        <h1 style={styles.title}>Choose Your Fitness Journey</h1>
        <p style={styles.subtitle}>
          Unlock full access to Karachi's premier training facility. Select a plan below that best fits your goals.
        </p>

        {/* Billing Cycle Toggle */}
        <div style={styles.toggleWrapper}>
          <button
            onClick={() => setBillingCycle('monthly')}
            style={{
              ...styles.toggleBtn,
              ...(billingCycle === 'monthly' ? styles.activeToggle : {})
            }}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            style={{
              ...styles.toggleBtn,
              ...(billingCycle === 'yearly' ? styles.activeToggle : {})
            }}
          >
            Yearly Billing <span style={styles.saveBadge}>Save 20%</span>
          </button>
        </div>
      </header>

      {!isSubmitted ? (
        <>
          {/* Plan Cards Grid */}
          <div style={styles.grid}>
            {plans.map((plan) => {
              const basePrice = parseInt(plan.price.replace(/[^\d]/g, ''));
              const finalPrice = billingCycle === 'yearly'
                ? `PKR ${(basePrice * 0.8).toLocaleString()}`
                : plan.price;

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  style={{
                    ...styles.card,
                    ...(plan.popular ? styles.popularCard : {}),
                    ...(selectedPlan === plan.id ? styles.selectedCard : {})
                  }}
                >
                  {plan.badge && (
                    <span
                      style={{
                        ...styles.badge,
                        backgroundColor: plan.popular ? '#ef4444' : '#334155'
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <h3 style={styles.planName}>{plan.name}</h3>
                  <div style={styles.priceContainer}>
                    <span style={styles.price}>{finalPrice}</span>
                    <span style={styles.period}>{plan.period}</span>
                  </div>

                  <ul style={styles.featureList}>
                    {plan.features.map((feat, idx) => (
                      <li key={idx} style={styles.featureItem}>
                        <span style={styles.checkIcon}>✓</span> {feat}
                      </li>
                    ))}
                    {plan.notIncluded.map((feat, idx) => (
                      <li key={idx} style={styles.disabledItem}>
                        <span style={styles.crossIcon}>✕</span> {feat}
                      </li>
                    ))}
                  </ul>
<button
  onClick={(e) => {
    e.stopPropagation(); // Prevents triggering any card click events
    setSelectedPlan(plan.id);
    navigate('/membership', { state: { selectedPlan: plan, billingCycle } });
  }}
  style={{
    ...styles.selectBtn,
    backgroundColor: selectedPlan === plan.id ? '#ef4444' : '#0f172a'
  }}
>
  {selectedPlan === plan.id ? 'Selected Plan' : 'Select Plan'}
</button>
                </div>
              );
            })}
          </div>

          {/* Checkout & Registration Form */}
          <div style={styles.checkoutSection}>
            <h2 style={styles.checkoutTitle}>Complete Your Membership Setup</h2>
            <p style={styles.checkoutSub}>
              Selected Tier:{' '}
              <strong style={{ color: '#ef4444' }}>
                {plans.find((p) => p.id === selectedPlan)?.name} ({billingCycle})
              </strong>
            </p>

           
          </div>
        </>
      ) : (
        /* Confirmation Screen */
        <div style={styles.successCard}>
          <div style={styles.successIcon}>🎉</div>
          <h2>Subscription Successfully Submitted!</h2>
          <p style={styles.successText}>
            Thank you, <strong>{formData.name}</strong>. Your request for the{' '}
            <strong>{plans.find((p) => p.id === selectedPlan)?.name}</strong> plan has been registered. Our representative will contact you shortly via WhatsApp or phone to finalize your membership pass.
          </p>
          <button onClick={() => setIsSubmitted(false)} style={styles.resetBtn}>
            Manage or Modify Plan
          </button>
        </div>
      )}
    </div>
  );
}

// Inline Styling
const styles = {
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#f3f4f6',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  tagline: {
    color: '#ef4444',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '1.1rem',
    maxWidth: '650px',
    margin: '0 auto 24px auto',
  },
  toggleWrapper: {
    display: 'inline-flex',
    backgroundColor: '#1e293b',
    padding: '4px',
    borderRadius: '30px',
    gap: '4px',
    border: '1px solid #334155',
  },
  toggleBtn: {
    padding: '8px 20px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#94a3b8',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  activeToggle: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  saveBadge: {
    backgroundColor: '#16a34a',
    color: '#fff',
    fontSize: '0.75rem',
    padding: '2px 6px',
    borderRadius: '8px',
    marginLeft: '4px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '50px',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '28px 20px',
    border: '2px solid transparent',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
  },
  popularCard: {
    borderColor: '#ef4444',
  },
  selectedCard: {
    backgroundColor: '#0f172a',
    borderColor: '#ef4444',
    boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
  },
  badge: {
    position: 'absolute',
    top: '-12px',
    right: '20px',
    color: '#fff',
    fontSize: '0.75rem',
    padding: '4px 12px',
    borderRadius: '12px',
    fontWeight: 'bold',
  },
  planName: {
    fontSize: '1.4rem',
    margin: '0 0 12px 0',
  },
  priceContainer: {
    marginBottom: '20px',
  },
  price: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#38bdf8',
  },
  period: {
    fontSize: '0.9rem',
    color: '#9ca3af',
    marginLeft: '4px',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flexGrow: 1,
  },
  featureItem: {
    fontSize: '0.9rem',
    color: '#cbd5e1',
  },
  disabledItem: {
    fontSize: '0.9rem',
    color: '#475569',
  },
  checkIcon: {
    color: '#ef4444',
    fontWeight: 'bold',
    marginRight: '6px',
  },
  crossIcon: {
    color: '#475569',
    marginRight: '6px',
  },
  selectBtn: {
    padding: '12px',
    color: '#fff',
    border: '1px solid #334155',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  },
  checkoutSection: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '32px',
    maxWidth: '650px',
    margin: '0 auto',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
  },
  checkoutTitle: {
    fontSize: '1.5rem',
    margin: '0 0 4px 0',
    textAlign: 'center',
  },
  checkoutSub: {
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '0.9rem',
    color: '#cbd5e1',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #334155',
    backgroundColor: '#0f172a',
    color: '#fff',
    fontSize: '0.95rem',
  },
  submitBtn: {
    padding: '14px',
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  },
  successCard: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '40px 24px',
    textAlign: 'center',
    maxWidth: '550px',
    margin: '0 auto',
  },
  successIcon: {
    fontSize: '3.5rem',
    marginBottom: '12px',
  },
  successText: {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  resetBtn: {
    padding: '12px 24px',
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};