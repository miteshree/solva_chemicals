import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { brand, capabilitiesDropdown } from "../../assets/js/content.js";
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
  const [capOpen, setCapOpen] = useState(false);
  useBodyScrollLock(open);

  const capLinks = useMemo(() => capabilitiesDropdown, []);
  const capRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setCapOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!capOpen) return;
    const onPointerDown = (e) => {
      if (!capRef.current) return;
      if (!capRef.current.contains(e.target)) setCapOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [capOpen]);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <Link className={styles.brand} to={{ pathname: "/", hash: "#main" }} aria-label={brand.name}>
          <img className={styles.logo} src={logo} alt="" />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <div className={styles.dropdown} ref={capRef}>
            <button
              type="button"
              className={`${styles.link} ${styles.dropdownTrigger}`}
              aria-haspopup="menu"
              aria-expanded={capOpen}
              onClick={() => setCapOpen((v) => !v)}
            >
              Capabilities <span className={styles.caret} aria-hidden="true" />
            </button>
            <div className={`${styles.menu} ${capOpen ? styles.menuOpen : ""}`} role="menu">
              {capLinks.map((l) => (
                <Link
                  key={l.href}
                  role="menuitem"
                  className={styles.menuItem}
                  to={{ pathname: "/", hash: l.href }}
                  onClick={() => setCapOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <Link className={styles.link} to="/products">
            Products
          </Link>
          <Link className={styles.link} to={{ pathname: "/", hash: "#sustainability" }}>
            Sustainability
          </Link>
          <Link className={styles.link} to={{ pathname: "/", hash: "#contact" }}>
            Contact
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link className="btnPrimary" to={{ pathname: "/", hash: "#contact" }}>
            Request a Quote
          </Link>
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
            <details className={styles.mobileGroup}>
              <summary className={styles.mobileSummary}>Capabilities</summary>
              <div className={styles.mobileSubLinks}>
                {capLinks.map((l) => (
                  <Link
                    key={l.href}
                    className={styles.mobileSubLink}
                    to={{ pathname: "/", hash: l.href }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link className={styles.mobileLink} to="/products" onClick={() => setOpen(false)}>
              Products
            </Link>
            <Link
              className={styles.mobileLink}
              to={{ pathname: "/", hash: "#sustainability" }}
              onClick={() => setOpen(false)}
            >
              Sustainability
            </Link>
            <Link
              className={styles.mobileLink}
              to={{ pathname: "/", hash: "#contact" }}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className={styles.mobileCtas}>
            <Link
              className="btnPrimary"
              to={{ pathname: "/", hash: "#contact" }}
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
            <Link className="btnGhost" to="/products" onClick={() => setOpen(false)}>
              View products
            </Link>
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
