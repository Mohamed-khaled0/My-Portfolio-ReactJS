/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import contactAnimation from "../../animations/contact.json";
import { FiSend } from 'react-icons/fi'; // Import the Send icon
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Contact = () => {
  const { t } = useTranslation('contact'); // Use the 'contact' namespace
  const [state, handleSubmit] = useForm("mgvewbyg");

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
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              placeholder={t('emailPlaceholder')} // Use translation here
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <input
            placeholder={t('namePlaceholder')} // Use translation here
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
              placeholder={t('messagePlaceholder')} // Use translation here
              id="message"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? t('submitting') : ( // Use translation here
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
