import React from 'react';
import '../css/header.css';
import NameAnimation from './animations/text-animation';
const Header = () => {
    return (
        <header id="home" style={{minHeight: "934px"}}>
            <div className="header">
                <div className="container-fluid">
                    <div className="row banner">
                        <div className="col-lg-12">
                            
                            <h1><NameAnimation/></h1>
                            <p>
                                Interactive Developer
                            </p>
                           

                        </div>

                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header