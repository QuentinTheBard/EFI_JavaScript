import React from "react";
import "../CSS/style.css";
import { useContext } from "react"
import { Link } from 'react-router-dom';
import LanguageContext from '../Context/LanguageContext';
import ThemeContext from '../Context/ThemeContext';


const About = () => {
    const { text, handleLanguage } = useContext(LanguageContext);
    const {theme, handleTheme} = useContext(ThemeContext); 
    return(
    <div>

        <h1>{text.AboutPageTitle}</h1>
        


    </div>
    
)

}

export default About;

