import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";

const homeData = {
  description:
    "As a motivated undergraduate with robust creative, problem-solving, and leadership skills, I am committed to pushing the limits in computer science engineering. My dedication lies in crafting impactful, high-quality projects that reshape technological benchmarks while contributing effectively to forward-looking organizations",
  domains: ["Front End Developer", "Android Developer"],
};

function Home() {
  return (
    <div className={styles.home} id="home">
      <div className={styles.infoSection}>
        <div className={styles.intro}>
          <h1>Hi, I am Jai</h1>
          <h2>
            <Typewriter
              options={{
                strings: homeData.domains,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p>{homeData.description}</p>
        </div>

        <button>Dowload Resume</button>
      </div>

      <div className={styles.visual}>
        <img src="./images/avatar.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
