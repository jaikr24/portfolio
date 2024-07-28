import styles from "./LinkButton.module.css";

function LinkButton({ link }) {
  return (
    <div>
      <a href={link}>
        <div className={styles.linkButton}>
          <p>Open</p>
          <img
            src="./svg/projects/arrow-up-right-from-square-solid.svg"
            alt=""
          />
        </div>
      </a>
    </div>
  );
}

export default LinkButton;
