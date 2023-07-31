import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

function App() {
  return <Router>
    <Routes >
        <Route exact path='/mysite' element={<About />} />
        <Route path='/mysite/projects' element={<Projects />} />
        <Route path='/mysite/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
}

export default App;