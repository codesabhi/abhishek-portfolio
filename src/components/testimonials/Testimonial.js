import React,{useContext} from 'react'
import './testimonial.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ThemeContext } from "../../context";

export default function Testimonial() {

    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
        <div className='testimonial'>
            <h1 className='testOne'>Testimonials..</h1>

            <Carousel
            showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        >
                <div className='testDivOne'>
                    <p className='testdescOne testAll' style={darkMode ? {} : {color: 'white'}}>It was great working with Abhishek. He's super proactive & passionate about everything he does. He picked up the brief quickly & was able to deliver flawlessly. Thanks, Abhishek!</p>
                    <h2 className='testOwner' style={darkMode ? {} : {color: 'white'}}>Anuj Lohiya</h2>
                    <p className='testProfile'>Founder, NG Greens</p>
                </div>

                <div className='testDivOne'>
                    <p className='testdescOne testAll' style={darkMode ? {} : {color: 'white'}}>Our old website was terrible. I don't think it ever generated a lead for our sales team. Abhishek built a new site from the ground up, and we're extremely happy with it. Within 90 days we've generated  45+ new buyers and added $20 million in revenue.</p>
                    <h2 className='testOwner' style={darkMode ? {} : {color: 'white'}}>Jose Cardoso</h2>
                    <p className='testProfile'>CEO, Vanguard Properties</p>
                </div>

                <div className='testDivOne'>
                    <p className='testdescOne testAll' style={darkMode ? {} : {color: 'white'}}>Abhishek is brilliant, he designed a high-converting website to setup my roofing and construction business. He successfully delivered the results and in just 60 days we started getting high-qualified leads and closed an extra 5 roofs per week. </p>
                    <h2 className='testOwner' style={darkMode ? {} : {color: 'white'}}>Brandon Losik</h2>
                    <p className='testProfile'>CEO, The Roof Commander</p>
                </div>

                <div className='testDivOne'>
                    <p className='testdescOne testAll' style={darkMode ? {} : {color: 'white'}}>Abhishek did a great job on my website. From beginning to end he was very professional and always there when I wanted to make any changes. I would 100% recommend Abhishek </p>
                    <h2 className='testOwner' style={darkMode ? {} : {color: 'white'}}>Kori Marin</h2>
                    <p className='testProfile'>Founder, Fox Marin</p>
                </div>


                <div className='testDivOne'>
                    <p className='testdescTwo testAll' style={darkMode ? {} : {color: 'white'}}>Abhishek is one of the most dedicated developer I’ve worked with and is willing to put that extra help whenever you need it. His expertise as a developer is considerable. I highly recommend Abhishek and would love to work with him again. </p>
                    <h2 className='testOwner' style={darkMode ? {} : {color: 'white'}}>Sonali Verma</h2>
                    <p className='testProfile'>Analyst, Capgemini</p>
                </div>
                <div className='testDivOne'>
                    <p className='testdescOne testAll' style={darkMode ? {} : {color: 'white'}}>Abhishek is an amazing web developer and we will definitely be doing more projects in future. Great code, super smooth communication. We highly recommend Abhishek & would work with him again.</p>
                    <h2 className='testOwner' style={darkMode ? {} : {color: 'white'}}>Aditya Narayan</h2>
                    <p className='testProfile'>Founder, Stockcell</p>
                </div>
            </Carousel>


        </div>
    </>
  )
}
