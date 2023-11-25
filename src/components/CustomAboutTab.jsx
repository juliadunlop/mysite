import React, { useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function CustomAboutTab() {

    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })
  
    function handleMouseMove(ev) { setMousePosition({left: ev.pageX+10, top: ev.pageY+20}); }

    return (
        
        <div class = "row tabrow">
            <Tabs>
                <TabList class = "tablist">
                    <Tab><h2>Software Engineering</h2></Tab>
                    <Tab><h2>Civil Engineering</h2></Tab>
                    <Tab><h2>Ballet</h2></Tab>
                    <Tab><h2>Pilates</h2></Tab>
                </TabList>
                <div class = "tabPanel">
                <TabPanel>
                        <h2>Education</h2>
                        <p><a class = "link" href="https://oregonstate.edu/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Bachelors of Science in Computer Science {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Oregon State University - Prospect 2025</p>
                        <br></br>
                        <h2>Projects</h2>
                        <p><a class = "link" href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Sequence {/*<iframe src="https://www.ubc.ca/" title="UBC" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - The teachers aid - Language: MERN</p>
                        <p><a class = "link" href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Rigging {/*<iframe src="https://www.google.com/" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Optimized pick points for Mass Timber construction - Language: C++</p>
                        <p><a class = "link" href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Shop Drawing Parser {/*<iframe src="https://www.google.com/" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Extracting key panel characteristics - Language: Python</p>
                        <br></br>
                        <h4 class="resume"><a href="#/software" id="software">Learn More...</a></h4>
                </TabPanel>
                <TabPanel>
                        <h2>Education</h2>
                        <p><a class = "link" href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Bachelors of Applied Science in Civil Engineering {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - University of British Columbia - 2019 </p>
                        <br></br>
                        <h2>Experience</h2>
                        <p><a class = "link" href="https://www.bhbengineers.com" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>BHB Structural {/*<iframe srcdoc="<pre><b>UBC.com</b></pre>" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Project Engineer</p>
                        <p><a class = "link" href="https://www.smartlam.com/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Smartlam {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Project Engineer</p>
                        <p><a class = "link" href="https://www.eclipse-engineering.com/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Eclipse Engineering {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - CLT Team Lead, Project Manager, Project Engineer</p>
                        <br></br>
                        <h4 class="resume"><a href="#/civil" id="civil">Learn More...</a></h4>
                </TabPanel>
                <TabPanel>
                        <h2>Training</h2>
                        <p><a class = "link" href="https://www.balletidaho.org" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Ballet Idaho {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Heather Hawk</p>
                        <p><a class = "link" href="https://www.balletchicago.org/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Ballet Chicago {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Summer Intensive 2011</p>
                        <p><a class = "link" href="https://www.pnb.org" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Pacific Northwest Ballet {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Summer Intensive 2012 and 2013</p>
                        <br></br>
                        <h2>Professional Experience</h2>
                        <p><a class = "link" href="https://www.balletidaho.org" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Ballet Idaho {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Corps de Ballet 2011-2013</p>
                        <br></br>
                        <h2>Teaching</h2>
                        <p><a class = "link" href="https://www.echodance.com/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Echo School of Dance {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Upper Level Technique and Repertoire</p>
                        <p><a class = "link" href="https://www.westernballet.org/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Western Ballet {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Adult Beginning Ballet</p>                       
                        <br></br>
                        <h4 class="resume"><a href="#/ballet" id="ballet">Learn More...</a></h4>   
                </TabPanel>   
                <TabPanel>
                        <h2>Training</h2>
                        <p><a class = "link" href="https://www.gyrotonic.com/teacher-training/gyrotonic-level-1/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Foundations Pre-Training {/*<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe>*/}</a> - Urban Body San Jose</p>     
                        <br></br>
                        <h4 class="resume"><a href="#/gyrotonics" id="gyrotonics">Learn More...</a></h4>   
                </TabPanel>  
                </div> 
            </Tabs>
        </div>
    )
    }