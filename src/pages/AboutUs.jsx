import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import useReveal from "../assets/js/hooks/useReveal.js";
import styles from "../components/sections/aboutus.module.css";

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

export default function AboutUs() {
  const s1 = useReveal({ threshold: 0.08 });
  const s2 = useReveal({ threshold: 0.08 });
  const s3 = useReveal({ threshold: 0.08 });
  const s4 = useReveal({ threshold: 0.08 });

  return (
    <div className={styles.page}>
      <Navbar />

      {/* ── Hero Banner ───────────────────────── */}
      <section className={styles.heroBanner}>
        <div className={styles.heroPlaceholder} aria-hidden="true" />
        <div className={styles.heroOverlay}>
          <div className="container">
            <p className={styles.heroKicker}>Who We Are</p>
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.heroSub}>
              Global Polymer &amp; Chemical Supply, Built on Expertise.
            </p>
          </div>
        </div>
      </section>

      <main>

        {/* ── Section 1: Image left / Who are we right ── */}
        <section className={`${styles.splitSection} section`}>
          <div className="container">
            <div
              ref={s1.ref}
              className={`${styles.splitGrid} reveal ${s1.visible ? "revealVisible" : ""}`}
            >
              <div className={styles.imgWrap}>
                <div className={styles.imgPlaceholder}>
                  <span className={styles.imgPlaceholderText}>Image coming soon</span>
                </div>
              </div>
              <div className={styles.splitContent}>
                <div className="kicker">
                  <span className="kickerDot" aria-hidden="true" /> About Solva
                </div>
                <h2 className={styles.splitTitle}>Who Are We?</h2>
                <p className={styles.splitDesc}>
                  Solva Chemicals Corporation is a specialty chemicals and polymer solutions company
                  committed to connecting innovation with industry. We work with manufacturers,
                  processors, and distributors to deliver reliable access to high-quality chemical
                  and polymer products that power modern manufacturing and infrastructure.
                </p>
                <p className={styles.splitDesc}>
                  Our focus is to simplify complex supply chains and provide dependable sourcing,
                  technical guidance, and market insight that help our customers operate more
                  efficiently and competitively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Who are we continued left / Image right ── */}
        <section className={`${styles.splitSection} ${styles.splitAlt} section`}>
          <div className="container">
            <div
              ref={s2.ref}
              className={`${styles.splitGrid} ${styles.splitReverse} reveal ${s2.visible ? "revealVisible" : ""}`}
            >
              <div className={styles.splitContent}>
                <div className="kicker">
                  <span className="kickerDot" aria-hidden="true" /> Our Experience
                </div>
                <h2 className={styles.splitTitle}>Built on Expertise</h2>
                <p className={styles.splitDesc}>
                  Our team brings together over 40 years of collaborative technical and commercial
                  experience in the chemical and polymer industry. This depth of knowledge allows us
                  to understand the practical challenges faced by manufacturers, converters, and
                  industrial customers. We leverage this expertise to recommend materials, identify
                  process efficiencies, and ensure that the products we supply perform reliably
                  within real-world production environments.
                </p>
                <p className={styles.splitDesc}>
                  What truly separates Solva from traditional chemical distributors is our
                  customer-first approach. We recognize that no two customers operate the same way.
                  Instead of offering one-size-fits-all products, we work closely with every client
                  to develop tailored material solutions aligned with their technical requirements,
                  cost targets, and operational goals. Our objective is to become a trusted long-term
                  partner who helps customers move from molecules to market with confidence.
                </p>
              </div>
              <div className={styles.imgWrap}>
                <div className={styles.imgPlaceholder}>
                  <span className={styles.imgPlaceholderText}>Image coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

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