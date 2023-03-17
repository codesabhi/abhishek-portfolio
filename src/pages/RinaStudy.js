import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context'
import Toggle from '../components/toggle/Toggle'
import './rinaStudy.css'

export default function RinaStudy() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div
    style={{
        backgroundColor: darkMode ? "#1d2433" : "white",
        color: darkMode && "#e6f1ff",
      }}
      className='RinaOne'
    >
    <Toggle/>

    <h1 className='rinaHeadingOne'>Rina DiRisio - Realtor</h1>

    <h2 className='rinaTwo'>Services:</h2>
    <h2 className='rinaThree'>Web Design - that converts</h2>
    <h2 className='rinaThree'> Website copywriting</h2>
    <h2 className='rinaThree'>Search Engine Optimization</h2>

    <h1 className='rinaFour'>Objectives:</h1>

    <p className='rinaFive'>→ Align new website with the updated guidelines and look & feel</p>
    <p className='rinaFive'>→ Improve site architecture and navigation to create a more intuitive user experience</p>
    <p className='rinaFive'>→ Drive conversion of site visitors into contacts and interests</p>
    <p className='rinaFive'>→ Build on SEO foundations to increase search engine traffic and drive future growth</p>
    <p className='rinaFive'>→ Improve the visibility of the real estate listings with proper search functionality</p>
    <p className='rinaFive'>→ Implement a fully responsive solution backed by CMS</p>
    <p className='rinaFive'>→ A conversion website copy</p>

    <h1 className='rinaSix'>ELEGANT AND DELIVERING REAL RESULTS</h1>

    <p className='rinaSeven'>The new site was designed from the ground up to display properly on multiple screen sizes. The content was balanced so that next to the data-driven, MLS content, there was also a lot of content allowing you to connect on a emotional level with the brokers.</p>

    <p className='rinaSeven'>We made sure to optimize the SEO so that none of the old authority and SEO were lost during the switchover, and we were able to get multiple pages listed on Google -- eliminating having the same page compete with itself for multiple key-phrases.</p>

    <p className='rinaSeven'>In the first three months of operations we increased the conversion rate by <span className='rinaEight'>218%</span> compared the same three months the prior year. Not only that,we increased lead quality by <span className='rinaEight'>50% </span>-- by eliminating all but 1 rental lead, which they do not do. Rina can also attribute at least 4 sale to their new website within the first 3 month.</p>

    <p className='rinaSeven rinaBottom' >We successfully optimized the organic search traffic by <span className='rinaEight'>+46%</span> year-over-year.</p>

    <a href='https://rina.ca/' target='_blank' className='rinaBtn'>view the new site →</a>

    <div className='rinaBoxTwo'>
            <img className='styleImage' src='./images/Rina.png'/>
            </div>
    <br/>
    <br/>
    <br/>

    <hr className='rinaNine'/>

    <div className='rinaTestOne'>
                    <p className='rinaTestTwo' style={darkMode ? {color: 'white'} : {}}>Our old website was terrible. I don't think it ever generated a lead for our sales team. Abhishek built a new site from the ground up, and we're extremely happy with it. Within 90 days we've generated qualified new leads. I'd definitely recommend Abhishek.</p>
                    <h2 className='rinaOwner' style={darkMode ? {color: 'green'} : {}}>Rina DiRisio</h2>
                    <p className='rinaTestProfile'>CEO, Rina.ca</p>
    </div>

    
    <hr className='rinaNine'/>

    <h1 className='rinaHead'>Start Your Project</h1>
        <p className='rinaPoint'>If your website isn't performing well or just doesn't properly represent your business, talk to us. We will build you a solution that works.</p>
        <a href='https://calendly.com/abhishek-design/discovery-meeting' target='_blank' className='rinaButton'>Book a Meeting →</a>
        <br/>
        <br/>
        <br/>

    
    </div>
  )
}
