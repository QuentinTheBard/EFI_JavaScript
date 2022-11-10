import React from 'react';
import "../CSS/style.css";
import {useContext} from "react"
import LanguageContext from "../Context/LanguageContext"

const Menu2 = ({}) =>{
    const {text, handleLanguage} = useContext(LanguageContext)


    return(
    <div>
        <div className="titleContainer">
            <h1 className="Title">BUENOS DIAS</h1>
        </div>
        <select name="language" onChange={handleLanguage}>
            <option value="esp">ESP</option>
            <option value="eng">ING</option>
        </select>
        <section className="section">
            <div className="DirectionsContainer">
                <ul>
                    <li><a href="">text</a></li>
                    <li><a href="">text</a></li>
                    <li><a href="">text</a></li>
                    <li><a href="">text</a></li>
                    <li><a href="">text</a></li>
                </ul>
            </div>
        </section>

        
    </div>
    )
}

export default Menu2;