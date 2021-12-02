import React from 'react'
import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import ProductList from './components/productList/ProductList';
import Projects from './components/projects/Projects';
import Skill from './components/skills/Skill';

const App = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Skill/>
      <ProductList/>
      <Projects/>
      <Contact/>
      
      </>
  )
}

export default App;


