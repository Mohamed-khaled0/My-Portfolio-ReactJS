/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./main.css";
import myProjects from "./ProjectsData";

export default function Main() {
  let [currentActive, setCurrentActive] = useState("all");
  let [arr, setArr] = useState(myProjects);

  let handelClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    let newArr = myProjects.filter((item) => {
      let checkOnCategory = item.category.filter((myNewItem) => {
        return myNewItem === buttonCategory;
      });
      return checkOnCategory[0] === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex left-section  ">
        <button
          onClick={() => {
            handelClick("all");
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All projects
        </button>

        <button
          onClick={() => {
            handelClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handelClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handelClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          ReactJS
        </button>
      </section>

      <section className="right-section flex  ">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card">
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
                  <a className="link flex" href={item.githubRepos} target="_blank">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
