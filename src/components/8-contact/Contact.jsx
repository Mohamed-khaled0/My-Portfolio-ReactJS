/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./contact.css";
import { useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import { FiSend, FiMail, FiPhone } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Contact = () => {
  const { t } = useTranslation('contact');
  const [state, handleSubmit] = useForm("mgvewbyg");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const emailField = form.email;
    const nameField = form.name;
    const messageField = form.message;
    let isValid = true;

    if (!emailField.value || !emailPattern.test(emailField.value)) {
      setEmailError(t('Please Enter Valid Email'));
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!nameField.value) {
      setNameError(t('Please Enter Your Name'));
      isValid = false;
    } else {
      setNameError("");
    }

    if (!messageField.value) {
      setMessageError(t('Please Enter Your Message'));
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      handleSubmit(event);
    }
  };

  return (
    <section id="contact" className="contact-us">
      <h2 className="section-title">{t('title')}</h2>
      <div className="contact-layout">
        <div className="contact-form-container">
          <p className="sub-title">
            {t('subTitle')}
          </p>
          <form onSubmit={handleFormSubmit} noValidate>
            <label htmlFor="email">{t('emailLabel')}</label>
            <input
              placeholder={t('emailPlaceholder')}
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            {emailError && <p className="custom-error-message">{emailError}</p>}
            
            <label htmlFor="name">{t('nameLabel')}</label>
            <input
              placeholder={t('namePlaceholder')}
              autoComplete="off"
              required
              type="text"
              name="name"
              id="name"
            />
            {nameError && <p className="custom-error-message">{nameError}</p>}

            <label htmlFor="message">{t('messageLabel')}</label>
            <textarea
              required
              name="message"
              placeholder={t('messagePlaceholder')}
              id="message"
            />
            {messageError && <p className="custom-error-message">{messageError}</p>}

            <button type="submit" disabled={state.submitting} className="submit">
              {state.submitting ? t('submitting') : (
                <>
                  <FiSend style={{ marginRight: "8px" }} />
                  {t('submitButton')}
                </>
              )}
            </button>
            {state.succeeded && (
              <p className="success-message">
                <Lottie
                  loop={false}
                  style={{ height: 37 }}
                  animationData={doneAnimation}
                />
                {t('successMessage')}
              </p>
            )}
          </form>
        </div>

        <div className="contact-info-container">
          <h3>{t('info_title')}</h3>
          <p>{t('info_subtitle')}</p>
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <FiMail className="icon" />
              <span>{t('email_address')}</span>
            </li>
            <li className="contact-info-item">
              <FiPhone className="icon" />
              <span>{t('phone_number')}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
