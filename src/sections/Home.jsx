import styles from "./Home.module.css";
import avatar from "../assets/Avatar.jpg";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className={styles.home} id="home">
      <div className={styles.infoSection}>
        <div className={styles.intro}>
          <h1>Hi, I am Jai</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Front End Developer", "Android Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            fugiat voluptas eos aliquid earum officiis. Explicabo hic nulla ad.
            Possimus magni iste temporibus illo nostrum in et blanditiis nobis
            corrupti.
          </p>
        </div>

        <button>Dowload Resume</button>
      </div>

      <div className={styles.visual}>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}

export default Home;
