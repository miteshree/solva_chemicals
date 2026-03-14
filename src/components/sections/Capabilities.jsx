import { capabilities } from "../../assets/js/content.js";
import useReveal from "../../assets/js/hooks/useReveal.js";
import Icon from "../ui/Icon.jsx";
import styles from "./capabilities.module.css";

export default function Capabilities() {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> Sustainability and Responsibility
            </div>
            <h2 className="h2">A supply partner built for precision and speed.</h2>
            {/* <p className="lead">
              You get a pragmatic sourcing workflow: tight specs, clear paperwork, and logistics that
              fit real-world constraints.
            </p> */}
          </div>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          {capabilities.map((c) => (
            <div key={c.title} className={`${styles.card} card`}>
              <div className={styles.iconWrap}>
                <Icon name={c.icon} size={22} />
              </div>
              {/* <div className={styles.title}>{c.title}</div> */}
              <div className={styles.desc}>{c.desc}</div>
              <div className={styles.footer}>
                <span className={styles.tag}>Built on expertise</span>
                <a className={styles.more} href="#contact">
                  Discuss requirements
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

