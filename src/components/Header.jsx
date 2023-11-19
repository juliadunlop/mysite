import React from "react";

function Header() {
    return (
    <div class="box">
        <div class = "navbar">
            <a href="/" class="navtab"><img class="navtabimg" src={require('./images/jd.png')}></img></a>
            <a href="/learnmore" class="navtab">About</a>
            <a href="/software" class="navtab">Software</a>
            <a href="/civil" class="navtab">Civil</a>
            <a href="/ballet" class="navtab">Ballet</a>
            <a href="/gyrotonics"class="navtab">Gyrotonics</a>
        </div>
        <div class = "topline"></div>
    </div>

    )
}

export default Header;