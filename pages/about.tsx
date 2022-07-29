import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>About Us</h1>
          <h2>30 years of Experience</h2>
          <p>
            NSRL has been in Supply Chain & Logistics Management since 1993. The
            Company first took centre stage by being Airtel&apos;s first
            logistics partner in Central India 2 decades ago. Headquartered in
            Indore, NSRL has branches in Ahmedabad, Pune, Mumbai, Gurgaon,
            Chandigarh, Raipur, & Bhopal.
          </p>
          <br />
          <p>
            NSRL has also expanded its services to become a fully-fledged
            Third-Party Logistics (3PL) services provider.
          </p>
          <br />
          <p>
            We, at North South Roadlines, have always been committed to
            providing exemplary services. With a considerable experience of over
            31 years, spanning over 4 decades, we have a proven track-record of
            delivering top-quality services and always setting new benchmarks in
            customer-satisfaction.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
