import useReveal from "../../assets/js/hooks/useReveal.js";
import styles from "./globalreach.module.css";

const lanes = [
  { title: "North America", desc: "Responsive coverage for polymers and chemical inputs." },
  { title: "LATAM", desc: "Support for cross-border documentation and planning." },
  { title: "Europe", desc: "Qualified sourcing paths and compliant paperwork signals." },
  { title: "Asia", desc: "Multi-lane options with practical lead-time alignment." },
];

export default function GlobalReach() {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  return (
    <section id="global-reach" className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> Global Reach
            </div>
            <h2 className="h2">Multi-lane logistics with export-ready coordination.</h2>
            <p className="lead">
              We work with a partner network to align supply, paperwork, and lanes so you can keep
              production moving.
            </p>
          </div>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          <div className={`${styles.map} card`} aria-label="Global coverage map">
            <div className={styles.mapGlow} aria-hidden="true" />
            <div className={styles.mapTop}>
              <div className={styles.mapTitle}>Coverage snapshot</div>
              <div className={styles.pills}>
                <span className="pill">Air</span>
                <span className="pill">Ocean</span>
                <span className="pill">Truck</span>
                <span className="pill">Rail</span>
              </div>
            </div>

            <div className={styles.mapGrid} aria-hidden="true">
              {Array.from({ length: 70 }).map((_, i) => (
                <span key={i} className={styles.dot} />
              ))}
            </div>

            <div className={styles.mapStats}>
              <div className={styles.stat}>
                <div className={styles.statValue}>Incoterms</div>
                <div className={styles.statLabel}>aligned workflows</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>Docs</div>
                <div className={styles.statLabel}>handled early</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>Visibility</div>
                <div className={styles.statLabel}>practical updates</div>
              </div>
            </div>
          </div>

          <div className={`${styles.list} card`}>
            <div className={styles.listTitle}>Where we support lanes</div>
            <div className={styles.items}>
              {lanes.map((l) => (
                <div key={l.title} className={styles.item}>
                  <div className={styles.itemTop}>
                    <span className={styles.pin} aria-hidden="true" />
                    <span className={styles.itemTitle}>{l.title}</span>
                  </div>
                  <div className={styles.itemDesc}>{l.desc}</div>
                </div>
              ))}
            </div>
            <div className={styles.listBottom}>
              Have a hard destination constraint? Add it to your inquiry and we’ll plan lanes around
              it.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

