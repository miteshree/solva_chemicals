import { solutions } from "../../assets/js/content.js";
import useReveal from "../../assets/js/hooks/useReveal.js";
import Icon from "../ui/Icon.jsx";
import styles from "./solutionsbento.module.css";

export default function SolutionsBento() {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  return (
    <section id="solutions" className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> Solutions
            </div>
            <h2 className="h2">Modern sourcing patterns, without the noise.</h2>
            <p className="lead">
              The best supply outcomes come from clear specs, disciplined documentation, and a
              logistics plan that fits your timeline.
            </p>
          </div>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          <div className={`${styles.hero} card`}>
            <div className={styles.heroKicker}>Bento workflow</div>
            <div className={styles.heroTitle}>From requirement → qualified supply option.</div>
            <div className={styles.heroDesc}>
              Share your target properties, destination, and constraints. We’ll propose options with
              documentation signals and practical next steps.
            </div>
            <div className={styles.heroRow}>
              <div className={styles.stat}>
                <div className={styles.statValue}>Specs</div>
                <div className={styles.statLabel}>First</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>Docs</div>
                <div className={styles.statLabel}>Ready</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>Lanes</div>
                <div className={styles.statLabel}>Planned</div>
              </div>
            </div>
            <a className={styles.heroCta} href="#contact">
              Start a quote request <Icon name="arrow" size={16} />
            </a>
          </div>

          {solutions.slice(0, 4).map((s) => (
            <div key={s.title} className={`${styles.item} card`}>
              <div className={styles.itemTitle}>{s.title}</div>
              <div className={styles.itemDesc}>{s.desc}</div>
            </div>
          ))}

          <div className={`${styles.wide} card`}>
            <div className={styles.wideTop}>
              <div className={styles.wideTitle}>A quality-first posture</div>
              <div className={styles.widePills}>
                <span className="pill">SDS</span>
                <span className="pill">CoA</span>
                <span className="pill">Packaging</span>
                <span className="pill">Traceability</span>
              </div>
            </div>
            <div className={styles.wideDesc}>
              We aim to reduce receiving surprises by aligning expectations before the shipment
              moves. If you need alternates, we’ll compare fit, constraints, and paperwork early.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

