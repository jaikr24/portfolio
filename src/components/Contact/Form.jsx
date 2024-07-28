import styles from "./Form.module.css";
function Form() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.contactForm}>
        <div className={styles.row1}>
          <input type="text" name="name" placeholder="Your Name"></input>
          <input type="text" placeholder="Your Email"></input>
          <input type="text" placeholder="Your Phone"></input>
          <input type="text" placeholder="Your Subject"></input>
        </div>
        <div className={styles.row2}>
          <textarea
            name="message"
            id=""
            placeholder="Write a message"
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
