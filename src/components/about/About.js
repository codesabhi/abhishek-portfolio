import React from "react";
import "./about.css";
import Mine from "../../img/portfolio-image3.jpg"

const About = () => {
  return(
      <div className="a">
          <div className="a-left">
              <div className="a-card bg"></div>
              <div className="a-card">
                  <img src={Mine} alt="" className="a-img"/>
              </div>
          </div>
          <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                "I don't remember things, but I know how and where to look"
            </p>
            <br/>
            <p className="a-desc">
            Hii! My name is Abhishek, a full-stack web developer based in New Delhi, India. I specialize in building softwares and web applications. I am very passionate about the things that live on the internet and hope one day to make a change with the skills that I have.<br/><br/>
            
            Fast-forward to today, my main focus these days is exploring backend technologies & building accessible full-stack <span><a href="https://github.com/codesabhi/fullstack-exclv-ecommerce" target="_blank" rel="noreferrer">Exclv.</a></span> eCommerce product and a live photo sharing application.

            </p>
          </div>
      </div>
  );
};

export default About;
