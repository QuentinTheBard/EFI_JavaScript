import './App.css';
import React from 'react';
import MenuLang from './components/menuLeng'
import "./CSS/switch.css"
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact';
import { ThemeProvider } from './Context/ThemeContext';
import { LanguageProvider } from './Context/LanguageContext';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect, Navigate
} from "react-router-dom";


function App() {
  return (

    <div className="App">
      <Router>
        {/* <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          

        </Routes> */}
        <ThemeProvider>
        <LanguageProvider>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
          <MenuLang />
        </LanguageProvider>
        </ThemeProvider>

      </Router>;


      {/* <ThemeProvider> */}
      {/* <MenuTheme/> */}
      {/* </ThemeProvider> */}

    </div>
  )
}



export default App;
