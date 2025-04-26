import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


const App = () => {
  return (  
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-Wajid" element={<About />} />
          <Route path="/wajidsProjects" element={<Projects/>} />
          <Route path="/Contact-Wajid" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App