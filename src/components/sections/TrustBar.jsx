import useReveal from "../../assets/js/hooks/useReveal.js";
import styles from "./trustbar.module.css";

const items = [
  "SDS & CoA coordination",
  "Lot-level traceability",
  "Spec verification mindset",
  "Export documentation support",
  "Multi-lane logistics",
];

export default function TrustBar() {
  const { ref, visible } = useReveal({ threshold: 0.08 });

  return (
    <section className={styles.wrap} aria-label="Trust signals">
      <div className="container">
        <div ref={ref} className={`${styles.row} reveal ${visible ? "revealVisible" : ""}`}>
          {items.map((t) => (
            <div key={t} className={styles.item}>
              <span className={styles.dot} aria-hidden="true" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

