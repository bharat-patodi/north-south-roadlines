import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <>
      <Header />
      <main className={styles.login}>
        <h1>Login</h1>
        <form action="post" className={styles.loginForm}>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="emailInput" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" id="passwordInput" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
