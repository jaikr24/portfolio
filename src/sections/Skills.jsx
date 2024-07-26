import SkillBox from "../components/Skills/SkillBox";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.description}>
        <h4>Technologies and Tools</h4>
        <p>Demo paragraph</p>
      </div>
      <div className={styles.skillsGrid}>
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
      </div>
    </div>
  );
}

export default Skills;
