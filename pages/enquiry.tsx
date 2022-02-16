import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";
// import { supabase } from "../utils/supabaseClient";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const dbEnable = async () => {
//   let result = await supabase.from("Leads").select("*");
//   console.log(supabase.from("Leads").select("*"));
//   console.log(result);
// };

const addLead = async (e: any) => {
  let usertype = (document.querySelector("#usertype") as HTMLSelectElement)
    ?.value;
  let name = (document.querySelector("#name") as HTMLInputElement)?.value;
  let email = (document.querySelector("#email") as HTMLInputElement)?.value;
  let telephone = Number(
    (document.querySelector("#telephone") as HTMLInputElement)?.value
  );
  let message = (document.querySelector("#message") as HTMLInputElement)?.value;
  e.preventDefault();

//   let response = await supabase.from("Leads").insert({
//     usertype: usertype,
//     name: name,
//     email: email,
//     number: telephone,
//     message: message,
//   });
//   console.log(response);
//   // Console log the response from server
//   if (response.status === 201) {
//     console.log("Data added");
//     console.log(response);
//     // toast.success(" \u{1F44D} Thank You for your enquiry", {
//     //   position: toast.POSITION.TOP_CENTER,
//     // });
//   }
  e.target.reset();
};

const Enquiry = () => (
  <>
    <Header />
    <h1 className={styles.heading}>Enquiry Form</h1>
    <main>
      <div className={styles.contact}>
        <section className={styles.enquiryForm}>
          <h3>Enquiry Form</h3>
          <form action="post" onSubmit={addLead}>
            {/* <select name="" id="usertype">
              <option value="customer">Customer</option>
              <option value="distributor">Distributor</option>
            </select> */}
            <label>Name</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="aditya choudhary"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="aditya@gmail.com"
              required
            />
            <label>Number</label>
            <input
              type="tel"
              name=""
              id="telephone"
              placeholder="9425410665"
              required
            />
            <label>Message</label>
            <textarea name="" id="message" cols={30} rows={10}></textarea>
            <input type="submit" value="Submit" />
          </form>
        </section>
        <section className={styles.contactDetails}>
          <p>Phone: +91 94254 10665</p>
          <p>Email: nsrl@gmail.com</p>
        </section>
      </div>
      {/* <ToastContainer /> */}
    </main>
    <Footer />
  </>
);

export default Enquiry;
