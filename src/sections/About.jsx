import styles from "./About.module.css";
import EducationDetails from "../components/About/EducationDetails";
import Skills from "../components/About/Skills";

function About() {
  return (
    <div className={styles.about} id="about">
      <EducationDetails />
      <Skills />
    </div>
  );
}

export default About;
