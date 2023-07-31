import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function About() {
    return <div class = "box">
        <div class ="rowname">
            <div class = "column">
                <h1>J</h1>
                <h1>U</h1>
                <h1>L</h1>
                <h1>I</h1>
                <h1>A</h1>
                <br></br>
                <h1>D</h1>
                <h1>U</h1>
                <h1>N</h1>
                <h1>L</h1>
                <h1>O</h1>
                <h1>P</h1>
            </div>
            <div class ="column">
                <p>*insert graphic</p>
                <img src={require('./images/Youngin1.jpg')} size alt="ski'in"></img>
            </div>
        </div>
        

        <br></br>

        <div class = "row">
            <h1>About</h1>
            <p>I am passionate about increasing efficiency so we are able to focus on our connection and experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div class = "row tabrow">
            <Tabs>
                <TabList>
                    <Tab><h2 class="tab">Software Engineering *change colour when active</h2></Tab>
                    <Tab><h2 class="tab">Civil Engineering</h2></Tab>
                    <Tab><h2 class="tab">Ballet</h2></Tab>
                </TabList>
                <div class = "tabPanel">
                <TabPanel>
                        <h2>Education</h2>
                        <p><a href="https://www.google.com">Bachelors of Science in How to Google</a> - Google - 2023</p>
                        <br></br>

                        <h2>Projects</h2>
                        <p><a href="https://www.ubc.ca">Sequence</a> - The teachers aid</p>
                        <p><a href="https://www.ubc.ca">Rigging</a> - Optimized pick points for Mass Timber construction</p>
                        <br></br>
                        <h4 class="resume"><a href="/softwareresume">Full CV...</a></h4>
                </TabPanel>
                <TabPanel>
                        <h2>Education</h2>
                        <p><a href="https://www.ubc.ca">Bachelors of Applied Science in Civil Engineering</a> - University of British Columbia - 2019 </p>
                        <br></br>
                        <h2>Experience</h2>
                        <p><a href="https://www.bhbengineers.com">BHB Engineers</a> - Project Engineer</p>
                        <p><a href="https://www.smartlam.com/">Smartlam</a> - Project Engineer</p>
                        <p><a href="https://www.eclipse-engineering.com/">Eclipse Engineering</a> - CLT Team Lead, Project Manager, Project Engineer</p>
                        <br></br>
                        <h4 class="resume"><a href="/civilresume">Full CV...</a></h4>
                </TabPanel>
                <TabPanel>
                        <h2>Training</h2>
                        <p><a href="https://www.balletidaho.org">Ballet Idaho</a> - Heather Hawk</p>
                        <p><a href="https://www.balletchicago.org/">Ballet Chicago</a> - Summer Intensive 2011</p>
                        <p><a href="https://www.pnb.org">Pacific Northwest Ballet</a> - Summer Intensive 2012 and 2013</p>
                        <br></br>
                        <h2>Professional Experience</h2>
                        <p><a href="https://www.balletidaho.org">Ballet Idaho</a> - Corps de Ballet 2011-2013</p>
                        <br></br>
                        <h2>Teaching</h2>
                        <p><a href="https://www.echodance.com/">Echo School of Dance</a> - Upper Level Technique and Repertoire</p>
                        <br></br>
                        <h4 class="resume"><a href="/balletresume">Full CV...</a></h4>   
                </TabPanel>   
                </div> 
            </Tabs>
        </div>
        </div>

        

}

export default About;