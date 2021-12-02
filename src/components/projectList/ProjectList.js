import React from 'react'
import './projectlist.css'
import {FiGithub} from 'react-icons/fi'


const ProjectList = ({title, desc, tech, link}) => {

    return (
        
        <div className="project" >
        <a href={link} rel="noreferrer" target="_blank" className="project-link"><FiGithub/></a>
        <div className="project-info">
            <h1 className="project-title">{title}</h1>
            <p className="project-desc">{desc}</p>
        </div>
        <div className="project-list">
        {tech.map((skill,i)=>(
            <span key={i} className="project-tech">{skill}</span>
            ))}
        </div>
        </div>
        
    )
}

export default ProjectList
