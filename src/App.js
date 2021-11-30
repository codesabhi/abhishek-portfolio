import React from 'react'
import './App.css'
import About from './components/about/About';
import Hero from './components/hero/Hero';
// import ProductCard from './components/productCard/ProductCard';
import ProductList from './components/productList/ProductList';
import Skill from './components/skills/Skill';

const App = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Skill/>
      <ProductList/>
      {/* <ProductCard/> */}
    </>
  )
}

export default App;


