import styles from "./ContactDetails.module.css";
function ContactDetails() {
  const arr = [1, 2, 3];
  return (
    <div>
      <ul className={styles.contactItems}>
        {arr.map((val) => (
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
      <div className={styles.itemType}>{val}</div>
      <div>
        <h2>Demo Text</h2>
        <p>demo text</p>
      </div>
    </>
  );
}

export default ContactDetails;
