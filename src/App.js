import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/about/About';
import Hero from './components/hero/Hero';
// import ProductCard from './components/productCard/ProductCard';
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
      
      {/* <ProductCard/> */}
      </>
  )
}

export default App;


