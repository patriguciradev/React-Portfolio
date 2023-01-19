import React from "react";
import Img from "./Img/abt-img1.jpeg";
import resume from "./resume.pdf";

const About = () => {
  return (
    <section className="about-hero" id="about">
      <div
        className="abt-banner"
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <h2
          className="abt-title1"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          About Me
        </h2>
        <div
          className="line"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
        ></div>
        <p
          className="abt-desc"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          personal
        </p>
      </div>
      <div className="row">
        <div
          className="abt-col-1"
          data-aos="fade-up-right"
          data-aos-delay="500"
          data-aos-duration="700"
        >
          <img src={Img} alt="" />
        </div>
        <div className="abt-col-2">
          <p
            className="abt-info"
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="700"
          >
            I am John Patrick, Front-end developer with experience in creating
            responsive website. Skilled with HTML, CSS, Bootstrap, JavaScript
            and React JS.
          </p>
          <p
            className="abt-info"
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="700"
          >
            I want to obtain a meaningful experience in an actual job
            environment in line with those that I have learned from my training.
            I'm a starter developer who always want to expand or improve my
            knowledge, skills, and work hard to excel at my job.
          </p>
          <a href={resume} download>
            <button
              className="home-btn"
              data-aos="fade-right"
              data-aos-delay="900"
              data-aos-duration="700"
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
