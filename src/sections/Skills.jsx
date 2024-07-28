import SkillBox from "../components/Skills/SkillBox";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.description}>
        <h1>Tools and Technologies</h1>
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
