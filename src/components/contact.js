import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="uil uil-fast-mail"></i> appdev.zain@gmail.com
            </p>
            <p>
              <i className="uil uil-phone-alt"></i> +92 306 6244324
            </p>

            <div className="social-icons">
              <a href="#">
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="#">
                <i className="uil uil-instagram"></i>
              </a>
              <a
                href="https://github.com/iZainiqbal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/zain-iqbal-devs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </div>

            <a
              href="/Zain_Iqbal_CV.pdf"
              download="Zain_Iqbal_CV.pdf"
              className="btn btn2"
            >
              Download CV
            </a>
          </div>

          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
