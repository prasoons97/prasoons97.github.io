import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SKILLS } from "../data/portfolio";
import styles from "./Skills.module.css";

const TABS = [
  { key: "frontend", label: "Frontend", emoji: "🖥️" },
  { key: "backend", label: "Backend", emoji: "⚙️" },
  { key: "tools", label: "Methods & Tools", emoji: "🛠️" },
];

const LEVEL_COLORS = {
  Confident: { bg: "#7c3aed22", text: "#a78bfa", border: "#7c3aed55" },
  Familiar: { bg: "#0ea5e922", text: "#38bdf8", border: "#0ea5e955" },
  Beginner: { bg: "#f59e0b22", text: "#fbbf24", border: "#f59e0b55" },
  Learning: { bg: "#10b98122", text: "#34d399", border: "#10b98155" },
};

function SkillCard({ name, level, color }) {
  const badge = LEVEL_COLORS[level];
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillDot} style={{ background: color }} />
      <span className={styles.skillName}>{name}</span>
      <span
        className={styles.skillBadge}
        style={{
          background: badge.bg,
          color: badge.text,
          border: `1px solid ${badge.border}`,
        }}
      >
        {level}
      </span>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const { ref, inView } = useInView();

  const currentSkills = SKILLS[activeTab];

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div
          className={`${styles.header} ${inView ? styles.visible : ""}`}
          ref={ref}
        >
          <p className="section-eyebrow">What I Know</p>
          <h2 className="section-title">
            My <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="section-desc">
            A blend of frontend fundamentals and full-stack curiosity — built
            through real projects, a two-year program at Jensen Yrkeshögskola,
            and a lot of late-night debugging sessions.
          </p>
        </div>

        <div className={styles.tabs}>
          {TABS.map(({ key, label, emoji }) => (
            <button
              key={key}
              className={`${styles.tab} ${activeTab === key ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(key)}
            >
              <span>{emoji}</span>
              {label}
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {currentSkills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>

        {/* Legend note */}
        <p className={styles.note}>
          💡 Confident in frontend fundamentals, building full-stack experience
          through real projects at Jensen Yrkeshögskola.
        </p>
      </div>
    </section>
  );
}
