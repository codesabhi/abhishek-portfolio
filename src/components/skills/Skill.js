import React from 'react'
import './skill.css'

const skill = () => {
    const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Redux-toolkit', 'Gatsby', 'Wordpress', 'JWT', 'Material-UI', 'Squarespace', 'Node.js', 'Express.js', 'MongoDb', 'Webflow', 'Firebase']
    return (
        <div className="s-outer">
        <div className="s-inner">
        <h1 className="s-title">SkillSet</h1>
            <p className="s-desc">Here are a few technologies I've been working with recently :</p>
        </div>
        <div className="s-skillset">
        <ul className="s-skills">
                {skills && skills.map((skill, i) => <li className='skillList' key={i}>{skill}</li>)}
            </ul>
        </div>
            
        </div>
    )
}

export default skill
