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
                </TabList>
                <div class = "tabPanel">
                <TabPanel>
                        <h2>Education</h2>
                        <p><a class = "link" href="https://www.google.com" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Bachelors of Science in How to Google<iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - Google - 2023</p>
                        <br></br>
                        <h2>Projects</h2>
                        <p><a class = "link" href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Sequence <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - The teachers aid</p>
                        <p><a class = "link" href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Rigging <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - Optimized pick points for Mass Timber construction</p>
                        <br></br>
                        <h4 class="resume"><a href="/softwareresume">Full CV...</a></h4>
                </TabPanel>
                <TabPanel>
                        <h2>Education</h2>
                        <p><a class = "link" href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Bachelors of Applied Science in Civil Engineering <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - University of British Columbia - 2019 </p>
                        <br></br>
                        <h2>Experience</h2>
                        <p><a class = "link" href="https://www.bhbengineers.com" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>BHB Engineers <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - Project Engineer</p>
                        <p><a class = "link" href="https://www.smartlam.com/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Smartlam <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - Project Engineer</p>
                        <p><a class = "link" href="https://www.eclipse-engineering.com/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Eclipse Engineering <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - CLT Team Lead, Project Manager, Project Engineer</p>
                        <br></br>
                        <h4 class="resume"><a href="/civilresume">Full CV...</a></h4>
                </TabPanel>
                <TabPanel>
                        <h2>Training</h2>
                        <p><a class = "link" href="https://www.balletidaho.org" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Ballet Idaho <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - Heather Hawk</p>
                        <p><a class = "link" href="https://www.balletchicago.org/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Ballet Chicago <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - Summer Intensive 2011</p>
                        <p><a class = "link" href="https://www.pnb.org" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Pacific Northwest Ballet <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - Summer Intensive 2012 and 2013</p>
                        <br></br>
                        <h2>Professional Experience</h2>
                        <p><a class = "link" href="https://www.balletidaho.org" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Ballet Idaho <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - Corps de Ballet 2011-2013</p>
                        <br></br>
                        <h2>Teaching</h2>
                        <p><a class = "link" href="https://www.echodance.com/" target="_blank" rel="noopener noreferrer" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}>Echo School of Dance <iframe src="https://www.google.com" onMouseMove={(ev)=> handleMouseMove(ev)} style={{left:MousePosition.left , top: MousePosition.top}}></iframe></a> - Upper Level Technique and Repertoire</p>
                        <br></br>
                        <h4 class="resume"><a href="/balletresume">Full CV...</a></h4>   
                </TabPanel>   
                </div> 
            </Tabs>
        </div>
    )
    }