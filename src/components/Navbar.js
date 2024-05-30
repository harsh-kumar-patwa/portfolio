import './Navbar.css';
import {useRef} from 'react';
function Navbar(){
    
    return (
        <nav>
            <ul className='navbar'> 
                <li className='navbar-item' id='home-color'><a href='#'>Home</a></li>
                <li className='navbar-item' id='about-me-color'><a href='#'>About Me</a></li>
                <li className='navbar-item' id='skills-color'><a href='#'>Skills</a></li>
                <li className='navbar-item' id='experience-color'><a href='#'>Experience</a></li>
                <li className='navbar-item' id='education-color'><a href='#'>Education</a></li>
                <li className='navbar-item' id='contact-color'><a href='#'>Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;