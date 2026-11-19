import banner from "../../assets/images/web banner synrthy .png";
import styles from "./headerbanner.module.css";
//import { useState } from "react";



export default function HeaderBanner() {

  //const [src, setSrc] = useState(banner);

  return (
    <section className={styles.wrap} aria-label="Synrthy Materials header banner">
      <div className={styles.card}>
        <picture>
          <source 
            media="(max-width: 720px)" 
            srcSet={banner} 
          />
        <img
          className={styles.img}
          src={banner}
          alt="Synrthy Materials — Molecules to Market"
          // decoding="async"
          // onError={() => setSrc(banner)}
        />
        </picture>
      </div>
    </section>
  );
}
