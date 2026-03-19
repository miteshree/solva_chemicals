import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import useReveal from "../assets/js/hooks/useReveal.js";
import styles from "../components/sections/aboutus.module.css";
// import WhorvImg1 from "../assets/images/whorvImg1.jpg";
import useHexCanvas from "../assets/js/hooks/useHexCanvas.js";
import { useState } from "react";


const values = [
  {
    icon: "👥",
    title: "Customer-First Mindset",
    desc: "Our customers are at the center of every decision we make. We prioritize responsiveness, transparency, and long-term partnerships to ensure our clients receive the materials, service, and support they need to succeed.",
  },
  {
    icon: "🔬",
    title: "Technical Expertise",
    desc: "With decades of combined industry experience, we bring practical chemical and polymer knowledge that helps customers select the right materials, improve performance, and reduce operational risks.",
  },
  {
    icon: "⚙️",
    title: "Tailored Solutions",
    desc: "Every manufacturing process is unique. We collaborate with customers to deliver customized material solutions designed to match their specific applications, production requirements, and market demands.",
  },
  {
    icon: "🤝",
    title: "Reliability & Integrity",
    desc: "Consistency and trust are fundamental in the chemical industry. We are committed to responsible sourcing, dependable supply, and maintaining the highest professional and ethical standards in every partnership.",
  },
  {
    icon: "🌱",
    title: "Sustainability & Responsibility",
    desc: "We believe the future of the chemical industry must balance performance with environmental responsibility. Solva actively supports sustainable materials, responsible manufacturing practices, and solutions that reduce environmental impact across the value chain.",
  },
];

const whyChoose = [
  {
    title: "40+ Years of Industry Experience",
    desc: "Our team brings together decades of hands-on technical and commercial expertise in the chemical and polymer industry — giving customers access to knowledge that goes far beyond basic distribution.",
  },
  {
    title: "Global Supplier Network",
    desc: "Through trusted partnerships with producers and distributors across multiple continents, we ensure consistent material availability and competitive sourcing options for our customers worldwide.",
  },
  {
    title: "End-to-End Support",
    desc: "From material selection and documentation to logistics coordination and compliance guidance, we support customers at every stage — so they can focus on production, not procurement.",
  },
  {
    title: "Responsive & Transparent",
    desc: "We respond quickly, communicate clearly, and keep customers informed at every step. No surprises — just reliable service backed by a team that genuinely cares about your success.",
  },
  {
    title: "Molecules to Market",
    desc: "Our goal is to be the partner that helps customers move confidently from raw material sourcing all the way to finished product — efficiently, reliably, and responsibly.",
  },
  {
    title: "Tailored for Your Needs",
    desc: "We don't believe in one-size-fits-all solutions. Every customer engagement starts with understanding your specific requirements — and ends with a solution built around them.",
  },
];

const carouselCards = [
  {
    img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
    imgAlt: "Chemical manufacturing facility",
    tag: "About Solva",
    title: "Who Are We?",
    desc: "Solva Chemicals Corporation is a specialty chemicals and polymer solutions company committed to connecting innovation with industry. We work with manufacturers, processors, and distributors to deliver reliable access to high-quality chemical and polymer products that power modern manufacturing and infrastructure. Our focus is to simplify complex supply chains and provide dependable sourcing, technical guidance, and market insight.",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    imgAlt: "Industry expertise and experience",
    tag: "Our Experience",
    title: "40+ Years of Expertise",
    desc: "Our team brings together over 40 years of collaborative technical and commercial experience in the chemical and polymer industry. This depth of knowledge allows us to understand the practical challenges faced by manufacturers, converters, and industrial customers. We leverage this expertise to recommend materials, identify process efficiencies, and ensure that the products we supply perform reliably within real-world production environments.",
  },
  {
    img: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
    imgAlt: "Global supply chain and logistics",
    tag: "Our Approach",
    title: "Molecules to Market",
    desc: "What truly separates Solva from traditional chemical distributors is our customer-first approach. We recognize that no two customers operate the same way. Instead of offering one-size-fits-all products, we work closely with every client to develop tailored material solutions aligned with their technical requirements, cost targets, and operational goals. Our objective is to become a trusted long-term partner who helps customers move from molecules to market with confidence.",
  },
];

