import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

function App() {
  return <Router>
    <Routes >
        <Route exact path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
}

export default App;