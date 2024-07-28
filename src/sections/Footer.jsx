import styles from "./Footer.module.css";
import { Socials } from "../components/Footer/Socials";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <h2>Jai</h2>
      </div>
      <div className={styles.footerRight}>
        <p>Lets Connect</p>
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
