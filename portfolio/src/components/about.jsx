import React from 'react'
import ProfilePic from '../images/KevinProfile.jpg';
import '../css/about.css';
const About = () => {
    return (
        <section id="about" style={{minHeight: "934px"}}>
            <div className="about-header">
                <div className="container-fluid">
                    <div className="row about-title">
                        <div className="col-lg-12">
                            <h1>About Me</h1>
                        </div>
                    </div>
                    <div className="row about-container">
                        <div className="col-lg-7 center">
                            <div className="about-me">
                                <div className="card"> 
                                <div className="card-header">
                                </div>
                                <div className="card-body">
                                <p>
                                    Hello! My name is Kevin. 
                                    I recently graduated with a Bachelor's Degree in Computer Science 
                                    from Cal Poly Pomona. 
                                    My passion is designing and creating websites. 
                                    My side hobbies include drawing and photography.
            


                                </p>
                                </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="img-container center">
                          
                                <img src={ProfilePic} alt="ProfilePc"/>
                               
                          
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
            </div>
           
        </section>
       
    )
}
export default About