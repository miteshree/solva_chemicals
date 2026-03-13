import banner from "../../assets/images/solva_header.png";
import styles from "./headerbanner.module.css";
import { useState } from "react";

export default function HeaderBanner() {
  const [src, setSrc] = useState("/header-banner.jpg");

  return (
    <section className={styles.wrap} aria-label="Solva Chemicals header banner">
      <div className="container">
        <div className={styles.card}>
          <img
            className={styles.img}
            src={src}
            alt="Solva Chemicals — Molecules to Market"
            decoding="async"
            onError={() => setSrc(banner)}
          />
        </div>
      </div>
    </section>
  );
}
