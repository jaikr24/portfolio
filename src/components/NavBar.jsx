import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navBar}>
        <span className={styles.navLogo}>Jai</span>
        <ul className={styles.navItems}>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
