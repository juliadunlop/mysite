import React from "react";
import CustomAboutTab from "./CustomAboutTab";

function Home() {

    return <div class = "box">
        <div class ="rowname">
            <div class = "column">
                <div class = "name">
                    <h1>J</h1>
                    <h1>U</h1>
                    <h1>L</h1>
                    <h1>I</h1>
                    <h1>A</h1>
                </div>
                <br></br>
                <div class="break">
                <div>
                    <h1>D</h1>
                    <h1>U</h1>
                    <h1>N</h1>
                </div>
                <div>
                    <h1>L</h1>
                    <h1>O</h1>
                    <h1>P</h1>
                </div>
                </div>
                
            </div>
            <div class ="column2 home">
                <img src={require('./images/me.png')} alt="ski'in" onMouseOver={e => (e.currentTarget.src = require('./images/Youngin1.jpg'))} onMouseOut={e => (e.currentTarget.src = require('./images/me.png'))}></img>
            </div>
        </div>
        

        <br></br>
        <br></br>
        <br></br>

        <div class = "row">
            <h1>About</h1>
            <p>I am passionate about increasing efficiency so we are able to focus on our connection and experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br></br>
            <h4 class="resume"><a href="#/learnmore">Learn More...</a></h4>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div class = "row">
            <p>*graphic</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        
        <CustomAboutTab/>
        </div>

        

}

export default Home;