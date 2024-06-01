import './SkillsPage.css';
import logos from '../../assets/logos1.png';
import {useState} from 'react';
function SkillsPage({skillsMap}){
    const [hoveredSkill, setHoveredSkill] = useState(null);
    return (
        <div id="skills-main-page" className="skils-main-page">
            <div className="my-skills-h1">
                <h1>My Skills</h1>
            </div>
            <div className="skills-main-container">
                <div className="skills-container-title" >
                    Hover over the logos to know more about my skills
                </div>
                <div className='skills-container-and-details'>
                    <div className="skills-container" style={{display:"flex",width:`40vw`,gap:"6vw",rowGap:"3vw",flexWrap:"wrap"}}>
                    {skillsMap.map((skill, index) => {
                        return (
                            <div key={index} id={skill.skillName} className="skill-each" onMouseEnter={()=>setHoveredSkill(skill)} onMouseLeave={()=>setHoveredSkill(null)}>
                                <div 
                                    style={{
                                        width: '90px',
                                        height: '110px',
                                        backgroundImage: `url(${logos})`,
                                        backgroundPosition: `${-index * 94}px 0px`,
                                        borderRadius:`48%`
                                    }}
                                    alt={skill.skillName}
                                />
                                {skill.skillName}
                            </div>
                        );
                    })}    
                    </div>

                    
                    {hoveredSkill && (
                        <div className="skill-details">
                            <h2 style={{color:hoveredSkill.color,fontSize:"4vh"}} >{hoveredSkill.skillName}</h2>
                            <p>{hoveredSkill.details}</p>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}
export default SkillsPage;