import React from 'react';
import '../css/header.css';
import TextAnimation from './animations/text-animation';
const Header = () => {
    return (
        <header id="home" style={{minHeight: "934px"}}>
            <div className="header">
                <div className="container-fluid">
                    <div className="row banner">
                        <div className="col-lg-12">
                            
                            <h1><TextAnimation/></h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                                Laborum, voluptas natus?
                            </p>
                           

                        </div>

                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header