import React from "react";
import "../CSS/style.css";
import projects from '../img/projects.png'
import { useContext } from "react"
import { Link } from 'react-router-dom';
import LanguageContext from '../Context/LanguageContext';
import ThemeContext from '../Context/ThemeContext';


const Blog = () => {
    const { text, handleLanguage } = useContext(LanguageContext);
    const {theme, handleTheme} = useContext(ThemeContext);
    return(
    <div>

        <img src={projects}/>
        <h1>{text.BlogPageTitle}</h1>


    </div>
)

}

export default Blog;

