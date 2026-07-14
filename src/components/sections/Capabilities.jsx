import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { capabilities } from "../../assets/js/content.js";
import useReveal from "../../assets/js/hooks/useReveal.js";
import Icon from "../ui/Icon.jsx";
import styles from "./capabilities.module.css";

export default function Capabilities() {
  const { ref, visible } = useReveal({ threshold: 0.1 });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return undefined;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

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

        <div ref={ref} className={`${styles.embla} reveal ${visible ? "revealVisible" : ""}`}>
          <div className={styles.emblaViewport} ref={emblaRef}>
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

          <div className={styles.emblaButtons}>
            <button
              type="button"
              className={styles.emblaButton}
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Previous capability"
            >
              <Icon name="chevronLeft" size={20} />
            </button>
            <button
              type="button"
              className={styles.emblaButton}
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Next capability"
            >
              <Icon name="chevronRight" size={20} />
            </button>
          </div>

          <div className={styles.emblaDots} aria-label="Capabilities navigation">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.emblaDot} ${index === selectedIndex ? styles.activeDot : ""}`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to capability ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

