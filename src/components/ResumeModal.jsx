import { useEffect, useRef } from 'react';
import styles from './ResumeModal.module.css';

const RESUME = {
  name: 'Prasoon',
  title: 'Frontend Developer',
  contact: {
    email: 'prasoon@example.com',
    phone: '+91 98765 43210',
    location: 'New Delhi, India',
    github: 'github.com/prasoon',
    linkedin: 'linkedin.com/in/prasoon',
    portfolio: 'prasoon.dev',
  },
  summary:
    'Frontend Developer specializing in React and modern JavaScript. I build mobile-first, responsive interfaces with a strong eye for detail and a spec-driven workflow that keeps teams aligned from day one.',
  experience: [
    {
      role: 'Frontend Developer Intern',
      company: 'TechStart Labs',
      period: 'Jun 2024 – Present',
      points: [
        'Built mobile-first React dashboards with Tailwind CSS for 3 SaaS clients',
        'Implemented optimistic UI patterns — zero loading spinners on common actions',
        'Followed spec-driven development: API contracts signed off before any frontend code',
      ],
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Jan 2023 – May 2024',
      points: [
        'Delivered 12+ responsive websites and React SPAs for clients',
        'Built full-stack apps with Express.js + Firebase backends',
        'All projects shipped mobile-first with cross-browser responsive layouts',
      ],
    },
  ],
  skills: {
    Frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'Advanced CSS', 'Tailwind CSS', 'Responsive Design', 'Mobile-First CSS', 'Optimistic UI'],
    Backend: ['Node.js', 'Express.js', 'Firebase', 'REST APIs'],
    'Methods & Tools': ['Spec Driven Development', 'Git & GitHub', 'Vite', 'Figma'],
  },
  projects: [
    {
      name: 'ShopVerse E-Commerce',
      tech: 'React · Firebase · Tailwind CSS · Node.js',
      desc: 'Full-stack store with optimistic UI cart, Firebase auth and mobile-first responsive design.',
    },
    {
      name: 'DevConnect API',
      tech: 'Node.js · Express.js · Spec Driven Dev',
      desc: 'Spec-first REST API — every endpoint documented before implementation.',
    },
    {
      name: 'TaskFlow',
      tech: 'React · Firebase · Tailwind CSS',
      desc: 'Kanban board with drag-and-drop, optimistic updates and Firebase real-time sync.',
    },
  ],
  education: {
    degree: 'B.Tech — Computer Science',
    school: 'Placeholder University',
    period: '2021 – 2025',
  },
};

export default function ResumeModal({ onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handlePrint = () => window.print();

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-label="Resume">
      <div className={styles.sheet}>
        {/* Toolbar — hidden on print */}
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <span className={styles.toolbarTitle}>Resume</span>
            <span className={styles.toolbarSub}>— Prasoon, Frontend Developer</span>
          </div>
          <div className={styles.toolbarRight}>
            <button className={styles.printBtn} onClick={handlePrint}>
              <PrintIcon />
              Download PDF
            </button>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close resume">
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Resume paper */}
        <div className={styles.paper} ref={contentRef} id="resume-print-area">
          {/* Header */}
          <header className={styles.resumeHeader}>
            <div className={styles.nameBlock}>
              <h1 className={styles.resumeName}>{RESUME.name}</h1>
              <p className={styles.resumeTitle}>{RESUME.title}</p>
            </div>
            <div className={styles.contactBlock}>
              <ContactLine icon="✉">{RESUME.contact.email}</ContactLine>
              <ContactLine icon="📞">{RESUME.contact.phone}</ContactLine>
              <ContactLine icon="📍">{RESUME.contact.location}</ContactLine>
              <ContactLine icon="⬡">{RESUME.contact.github}</ContactLine>
              <ContactLine icon="in">{RESUME.contact.linkedin}</ContactLine>
              <ContactLine icon="🌐">{RESUME.contact.portfolio}</ContactLine>
            </div>
          </header>

          <div className={styles.divider} />

          {/* Summary */}
          <Section title="Summary">
            <p className={styles.summary}>{RESUME.summary}</p>
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <div className={styles.skillsGrid}>
              {Object.entries(RESUME.skills).map(([cat, items]) => (
                <div key={cat} className={styles.skillGroup}>
                  <span className={styles.skillCat}>{cat}</span>
                  <span className={styles.skillItems}>{items.join(' · ')}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Experience */}
          <Section title="Experience">
            {RESUME.experience.map((job) => (
              <div key={job.role} className={styles.expItem}>
                <div className={styles.expHeader}>
                  <div>
                    <span className={styles.expRole}>{job.role}</span>
                    <span className={styles.expCompany}> — {job.company}</span>
                  </div>
                  <span className={styles.expPeriod}>{job.period}</span>
                </div>
                <ul className={styles.expPoints}>
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </Section>

          {/* Projects */}
          <Section title="Projects">
            {RESUME.projects.map((p) => (
              <div key={p.name} className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectName}>{p.name}</span>
                  <span className={styles.projectTech}>{p.tech}</span>
                </div>
                <p className={styles.projectDesc}>{p.desc}</p>
              </div>
            ))}
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className={styles.expHeader}>
              <div>
                <span className={styles.expRole}>{RESUME.education.degree}</span>
                <span className={styles.expCompany}> — {RESUME.education.school}</span>
              </div>
              <span className={styles.expPeriod}>{RESUME.education.period}</span>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function ContactLine({ icon, children }) {
  return (
    <span className={styles.contactLine}>
      <span className={styles.contactIcon}>{icon}</span>
      {children}
    </span>
  );
}

function PrintIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9V2h12v7" />
      <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
