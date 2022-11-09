import './App.css';
import React from 'react';
import Index from './components/Index'
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

    <div class ="cont-switch" onChange={() => toggleTheme()}>
        <h1>Modo</h1>
        <label class="switch">
            <input type="checkbox"></input>
            <span class="slider"></span>
        </label>
    </div>

    <div className="App" id={theme}>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      <Index />
    </div>


    </Context.Provider>
  )
}
  


export default App;
