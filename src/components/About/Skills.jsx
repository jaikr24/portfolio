import styles from "./Skills.module.css";
import SkillBox from "./SkillBox";

const data = [
  {
    title: "React",
    icon: "react",
  },
  {
    title: "Java",
    icon: "java",
  },
  {
    title: "AWS",
    icon: "aws",
  },
  {
    title: "Android",
    icon: "android",
  },
  {
    title: "HTML",
    icon: "html",
  },
  {
    title: "CSS",
    icon: "css",
  },
  {
    title: "JavaScript",
    icon: "javascript",
  },
  {
    title: "MySQL",
    icon: "mysql",
  },
];

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.description}>
        <h1>Tools and Technologies</h1>
        <p>Demo paragraph</p>
      </div>
      <div className={styles.skillsGrid}>
        {data.map((skill) => (
          <SkillBox skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
