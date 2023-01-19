import React from "react";
import { Link } from "react-scroll";
import Img1 from "./Img/pic7.jpg";
import Img from "./Img/pic6.jpeg";
import Img2 from "./Img/pic3.jpeg";
import "./Intro.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Intro = () => {
  return (
    <div className="main-container" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2
            className="i-intro"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            Hello there,
          </h2>
          <h1
            className="i-name"
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="500"
          >
            I'm John Patrick Rigucira
          </h1>

          <div
            className="i-title"
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="500"
          >
            <div className="i-title-wrapper">
              <div className="i-title-item">HTML</div>
              <div className="i-title-item">CSS</div>
              <div className="i-title-item">Figma</div>
              <div className="i-title-item">Bootstrap</div>
              <div className="i-title-item">React</div>
            </div>
          </div>

          <p
            className="i-desc"
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-duration="500"
          >
            Aspiring <span className="kw">Front-End Developer</span> from
            Philippines.
          </p>

          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <button
              className="home-btn"
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="500"
            >
              Read More
              <div className="c-button_blobs">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div
        className="i-right"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="1000"
        data-aos-duration="1300"
      >
        <div className="image-wrapper">
          <img src={Img} alt="" className="i-img" />
          <img src={Img1} alt="" className="i-img2" />
          <img src={Img2} alt="" className="i-img3" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
