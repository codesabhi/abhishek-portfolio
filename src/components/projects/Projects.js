import React from 'react'
import ProjectList from '../projectList/ProjectList'
import './projects.css'
import { projects } from '../../data'

const Projects = () => {
    return (
        <div className="pr">
            <div className="pr-text">
                <h1 className="pr-title">Other Noteworthy Projects</h1>
                <a href="https://github.com/codesabhi" target="_blank" className="pr-link"><p className="pr-sub">view the archive</p></a>
            </div>
            <div className="project-list">
            {projects.map((item)=>(
                <ProjectList key={item.id} title={item.title} desc={item.desc} tech={item.tech} link={item.link}/>
                ))}
                
            </div>
        </div>
    )
}

export default Projects
