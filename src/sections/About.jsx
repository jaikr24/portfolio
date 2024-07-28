import styles from "./About.module.css";
import EducationTemplate from "../components/About/EducationTemplate";
import educationGraphic from "../assets/about/education-graphic.jpg";

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

function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.educationDetails}>
        {/* <h2>My education Journey</h2>
        {data.map((data) => (
          <EducationTemplate data={data} />
        ))} */}
        <div className={styles.educationHeading}>
          <h4>My education Journey</h4>
        </div>
        <div>
          {data.map((data) => (
            <EducationTemplate data={data} />
          ))}
        </div>
      </div>
      <div className={styles.educationGraphic}>
        <img src={educationGraphic} alt="" />
      </div>
    </div>
  );
}

export default About;
