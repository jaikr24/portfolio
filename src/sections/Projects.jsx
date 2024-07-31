import styles from "./Projects.module.css";
import ProjectTemplate from "../components/Projects/ProjectTemplate";

const projects = [
  {
    name: "Quizee",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium?",
    link: "https://github.com/jaikr24/quizee",
    techStack: ["java", "android", "firebase"],
  },
  {
    name: "Connect Four",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium?",
    link: "https://github.com/jaikr24/Connect-Four",
    techStack: ["java", "javafx"],
  },
  {
    name: "Rock Paper Scissors",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium?",
    link: "https://github.com/jaikr24/RockPaperScissors",
    techStack: ["html", "css", "javascript"],
  },
  {
    name: "Tic Tac Toe",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque blanditiis eligendi, nulla laborum eum molestiae saepe, quam maxime reprehenderit iste fugit quos asperiores necessitatibus obcaecati distinctio quibusdam dolores praesentium?",
    link: "https://github.com/jaikr24/tic-tac-toe",
    techStack: ["react", "html", "css"],
  },
];

function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.sectionHeading}>
        <h4 className={styles.sectionTitle}>Projects</h4>
        <p>Pr demo</p>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project, idx) => (
          <div
            className={idx % 2 === 0 ? styles.projectEven : styles.projectOdd}
          >
            <ProjectTemplate project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
