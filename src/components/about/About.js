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
            {/* <br/> */}
            <p className="a-desc">
            Hi! My name is Abhishek, a fullstack developer and web designer based in New Delhi, India. I specialize in designing high-converting websites and web applications. I am very passionate about the things that live on the internet and hope one day to make a change with the skills that I have.<br/><br/>

            <span ><a style={{color:'teal'}}>▹</a></span> In the last three years, I've had the privilege of working and building products for a <span><a href= 'https://www.dashclicks.com/' target='_blank' rel="noreferrer" >Digital Marketing agency</a></span>, <span><a>a Social service Start-up</a></span>, <span><a href="https://deepsync.co/" rel="noreferrer" target='_blank'>a Generative AI-based company</a></span>, and for various small and medium-sized enterprises.<br/><br/>

            <span><a style={{color:'teal'}}>▹</a></span> I helped various business owners, and realtors to launch their businesses by building their digital presence across the world.<br/><br/>
            
            Fast-forward to today, my main focus these days is optimizing websites' conversion rates & building accessible full-stack <span><a href="https://github.com/codesabhi/fullstack-exclv-ecommerce" target="_blank" rel="noreferrer">Exclv.</a></span> eCommerce product.

            </p>
          </div>
      </div>
  );
};

export default About;
