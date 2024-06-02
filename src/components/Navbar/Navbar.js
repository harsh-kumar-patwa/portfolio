import './Navbar.css';
function Navbar({onNavClick}){
    
    return (
        <nav>
            <ul className='navbar'> 
                <li className='navbar-item' id='home-color'><a onClick={onNavClick} href='#homepage'>Home</a></li>
                <li className='navbar-item' id='about-me-color' onClick={onNavClick}><a href='#about-main-page'>About Me</a></li>
                <li className='navbar-item' id='skills-color' onClick={onNavClick}><a href='#skills-main-page'>Skills</a></li>
                <li className='navbar-item' id='education-color' onClick={onNavClick}><a href='#education-page'>Education</a></li>
                <li className='navbar-item' id='projects-color' onClick={onNavClick}><a href='#project-main-page'>Projects</a></li>
                <li className='navbar-item' id='contact-color' onClick={onNavClick}><a href='#'>Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;