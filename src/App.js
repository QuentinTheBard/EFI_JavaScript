import './App.css';
import React from 'react';
import Menu from './components/menuViejo'
import Menu2 from './components/menuLeng'
import "./CSS/switch.css"
import { LanguageProvider } from './Context/LanguageContext';
import {ThemeProvider} from './Context/ThemeContext';
import Menu3 from './components/menuTheme'



function App() {
  return(
  
    <div className="dark">
      <ThemeProvider>
      <Menu3 />
      </ThemeProvider> 
      {/* <Menu /> */}
    </div>
  )
}
  


export default App;
