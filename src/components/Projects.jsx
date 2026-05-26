import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/portfolio";
import styles from "./Projects.module.css";

// const FILTERS = ["All", "Frontend", "Full Stack", "Backend"];
const FILTERS = ["All", "Frontend", "Full Stack"];

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`${styles.card} ${inView ? styles.cardVisible : ""}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      {/* Colored top bar */}
      <div className={styles.cardBar} style={{ background: project.color }} />

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <div
            className={styles.cardIconWrap}
            style={{
              background: `${project.color}18`,
              border: `1px solid ${project.color}30`,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={project.color}
              strokeWidth="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>

          <span className={styles.projectType}>{project.type}</span>
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.desc}</p>

        <div className={styles.cardTags}>
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.cardStats}>
          <span className={styles.stat}>
            <StarIcon />
            {project.stats.stars}
          </span>
          <span className={styles.stat}>
            <ForkIcon />
            {project.stats.forks}
          </span>
        </div>

        <div className={styles.cardLinks}>
          <a
            href={project.links.github}
            className={styles.cardLink}
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          {/* <a
            href={project.links.live}
            className={`${styles.cardLink} ${styles.cardLinkPrimary}`}
            aria-label="Live demo"
          >
            <ExternalIcon />
          </a> */}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { ref, inView } = useInView();

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div
          className={`${styles.header} ${inView ? styles.visible : ""}`}
          ref={ref}
        >
          <p className="section-eyebrow">Portfolio</p>
          <div className={styles.headerRow}>
            <div>
              <h2 className="section-title">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="section-desc">
                A selection of things I've built — from full-stack apps to
                polished frontend experiments.
              </p>
            </div>
            <a
              href="https://github.com/prasoons97?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              All on GitHub
              <ExternalIcon />
            </a>
          </div>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className={styles.filterCount}>
                {f === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.type === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9M12 12v3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}
