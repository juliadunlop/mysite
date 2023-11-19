import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Software from "./Software";
import Civil from "./Civil";
import Ballet from "./Ballet";
import Gyrotonics from "./Gyrotonics";
import Footer from "./Footer";

function LearnMore() {

    return (
        <div class="box">
        <div class ="rowname">
        <div class = "row">
            <h2>About</h2>
            <p>I am passionate about increasing efficiency so we are able to focus on our connection and experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br></br>
            <h4 class="resume"><a href="/learnmore">Learn More...</a></h4>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
        </div>
        )
    }

export default LearnMore;