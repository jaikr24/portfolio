import styles from "../About/EducationDetails.module.css";
import EducationTemplate from "./EducationTemplate";

const data = [
  {
    degree: "Bachelor in Computer Engineering",
    name: "Chandigarh University",
    icon: "./svg/education-template/graduation-cap-solid.svg",
    isSchool: false,
    location: "Mohali, Punjab",
    session: "(2020 - 2024)",
  },
  {
    degree: "Intermediate",
    name: "Lord Buddha Public School",
    icon: "./svg/education-template/school-solid.svg",
    isSchool: true,
    location: "Kota, Rajsthan",
    session: "(2018 - 2019)",
  },
  {
    degree: "Matriculation",
    name: "Madonna English School",
    icon: "./svg/education-template/school-solid.svg",
    isSchool: true,
    location: "Darbhanga, Bihar",
    session: "(2016 - 2017)",
  },
];
function EducationDetails() {
  return (
    <div className={styles.education}>
      <div className={styles.educationDetails}>
        <div className={styles.educationHeading}>
          <h4>My education Journey</h4>
        </div>
        {data.map((data) => (
          <EducationTemplate data={data} />
        ))}
      </div>
      <div className={styles.cover}></div>
      <div className={styles.educationGraphic}>
        <img src="./curve-lines.svg" alt="" />
      </div>
    </div>
  );
}

export default EducationDetails;
