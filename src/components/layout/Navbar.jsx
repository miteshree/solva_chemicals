import { useEffect, useMemo, useState } from "react";   
import {Link} from "react-router-dom";
import { brand, navLinks } from "../../assets/js/content.js";
import logo from "../../assets/images/solva_logo_nav.png";
import styles from "./navbar.module.css";

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useBodyScrollLock(open);

  const links = useMemo(() => navLinks, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <a className={styles.brand} href="#main" aria-label={brand.name}>
          <img className={styles.logo} src={logo} alt="" />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link key={l.href} className={styles.link} to={l.href}>
                {l.label}
              </Link>
            ) : (
              <a key={l.href} className={styles.link} href={l.href}>
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className={styles.actions}>
          <a className="btnGhost" href="#contact">
            Request a quote
          </a>
          <button
            className={styles.menuBtn}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileOverlay} ${open ? styles.open : ""}`}>
        <div className={styles.mobileSheet} role="dialog" aria-modal="true">
          <div className={styles.mobileTop}>
            <span className={styles.mobileTitle}>Menu</span>
            <button
              className={styles.closeBtn}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <div className={styles.mobileLinks}>
            {links.map((l) => l.href.startsWith("/") ? (
              <Link
                  key={l.href}
                  className={styles.mobileLink}
                  to={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ) : (
                  <a
                key={l.href}
                className={styles.mobileLink}
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className={styles.mobileCtas}>
            <a className="btnPrimary" href="#contact" onClick={() => setOpen(false)}>
              Get in touch
            </a>
            <a className="btnGhost" href="#market-pulse" onClick={() => setOpen(false)}>
              See market pulse
            </a>
          </div>
        </div>
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
      </div>
    </header>
  );
}
