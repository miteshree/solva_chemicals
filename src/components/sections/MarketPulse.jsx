import { useMemo, useState } from "react";
import { pulseTopics } from "../../assets/js/content.js";
import useReveal from "../../assets/js/hooks/useReveal.js";
import styles from "./marketpulse.module.css";

const allTag = "All";

export default function MarketPulse() {
  const { ref, visible } = useReveal({ threshold: 0.1 });
  const tags = useMemo(() => {
    const set = new Set(pulseTopics.map((t) => t.tag));
    return [allTag, ...Array.from(set)];
  }, []);
  const [active, setActive] = useState(allTag);

  const filtered = useMemo(() => {
    if (active === allTag) return pulseTopics;
    return pulseTopics.filter((t) => t.tag === active);
  }, [active]);

  return (
    <section id="market-pulse" className="section">
      <div className="container">
        <div className={styles.head}>
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> Market Pulse
            </div>
            <h2 className="h2">Trends that shape polymer & chemical procurement.</h2>
            <p className="lead">
              Practical signals we watch to help customers plan substitutions, lanes, and risk.
            </p>
          </div>

          <div className={styles.chips} aria-label="Filter topics">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`${styles.chip} ${active === t ? styles.active : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          <div className={`${styles.side} card`}>
            <div className={styles.sideTop}>
              <div className={styles.sideTitle}>How we use this</div>
              <div className={styles.sideSub}>
                We align supply options with your constraints—spec, compliance, timing, and
                cost-to-serve.
              </div>
            </div>
            <div className={styles.sideList}>
              <div className={styles.sideItem}>
                <span className={styles.bullet} aria-hidden="true" /> Suggest alternates when grades
                tighten
              </div>
              <div className={styles.sideItem}>
                <span className={styles.bullet} aria-hidden="true" /> Coordinate documentation early
              </div>
              <div className={styles.sideItem}>
                <span className={styles.bullet} aria-hidden="true" /> Select lanes to reduce delays
              </div>
              <div className={styles.sideItem}>
                <span className={styles.bullet} aria-hidden="true" /> Keep QA/receiving surprises low
              </div>
            </div>
            <a className={styles.sideCta} href="#contact">
              Share your spec → get options
            </a>
          </div>

          <div className={styles.cards}>
            {filtered.map((t) => (
              <article key={t.title} className={`${styles.topic} card`}>
                <div className={styles.topicTop}>
                  <span className={styles.tag}>{t.tag}</span>
                  <span className={styles.spark} aria-hidden="true" />
                </div>
                <div className={styles.topicTitle}>{t.title}</div>
                <div className={styles.topicDesc}>{t.desc}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

