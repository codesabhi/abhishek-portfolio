import React from 'react'
import Toggle from '../components/toggle/Toggle'
import { useContext } from 'react'
import { ThemeContext } from '../context'
import './caseStudy.css'
import { useNavigate } from 'react-router-dom'

export default function Casestudy() {

    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const navigate = useNavigate();

  const naviagteToStudy = () => {
    navigate('/case-study-rina')
  }

  const navigateToStudyTwo = () => {
    navigate('/case-study-austin')
  }

  return (
    <>
    
    <div 
        style={{
        backgroundColor: darkMode ? "#1d2433" : "white",
        color: darkMode && "#e6f1ff",
      }}
    >
    <Toggle/>
        <h1 className='styleOne'>Case Studies</h1>
        <p className='styleDesc'>Our work in Action</p>
        <p className='styleDescc'>We make websites more usable and enjoyable for everybody. These web design case studies illustrate how we are fixing the internet.</p>
        <div className='styleMain'>
            <div className='styleBoxOne' onClick={naviagteToStudy}>
                <img className='styleImage' src='./images/Rina.png'/>
            </div>
            
            <div className='styleBoxTwo' onClick={navigateToStudyTwo}>
            <img className='styleImage' src='./images/Austin.png'/>
            </div>
            
        </div>

        <h1 className='styleHead'>Start Your Project</h1>
        <p className='stylePoint'>If your website isn't performing well or just doesn't properly represent your business, talk to us. We will build you a solution that works.</p>
        <a href='https://calendly.com/abhishek-design/discovery-meeting' target='_blank' className='styledButton'>Book a Meeting →</a>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    </>
  )
}

