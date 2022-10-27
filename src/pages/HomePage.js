import React from 'react'
import { useContext } from 'react'
import About from '../components/about/About'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Contact'
import Hero from '../components/hero/Hero'
import ProductList from '../components/productList/ProductList'
import Projects from '../components/projects/Projects'
import Testimonial from '../components/testimonials/Testimonial'
import Toggle from '../components/toggle/Toggle'
import Skill from '../components/skills/Skill'
import { ThemeContext } from '../context'


export default function HomePage() {

    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
        style={{
        backgroundColor: darkMode ? "#1d2433" : "white",
        color: darkMode && "#e6f1ff",
      }}
    >

        <Toggle/>
        <Hero/>
        <About/>
        <Skill/>
        <ProductList/>
        <Projects/>
        <Clients/>
        <Testimonial/>
        <Contact/>

    </div>
  )
}
