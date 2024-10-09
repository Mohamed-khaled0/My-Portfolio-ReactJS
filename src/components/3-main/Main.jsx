/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./main.css";
let myProjects = [
  // React Projects
  {
    projectTitle: "React Shopping App",
    projectSubtitle: "An intuitive shopping experience showcasing a variety of products.",
    category: ["react", "all"],
    liveDemo: "https://reactjs-e-commerce-app.surge.sh/",
    githubLink: "https://github.com/Mohamed-khaled0/Basic-E-Commerce-ReactApp?tab=readme-ov-file",
    imgPath: "ecommerce-react.png",
    features: [
      "Responsive design using Bootstrap.",
      "Product carousel for featured items.",
      "Dynamic routing with React Router.",
      "High-quality images and well-structured components."
    ],
    technologies: ["React", "React Router", "Bootstrap", "CSS", "JavaScript"]
  },
  {
    projectTitle: "Prayer Timings App",
    projectSubtitle: "A web application displaying prayer timings for different cities.",
    category: ["react", "all"],
    liveDemo: "https://prayers-times-reactjs.netlify.app/",
    githubLink: "https://github.com/Mohamed-khaled0/Prayers-Times-Reactjs",
    imgPath: "prayers-times-reactj.png",
    features: [
      "Displays prayer times for selected cities.",
      "Real-time updating of the current time.",
      "Automatically calculates the next prayer based on the current time."
    ],
    technologies: ["React.js", "Moment.js", "Material UI", "Aladhan API", "Axios"]
  },

  // JavaScript (js) Projects
  {
    projectTitle: "CRUDS ",
    projectSubtitle: "A simple Product Management System that allows users to manage products.",
    category: ["css", "js", "all"],
    liveDemo: "https://mohamed-khaled0.github.io/Product-Management-System-CRUD/",
    githubLink: "https://github.com/Mohamed-khaled0/Product-Management-System-CRUD",
    imgPath: "crud-js.png",
    features: [
      "Add New Products: Add multiple products with details.",
      "Calculate Total Price: Calculate the total price dynamically.",
      "Update/Delete Products: Easily update and delete products.",
      "Search Functionality: Search products by title or category.",
      "Store Data in Local Storage: Data persists even after refreshing the page.",
      "Responsive Design: A responsive UI built using HTML and CSS."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Local Storage"]
  },
  {
    projectTitle: "Photo Editor",
    projectSubtitle: "A photo editing application that allows users to upload images and apply filters.",
    category: ["css", "js", "all"],
    liveDemo: "https://mohamed-khaled0.github.io/Image-Editor-UsingJS/",
    githubLink: "https://github.com/Mohamed-khaled0/Image-Editor-UsingJS",
    imgPath: "image-editor.png",
    features: [
      "Responsive design with HTML and CSS.",
      "Image upload functionality using JavaScript.",
      "Apply various filters and effects to images.",
      "Download the edited image after applying filters."
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    projectTitle: "E-Commerce Website",
    projectSubtitle: "An online shop offering a variety of products.",
    category: ["css", "js", "all"],
    liveDemo: "https://mohamed-khaled0.github.io/E-Commerce-Website-UsingJS/",
    githubLink: "https://github.com/Mohamed-khaled0/E-Commerce-Website-UsingJS?tab=readme-ov-file",
    imgPath: "ecommercejs.png",
    features: [
      "User-friendly interface for easy navigation.",
      "Search functionality to find products quickly.",
      "Shopping cart to manage selected items.",
      "Responsive design for mobile and desktop compatibility."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Swiper.js"]
  },

  // CSS Projects
  {
    projectTitle: "Leon Template",
    projectSubtitle: "A fully responsive landing page template designed for creative agencies.",
    category: ["css", "all"],
    liveDemo: "https://mohamed-khaled0.github.io/Leon-Html-Css-Template/",
    githubLink: "https://github.com/Mohamed-khaled0/Leon-Html-Css-Template",
    imgPath: "leon.png",
    features: [
      "Responsive Design: Looks great on all devices (desktop, tablet, mobile).",
      "Modern UI/UX: Clean and professional design.",
      "Smooth Animations: Eye-catching animations to enhance user experience.",
      "Cross-Browser Compatibility: Works seamlessly across major browsers.",
      "Customizable: Easy to modify and adapt to your needs."
    ],
    technologies: ["HTML5", "CSS3"]
  },
  {
    projectTitle: "Landing Page Template",
    projectSubtitle: "A modern and fully responsive landing page template.",
    category: ["css", "all"],
    liveDemo: "https://mohamed-khaled0.github.io/Bondi-Bootstrap-Project/",
    githubLink: "https://github.com/Mohamed-khaled0/Bondi-Bootstrap-Project",
    imgPath: "bondi.png",
    features: [
      "Fully Responsive Design: Adapts seamlessly to any screen size.",
      "Clean and Modern Layout: Aesthetic and professional design.",
      "Built with Bootstrap: Utilizes Bootstrap for easy layout.",
      "Customizable Components: Easily modify and extend the template."
    ],
    technologies: ["Bootstrap", "HTML", "CSS"]
  },
  {
    projectTitle: "PhotoRevive",
    projectSubtitle: "A mock-up website showcasing an AI tool for restoring old photos online.",
    category: ["css", "all"],
    liveDemo: "https://mohamed-khaled0.github.io/Photo-Revive-AI-Project/",
    githubLink: "https://github.com/Mohamed-khaled0/Photo-Revive-AI-Project",
    imgPath: "photo-revive.png",
    features: [
      "User-Friendly Interface: Simple and clean design.",
      "Upload Image: Upload your old photos.",
      "Revive Image: AI processes the image to remove imperfections.",
      "Download Result: Download your restored photo.",
      "Responsive Design: Optimized for all devices."
    ],
    technologies: ["HTML", "Tailwind CSS", "JavaScript"]
  }
];


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
  }



  return (
    <main className="flex">
      <section className="flex left-section  ">
        <button
          onClick={() => {
            handelClick("all")
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All projects
        </button>

        <button
          onClick={() => {
            handelClick("css")
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handelClick("js")
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handelClick("react")
          }}
          className={currentActive === "react" ? "active" : null}
        >
          ReactJS
        </button>
      </section>

      <section className="right-section flex  ">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card" >
              <img width={270} height={170}  src={item.imgPath} alt={item.imgPath}  />
              <div style={{ width: "270px" }} className="box" >
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.projectSubtitle}</p>
                <div className="flex icons">
                  <div style={{ gap: "10px" }} className="flex">
                    <a  className="icon-link" target="_blank" href={item.liveDemo}></a>
                    <a  className="icon-github" target="_blank" href={item.githubLink}></a>
                  </div>
                  <a className="link flex" href="" >
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
