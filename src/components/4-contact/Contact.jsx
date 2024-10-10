/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animations/done.json";
import contactAnimation from "../../../src/animations/contact.json";

const Contact = () => {
  // Make sure to change this id "mgvewbyg"
  // Website like https://formspree.io/forms
  const [state, handleSubmit] = useForm("mgvewbyg");
  

  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"> </span>
        Get in touch
      </h1>
      <p className="sub-title">
        My inbox is always open. Whether you have a question or want to share
        about any relevant job that suits my skills and experience, or just want
        to say hello, feel free to email me. I'll try my best to get back to you
        as soon as I can.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              placeholder="Your Email"
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <input
            placeholder="Your Name"
            autoComplete="off"
            required
            type="text"
            name="name"
            id="name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <div className="flex" style={{ marginTop: "24px" }}>
            <textarea
              required
              name="message"
              placeholder="Your message:"
              id="message"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" ,color:"green" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 455 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
