import './ProjectsPage.css';
function ProjectsPage({projects}){
    return (
        <div className="project-page" id="project-main-page">
            <div className="project-title">
                Projects
            </div>
            <div className="project-containers">
                {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}
function ProjectCard({project}){
    return(
        <div className="project-card"> 
            <a href={project.link}><img src={project.image} alt={project.name} height={`100%`}></img></a>
            <div className="project-detail">
                <div><a href={project.link} style={{textDecoration:"none"}}>{project.name}</a></div>
            </div>
        </div>
    );
}
export default ProjectsPage;