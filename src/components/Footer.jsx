import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-title">
          <h2
            className="foot-title"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            Follow Me
          </h2>
          <div
            className="line"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
          ></div>
        </div>
        <div
          className="sm"
          data-aos="zoom-in-right"
          data-aos-delay="500"
          data-aos-duration="700"
        >
          <div className="sm-icon">
            <a href="https://www.facebook.com/patchorigucira/">
              <BsFacebook />
            </a>
          </div>
          <div className="sm-icon">
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <BsGoogle />
            </a>
          </div>
          <div className="sm-icon">
            <a href="https://github.com/patriguciradev">
              <BsGithub />
            </a>
          </div>
          <div className="sm-icon">
            <a href="https://www.instagram.com/_patchooo/">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footerline"></div>
      <small>
        &copy; 2022. All Rights Reserved. | Made by{" "}
        <span className="owner"> John Patrick Rigucira</span>
      </small>
    </footer>
  );
};

export default Footer;
