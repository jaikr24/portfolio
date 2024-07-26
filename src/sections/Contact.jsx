import ContactDetails from "../components/ContactDetails";
import Form from "../components/Form";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <h1>Contact Me</h1>
      <div className={styles.contactContainer}>
        <ContactDetails />
        <Form />
      </div>
    </>
  );
}

export default Contact;
