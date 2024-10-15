/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import contactAnimation from "../../animations/contact.json";
import { FiSend } from 'react-icons/fi'; // Import the Send icon
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { useState } from 'react'; // Import useState for validation

const Contact = () => {
  const { t } = useTranslation('contact'); // Use the 'contact' namespace
  const [state, handleSubmit] = useForm("mgvewbyg");

  // State for custom validation messages
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState(""); // New state for message validation

  // Email regex pattern for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Custom form validation
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const emailField = event.target.email;
    const nameField = event.target.name;
    const messageField = event.target.message;

    let isValid = true;

    // Email validation using regex
    if (!emailField.value || !emailPattern.test(emailField.value)) {
      setEmailError(t('Please Enter Valid Email')); // Set custom email error from translations
      isValid = false;
    } else {
      setEmailError(""); // Clear error if valid
    }

    // Name validation
    if (!nameField.value) {
      setNameError(t('Please Enter Your Name')); // Set custom name error from translations
      isValid = false;
    } else {
      setNameError(""); // Clear error if valid
    }

    // Message validation
    if (!messageField.value) {
      setMessageError(t('Please Enter Your Message')); // Set custom message error from translations
      isValid = false;
    } else {
      setMessageError(""); // Clear error if valid
    }

    if (isValid) {
      handleSubmit(event); // Call Formspree submission if validation passes
    }
  };

  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"> </span>
        {t('title')} {/* Use translation here */}
      </h1>
      <p className="sub-title">
        {t('subTitle')} {/* Use translation here */}
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleFormSubmit} noValidate>
          <div className="flex">
            <input
              placeholder={t('emailPlaceholder')} // Use translation here
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            {emailError && <p className="custom-error-message">{emailError}</p>} {/* Display custom email error */}
          </div>

          <input
            placeholder={t('namePlaceholder')} // Use translation here
            autoComplete="off"
            required
            type="text"
            name="name"
            id="name"
          />
          {nameError && <p className="custom-error-message">{nameError}</p>} {/* Display custom name error */}

          <div className="flex" style={{ marginTop: "24px" }}>
            <textarea
              required
              name="message"
              placeholder={t('messagePlaceholder')} // Use translation here
              id="message"
            />
            {messageError && <p className="custom-error-message">{messageError}</p>} {/* Display custom message error */}
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? t('submitting') : (
              <>
                <FiSend style={{ marginRight: "8px" }} /> {/* Add the icon here */}
                {t('submitButton')} {/* Use translation here */}
              </>
            )}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem", color: "green" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              {t('successMessage')} {/* Use translation here */}
            </p>
          )}
        </form>
        <div className="animation">
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
