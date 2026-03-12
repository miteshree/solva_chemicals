import { faqs } from "../../assets/js/content.js";
import useReveal from "../../assets/js/hooks/useReveal.js";
import styles from "./faq.module.css";

export default function FAQ() {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> FAQ
            </div>
            <h2 className="h2">Fast answers for procurement teams.</h2>
            <p className="lead">
              A few common questions we hear when customers need supply coverage quickly.
            </p>
          </div>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          {faqs.map((f) => (
            <details key={f.q} className={styles.item}>
              <summary className={styles.q}>{f.q}</summary>
              <div className={styles.a}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

