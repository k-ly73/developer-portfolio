import React from 'react';
import '../css/header.scss';
// import NameAnimation from './animations/text-animation';
const Header = () => {
    return (
        <header id="home" style={{minHeight: "934px"}}>
            <div className="header">
                <div className="container-fluid">
                    <div className="row banner">

                        <div className="col-lg-12">
                            <div className="animation-wrap">
                                <div className="typewriter-text">
                                    <h1>Kevin Ly</h1>
                                    
                                </div>
                            </div>
                            <p>Interactive UI Web Developer</p>


                        </div>

                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header