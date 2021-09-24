import React from 'react'
import '../css/projects.css';
import MuliaLogo from '../images/main-logo.jpg';
const Projects = () => {
    return (
        <section id="project" style={{minHeight:'934px'}}>
            <div className="project-header">
                <div className="container-fluid">
                    <div className="row project-title">
                        <h1>Projects</h1>
                    </div>   
                    <div className="row project-container">
                        <div className="wrapper">
                            <div>
                                <img src={MuliaLogo}/>
                            </div> 
                            <div>
                                <img src={MuliaLogo}/>
                            </div> 
                            <div>
                                <img src={MuliaLogo}/>
                            </div> 
                            <div>
                                <img src={MuliaLogo}/>
                            </div> 
                            <div>
                                <img src={MuliaLogo}/>
                            </div> 
                            <div>
                                <img src={MuliaLogo}/>
                            </div> 
                        </div>
         
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Projects 