import banner from "../../assets/images/web banner.png";
import mobileBanner from "../../assets/images/mobileBanner.png";
import styles from "./headerbanner.module.css";
//import { useState } from "react";



export default function HeaderBanner() {

  console.log("Web Banner:", banner);
console.log("Mobile Banner:", mobileBanner);

  //const [src, setSrc] = useState(banner);

  return (
    <section className={styles.wrap} aria-label="Solva Chemicals header banner">
      <div className={styles.card}>
        <picture>
          <source 
            media="(max-width: 720px)" 
            srcSet={mobileBanner} 
          />
        <img
          className={styles.img}
          src={banner}
          alt="Solva Chemicals — Molecules to Market"
          // decoding="async"
          // onError={() => setSrc(banner)}
        />
        </picture>
      </div>
    </section>
  );
}
