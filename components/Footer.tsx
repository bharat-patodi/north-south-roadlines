import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.footerNav}>
      <ul className={styles.footerLinks}>
        <li>
          {/* <Link href="/credits">
            <a>Credits</a>
          </Link> */}
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.socialLinks}>
        <li>
          <Link href="/contact">
            <a>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
            <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
    <p>© Copyright & trademark owned by North South Roadlines</p>
  </footer>
);

export default Footer;
