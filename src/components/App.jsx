import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import LearnMore from "./LearnMore";
import Home from "./Home";
import Ballet from "./Ballet";
import Layout from "./Layout";
import Software from "./Software";
import Civil from "./Civil";
import Gyrotonics from "./Gyrotonics";

function App() {
  return <Router basename = '/'>
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