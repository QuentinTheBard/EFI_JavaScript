import React from "react";
import "../CSS/style.css";
import projects from '../img/projects.png'
import { useContext } from "react"
import LanguageContext from '../Context/LanguageContext';
import ThemeContext from '../Context/ThemeContext';


const Blog = () => {
    const { text, handleLanguage } = useContext(LanguageContext);
    const {theme, handleTheme} = useContext(ThemeContext);
    return(
        <div className={theme}>
            <div className="containerRoute">
                <h1>{text.BlogPageTitle}</h1>
                <img src={projects}/>
            </div>
        </div>
)

}

export default Blog;

