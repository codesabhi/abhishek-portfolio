import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3y1y4fr",
        "template_2wgs3xr",
        formRef.current,
        "user_xCXIR9ejW3tYOlZ1BVVrx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="d">
      <div className="d-bg"></div>
      <div className="d-wrapper">
        <div className="d-left">
          <h1 className="d-title">Get In Touch...</h1>
          <div className="d-info">
            <div className="d-info-item">
              <img src={Phone} alt="" className="d-icon" />
              +91 8437870503
            </div>
            <div className="d-info-item">
              <img className="d-icon" src={Email} alt="" />
              yadavabhishek241296@gmail.com
            </div>
            <div className="d-info-item">
              <img className="d-icon" src={Address} alt="" />
              New Delhi, India.
            </div>
          </div>
        </div>
        <div className="d-right">
          <p className="d-desc">
            <b>What’s Next?</b> I'm currently looking for any new opportunities,
            my inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} >
          <div className="inputDiv">
            <input required="true" style={{backgroundColor: darkMode && "#333", color: darkMode && 'white'}} type="text" placeholder="Name" className="nameInput" name="user_name" />
            <input required="true" style={{backgroundColor: darkMode && "#333", color: darkMode && 'white'}} type="text" placeholder="Subject" className="subjectInput" name="user_subject" />
            </div>
            <input required="true" style={{backgroundColor: darkMode && "#333", color: darkMode && 'white'}} type="text" placeholder="Email" className="emailInput" name="user_email" />
            <textarea required="true" style={{backgroundColor: darkMode && "#333", color: darkMode && 'white'}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
