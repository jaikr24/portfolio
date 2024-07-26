import styles from "./SkillBox.module.css";
import reactSvg from "../../assets/skills/react-original-wordmark.svg";

function SkillBox() {
  return (
    <div className={styles.box}>
      <span className={styles.boxImage}>
        <img src={reactSvg} alt="" />
      </span>
      <span className={styles.boxText}>React</span>
    </div>
  );
}

export default SkillBox;
