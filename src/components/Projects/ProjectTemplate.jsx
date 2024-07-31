import LinkButton from "./LinkButton";
import styles from "./ProjectTemplate.module.css";

function ProjectTemplate({ project }) {
  return (
    <div className={styles.projectTemplate}>
      <div className={styles.designElement}></div>

      <div className={styles.detailsSection}>
        <div className={styles.dataContainer}>
          <h4 className={styles.projectTitle}>{project.name}</h4>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
      </div>
      <div className={styles.techStackAndLinkSection}>
        <div className={styles.techStack}>
          <div className={styles.techStackIcon}>
            <p className={styles.colon}>
              <strong>Tech Stack :</strong>
            </p>
          </div>
          <div>
            {project.techStack.map((item) => (
              <img src={`./svg/tech-stack/${item}.svg`} alt={item} />
            ))}
          </div>
        </div>
        <LinkButton link={project.link} />
      </div>
    </div>
  );
}

export default ProjectTemplate;
