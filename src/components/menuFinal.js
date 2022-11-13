import React from 'react';
import "../CSS/style.css";
import { useContext } from "react"
import { Link } from 'react-router-dom';
import LanguageContext from '../Context/LanguageContext';
import ThemeContext from '../Context/ThemeContext';


function Menu2() {
    const { text, handleLanguage } = useContext(LanguageContext);
    const {theme, handleTheme} = useContext(ThemeContext); 

    return (

        <div className={theme}>
            <div className={theme}>
                <h1 className="Title">{text.Title}</h1>
            </div>

            <select name="language" className='languageSelector'onClick={handleLanguage}>
                <option value="esp">ESP</option>
                <option value="eng">ING</option>
            </select>

            <section className="section">
                <div className="buttonContainer">
                    <input 
                        type="radio"
                        className='radio-item'
                        name="theme"
                        id="light"
                        onClick={handleTheme}
                        value="light"
                    />
                    <label className="label" htmlFor="light">{text.LightLabel}</label>
                    <input 
                        type="radio"
                        className='radio-item'
                        name="theme"
                        id="dark"
                        onClick={handleTheme}
                        value="dark"
                    />
                        <label className="label" htmlFor="dark">{text.DarkLabel}</label>
                </div>

                <div className="DirectionsContainer">
                    <ul>
                        <li>
                            <Link to="/">{text.Home}</Link>
                        </li>
                        <li>
                            <Link to="/About">{text.About}</Link>
                        </li>
                        <li>
                            <Link to="/Blog">{text.Blog}</Link>
                        </li>
                        <li>
                            <Link to="/Contact">{text.Contact}</Link>
                        </li>
                    </ul>
                </div>
            </section>


        </div>

    )
}

export default Menu2;