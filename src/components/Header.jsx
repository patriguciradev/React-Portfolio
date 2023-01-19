import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Img from "./Img/bg-logo.png";

const Header = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="intro" spy={true} smooth={true} offset={50} duration={500}>
          <div className="nav-logo">
            <img src={Img} alt="" draggable={false} />
            <h1 className="logo">John Patrick Rigucira</h1>
          </div>
        </Link>

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <li>
            <Link
              to="intro"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};

export default Header;
