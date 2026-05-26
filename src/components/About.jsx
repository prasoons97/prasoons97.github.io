import { useInView } from "../hooks/useInView";
import styles from "./About.module.css";
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaGlobe } from "react-icons/fa";

const FACTS = [
  { icon: <FaGraduationCap size={18} />, label: "Education", value: "Jensen Yrkeshögskola" },
  { icon: <FaMapMarkerAlt size={18} />, label: "Location", value: "Lund, Sweden" },
  { icon: <FaBriefcase size={18} />, label: "Status", value: "Fresher / Open to Work" },
  { icon: <FaGlobe size={18} />, label: "Languages", value: "English, Swedish" },
];

const INTERESTS = [
  "Personal Projects",
  "CSS Experiments",
  "Figma & UI Design",
  "Clean Code",
  "Frontend Trends",
  "Generative AI",
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className="container">
        <div className={`${styles.grid} ${inView ? styles.visible : ""}`}>
          {/* Left – Image placeholder */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <img
                src="/image.jpeg"
                alt="Profile"
                className={styles.profileImage}
              />
              <div className={styles.imageDeco1} />
              <div className={styles.imageDeco2} />
            </div>
          </div>

          {/* Right – Text content */}
          <div className={styles.textCol}>
            <p className="section-eyebrow">About Me</p>
            <h2 className="section-title">
              Turning ideas into{" "}
              <span className="gradient-text">pixel-perfect</span> digital
              experiences
            </h2>
            <p className={styles.bio}>
              I'm a Frontend Developer based in Lund with a passion for
              creating web experiences that feel fast, look beautiful, and work
              for everyone. I work with the React ecosystem and have a strong
              eye for design — which means I bridge the gap between dev and
              design in any team I join.
            </p>
            <p className={styles.bio}>
              When I'm not coding, you'll find me building personal projects,
              exploring new frontend techniques, or sketching UI ideas in Figma.
              I believe great software starts with curiosity, consistency, and
              a willingness to keep learning.
            </p>

            <div className={styles.facts}>
              {FACTS.map(({ icon, label, value }) => (
                <div key={label} className={styles.factItem}>
                  <span className={styles.factIcon}>{icon}</span>
                  <div>
                    <span className={styles.factLabel}>{label}</span>
                    <span className={styles.factValue}>{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.interests}>
              <span className={styles.interestLabel}>Interests:</span>
              {INTERESTS.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
