import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { products } from '../../data'
import './productList.css'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {

    const navigate = useNavigate();

    const navigateToCase = () => {
        navigate('/case-studies')
    }
    return (
        <div className="p">
        <div className="p-text">
        <h1 className="p-title">
            Some Things I've Built
        </h1>
        {/* <p className="p-desc">"Solving One Bug At A Time"</p> */}
        <a rel="noreferrer" style={{'cursor': 'pointer'}} className="pr-link"><p className="pr-sub" onClick={navigateToCase}>view the case studies</p></a>
        </div>
        <div className="p-list">
        {products && products.map((item)=>(
            <ProductCard key={item.id} title={item.title} img={item.img} link={item.link} desc={item.desc} tech={item.tech} git={item.gitlink}/>
            ))}
        </div>
            
        </div>
    )
}

export default ProductList

