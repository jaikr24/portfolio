import styles from "./Footer.module.css";
import { Socials } from "../components/Footer/Socials";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <h4>Jai's Portfolio</h4>
      </div>
      <div className={styles.footerRight}>
        <p>Lets Connect</p>
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
