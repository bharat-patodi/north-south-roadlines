import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = (e: any) => {
    // DOM is not available for manipulation like this with React
    console.log("clicked");
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.headerNav} ${styles.navBar}`}>
        <ul className={styles.headerNavUl}>
          <li>
            <Link href="/">
              <a>
                <img src="nsrl-logo.png" alt="logo" className={styles.logo} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/enquiry">
              <a>Enquiry</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li> */}
        </ul>
        <ul className={styles.headerNavUl}>
          <li>Call us at: +91 94254-10665</li>
        </ul>
        <ul className={styles.headerNavUl}>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={`${styles.headerNav}`}>
        <ul className={styles.navHamburgerIcon}>
          <li>
            <Link href="/">
              <a>
                <img
                  src="nsrl-logo.png"
                  alt="logo"
                  className={styles.navHamburgerLogo}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <FontAwesomeIcon
                  icon="bars"
                  onClick={handleHamburgerClick}
                ></FontAwesomeIcon>
              </a>
            </Link>
          </li>
          {isOpen ? <HamburgerNavComponent /> : null}
        </ul>
      </nav>
    </header>
  );
};

const HamburgerNavComponent = () => {
  return (
    <ul className={styles.navHamburger}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/enquiry">
          <a>Enquiry</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
