import React from 'react';

function Pricing() {
  return (
    <div id="pricing" className="cards-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="above-heading">PRICING</div>
                <h2 className="h2-heading">Pricing Options Table</h2>
            </div> 
        </div> 
        <div className="row">
            <div className="col-lg-12">

                
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">BASIC</div>
                        <div className="price"><span className="currency">$</span><span className="value">Free</span></div>
                        <div className="frequency">14 days trial</div>
                        <div className="divider"></div>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">Email Marketing Module</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">User Control Management</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-times"></i><div className="media-body">List Building And Cleaning</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-times"></i><div className="media-body">Collected Data Reports</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-times"></i><div className="media-body">Planning And Evaluation</div>
                            </li>
                        </ul>
                        <div className="button-wrapper">
                            <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                        </div>
                    </div>
                </div> 
                

                
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">ADVANCED</div>
                        <div className="price"><span className="currency">$</span><span className="value">29.99</span></div>
                        <div className="frequency">monthly</div>
                        <div className="divider"></div>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">Email Marketing Module</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">User Control Management</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">List Building And Cleaning</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-times"></i><div className="media-body">Collected Data Reports</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-times"></i><div className="media-body">Planning And Evaluation</div>
                            </li>
                        </ul>
                        <div className="button-wrapper">
                            <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                        </div>
                    </div>
                </div> 
                
                
                <div className="card">
                    {/* <!--<div className="label">
                        <p className="best-value">Best Value</p>
                    </div> --> */}
                    <div className="card-body">
                        <div className="card-title">COMPLETE</div>
                        <div className="price"><span className="currency">$</span><span className="value">39.99</span></div>
                        <div className="frequency">monthly</div>
                        <div className="divider"></div>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">Email Marketing Module</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">User Control Management</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">List Building And Cleaning</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">Collected Data Reports</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i><div className="media-body">Planning And Evaluation</div>
                            </li>
                        </ul>
                        <div className="button-wrapper">
                            <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                        </div>
                    </div>
                </div> 
               

            </div> 
        </div> 
    </div> 
</div> 

  )}

export default Pricing;
