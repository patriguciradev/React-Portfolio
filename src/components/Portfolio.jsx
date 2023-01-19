import React from "react";
import Img from "./Img/logoDevkids.png";
import Img1 from "./Img/Larana.png";
import Img3 from "./Img/travel-blog.png";
import Img4 from "./Img/cs.png";

const Portfolio = () => {
  return (
    <section className="portfolio-hero" id="portfolio">
      <div
        className="abt-banner"
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <h2
          className="portfolio-title"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          Portfolio
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
          recent projects
        </p>
      </div>
      <div className="card-portfolio">
        <div
          className="card-work"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="700"
        >
          <div className="tools">
            <div className="circle">
              <span class="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card_content">
            <img src={Img4} alt="" draggable={false} />
            <h2 className="content-desc">Co.Education</h2>
            <p className="project-info">Online Learning Education</p>
            <p className="tech-desc">HTML CSS Bootstrap Nodejs Mysql</p>
            <a href="https://github.com/michilar/Capstone-Group5">
              <button class="cssbuttons-io-button">
                {" "}
                Visit Site
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div
          className="card-work"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="700"
        >
          <div className="tools">
            <div className="circle">
              <span class="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card_content">
            <img src={Img} alt="" draggable={false} />
            <h2 className="content-desc">DevKids Academy</h2>
            <p className="project-info">Online Education</p>
            <p className="tech-desc">HTML CSS Bootstrap JavaScript</p>
            <a href="https://devkidsacademy.netlify.app/">
              <button class="cssbuttons-io-button">
                {" "}
                Visit Site
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div
          className="card-work"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="700"
        >
          <div className="tools">
            <div className="circle">
              <span class="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card_content">
            <img className="larana-img" src={Img1} alt="" draggable={false} />
            <h2 className="content-desc">Larana</h2>
            <p className="project-info">Comfy & Stylish School Shoes</p>
            <p className="tech-desc">HTML CSS Bootstrap</p>
            <a href="https://larana-pat-tita.netlify.app/">
              <button class="cssbuttons-io-button">
                {" "}
                Visit Site
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div
          className="card-work"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="700"
        >
          <div className="tools">
            <div className="circle">
              <span class="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card_content">
            <img className="img-desc" src={Img3} alt="" draggable={false} />
            <h2 className="content-desc">Travel Blog</h2>
            <p className="project-info">Travel Agencies Landing Page</p>
            <p className="tech-desc">HTML CSS</p>
            <a href="https://github.com/patriguciradev/Travel-Landing-Page">
              <button class="cssbuttons-io-button">
                {" "}
                Visit Site
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
