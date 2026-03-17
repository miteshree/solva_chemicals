import useReveal from "../../assets/js/hooks/useReveal.js";
import art from "../../assets/images/illustrations/sustainability.svg";
import styles from "./sustainability.module.css";

export default function Sustainability() {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  return (
    <section id="sustainability" className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> Sustainability
            </div>
            <h2 className="h2">Sustainability Commitment</h2>
            <p className="lead">
              The future of the chemical industry depends on responsible innovation and sustainable
              practices. At Solva Chemicals Corporation, we actively support initiatives that
              contribute to a more sustainable and efficient materials ecosystem.
            </p>
          </div>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          <div className={`${styles.copy} card`}>
            <img className={styles.img} src={art} alt="" aria-hidden="true" />
            <div className={styles.copyTitle}>Long-term industrial progress</div>
            <p className={styles.p}>
              We believe that balancing performance, efficiency, and environmental responsibility is
              essential for long-term industrial progress.
            </p>
          </div>

          <div className={`${styles.list} card`}>
            <div className={styles.listTitle}>Our sustainability focus includes:</div>
            <ul className={styles.ul}>
              <li>Supporting recyclable and sustainable polymer solutions</li>
              <li>Promoting efficient material use in manufacturing</li>
              <li>Partnering with suppliers committed to responsible production practices</li>
              <li>Encouraging solutions that reduce environmental impact across supply chains</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
