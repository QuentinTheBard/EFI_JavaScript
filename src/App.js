import './App.css';
import React from 'react';
import Menu from './components/menu'
import "./CSS/switch.css"
import ReactSwitch from 'react-switch';


import {createContext, useState} from 'react'

export const Context = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")
  

  const toggleTheme = () => {
    setTheme((actual) => (actual === "light" ? "dark" : "light"))
  }

 

  return(
    <Context.Provider value={{theme, toggleTheme}}>

    {/* Componente Switch de prueba por la dudas.
    <div class ="cont-switch" onChange={() => toggleTheme()}>
        <h1>Modo</h1>
        <label class="switch">
            <input type="checkbox"></input>
            <span class="slider"></span>
        </label>
    </div> */}

    <div className="App" id={theme}>
      <h1 className='nombre_switch'>Modo</h1>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      <Menu/>
    </div>


    </Context.Provider>
  )
}
  


export default App;
