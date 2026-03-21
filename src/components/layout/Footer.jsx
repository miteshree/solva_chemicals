import { brand } from "../../assets/js/content.js";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Sustainability", href: "/#sustainability" },
  ],
  capabilities: [
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Market Pulse", href: "/#market-pulse" },
    { label: "Technical Services", href: "/#solutions" },
    { label: "Quality", href: "/#quality" },
    { label: "Supply Chain", href: "/#supply-chain" },
  ],
  contact: [
    { label: brand.email, href: `mailto:${brand.email}` },
    { label: brand.phone, href: `tel:${brand.phone.replace(/[^\d+]/g, "")}` },
    { label: brand.location, href: null },
  ],
};

function FooterLink({ item }) {
  if (!item.href) return <span className={styles.linkPlain}>{item.label}</span>;
  if (item.href.startsWith("http") || item.href.startsWith("mailto") || item.href.startsWith("tel")) {
    return <a className={styles.link} href={item.href}>{item.label}</a>;
  }
  return <Link className={styles.link} to={item.href}>{item.label}</Link>;
}

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── Top accent bar ── */}
      <div className={styles.accentBar} />

      <div className={`${styles.inner} container`}>

        {/* Brand col */}
        <div className={styles.brand}>
          <div className={styles.brandName}>{brand.name}</div>
          <p className={styles.brandTag}>{brand.tagline}</p>
          <div className={styles.brandMeta}>{brand.location}</div>
          <a className={styles.cta} href={`mailto:${brand.email}`}>
            Get in touch →
          </a>
        </div>

        {/* Company col */}
        <div className={styles.col}>
          <div className={styles.colTitle}>Company</div>
          <div className={styles.links}>
            {footerLinks.company.map((l) => (
              <FooterLink key={l.label} item={l} />
            ))}
          </div>
        </div>

        {/* Capabilities col */}
        <div className={styles.col}>
          <div className={styles.colTitle}>Capabilities</div>
          <div className={styles.links}>
            {footerLinks.capabilities.map((l) => (
              <FooterLink key={l.label} item={l} />
            ))}
          </div>
        </div>

        {/* Contact col */}
        <div className={styles.col}>
          <div className={styles.colTitle}>Contact</div>
          <div className={styles.links}>
            {footerLinks.contact.map((l) => (
              <FooterLink key={l.label} item={l} />
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <div className={`${styles.bottomInner} container`}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
        </div>
      </div>

    </footer>
  );
}