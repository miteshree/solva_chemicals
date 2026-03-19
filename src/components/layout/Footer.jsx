import { brand, navLinks } from "../../assets/js/content.js";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.left}>
          <div className={styles.name}>{brand.name}</div>
          <div className={styles.tag}>{brand.tagline}</div>
          <div className={styles.meta}>{brand.location}</div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.colTitle}>Explore</div>
            <div className={styles.links}>
              {navLinks.map((l) => (
                l.href.startsWith("/") ? (
                  <Link key={l.href} className={styles.link} to={l.href}>
                    {l.label}
                  </Link>
                ) : l.href.startsWith("#") ? (
                  <Link key={l.href} className={styles.link} to={{ pathname: "/", hash: l.href }}>
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.href} className={styles.link} href={l.href}>
                    {l.label}
                  </a>
                )
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>Contact</div>
            <div className={styles.links}>
              <a className={styles.link} href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
              <a className={styles.link} href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>
                {brand.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
