import React from 'react';
import "../CSS/style.css";
import {useContext} from "react"
import LanguageContext from '../Context/LanguageContext';

function Menu2() {
    const {text, handleLanguage} = useContext(LanguageContext);

    return(
        <div>
            <div className="titleContainer">
                <h1 className="Title">{text.About}</h1>
            </div>
             
            <select name="language" onClick={handleLanguage}>
                <option value="esp">ESP</option>
                <option value="eng">ING</option>
            </select>

            <div >
                <input 
                    type="radio"
                    name="theme"
                    id="light"
                    onClick={handleLanguage}
                    value="esp"
                />
                <label>esp</label>
                <input 
                    type="radio"
                    name="theme"
                    id="dark"
                    onClick={handleLanguage}
                    value="eng"
                />
                    <label>ing</label>
            </div>

            <section className="section"> 
                <div className="DirectionsContainer">
                    <ul>
                        <li><a href="">{text.Home}</a></li>
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