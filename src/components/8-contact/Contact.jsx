import "./contact.css";
import { useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import { FiSend, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
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

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: t('email_address'),
      href: `mailto:${t('email_address')}`,
      color: 'var(--primary)'
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: t('phone_number'),
      href: `tel:${t('phone_number')}`,
      color: 'var(--accent)'
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Giza, Egypt',
      href: '#',
      color: 'var(--warning)'
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'Mohamed Khaled',
      href: 'https://linkedin.com/in/mohamed-khaled',
      color: '#0077B5'
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'Mohamed-khaled0',
      href: 'https://github.com/Mohamed-khaled0',
      color: '#333'
    }
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">{t('title')}</h2>
        
        <div className="contact-grid">
          <div className="contact-form-container glass-strong animate-fade-in-up">
            <div className="contact-form-header">
              <div className="form-icon glass">
                <FiSend />
              </div>
              <h3 className="contact-form-title">Send me a message</h3>
              <p className="contact-form-subtitle">
                {t('subTitle')}
              </p>
            </div>
            
            <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t('nameLabel')}</label>
                <div className="input-container">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input glass"
                    placeholder={t('namePlaceholder')}
                    autoComplete="name"
                    required
                  />
                </div>
                {nameError && <div className="form-error">{nameError}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">{t('emailLabel')}</label>
                <div className="input-container">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input glass"
                    placeholder={t('emailPlaceholder')}
                    autoComplete="email"
                    required
                  />
                </div>
                {emailError && <div className="form-error">{emailError}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">{t('messageLabel')}</label>
                <div className="input-container">
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea glass"
                    placeholder={t('messagePlaceholder')}
                    required
                  />
                </div>
                {messageError && <div className="form-error">{messageError}</div>}
              </div>

              <button type="submit" disabled={state.submitting} className="submit-button btn-primary">
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
                <div className="success-message glass">
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

          <div className="contact-info-container glass-strong animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="contact-info-header">
              <div className="info-icon glass">
                <FiMail />
              </div>
              <h3 className="contact-info-title">{t('info_title')}</h3>
              <p className="contact-info-subtitle">{t('info_subtitle')}</p>
            </div>
            
            <div className="contact-info-list">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="contact-info-item glass"
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  style={{ '--item-color': item.color }}
                >
                  <div className="contact-info-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="contact-info-content">
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;