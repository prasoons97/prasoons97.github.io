import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollTop(); }}>
            <span className={styles.logoBracket}>&lt;</span>
            Prasoon
            <span className={styles.logoBracket}>/&gt;</span>
          </a>
          <p className={styles.tagline}>Frontend Developer · React Developer · UI Enthusiast</p>
        </div>

        <div className={styles.center}>
          {['about', 'skills', 'projects', 'contact'].map((id) => (
            <button
              key={id}
              className={styles.navLink}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        <button className={styles.backTop} onClick={scrollTop} aria-label="Scroll to top">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      <div className={styles.bottom}>
        <p>© {year} Prasoon. Designed &amp; built with React + Vite.</p>
      </div>
    </footer>
  );
}
