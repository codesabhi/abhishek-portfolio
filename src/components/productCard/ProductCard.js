import React from "react";
import "./productcard.css";
import {FiGithub} from 'react-icons/fi'
import {FiArrowUpRight} from 'react-icons/fi'
import { useContext } from "react";
import { ThemeContext } from "../../context";
// import {useNavigate} from 'react-router-dom'


const ProductCard = ({title,img,link,desc,tech,git}) => {

  const theme = useContext(ThemeContext);
  return (
      <>
      
    <div className="c">
      <div className="c-left">
        {/* <div className="c-card bg"></div> */}
        
        <div className="c-cards">
          <a href={link} target="_blank" rel="noreferrer" className="c-imglink"><img src={img} alt="" className="c-img" /></a>
        </div>
      </div>
      <div className="c-right">
        <h1 className="c-title">{title}</h1>
        <div className="c-desc">
          <p className="c-para">
            {desc}
          </p>
        </div>
        <ul className="c-list">
        {tech.map((skill,i)=>(
          <li className="c-tech" key={i}>{skill}</li>
          ))}
        </ul>
        <div className="c-btn">
          <a
            className="c-link"
            href={git}
            target="_blank"
            rel="noreferrer"
            style={{color: theme.state.darkMode? 'white' : 'teal', border: theme.state.darkMode? 'none': "1px"}}
          >
            <FiGithub/>
          </a>
          <a
            className="c-link"
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{color: theme.state.darkMode? 'white' : 'teal', border: theme.state.darkMode? 'none': "1px"  }}
          >
            <FiArrowUpRight/>
          </a>
        </div>
      </div>
      
    </div>
    <div className="border"></div>
    
    </>
    
  );
};

export default ProductCard;
