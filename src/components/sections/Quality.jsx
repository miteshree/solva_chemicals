import useReveal from "../../assets/js/hooks/useReveal.js";
import styles from "./quality.module.css";

const points = [
  {
    title: "Documentation discipline",
    desc: "SDS/CoA handling and consistent paperwork expectations to reduce receiving friction.",
  },
  {
    title: "Spec alignment",
    desc: "We start with properties and constraints—then back into supply options that fit.",
  },
  {
    title: "Traceability mindset",
    desc: "Lot-level signals and packaging verification where practical, especially for sensitive uses.",
  },
  {
    title: "Pragmatic compliance",
    desc: "We surface constraints early so you can make informed decisions before the shipment moves.",
  },
];

export default function Quality() {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  return (
    <section id="quality" className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> Quality & Compliance
            </div>
            <h2 className="h2">Confidence is built on process.</h2>
            <p className="lead">
              Supply is more than availability. It’s documentation, traceability, and clear
              expectations—before freight starts moving.
            </p>
          </div>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          <div className={`${styles.panel} card`}>
            <div className={styles.panelTitle}>What you can expect</div>
            <div className={styles.list}>
              {points.map((p) => (
                <div key={p.title} className={styles.item}>
                  <div className={styles.check} aria-hidden="true">
                    ✓
                  </div>
                  <div>
                    <div className={styles.itemTitle}>{p.title}</div>
                    <div className={styles.itemDesc}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.panel} card`}>
            <div className={styles.panelTitle}>Documentation-ready stack</div>
            <div className={styles.badges}>
              <div className={styles.badge}>
                <div className={styles.badgeTop}>SDS</div>
                <div className={styles.badgeBottom}>Safety Data Sheets</div>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeTop}>CoA</div>
                <div className={styles.badgeBottom}>Certificate of Analysis</div>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeTop}>Lot</div>
                <div className={styles.badgeBottom}>Traceability signals</div>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeTop}>Incoterms</div>
                <div className={styles.badgeBottom}>Export readiness</div>
              </div>
            </div>

            <div className={styles.callout}>
              Need a specific documentation format? Add it to your inquiry and we’ll align on it up
              front.
            </div>
            <a className={styles.cta} href="#contact">
              Send requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

