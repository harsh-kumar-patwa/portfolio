import TypeWriter from "../TypeWriter";
import "./HomePage.css";
import Navbar from "../Navbar";
import clouds from "../../assets/clouds.png";
import banner from "../../assets/banner.jpg";
import harsh from "../../assets/Harsh Kumar.png";
import React,{useState,useEffect} from "react";
function HomePage(){

    const [isScrolled,setIsScrolled]=useState(false);
    const handleNavClick = ()=>{
        // console.log('Navbar button clicked');
        setIsScrolled(true);
    }
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    return (
        <div className="homepage" id="homepage">
            <div className="top-homepage">
                <div className="intro">
                    <img src={clouds} alt="clouds"></img>
                    <div className="text-box">
                        <h1 id="hello">Hello , I am <a className="dev-button" href="https://www.github.com/harsh-kumar-patwa">DEV</a> </h1>
                        <h1 id="name-text">Harsh Kumar </h1>
                        <TypeWriter className="typewriter-element" text={["A PASSIONATE SOFTWARE DEVELOPER"]} typingSpeed={100} deletingSpeed={50} duration={1000}/>
                    </div>
                </div>
                <div className="banner">
                    <img src={banner} alt="banner"></img>
                </div>
            </div>
            <header className={isScrolled ? 'sticky':''}>
                <a className="git-link" href="https://www.github.com/harsh-kumar-patwa"><img src={harsh} alt=""></img></a>
                <Navbar onNavClick={handleNavClick}/>
            </header>
        </div>
    );
} 
export default HomePage;