import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context'
import Toggle from '../components/toggle/Toggle'
import './rinaStudy.css'

export default function AustinStudy() {

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
    <h1 className='rinaHeadingOne'>Austin D. - Realtor</h1>

    <h2 className='rinaTwo'>Services:</h2>
    <h2 className='rinaThree'>Digital Strategy</h2>
    <h2 className='rinaThree'>High-Converting Website</h2>
    <h2 className='rinaThree'>User Experience</h2>
    <h2 className='rinaThree'> Website copywriting</h2>
    <h2 className='rinaThree'>SEO Consulting</h2>

    <h1 className='rinaFour'>Objectives:</h1>

    <p className='rinaFive'>→ Align visual elements and storytelling with refreshed branding while improving user navigation</p>
    <p className='rinaFive'>→ Improve organic SEO search results and boost overall conversion</p>
    <p className='rinaFive'>→ Drive conversion of site visitors into contacts and newsletters</p>
    <p className='rinaFive'>→ Ensure accessible information architecture for easy content discovery by several unique audiences</p>
    <p className='rinaFive'>→ Improve the visibility of the real estate listings with proper search functionality with locations and prices</p>
    <p className='rinaFive'>→ Implement a fully responsive solution backed by CMS</p>
    <p className='rinaFive'>→ A conversion website copy</p>

    <h1 className='rinaSix'>FUN, INNOVATIVE AND DELIVERING REAL RESULTS</h1>

    <p className='rinaSeven'>When we built the new site, the first thing we focused on was to embed the real estate's culture into the site -- delivering value and being innovative. Those core principle are so strong for them that we wanted them to ooze of the site.</p>

    <p className='rinaSeven'>We made sure to optimize the SEO with proper and powerful keywords so that none of the SEO were lost during the switchover, and we were able to get multiple profile pages listed on Google -- eliminating having the same page compete with itself for multiple key-phrases.</p>

    <p className='rinaSeven rinaBottom'>In the first 60 days of the launch we managed to increase conversion rate by <span className='rinaEight'>150%</span>. Not only that, we increased lead quality by <span className='rinaEight'>64% </span>-- using newletters and blogs interactions. We successfully optimized the organic search traffic by <span className='rinaEight'>+73%</span> and <span className='rinaEight'>+115%</span> organic impressions year-over-year.</p>

    {/* <p className='rinaSeven rinaBottom' >We successfully optimized the organic search traffic by <span className='rinaEight'>+46%</span> year-over-year.</p> */}

    <a href='https://austindtitus.ca/' target='_blank' className='rinaBtn'>view the new site →</a>

    <div className='rinaBoxTwo'>
            <img className='styleImage' src='./images/Austin.png'/>
            </div>

            <br/>
    <br/>
    <br/>

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
