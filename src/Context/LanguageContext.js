import { createContext } from "react"
import React from "react"
import { useState } from "react"

const LanguageContext = createContext()

const initialLanguage = "esp"

const translation={
    esp:{
        Home: "Inicio",
        About: "Acerca de",
        Proyects: "Proyectos",
        FAQ: "FAQ",
        Contact: "Contacto"
    },
    eng:{
        Home: "Home",
        About: "About",
        Proyects: "Proyects",
        FAQ: "FAQ",
        Contact: "Contact"
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
    return (<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    )
}

export {LanguageProvider}

export default LanguageContext