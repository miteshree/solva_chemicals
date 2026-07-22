import { useRef, useEffect, useState } from "react";
import { capabilities } from "../../assets/js/content.js";
import useReveal from "../../assets/js/hooks/useReveal.js";
import Icon from "../ui/Icon.jsx";
import styles from "./capabilities.module.css";

export default function Capabilities() {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  const cardsRef = useRef(null);

  const [activeDot, setActiveDot] = useState(0);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

useEffect(() => {
  const el = cardsRef.current;

  if (!el) return;

  const handleScroll = () => {
  const firstCard = el.querySelector(`.${styles.emblaSlide}`);

  if (!firstCard) return;

  const cardWidth = firstCard.offsetWidth + 14; // 14 = gap
  const index = Math.round(el.scrollLeft / cardWidth);

  setActiveDot(Math.min(index, capabilities.length - 1));
};

  el.addEventListener("scroll", handleScroll);

  return () => el.removeEventListener("scroll", handleScroll);
}, []);

const handleMouseDown = (e) => {
  e.preventDefault();

  const slider = cardsRef.current;
  if (!slider) return;

  isDown.current = true;

  startX.current = e.clientX;
  scrollLeft.current = slider.scrollLeft;
};

const handleMouseLeave = () => {
  isDown.current = false;
};

const handleMouseUp = () => {
  isDown.current = false;
};

const handleMouseMove = (e) => {
  if (!isDown.current) return;

  e.preventDefault();

  const slider = cardsRef.current;
  if (!slider) return;

  const dx = e.clientX - startX.current;

  slider.scrollLeft = scrollLeft.current - dx;
};

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> Capabilities
            </div>
            <h2 className="h2">A supply partner built for precision and speed.</h2>
            <p className="lead">
              You get a pragmatic sourcing workflow: tight specs, clear paperwork, and logistics that
              fit real-world constraints.
            </p>
          </div>
        </div>

        <div 
          ref={ref} 
          className={`${styles.embla} reveal ${visible ? "revealVisible" : ""}`}>
          <div
              className={styles.emblaViewport}
              ref={cardsRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
            <div className={styles.emblaContainer}>
              {capabilities.map((c) => (
                <div key={c.title} className={styles.emblaSlide}>
                  <div className={`${styles.card} card`}>
                    <div className={styles.iconWrap}>
                      <Icon name={c.icon} size={22} />
                    </div>
                    <div className={styles.title}>{c.title}</div>
                    <div className={styles.desc}>{c.desc}</div>
                    <div className={styles.footer}>
                      <span className={styles.tag}>Built on expertise</span>
                      <a className={styles.more} href="#contact">
                        Discuss requirements
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className={styles.emblaDots} aria-label="Capabilities navigation">
  {capabilities.map((_, index) => (
    <button
      key={index}
      type="button"
      className={`${styles.emblaDot} ${
        activeDot === index ? styles.activeDot : ""
      }`}
      onClick={() => {
        const el = cardsRef.current;
        const firstCard = el?.querySelector(`.${styles.emblaSlide}`);

        if (!el || !firstCard) return;

        const cardWidth = firstCard.offsetWidth + 14;

        el.scrollTo({
          left: cardWidth * index,
          behavior: "smooth",
        });
      }}
      aria-label={`Go to capability ${index + 1}`}
    />
  ))}
</div>
        </div>
      </div>
    </section>
  );
}

