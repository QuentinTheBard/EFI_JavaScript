import './App.css';
import React from 'react';
import Menu from './components/menuViejo'
import MenuLang from './components/menuLeng'
import "./CSS/switch.css"

import {ThemeProvider} from './Context/ThemeContext';
import MenuTheme from './components/menuTheme'
import {LanguageProvider} from './Context/LanguageContext';



function App() {
  return(
  
    <div className="App">
      
      <LanguageProvider>
      <MenuLang />
      </LanguageProvider>

      {/* <ThemeProvider> */}
      {/* <MenuTheme/> */}
      {/* </ThemeProvider> */}
      
    </div>
  )
}
  


export default App;
