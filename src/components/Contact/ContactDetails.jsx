// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactDetails.module.css";

const data = [
  {
    name: "Email",
    icon: "./svg/contact/envelope-solid.svg",
    value: "shubham.kuumar.1990111@gmail.com",
  },
  {
    name: "Phone",
    icon: "./svg/contact/phone-solid.svg",
    value: "+91 9470010407",
  },
  {
    name: "Address",
    icon: "./svg/contact/location-dot-solid.svg",
    value: "Madhubani - 847211",
  },
];

function ContactDetails() {
  return (
    <div className={styles.contactDetails}>
      <ul className={styles.contactItems}>
        {data.map((val) => (
          <li className={styles.listItem} key={val}>
            <ContactItem val={val} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ val }) {
  return (
    <>
      <div className={styles.itemType}>
        <img src={val.icon} alt="" />
      </div>
      <div className={styles.itemDescription}>
        <h2>{val.name}</h2>
        <p>{val.value}</p>
      </div>
    </>
  );
}

export default ContactDetails;
