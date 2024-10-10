/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./main.css";
import myProjects from "./ProjectsData";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  let [currentActive, setCurrentActive] = useState("all");
  let [arr, setArr] = useState(myProjects);

  let handelClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    if (buttonCategory === "all") {
      setArr(myProjects);
      return;
    }
    let newArr = myProjects.filter((item) => {
      return item.category.includes(buttonCategory);
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => handelClick("all")}
          className={currentActive === "all" ? "active" : ""}
        >
          All projects
        </button>
        <button
          onClick={() => handelClick("css")}
          className={currentActive === "css" ? "active" : ""}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => handelClick("js")}
          className={currentActive === "js" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => handelClick("react")}
          className={currentActive === "react" ? "active" : ""}
        >
          ReactJS
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 50,
              }}
              key={item.imgPath}
              className="card"
            >
              <img
                width={270}
                height={170}
                src={item.imgPath}
                alt={item.imgPath}
              />
              <div style={{ width: "270px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.projectSubtitle}</p>
                <div className="flex icons">
                  <div style={{ gap: "10px" }} className="flex">
                    <a
                      className="icon-link"
                      target="_blank"
                      href={item.liveDemo}
                    ></a>
                    <a
                      className="icon-github"
                      target="_blank"
                      href={item.githubLink}
                    ></a>
                  </div>
                  <a
                    className="link flex"
                    href={item.githubRepos}
                    target="_blank"
                  >
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
