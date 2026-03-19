import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import useReveal from "../assets/js/hooks/useReveal.js";
import styles from "../components/sections/products.module.css";
import polyolefins from "../assets/images/polyolefins.png";
import engPolymer from "../assets/images/engPolymer.png";
import polymerFilms from "../assets/images/polymerFilms2.png";
import chemicals from "../assets/images/chemicals.jpg";
import Icon from "../components/ui/Icon.jsx";
import productHeader from "../assets/images/productHeader2.png";

const masterbatchCards = [
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

const categories = [
  {
    id: "polyolefins",
    title: "Polyolefins",
    img: polyolefins,
    imgAlt: "HDPE plastic pellets",
    items: [
      "HDPE (High-Density Polyethylene)",
      "LDPE (Low-Density Polyethylene)",
      "LLDPE (Linear Low-Density Polyethylene)",
      "Polypropylene (PP)",
    ],
    desc: "These materials are widely used across packaging, industrial manufacturing, consumer goods, extrusion processes, and injection molding applications.",
  },
  {
    id: "engineering-polymers",
    title: "Engineering & Performance Polymers",
    img: engPolymer,
    imgAlt: "Engineering polymer resin pellets",
    items: [
      "PET (Polyethylene Terephthalate)",
      "PVC (Polyvinyl Chloride)",
      "Specialty polymer compounds and engineered resins",
      "Masterbatches",
    ],
    desc: "These materials support applications requiring higher strength, durability, clarity, and chemical resistance.",
  },
  {
    id: "polymer-films",
    title: "Polymer Films",
    img: polymerFilms,
    imgAlt: "BOPP polymer film rolls",
    items: [
      "PE Films (Polyethylene Films)",
      "BOPP Films (Biaxially Oriented Polypropylene Films)",
      "MDOPE Films (Machine Direction Oriented Polyethylene Films)",
      "Nylon Films (Polyamide Films)",
      "PET Films",
    ],
    desc: "These films are widely used in flexible packaging, lamination structures, barrier packaging, industrial films, and specialty converting applications.",
  },
  {
    id: "specialty-chemicals",
    title: "Specialty Chemicals",
    img: chemicals,
    imgAlt: "Specialty chemicals industrial",
    items: [
      "Industrial adhesives",
      "Coatings and surface treatment materials",
      "Water treatment chemicals",
      "Catalysts and chemical reagents used in manufacturing processes",
      "Oxygen scavengers for corrosion control",
      "Process additives and performance modifiers",
    ],
    desc: "These materials help improve manufacturing efficiency, enhance product performance, and protect equipment and infrastructure in demanding industrial environments.",
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

function CategoryCard({ cat, index }) {
  const { ref, visible } = useReveal({ threshold: 0.08 });
  const isEven = index % 2 === 0;

  return (
    <section id={cat.id} className={styles.categorySection}>
      <div
        ref={ref}
        className={`${styles.categoryGrid} ${isEven ? styles.imgLeft : styles.imgRight} reveal ${visible ? "revealVisible" : ""}`}
      >
        <div className={styles.imgWrap}>
          <img
            src={cat.img}
            alt={cat.imgAlt}
            className={styles.categoryImg}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentNode.classList.add(styles.imgFallback);
            }}
          />
        </div>

        <div className={styles.categoryContent}>
          <div className="kicker">
            <span className="kickerDot" aria-hidden="true" /> Products
          </div>
          <h2 className={styles.categoryTitle}>{cat.title}</h2>
          <ul className={styles.itemList}>
            {cat.items.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.itemDot} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.categoryDesc}>{cat.desc}</p>
          <a className={styles.inquireBtn} href="#contact-products">
            Inquire about this product →
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  const introReveal = useReveal({ threshold: 0.08 });
  const customReveal = useReveal({ threshold: 0.08 });

  return (
    <div className={styles.page}>
      <Navbar />

      {/* ── Hero Banner ───────────────────────── */}
      <section className={styles.heroBanner}>
        <img src= {productHeader}
        alt="Products"
        className={styles.heroImg}
        />
        <div className={styles.heroOverlay}>
          <div className="container">
            <p className={styles.heroKicker}>Our Portfolio</p>
            <h1 className={styles.heroTitle}>Products</h1>
          </div>
        </div>
      </section>

      <main>
        {/* ── Intro ─────────────────────────────── */}
        <section className={`${styles.introSection} section`}>
          <div className="container">
            <div
              ref={introReveal.ref}
              className={`${styles.introGrid} reveal ${introReveal.visible ? "revealVisible" : ""}`}
            >
              <div className={styles.introLeft}>
                <div className="kicker">
                  <span className="kickerDot" aria-hidden="true" /> Solva Chemicals
                </div>
                <h2 className="h2">A broad portfolio, built for industry.</h2>
                <p className="lead">
                  Solva Chemicals Corporation supplies a broad portfolio of polymer resins, polymer
                  films, and specialty chemicals used across a wide range of industrial and
                  manufacturing applications. Through our global network of suppliers and industry
                  partnerships, we provide reliable material solutions that support production
                  efficiency, product performance, and supply chain stability.
                </p>
              </div>

              <div className={styles.introRight}>
                {[
    { id: "polyolefins", label: "Polyolefins", sub: "HDPE · LDPE · LLDPE · PP" },
    { id: "engineering-polymers", label: "Engineering & Performance Polymers", sub: "PET · PVC · Specialty compounds" },
    { id: "polymer-films", label: "Polymer Films", sub: "PE · BOPP · MDOPE · Nylon · PET" },
    { id: "specialty-chemicals", label: "Specialty Chemicals", sub: "Adhesives · Coatings · Catalysts" },
    { id: "masterbatches", label: "Masterbatches", sub: "Color · Additive · Filler" },
    { id: "custom-sourcing", label: "Custom Material Sourcing", sub: "Tailored to your requirements" },
  ].map((item) => (
    <a key={item.id} className={styles.quickCard} href={`#${item.id}`}>
      <div className={styles.quickCardInner}>
        <span className={styles.quickCardLabel}>{item.label}</span>
        <span className={styles.quickCardSub}>{item.sub}</span>
      </div>
      <span className={styles.quickCardArrow}>›</span>
    </a>
  ))}
                {/* {categories.map((cat) => (
                  <a key={cat.id} className={styles.quickLink} href={`#${cat.id}`}>
                    <span className={styles.quickDot} aria-hidden="true" />
                    <span className={styles.quickLabel}>{cat.title}</span>
                    <span className={styles.quickArrow}>›</span>
                  </a>
                  
                ))}
                

                {/* intro quick links */}
                                {/* <a key="masterbatches" className={styles.quickLink} href="#masterbatches">
                  <span className={styles.quickDot} aria-hidden="true" />
                  <span className={styles.quickLabel}>Masterbatches</span>
                <span className={styles.quickArrow}>›</span>
                </a>
                  <a className={styles.quickLink} href="#custom-sourcing">
                    <span className={styles.quickDot} aria-hidden="true" />
                    <span className={styles.quickLabel}>Custom Material Sourcing</span>
                    <span className={styles.quickArrow}>›</span>
                  </a> */} 
              </div>
            </div>
          </div>
        </section>

        {/* ── Product Categories ────────────────── */}
        <div className={styles.divider} />

        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} cat={cat} index={i} />
        ))}
                        {/* ── Masterbatches ─────────────────────────── */}
