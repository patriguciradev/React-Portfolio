import React from "react";
import { FaGithub } from "react-icons/fa";
import Img from "./Img/html5.png";
import Img2 from "./Img/css3.png";
import Img3 from "./Img/figma.png";
import Img4 from "./Img/react.png";

const Skills = () => {
  return (
    <section className="skills-hero" id="skills">
      <div
        className="skills-banner"
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <h2
          className="skills-title"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          Skills
        </h2>
        <div
          className="line"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
        ></div>
      </div>
      <div className="card">
        <div className="skills-card">
          <div
            className="skills-icon"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <img src={Img} alt="" />
          </div>
          <h2
            className="skills-label"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            HTML
          </h2>
        </div>
        <div className="skills-card">
          <div
            className="skills-icon"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <img src={Img2} alt="" />
          </div>
          <h2
            className="skills-label"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            CSS
          </h2>
        </div>
        <div className="skills-card">
          <div
            className="skills-icon"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <img src={Img3} alt="" />
          </div>
          <h2
            className="skills-label"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            Figma
          </h2>
        </div>
        <div className="skills-card">
          <div
            className="skills-icon"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiM2NzNhYjciIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNSBWMzd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMzLjAzLDI1LjZjLTAuNjUtMC45LTEuNTktMS41Mi0yLjgtMS44NWMwLDAsMS4wMi0wLjM3LDEuOTQtMS43NWMwLjU1LTAuODgsMC44My0xLjk0LDAuODMtMy4xOCBjMC0yLjE1LTAuNzgtMy44LTIuMzQtNC45M0MyOS4xLDEyLjc2LDI3LjM0LDEyLDI0LjM1LDEySDE1djI0aDEwLjQzYzIuODMtMC4wMiw0Ljk2LTAuNjMsNi40MS0xLjhjMS40NC0xLjE5LDIuMTYtMi45NSwyLjE2LTUuMyBDMzQsMjcuNiwzMy42OCwyNi41LDMzLjAzLDI1LjZ6IE0yMSwxNmMwLDAsNC4xNywwLDQuMjUsMGMxLjUyLDAsMi43NSwxLjIzLDIuNzUsMi43NWMwLDEuNTItMS4yMywyLjc1LTIuNzUsMi43NSBjLTAuMDgsMC00LjI1LDAtNC4yNSwwVjE2eiBNMjYsMzJoLTV2LTZoNWMxLjY2LDAsMywxLjM0LDMsM0MyOSwzMC42NiwyNy42NiwzMiwyNiwzMnoiPjwvcGF0aD4KPC9zdmc+"
            />
          </div>
          <h2
            className="skills-label"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            Bootstrap
          </h2>
        </div>
        <div className="skills-card">
          <div
            className="skills-icon"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <FaGithub />
          </div>
          <h2
            className="skills-label"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            Github
          </h2>
        </div>
        <div className="skills-card">
          <div
            className="skills-icon"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmZmQ2MDAiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4IDMyLjk0N2MuNjkyIDEuMTI0IDEuNDQ0IDIuMjAxIDMuMDM3IDIuMjAxIDEuMzM4IDAgMi4wNC0uNjY1IDIuMDQtMS41ODUgMC0xLjEwMS0uNzI2LTEuNDkyLTIuMTk4LTIuMTMzbC0uODA3LS4zNDRjLTIuMzI5LS45ODgtMy44NzgtMi4yMjYtMy44NzgtNC44NDEgMC0yLjQxIDEuODQ1LTQuMjQ0IDQuNzI4LTQuMjQ0IDIuMDUzIDAgMy41MjguNzExIDQuNTkyIDIuNTczbC0yLjUxNCAxLjYwN2MtLjU1My0uOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3LS45NDYgMC0xLjU0NS41OTctMS41NDUgMS4zNzcgMCAuOTY0LjYgMS4zNTQgMS45ODUgMS45NTFsLjgwNy4zNDRDMzYuNDUyIDI5LjY0NSAzOCAzMC44MzkgMzggMzMuNTIzIDM4IDM2LjQxNSAzNS43MTYgMzggMzIuNjUgMzhjLTIuOTk5IDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzggMzIuOTQ3ek0xNy45NTIgMzMuMDI5Yy41MDYuOTA2IDEuMjc1IDEuNjAzIDIuMzgxIDEuNjAzIDEuMDU4IDAgMS42NjctLjQxOCAxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCAzLjM2Ny0xLjk1MyA0Ljg5OS00LjgwNSA0Ljg5OS0yLjU3NyAwLTQuNDM3LTEuNzQ2LTUuMTk1LTMuMzY4TDE3Ljk1MiAzMy4wMjl6Ij48L3BhdGg+Cjwvc3ZnPg=="/>
          </div>
          <h2
            className="skills-label"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            JavaScript
          </h2>
        </div>
        <div className="skills-card">
          <div
            className="skills-icon"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <img src={Img4} alt="" />
          </div>
          <h2
            className="skills-label"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            React JS
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;
