import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import styles from "../../styles/Blog.module.css";

const Blog = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Blog</h1>
        <ul className={styles.dashboard}>
          <li>
            <Link href="blog/the-indian-transport-industry-in-2022">
              <a>The state of Indian Transport Industry in 2022</a>
            </Link>
          </li>
          <li>
            <Link href="blog/the-indian-transport-industry-in-2022">
              <a>The state of Indian Transport Industry in 2022</a>
            </Link>
          </li>
          <li>
            <Link href="blog/the-indian-transport-industry-in-2022">
              <a>The state of Indian Transport Industry in 2022</a>
            </Link>
          </li>
          <li>
            <Link href="blog/the-indian-transport-industry-in-2022">
              <a>The state of Indian Transport Industry in 2022</a>
            </Link>
          </li>
          <li>
            <Link href="blog/the-indian-transport-industry-in-2022">
              <a>The state of Indian Transport Industry in 2022</a>
            </Link>
          </li>
          <li>
            <Link href="blog/the-indian-transport-industry-in-2022">
              <a>The state of Indian Transport Industry in 2022</a>
            </Link>
          </li>
          <li>
            <Link href="blog/the-indian-transport-industry-in-2022">
              <a>The state of Indian Transport Industry in 2022</a>
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
