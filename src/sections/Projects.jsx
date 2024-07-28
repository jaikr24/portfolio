import ProjectTemplate from "../components/Projects/ProjectTemplate";
import styles from "./Projects.module.css";

const projects = [
  {
    name: "Quizee",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium?",
    link: "https://www.github.com/jaikr24",
    techStack: ["java", "android", "firebase"],
  },
];

function Projects() {
  return (
    <div className={styles.projects}>
      <ProjectTemplate project={projects[0]} />
    </div>
  );
}

export default Projects;
