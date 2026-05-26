import { useInView } from '../hooks/useInView';
import { EXPERIENCE } from '../data/portfolio';
import styles from './Experience.module.css';

function TimelineItem({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`${styles.item} ${inView ? styles.itemVisible : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={styles.dot}>
        {item.current && <span className={styles.dotPulse} />}
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.role}>{item.role}</h3>
            <span className={styles.company}>{item.company}</span>
          </div>
          <div className={styles.periodWrap}>
            <span className={`${styles.period} ${item.current ? styles.periodCurrent : ''}`}>
              {item.current && <span className={styles.liveIndicator} />}
              {item.period}
            </span>
          </div>
        </div>

        <p className={styles.desc}>{item.desc}</p>

        <div className={styles.tags}>
          {item.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <div className={`${styles.header} ${inView ? styles.visible : ''}`} ref={ref}>
          <p className="section-eyebrow">Journey</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-desc">
            My professional journey so far — each role levelling up my skills and perspective.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} />
          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={item.role} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
