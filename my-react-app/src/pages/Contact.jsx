import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you! Your message has been saved successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message: ' + (result.error || 'Server error'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Could not connect to the server. Please ensure the Python backend is running.');
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Banner */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Get In Touch With Us</h1>
        <p style={styles.subtitle}>
          Have questions about our training programs, memberships, or services? We are here to help you every step of the way.
        </p>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <div style={styles.gridContainer}>
        {/* Contact Form */}
        <div style={styles.card}>
          <h2 style={styles.cardHeader}>Send Us a Message</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Membership Inquiry / General Question"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                style={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>

        {/* Info & Details Section */}
        <div style={styles.infoColumn}>
          {/* Quick Contact Info */}
          <div style={styles.card}>
            <h2 style={styles.cardHeader}>Contact Information</h2>
            <div style={styles.infoItem}>
              <span style={styles.icon}>📞</span>
              <div>
                <strong>Phone & WhatsApp:</strong>
                <p style={styles.infoText}>+92 300 1234567</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <span style={styles.icon}>✉️</span>
              <div>
                <strong>Email Us:</strong>
                <p style={styles.infoText}>info@yourdomain.com</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <span style={styles.icon}>📍</span>
              <div>
                <strong>Location:</strong>
                <p style={styles.infoText}>Suite 402, Business Bay, Main Shahrah-e-Faisal, Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div style={styles.card}>
            <h2 style={styles.cardHeader}>⏰ Business Hours</h2>
            <ul style={styles.hoursList}>
              <li><span>Monday – Friday:</span> <strong>6:00 AM – 10:00 PM</strong></li>
              <li><span>Saturday:</span> <strong>8:00 AM – 8:00 PM</strong></li>
              <li><span>Sunday:</span> <strong>Rest Day (Closed)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Embedded Map Section */}
      <section style={styles.mapSection}>
        <h2 style={styles.sectionTitle}>Find Our Location</h2>
        <div style={styles.mapContainer}>
          <iframe
            title="Location Map"
            src="https://maps.google.com/maps?q=Karachi%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={styles.faqGrid}>
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>How quickly will I get a response?</h3>
            <p style={styles.faqAnswer}>We usually respond to all form submissions and emails within 24 business hours.</p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>Can I book a free trial session?</h3>
            <p style={styles.faqAnswer}>Yes! Mention "Free Trial Request" in your message subject, and our team will schedule a slot for you.</p>
          </div>
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
  hero: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    marginBottom: '20px',
  },
  cardHeader: {
    fontSize: '1.3rem',
    marginBottom: '20px',
    borderBottom: '1px solid #334155',
    paddingBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
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
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #475569',
    backgroundColor: '#0f172a',
    color: '#fff',
    fontSize: '0.95rem',
  },
  textarea: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #475569',
    backgroundColor: '#0f172a',
    color: '#fff',
    fontSize: '0.95rem',
    resize: 'vertical',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '10px',
  },
  infoColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    marginBottom: '16px',
  },
  icon: {
    fontSize: '1.5rem',
  },
  infoText: {
    margin: '4px 0 0 0',
    color: '#cbd5e1',
  },
  hoursList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    color: '#cbd5e1',
  },
  mapSection: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '16px',
    textAlign: 'center',
  },
  mapContainer: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
  },
  faqSection: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '30px',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  faqItem: {
    backgroundColor: '#0f172a',
    padding: '16px',
    borderRadius: '8px',
  },
  faqQuestion: {
    margin: '0 0 8px 0',
    fontSize: '1rem',
    color: '#60a5fa',
  },
  faqAnswer: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#9ca3af',
  },
};
