/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useTranslation } from "react-i18next"; // Import useTranslation
import "./hero.css";

export default function Hero() {
  const { t } = useTranslation("hero"); // Specify 'hero' namespace

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="main" className="hero flex">
      <div className="left-section flex">
        <div className="parent-avatar flex">
          <img
            className="avatar"
            src="/images/personalphoto.webp"
            alt="Mohamed Khaled Image"
            loading="lazy"
          />
          <motion.h1
            className="title"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.1 }}
          >
            {t("greeting")}
          </motion.h1>
          <motion.h1
            className="title"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {t("profession")}
          </motion.h1>
          <motion.h1
            className="title"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {t("description")}
          </motion.h1>
        </div>

        <div className="button-group flex">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button aria-label={t("ariaLabels.resumeButton")}>
              <span className="icon-cloud-download"></span>{" "}
              {t("buttons.resume")}
            </button>
          </a>
          <a
            href="https://github.com/Mohamed-khaled0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button aria-label={t("ariaLabels.githubButton")}>
              <span className="icon-github"></span> {t("buttons.github")}
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-khaled3/"
            target="_blank"
            rel="noopener noreferrer"
          
          >
            <button aria-label={t("ariaLabels.linkedinButton")}>
              <span className="icon-linkedin"></span> {t("buttons.linkedin")}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
