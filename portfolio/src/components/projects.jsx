import React from 'react'
import '../css/projects.css';
import MuliaLogo from '../images/main-logo.jpg';
import PhotoBumLogo from '../images/PhotoBum-White.jpg';
import ShufflingLogo from '../images/TheShuffling.jpg';
const Projects = () => {
    return (
        <section id="project" style={{minHeight:'934px'}}>
            <div className="project-header">
                <div className="container-fluid">
                    <div className="row project-title">
                        <h1>Projects</h1>
                    </div>   
                    <div className="row project-container">
                        <div className="wrapper ">
                            <div className="project">
                                <img src={MuliaLogo}/>
                                <br/>
                                <p>Mulia Inc.</p>
                            </div> 
                            <div className="project">
                                <img src={PhotoBumLogo}/>
                                <br/>
                                <p>PhotoBum</p>
                            </div> 
                            <div className="project">
                                <img src={ShufflingLogo}/>
                                <br/>
                                <p>TheShuffling</p>
                            </div> 
                
                        </div>
         
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Projects 