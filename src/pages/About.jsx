import React from "react";
import "../CSS/style.css";
import about_us from '../img/about_us.png'
import { useContext } from "react"
import LanguageContext from '../Context/LanguageContext';
import ThemeContext from '../Context/ThemeContext';


const About = () => {
    const { text, handleLanguage } = useContext(LanguageContext);
    const {theme, handleTheme} = useContext(ThemeContext); 
    return(
    <div className={theme}>
        <div className="containerRoute">
            <h1>{text.AboutPageTitle}</h1>
            <img src={about_us}/>
        </div>
    </div>
    
)

}

export default About;

