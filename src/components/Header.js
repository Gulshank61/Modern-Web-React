import React from 'react';
import Software from '../images/header-software-app.png';

function Header() {
  return (
    <header id="header" className="header">
    <div className="header-content">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-xl-5">
                    <div className="text-container">
                        <h1>React App HTML Landing Page</h1>
                        <p className="p-large">Use Level to automate your marketing actions in order to reach a much larger audience</p>
                        <a className="btn-solid-lg page-scroll" href="/signup">SIGN UP</a>
                    </div> 
                </div> 
                <div className="col-lg-6 col-xl-7">
                    <div className="image-container">
                        <div className="img-wrapper">
                            <img className="img-fluid" src={Software} alt="alternative" />
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
</header>



  )}

export default Header;
