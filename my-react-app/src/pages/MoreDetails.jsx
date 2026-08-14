import React from 'react';

export default function MoreDetails() {
  const coreFeatures = [
    {
      title: "Personalized Training",
      desc: "Get custom workout plans tailored to your fitness goals by certified master coaches.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "24/7 Gym Access",
      desc: "Train on your schedule with round-the-clock secure keycard entry.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Nutritional Guidance",
      desc: "In-house nutritionists to create customized meal plans that complement your training.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const gymDetails = [
    {
      category: "Equipment & Strength Zone",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
      items: [
        "Hammer Strength free weights, power racks, and squat platforms",
        "Dedicated Olympic weightlifting and powerlifting area",
        "Comprehensive selectorized pin-loaded cable machines",
        "Dumbbell sets ranging up to 150 lbs"
      ]
    },
    {
      category: "Cardio & High Intensity",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      items: [
        "Interactive treadmills, stairmasters, and rowing machines",
        "Integrated digital screen monitors with Bluetooth audio setup",
        "Dedicated turf lane for sled pushes, sprints, and agility drills",
        "Skillmill curved treadmills & AirBikes for HIIT"
      ]
    },
    {
      category: "Group Fitness & Recovery",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
      items: [
        "Daily group classes: HIIT, Spin, Yoga, and Core Strength",
        "Infrared saunas and cold-plunge recovery tubs",
        "Luxury locker rooms with private showers and towel service",
        "Percussive therapy & massage gun stations"
      ]
    }
  ];

  const extraPerks = [
    {
      title: "In-Body Composition Analysis",
      desc: "Track muscle gains, body fat percentage, and metabolic rate monthly with medical-grade body scanners.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Smoothie & Protein Bar",
      desc: "Refuel post-workout with handcrafted protein shakes, fresh juices, and pre-workout drinks made on site.",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Mobile App Integration",
      desc: "Book class slots, track your workout stats, reserve personal training sessions, and unlock doors via phone.",
      image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Everything You Need to Reach Your Goals</h1>
        <p style={styles.heroSubtitle}>
          Discover all the perks, features, facilities, and services included with your Elite Fitness membership.
        </p>
      </section>

      {/* Main Core Features Grid */}
      <section style={styles.grid}>
        {coreFeatures.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.cardImage} />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Extended Gym Details Section */}
      <section style={styles.detailsSection}>
        <h2 style={styles.sectionHeader}>Facility Highlights & Zones</h2>
        <div style={styles.detailsGrid}>
          {gymDetails.map((sec, idx) => (
            <div key={idx} style={styles.detailCard}>
              <img src={sec.image} alt={sec.category} style={styles.detailImage} />
              <div style={styles.detailCardBody}>
                <h3 style={styles.categoryTitle}>{sec.category}</h3>
                <ul style={styles.list}>
                  {sec.items.map((point, pIdx) => (
                    <li key={pIdx} style={styles.listItem}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Exclusive Membership Perks */}
      <section style={styles.detailsSection}>
        <h2 style={styles.sectionHeader}>Exclusive Member Benefits</h2>
        <div style={styles.grid}>
          {extraPerks.map((perk, index) => (
            <div key={index} style={styles.card}>
              <img src={perk.image} alt={perk.title} style={styles.cardImage} />
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{perk.title}</h3>
                <p style={styles.cardDesc}>{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0c0f1d',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  hero: {
    textAlign: 'center',
    margin: '20px auto 40px',
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#94a3b8',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    maxWidth: '1100px',
    margin: '0 auto 50px',
  },
  card: {
    backgroundColor: '#161b2e',
    borderRadius: '12px',
    border: '1px solid #232942',
    overflow: 'hidden',
    textAlign: 'left',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '10px',
  },
  cardDesc: {
    color: '#94a3b8',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  detailsSection: {
    maxWidth: '1100px',
    margin: '0 auto 60px',
  },
  sectionHeader: {
    fontSize: '1.8rem',
    textAlign: 'center',
    marginBottom: '32px',
    color: '#ffffff',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  detailCard: {
    backgroundColor: '#161b2e',
    borderRadius: '12px',
    border: '1px solid #232942',
    overflow: 'hidden',
  },
  detailImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  detailCardBody: {
    padding: '24px',
  },
  categoryTitle: {
    fontSize: '1.2rem',
    color: '#ef4444',
    marginBottom: '16px',
  },
  list: {
    paddingLeft: '20px',
    margin: 0,
  },
  listItem: {
    color: '#cbd5e1',
    lineHeight: '1.8',
    fontSize: '0.95rem',
    marginBottom: '8px',
  },
};