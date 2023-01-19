import React from "react";

const Contact = () => {
  return (
    <section className="contact-hero" id="contact">
      <div
        className="abt-banner"
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <h2
          className="con-title"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          Get in Touch
        </h2>
        <div
          className="line"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
        ></div>
      </div>
      <div className="contact-container">
        <div className="contactform">
          <div
            className="contactlabel"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <div className="contact-icon">
              <span class="material-symbols-outlined">mail</span>
            </div>
            <ul className="contact-info">
              <li className="contact-desc">Email</li>
              <li className="con-info">rigucirapatchoo@gmail.com</li>
            </ul>
          </div>
          <div
            className="contactlabel"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <div className="contact-icon">
              <span class="material-symbols-outlined">call</span>
            </div>
            <ul className="contact-info">
              <li className="contact-desc">Phone Number</li>
              <li className="con-info">09616324386</li>
            </ul>
          </div>
          <div
            className="contactlabel"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <div className="contact-icon" >
              <span class="material-symbols-outlined">location_on</span>
            </div>
            <ul className="contact-info">
              <li className="contact-desc">Location</li>
              <li className="con-info">Poblacion, San Vicente Ilocos Sur</li>
            </ul>
          </div>
        </div>

        {/* Contact Form Start */}
        <div className="contact-input">
          <form action="#" method="POST" id="myForm">
            <div
              className="forminfo"
              data-aos="zoom-in-left"
              data-aos-delay="500"
              data-aos-duration="700"
            >
              <input
                type="text"
                name="text-"
                className="input"
                placeholder="Fullname"
              />
            </div>
            <div
              className="forminfo"
              data-aos="zoom-in-left"
              data-aos-delay="500"
              data-aos-duration="700"
            >
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <input
                type="text"
                name="subject"
                className="input"
                placeholder="Subject"
              />
            </div>
            <div
              className="forminfo"
              data-aos="zoom-in-left"
              data-aos-delay="500"
              data-aos-duration="700"
            >
              <textarea
                name="message"
                id=""
                cols="53"
                rows="10"
                placeholder="Message"
                className="input"
              ></textarea>
            </div>
            <div
              className="btn-form"
              data-aos="zoom-in-up"
              data-aos-delay="500"
              data-aos-duration="700"
            >
              <button type="submit" className="submit-form">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
