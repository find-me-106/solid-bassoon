import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Subscriptions', path: '/subscription' },
    
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Brand Logo */}
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>⚡</span>
          <span>ELITE<span style={styles.logoHighlight}>FITNESS</span></span>
        </Link>

        {/* Navigation Links */}
        <nav style={styles.nav}>
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  ...styles.navLink,
                  ...(isActive ? styles.activeLink : {}),
                  ...(isHovered && !isActive ? styles.hoverLink : {}),
                }}
              >
                {link.name}
                {isActive && <div style={styles.activeDot} />}
              </Link>
            );
          })}
        </nav>
     </div>
    </header>
  );
}

// Inline CSS Styles
const styles = {
  header: {
    backgroundColor: '#0f172a',
    borderBottom: '1px solid #1e293b',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#ffffff',
    textDecoration: 'none',
    letterSpacing: '0.5px',
  },
  logoIcon: {
    fontSize: '1.5rem',
  },
  logoHighlight: {
    color: '#ef4444',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  navLink: {
    position: 'relative',
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    padding: '6px 0',
    transition: 'color 0.2s ease',
  },
  activeLink: {
    color: '#ffffff',
    fontWeight: '600',
  },
  hoverLink: {
    color: '#f3f4f6',
  },
  activeDot: {
    position: 'absolute',
    bottom: '-2px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '4px',
    height: '4px',
    backgroundColor: '#ef4444',
    borderRadius: '50%',
  }
}