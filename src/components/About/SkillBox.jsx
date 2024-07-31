import styles from "./SkillBox.module.css";

function SkillBox({ skill }) {
  return (
    <div className={styles.box}>
      <span className={styles.boxImage}>
        <img
          className={styles.boxImage}
          src={`./svg/skills/${skill.icon}.svg`}
          alt=""
        />
      </span>
      <span className={styles.boxText}>{skill.title}</span>
    </div>
  );
}

export default SkillBox;