<section id="masterbatches" className={`${styles.masterbatchSection} section`}>
  <div className="container">
    <div className={styles.mbHead}>
      <div className="kicker">
        <span className="kickerDot" aria-hidden="true" /> Masterbatches
      </div>
      <h2 className={styles.mbTitle}>
        Color &amp; Performance <span className={styles.mbEm}>Masterbatches</span>
      </h2>
      <p className={styles.mbLead}>
        High-quality masterbatch concentrates for coloring, enhancing properties, and
        optimizing costs across polymer processing applications.
      </p>
    </div>
    <div className={styles.mbGrid}>
      {masterbatchCards.map((c) => (
        <article key={c.title} className={`${styles.mbCard} card`}>
          <div className={styles.mbTop}>
            <div className={styles.mbIcon}>
              <Icon name={c.icon} size={22} />
            </div>
            <DotRow dots={c.dots} />
          </div>
          <div className={styles.mbCardTitle}>{c.title}</div>
          <div className={styles.mbCardDesc}>{c.desc}</div>
        </article>
      ))}
    </div>
  </div>
</section>
        {/* ── Custom Material Sourcing ──────────── */}
        <section id="custom-sourcing" className={`${styles.customSection} section`}>
          <div className="container">
            <div
              ref={customReveal.ref}
              className={`${styles.customCard} card reveal ${customReveal.visible ? "revealVisible" : ""}`}
            >
              <div className={styles.customLeft}>
                <div className="kicker">
                  <span className="kickerDot" aria-hidden="true" /> Custom Sourcing
                </div>
                <h2 className={styles.customTitle}>Custom Material Sourcing</h2>
                <p className={styles.customDesc}>
                  Through our global network of chemical manufacturers and suppliers, Solva Chemicals
                  Corporation helps customers source specialized materials tailored to their specific
                  technical and commercial requirements. Our team works closely with customers to
                  identify reliable solutions that align with their production processes, quality
                  standards, and long-term supply needs.
                </p>
              </div>
              <div className={styles.customRight}>
                <a className="btnPrimary" href="#contact-products">
                  Discuss your requirements →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact CTA ───────────────────────── */}
        <section id="contact-products" className={`${styles.ctaSection} section`}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Need a specific material or grade?</h2>
              <p className={styles.ctaDesc}>
                Share your target spec, destination, and timeline — we&apos;ll respond with
                availability, documentation, and practical next steps.
              </p>
              <a className="btnPrimary" href="mailto:sales@solvachemicals.com">
                Contact us at info@solvachemicals.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
