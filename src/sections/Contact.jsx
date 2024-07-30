import styles from "./Contact.module.css";
import ContactDetails from "../components/Contact/ContactDetails";
import Form from "../components/Contact/Form";

function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.description}>{/* <h4>Contact Me</h4> */}</div>
      <div className={styles.contactContainer}>
        <div className={styles.detailsContainer}>
          <h4>Contact Me</h4>
          <ContactDetails />
        </div>
        {/* <ContactDetails /> */}

        <Form />
      </div>
    </div>
  );
}

export default Contact;
