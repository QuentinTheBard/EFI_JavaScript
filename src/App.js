import './App.css';
import React from 'react';
import Prueba from './components/Prueba'
import {createContext, useState} from 'react'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((actual) => (actual === "light" ? "dark" : "light"))
  }

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      <Prueba />
    </div>
    </ThemeContext.Provider>
  )
}
  


export default App;
