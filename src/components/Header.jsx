import React from "react";

function Header() {

    return (
        <div class="header">
            <div class="topnav" id="myTopnav">
                <a href="/" class="active"><img class="navtabimg" src={require('./images/jd.png')}></img></a>
                <a href="#/learnmore">About</a>
                <a href="#/software">Software</a>
                <a href="#/civil">Civil</a>
                <a href="#/ballet">Ballet</a>
                <a href="#/gyrotonics">Pilates</a>
                <div class="dropdown">
                    <a class="icon">
                        <i class="fa fa-bars"></i>
                    </a>
                    <div class="dropdown-content">
                        <li><a href="#/learnmore">About</a></li>
                        <li><a href="#/software">Software</a></li>
                        <li><a href="#/civil">Civil</a></li>
                        <li><a href="#/ballet">Ballet</a></li>
                        <li><a href="#/gyrotonics">Pilates</a></li>
                    </div>
                </div>
                
            </div>
        </div>
    
    )
}

export default Header;
