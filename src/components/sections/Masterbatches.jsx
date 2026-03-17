import useReveal from "../../assets/js/hooks/useReveal.js";
import Icon from "../ui/Icon.jsx";
import styles from "./masterbatches.module.css";

const cards = [
  {
    title: "Color Masterbatches",
    desc: "Standard and custom-matched colors for consistent, vibrant coloring across all polymer types and processing methods.",
    icon: "palette",
    dots: ["#1FA3A3", "#2E6FA7", "#0B3C5D", "#B8C2CC"],
  },
  {
    title: "Additive Masterbatches",
    desc: "UV stabilizers, anti-block, slip, antistatic, and flame retardant additives in concentrated pellet form.",
    icon: "bolt",
    dots: ["#2E6FA7", "#1FA3A3", "#0B3C5D"],
  },
  {
    title: "White & Black Masterbatches",
    desc: "High-opacity TiO₂, white, and carbon black masterbatches for excellent coverage and UV protection.",
    icon: "layers",
    dots: ["#333333", "#B8C2CC", "#0B3C5D"],
  },
  {
    title: "Filler Masterbatches",
    desc: "CaCO₃ and talc-based filler masterbatches to optimize cost while maintaining mechanical properties.",
    icon: "beads",
    dots: ["#B8C2CC", "#2E6FA7", "#1FA3A3"],
  },
];

function DotRow({ dots }) {
  return (
    <div className={styles.dots} aria-hidden="true">
      {dots.map((c) => (
        <span key={c} className={styles.dot} style={{ background: c }} />
      ))}
    </div>
  );
}

export default function Masterbatches() {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  return (
    <section id="masterbatches" className="section">
      <div className="container">
        <div className={styles.head}>
          <div className="kicker">
            <span className="kickerDot" aria-hidden="true" /> Masterbatches
          </div>
          <h2 className={styles.h2}>
            Color &amp; Performance <span className={styles.em}>Masterbatches</span>
          </h2>
          <p className={styles.lead}>
            High-quality masterbatch concentrates for coloring, enhancing properties, and optimizing
            costs across polymer processing applications.
          </p>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          {cards.map((c) => (
            <article key={c.title} className={`${styles.card} card`}>
              <div className={styles.top}>
                <div className={styles.icon}>
                  <Icon name={c.icon} size={22} />
                </div>
                <DotRow dots={c.dots} />
              </div>
              <div className={styles.title}>{c.title}</div>
              <div className={styles.desc}>{c.desc}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
