import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import LearnMore from "./Pages/LearnMore";
import Home from "./Home";
import Ballet from "./Pages/Ballet";
import Layout from "./Layout";
import Software from "./Pages/Software";
import Civil from "./Pages/Civil";
import Gyrotonics from "./Pages/Gyrotonics";
import ScrollToTop from "./ScrollToTop";

function App() {
  return <Router basename = '/'>
     <ScrollToTop />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route element={<Layout />}>
            <Route path='/learnmore' element={<LearnMore />} />
            <Route path='/software' element={<Software />}/>
            <Route path='/civil' element={<Civil />}/>
            <Route path='/ballet' element={<Ballet />}/>
            <Route path='/gyrotonics' element={<Gyrotonics />}/>
          </Route>
      </Routes>
      <Footer />
    </Router>
}

export default App;