import './App.css';
import React from 'react';
import MenuLang from './components/menuFinal'
import "./CSS/style.css"
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact';
import { ThemeProvider } from './Context/ThemeContext';
import { LanguageProvider } from './Context/LanguageContext';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesss
function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider>
        <LanguageProvider>
          <MenuLang/>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        </LanguageProvider>
        </ThemeProvider>
      </Router>;
    </div>
  )
}



export default App;
