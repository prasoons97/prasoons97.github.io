import { useEffect, useRef } from "react";
import styles from "./ResumeModal.module.css";

const RESUME = {
  name: "Prasoon Singh",
  title: "Frontend Developer",
  contact: {
    email: "prasoon.frontend@gmail.com",
    phone: "+46 70 123 4567",
    location: "Lund, Sweden",
    github: "github.com/prasoons97",
    linkedin: "linkedin.com/in/prasoons97",
    portfolio: "prasoons97.github.io",
  },
  summary:
    "Frontend Developer student at Jensen Yrkeshögskola with hands-on experience building full-stack projects. Passionate about clean code, great design, and currently seeking LIA internship opportunities.",
  skills: {
    Frontend: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Mobile-First CSS",
      "TypeScript",
      "Testing / TDD",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Firebase / Firestore",
      "REST APIs",
      "SQL",
      "GraphQL",
    ],
    "Methods & Tools": [
      "Git & GitHub",
      "Figma / Wireframing",
      "UI/UX Design",
      "Accessibility (a11y)",
      "Agile / Scrum",
      "Vite",
      "Debugging",
    ],
  },
  projects: [
    {
      name: "WORN",
      tech: "React · Node.js · Firebase · React Query · Express.js",
      desc: "Fashion e-commerce store with category filters, cart via localStorage, optimistic checkout updates, and real-time Firestore order tracking.",
    },
    {
      name: "Stitch",
      tech: "React · TypeScript · Tailwind CSS · pdf-lib",
      desc: "Client-side PDF merger — drag, reorder, and merge PDFs entirely in the browser. No server, no uploads, zero tracking.",
    },
    {
      name: "iTask",
      tech: "React · Express.js · Firebase · Firestore",
      desc: "Full-stack todo app with real-time Firestore sync, create/update/delete tasks with a clean React frontend and Express.js REST backend.",
    },
  ],
  education: {
    degree: "Frontendutvecklare (YH)",
    school: "Jensen Yrkeshögskola",
    period: "2025 – 2027",
  },
};

export default function ResumeModal({ onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handlePrint = () => window.print();

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className={styles.sheet}>
        {/* Toolbar — hidden on print */}
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <span className={styles.toolbarTitle}>Resume</span>
            <span className={styles.toolbarSub}>
              — Prasoon, Frontend Developer
            </span>
          </div>
          <div className={styles.toolbarRight}>
            <button className={styles.printBtn} onClick={handlePrint}>
              <PrintIcon />
              Download PDF
            </button>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close resume"
            >
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
                  <span className={styles.skillItems}>{items.join(" · ")}</span>
                </div>
              ))}
            </div>
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
                <span className={styles.expRole}>
                  {RESUME.education.degree}
                </span>
                <span className={styles.expCompany}>
                  {" "}
                  — {RESUME.education.school}
                </span>
              </div>
              <span className={styles.expPeriod}>
                {RESUME.education.period}
              </span>
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
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9V2h12v7" />
      <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
