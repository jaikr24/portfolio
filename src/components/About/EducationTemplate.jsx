import styles from "./EducationTemplate.module.css";

function EducationTemplate({ data }) {
  return (
    <div className={styles.educationTemplate}>
      <div className={styles.icon}>
        <img src={data.icon} alt="" />
      </div>
      <div className={styles.detailsSection}>
        <h2>{data.degree}</h2>
        <h3>{data.name}</h3>
        <span className={styles.locationSession}>
          <p>{data.location}</p>
          <p className={styles.session}>{data.session}</p>
        </span>
      </div>
    </div>
  );
}

export default EducationTemplate;
