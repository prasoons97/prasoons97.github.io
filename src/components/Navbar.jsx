import { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { NAV_LINKS } from '../data/portfolio';
import styles from './Navbar.module.css';

function ResumeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

export default function Navbar({ onResumeClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(['about', 'skills', 'projects', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`}>
        <a href="#" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.logoBracket}>&lt;</span>
          Prasoon
          <span className={styles.logoBracket}>/&gt;</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            return (
              <li key={href}>
                <button
                  className={`${styles.link} ${active === id ? styles.activeLink : ''}`}
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          className={`btn btn-primary ${styles.cta}`}
          onClick={onResumeClick}
        >
          <ResumeIcon />
          View Resume
        </button>

        <button
          className={`${styles.hamburger} ${styles.hamburgerResume}`}
          onClick={onResumeClick}
          aria-label="View resume"
        >
          <ResumeIcon />
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
        </button>
      </nav>
    </header>
  );
}
