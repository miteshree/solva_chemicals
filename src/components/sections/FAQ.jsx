import useReveal from "../../assets/js/hooks/useReveal.js";
import art from "../../assets/images/illustrations/supply-chain.svg";
import styles from "./faq.module.css";

export default function FAQ() {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  return (
    <section id="supply-chain" className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> Supply Chain
            </div>
            <h2 className="h2">Supply Chain &amp; Global Sourcing</h2>
            <p className="lead">
              The chemical industry depends on reliable sourcing and supply continuity. Solva
              Chemicals Corporation maintains strong relationships with global producers, logistics
              providers, and regional distributors to ensure dependable material availability.
            </p>
          </div>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          <div className={`${styles.copy} card`}>
            <img className={styles.img} src={art} alt="" aria-hidden="true" />
            <div className={styles.copyTitle}>Continuity you can plan around</div>
            <p className={styles.p}>
              Our supply chain capabilities support both spot requirements and long-term customer
              programs, with consistent material availability and practical lane planning.
            </p>
            <p className={styles.p}>
              We coordinate documentation early and align supplier options to your spec, destination,
              and timeline to reduce supply risk and keep production stable.
            </p>
          </div>

          <div className={`${styles.list} card`}>
            <div className={styles.listTitle}>Our supply chain capabilities include</div>
            <ul className={styles.ul}>
              <li>Global supplier partnerships</li>
              <li>Strategic sourcing of polymers and specialty chemicals</li>
              <li>Reliable distribution networks</li>
              <li>Flexible procurement solutions</li>
              <li>Consistent material availability for long-term customer programs</li>
            </ul>
            <div className={styles.note}>
              By combining market intelligence with strong supplier relationships, we help customers
              reduce supply risk and maintain stable production operations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
