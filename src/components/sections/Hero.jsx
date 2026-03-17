import { brand } from "../../assets/js/content.js";
import heroBg from "../../assets/images/hero-abstract.svg";
import useReveal from "../../assets/js/hooks/useReveal.js";
import Icon from "../ui/Icon.jsx";
import styles from "./hero.module.css";

export default function Hero() {
  const r1 = useReveal();
  const r2 = useReveal({ threshold: 0.08 });

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <div className={styles.grid}>
          <div
            ref={r1.ref}
            className={`${styles.left} reveal ${r1.visible ? "revealVisible" : ""}`}
          >
            <div className="pill">
              <span className={styles.pulseDot} aria-hidden="true" />
              Supply built for fast-moving markets
            </div>

            <h1 className={styles.h1}>{brand.tagline}</h1>
            <p className={styles.sub}>{brand.subtag}</p>

            <div className="btnRow">
              <a className="btnPrimary" href="#contact">
                Request a quote <Icon name="arrow" size={18} />
              </a>
              <a className="btnGhost" href="#capabilities">
                Explore capabilities
              </a>
            </div>

            <div className={styles.quickGrid}>
              <div className={styles.quickItem}>
                <div className={styles.quickTop}>Polymer resins</div>
                <div className={styles.quickBottom}>Prime • recycled • specialty</div>
              </div>
              <div className={styles.quickItem}>
                <div className={styles.quickTop}>Masterbatches</div>
                <div className={styles.quickBottom}>Additives • intermediates</div>
              </div>
              <div className={styles.quickItem}>
                <div className={styles.quickTop}>Documentation</div>
                <div className={styles.quickBottom}>SDS • CoA • traceability</div>
              </div>
              <div className={styles.quickItem}>
                <div className={styles.quickTop}>Logistics</div>
                <div className={styles.quickBottom}>Global lanes • export-ready</div>
              </div>
            </div>
          </div>

          <div
            ref={r2.ref}
            className={`${styles.right} reveal ${r2.visible ? "revealVisible" : ""}`}
          >
            <div className={`${styles.panel} card`}>
              <div className={styles.panelTop}>
                <div>
                  <div className={styles.panelKicker}>Today’s focus</div>
                  <div className={styles.panelTitle}>On-spec, on-time, on-paperwork.</div>
                </div>
                <div className={styles.panelBadge}>
                  <Icon name="spark" size={18} /> Responsive sourcing
                </div>
              </div>

              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>Multi-lane</div>
                  <div className={styles.metricLabel}>supply coverage</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>Spec-first</div>
                  <div className={styles.metricLabel}>match process</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>QA-ready</div>
                  <div className={styles.metricLabel}>docs & traceability</div>
                </div>
              </div>

              <div className={styles.panelBottom}>
                <div className={styles.note}>
                  Share your target grade/spec and destination. We’ll respond with availability,
                  documentation, and practical next steps.
                </div>
                <a className={styles.inlineLink} href="#market-pulse">
                  See what’s trending <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