function WhoWeAreCarousel() {
  const [current, setCurrent] = useState(0);
  const total = carouselCards.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const card = carouselCards[current];

  return (
    <section className={styles.carouselSection}>
      <div className="container">
        <div className={styles.carouselHead}>
          <div className="kicker">
            <span className="kickerDot" aria-hidden="true" /> Who We Are
          </div>
          <h2 className="h2">The people and purpose behind Solva.</h2>
        </div>

        <div className={styles.carouselWrap}>
          <div className={`${styles.carouselCard} card`}>
            {/* Image */}
            <div className={styles.carouselImgWrap}>
              <img
                key={card.img}
                src={card.img}
                alt={card.imgAlt}
                className={styles.carouselImg}
                loading="lazy"
              />
              <div className={styles.carouselImgOverlay} />
              <span className={styles.carouselTag}>{card.tag}</span>
            </div>

            {/* Content */}
            <div className={styles.carouselContent}>
              <h3 className={styles.carouselTitle}>{card.title}</h3>
              <p className={styles.carouselDesc}>{card.desc}</p>
            </div>
          </div>

          {/* Controls */}
          <div className={styles.carouselControls}>
            <button
              className={styles.carouselBtn}
              onClick={prev}
              aria-label="Previous card"
            >
              ‹
            </button>

            <div className={styles.carouselDots}>
              {carouselCards.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to card ${i + 1}`}
                />
              ))}
            </div>

            <button
              className={styles.carouselBtn}
              onClick={next}
              aria-label="Next card"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function AboutUs() {

  const canvasRef = useHexCanvas();
  const s1 = useReveal({ threshold: 0.08 });
  const s2 = useReveal({ threshold: 0.08 });
  const s3 = useReveal({ threshold: 0.08 });
  const s4 = useReveal({ threshold: 0.08 });

  return (
    <div className={styles.page}>
      <Navbar />

      {/* ── Hero Banner ───────────────────────── */}
          <section className={styles.heroBanner}>
            <canvas ref={canvasRef} className={styles.heroCanvas} aria-hidden="true" />
            <div className={styles.heroOverlay}>
              <div className="container">
                {/* <p className={styles.heroKicker}>Who We Are</p> */}
                <h1 className={styles.heroTitle}>About Us</h1>
                <p className={styles.heroSub}>
                  Global Polymer &amp; Chemical Supply, Built on Expertise.
                </p>
              </div>
            </div>
          </section>

      <main>

        <WhoWeAreCarousel />

        {/* ── Our Values ────────────────────────── */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div
              ref={s3.ref}
              className={`reveal ${s3.visible ? "revealVisible" : ""}`}
            >
              <div className={styles.valuesHead}>
                <div className={styles.valuesKicker}>Our Values</div>
                <h2 className={styles.valuesTitle}>What drives everything we do</h2>
              </div>
              <div className={styles.valuesGrid}>
                {values.map((v) => (
                  <div key={v.title} className={styles.valueCard}>
                    <div className={styles.valueIcon}>{v.icon}</div>
                    <div className={styles.valueContent}>
                      <div className={styles.valueTitle}>{v.title}</div>
                      <p className={styles.valueDesc}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ─────────────────────── */}
        <section className={`${styles.whySection} section`}>
          <div className="container">
            <div
              ref={s4.ref}
              className={`reveal ${s4.visible ? "revealVisible" : ""}`}
            >
              <div className={styles.whyHead}>
                <div className="kicker">
                  <span className="kickerDot" aria-hidden="true" /> Why Solva
                </div>
                <h2 className="h2">Why Choose Us?</h2>
                <p className="lead">
                  We combine deep industry knowledge with a genuine commitment to customer success —
                  making Solva the partner you can count on for the long term.
                </p>
              </div>
              <div className={styles.whyGrid}>
                {whyChoose.map((w) => (
                  <div key={w.title} className={`${styles.whyCard} card`}>
                    <div className={styles.whyDot} aria-hidden="true" />
                    <div className={styles.whyTitle}>{w.title}</div>
                    <p className={styles.whyDesc}>{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}