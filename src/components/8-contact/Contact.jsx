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
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">{t('title')}</h2>
        
        <div className="contact-grid">
          <div className="contact-form-container">
            <div className="contact-form-header">
              <h3 className="contact-form-title">Send me a message</h3>
              <p className="contact-form-subtitle">
                {t('subTitle')}
              </p>
            </div>
            
            <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t('nameLabel')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder={t('namePlaceholder')}
                  autoComplete="name"
                  required
                />
                {nameError && <div className="form-error">{nameError}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">{t('emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder={t('emailPlaceholder')}
                  autoComplete="email"
                  required
                />
                {emailError && <div className="form-error">{emailError}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">{t('messageLabel')}</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder={t('messagePlaceholder')}
                  required
                />
                {messageError && <div className="form-error">{messageError}</div>}
              </div>

              <button type="submit" disabled={state.submitting} className="submit-button">
                {state.submitting ? (
                  <>
                    <div className="spinner"></div>
                    {t('submitting')}
                  </>
                ) : (
                  <>
                    <FiSend />
                    {t('submitButton')}
                  </>
                )}
              </button>

              {state.succeeded && (
                <div className="success-message">
                  <Lottie
                    loop={false}
                    style={{ height: 32, width: 32 }}
                    animationData={doneAnimation}
                  />
                  {t('successMessage')}
                </div>
              )}
            </form>
          </div>

          <div className="contact-info-container">
            <div className="contact-info-header">
              <h3 className="contact-info-title">{t('info_title')}</h3>
              <p className="contact-info-subtitle">{t('info_subtitle')}</p>
            </div>
            
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FiMail />
                </div>
                <span className="contact-info-text">{t('email_address')}</span>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FiPhone />
                </div>
                <span className="contact-info-text">{t('phone_number')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;