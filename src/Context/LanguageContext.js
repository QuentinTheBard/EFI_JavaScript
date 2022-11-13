import { createContext } from "react"
import React from "react"
import { useState } from "react"

const LanguageContext = createContext()

const initialLanguage = "esp"

const translation={
    esp:{
        Title: "Buenos Dias",
        Home: "Inicio",
        About: "Acerca de",
        AboutPageTitle: "Acerca de Nosotros",
        Proyects: "Proyectos",
        FAQ: "FAQ",
        Contact: "Contacto",
        ContactPageTitle:"Contactenos",
        Blog: "Blog",
        BlogPageTitle: "Este es nuestro Blog",
        LightLabel: "CLARO",
        DarkLabel: "OSCURO"
    },
    eng:{
        Title: "Good Morning",
        Home: "Home",
        About: "About",
        AboutPageTitle: "About Us",
        Proyects: "Proyects",
        FAQ: "FAQ",
        Contact: "Contact",
        ContactPageTitle:"Contact Us",
        Blog: "Blog",
        BlogPageTitle: "This is our Blog",
        LightLabel: "LIGHT",
        DarkLabel: "DARK"
    }
}

const LanguageProvider = ({children}) => {

    const [language, setLanguage] = useState(initialLanguage)
    const [text, setText] = useState(translation[language])

    const handleLanguage = (e) =>{
        if (e.target.value === "esp"){
            setLanguage("esp")
            setText(translation.esp)
        }
        else{
            setLanguage("eng")
            setText(translation.eng)
        }
    }


    const data = {text, handleLanguage};
    return (
        
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    )
}

export {LanguageProvider}

export default LanguageContext