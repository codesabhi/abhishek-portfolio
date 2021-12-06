import React from 'react'
import { useContext } from 'react';
import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import ProductList from './components/productList/ProductList';
import Projects from './components/projects/Projects';
import Skill from './components/skills/Skill';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';

const App = () => {

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
      <Contact/>
      
      </div>
  )
}

export default App;


