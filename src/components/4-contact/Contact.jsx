/* eslint-disable react/no-unescaped-entities */
import "./contact.css";

const Contact = () => {
  // const [state, handleSubmit] = useForm("xrgvvdlo");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"> </span>
        Get in touch
      </h1>
      <p className="sub-title">
        My inbox is always open. Whether you have a question or share about any
        relevant job that suits my skills and experience or just want to say
        hello, feel free to email me. I'll try my best to get back to you as
        soon as I can
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form className="">
          <div className="flex">
            <input
              placeholder="Your Email"
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
          </div>

          <input
            placeholder="Your Name"
            autoComplete="off"
            required
            type="text"
            name="name"
            id="name"
          />

          <div className="flex" style={{ marginTop: "24px" }}>
            <textarea
              required
              name="message"
              placeholder="Your message:"
              id="message"
            ></textarea>
          </div>

          <button type="submit" className="submit">
            <span className=" icon-paper-plane"></span> Send{" "}
          </button>
        </form>
        <div className=" animation"></div>
      </div>
    </section>
  );
};

export default Contact;
