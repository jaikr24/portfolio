import styles from "./Socials.module.css";
import githubSvg from "../../assets/socials/github-svgrepo-com.svg";
import instagramSvg from "../../assets/socials/instagram-svgrepo-com.svg";
import linkedinSvg from "../../assets/socials/linkedin-svgrepo-com.svg";
import twitterSvg from "../../assets/socials/twitter-svgrepo-com.svg";

export function Socials() {
  return (
    <div className={styles.socials}>
      <a href="https://github.com/jaikr24">
        <img src={githubSvg} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/jaikr24/">
        <img src={linkedinSvg} alt="" />
      </a>
      <a href="https://x.com/j41kr">
        <img src={twitterSvg} alt="" />
      </a>
      <a href="https://instagram.com/j41kr">
        <img src={instagramSvg} alt="" />
      </a>
    </div>
  );
}
