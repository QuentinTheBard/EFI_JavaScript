import React from 'react';
import "../CSS/style.css"
import {useContext} from "react"
import ThemeContext from '../Context/ThemeContext';


function Menu() {
    const {theme, handleTheme} = useContext(ThemeContext); 


    return(
    <div className={theme}>
        <div className={theme}>
            <h1 className="Title">BUENOS DIAS</h1>
        </div>
        <section className="section">
            <div className="buttonContainer">
                <input 
                    type="radio"
                    name="theme"
                    id="light"
                    onClick={handleTheme}
                    value="light"
                />
                <label classname="label" htmlFor="light">Claro</label>
                <input 
                    type="radio"
                    name="theme"
                    id="dark"
                    onClick={handleTheme}
                    value="dark"
                />
                    <label classname="label" htmlFor="dark">Oscuro</label>
            </div>

            <div className="DirectionsContainer">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
        </section>

        
    </div>
    )
}

export default Menu;