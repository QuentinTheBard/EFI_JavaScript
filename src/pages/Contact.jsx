import React from "react";
import "../CSS/style.css";
import contact_us from "../img/contact_us.png"
import { useContext } from "react"
import LanguageContext from '../Context/LanguageContext';
import ThemeContext from '../Context/ThemeContext';


const Contact = () => {
    const { text, handleLanguage } = useContext(LanguageContext);
    const {theme, handleTheme} = useContext(ThemeContext);
    return(
        <div className={theme}>
            <div className="containerRoute">
                <h1>{text.ContactPageTitle}</h1>
                <img src={contact_us}/>
                </div>
        </div>
)

}

export default Contact;

