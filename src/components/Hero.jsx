import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { STATS, TECH_ICONS } from "../data/portfolio";

function TypewriterText({ words }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer;

    function tick() {
      const current = words[wordIdx];
      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? 55 : 85);
    }

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className={styles.typewriter}>
      <span ref={elRef} />
      <span className={styles.cursor}>|</span>
    </span>
  );
}

export default function Hero({ onResumeClick }) {
  return (
    <section className={styles.hero}>
      {/* Background noise mesh */}
      <div className={styles.mesh} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for LIA/Praktik, Freelance & Full-time
          </div>

          <h1 className={styles.heading}>
            Hi, I'm <span className="gradient-text">Prasoon</span>
            <span className={styles.typewriterLine}>
              <TypewriterText
                words={[
                  "Frontend Developer",
                  "UI/UX Enthusiast",
                  "React Developer",
                  "LIA Seeking",
                ]}
              />
            </span>
          </h1>

          <p className={styles.subtitle}>
            A Frontend Developer student at Jensen Yrkeshögskola with hands-on
            experience building full-stack projects. Passionate about clean
            code, great design, and currently seeking LIA internship
            opportunities.
          </p>

          <div className={styles.actions}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <button className="btn btn-outline" onClick={onResumeClick}>
              View Resume
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            </button>
          </div>

          {/* <div className={styles.socials}>
            {[
              { label: 'GitHub', href: 'https://github.com', icon: <GithubIcon /> },
              { label: 'LinkedIn', href: 'https://linkedin.com', icon: <LinkedInIcon /> },
              { label: 'Twitter', href: 'https://twitter.com', icon: <TwitterIcon /> },
            ].map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label={label}>
                {icon}
              </a>
            ))}
          </div> */}
        </div>

        <div className={styles.right}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarRing} />
            <div className={styles.avatar}>
              <span className={styles.avatarInitials}>P</span>
            </div>
            <div className={styles.floatCard1}>
              <span>⚛️</span>
              <span>React Developer</span>
            </div>
            <div className={styles.floatCard2}>
              <span>✦</span>
              <span>UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      {/* <div className={styles.statsStrip}>
        <div className="container">
          <div className={styles.stats}>
            {STATS.map(({ label, value }) => (
              <div key={label} className={styles.statItem}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Tech ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...TECH_ICONS, ...TECH_ICONS].map(({ name, icon }, i) => (
            <span key={i} className={styles.tickerItem}>
              <span>{icon}</span>
              <span>{name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// function GithubIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
//     </svg>
//   );
// }

// function LinkedInIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   );
// }

// function TwitterIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//     </svg>
//   );
// }
