import './SkillsPage.css';
import logos from '../../assets/logos1.png';
function SkillsPage({skillsMap}){
    return (
        <div id="skills-main-page" className="skils-main-page">
            <div className="my-skills-h1">
                <h1>My Skills</h1>
            </div>
            <div className="skills-main-container">
                <div className="skills-container-title" >
                    Experience Skill
                </div>
                <div className='skills-conatiner-and-details'>
                    <div className="skills-container" style={{display:"flex",width:`40vw`,gap:"6vw",rowGap:"4vw",flexWrap:"wrap"}}>
                    {skillsMap.map((skill, index) => {
                        return (
                            <div key={index} id={skill.skillName} className="progress" style={{}}>
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

                    <div className='skills-details'>hii</div>
                </div>
            </div>
        </div>
    )
}
export default SkillsPage;