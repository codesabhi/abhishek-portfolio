import React from 'react'
import { useContext } from 'react';
import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import ProductList from './components/productList/ProductList';
import Projects from './components/projects/Projects';
import Clients from './components/clients/Clients';
import Skill from './components/skills/Skill';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';
import Testimonial from './components/testimonials/Testimonial';

import {Routes, Route} from 'react-router-dom'
import Casestudy from './pages/Casestudy';
import HomePage from './pages/HomePage';
import RinaStudy from './pages/RinaStudy';
import AustinStudy from './pages/AustinStudy';


const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    // <div
    //   style={{
    //     backgroundColor: darkMode ? "#1d2433" : "white",
    //     color: darkMode && "#e6f1ff",
    //   }}
    // >
    //   <Toggle/>
    //   <Hero/> 
    //   <About/>
    //   <Skill/>
    //   <ProductList/>
    //   <Projects/>
    //   <Clients/>
    //   <Testimonial/>
    //   <Contact/>
    //   <Routes>
    //     <Route path='/case-studies' element = {<Casestudy/>}/>
    //   </Routes>
      
    //   </div>
    <>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/case-studies' element = {<Casestudy/>}/>
        <Route path='/case-study-rina' element = {<RinaStudy/>}/>
        <Route path='/case-study-austin' element = {<AustinStudy/>}/>
        

      </Routes>
    </>
  )
}

export default App;



