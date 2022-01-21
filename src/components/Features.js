import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import lightboximg1 from '../images/details-lightbox.png';

function Features() {
    return (
        <div id="features" className="tabs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="above-heading">FEATURES</div>
                        <h2 className="h2-heading">Marketing Automation</h2>
                        <p className="p-heading">Take your business strategy to the next level and automatize your marketing tasks to save time for product development. Level can provide results in less than 2 weeks</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">


                        <ul className="nav nav-tabs" id="argoTabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i className="fas fa-list"></i>List Builder</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-envelope-open-text"></i>Campaigns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="fas fa-chart-bar"></i>Analytics</a>
                            </li>
                        </ul>



                        <div className="tab-content" id="argoTabsContent">


                            <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image-container">
                                            <img className="img-fluid" src="images/features-1.png" alt="alternative" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-container">
                                            <h3>List Building Is Easier Than Ever</h3>
                                            <p>It's very easy to start using Level. You just need to fill out and submit the <a className="blue page-scroll" href="sign-up.html">Sign Up Form</a> and you will receive access to the app and all of its features in no more than 24h.</p>
                                            <ul className="list-unstyled li-space-lg">
                                                <li className="media">
                                                    <i className="fas fa-square"></i>
                                                    <div className="media-body">Create and embed on websites newsletter sign up forms</div>
                                                </li>
                                                <li className="media">
                                                    <i className="fas fa-square"></i>
                                                    <div className="media-body">Manage forms and landing pages for your services</div>
                                                </li>
                                                <li className="media">
                                                    <i className="fas fa-square"></i>
                                                    <div className="media-body">Add and remove subscribers using the control panel</div>
                                                </li>
                                            </ul>
                                            <Popup trigger={<a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>} modal nested>
                                                <div>Hello</div>
                                            </Popup>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image-container">
                                            <img className="img-fluid" src="images/features-2.png" alt="alternative" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-container">
                                            <h3>Campaigns Monitoring Tools</h3>
                                            <p>Campaigns monitoring is a feature we've developed since the beginning because it's at the core of Level and basically to any marketing activity focused on results.</p>
                                            <ul className="list-unstyled li-space-lg">
                                                <li className="media">
                                                    <i className="fas fa-square"></i>
                                                    <div className="media-body">Easily plan campaigns and schedule their starting date</div>
                                                </li>
                                                <li className="media">
                                                    <i className="fas fa-square"></i>
                                                    <div className="media-body">Start campaigns and follow their evolution closely</div>
                                                </li>
                                                <li className="media">
                                                    <i className="fas fa-square"></i>
                                                    <div className="media-body">Evaluate campaign results and optimize future actions</div>
                                                </li>
                                            </ul>
                                            <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image-container">
                                            <img className="img-fluid" src="images/features-3.png" alt="alternative" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-container">
                                            <h3>Analytics Control Panel</h3>
                                            <p>Analytics control  panel is important for every marketing team so it's beed implemented from the begging and designed to produce reports based on very little input information.</p>
                                            <ul className="list-unstyled li-space-lg">
                                                <li className="media">
                                                    <i className="fas fa-square"></i>
                                                    <div className="media-body">If you set it up correctly you will get acces to great intel</div>
                                                </li>
                                                <li className="media">
                                                    <i className="fas fa-square"></i>
                                                    <div className="media-body">Easy to integrate in your websites and landing pages</div>
                                                </li>
                                                <li className="media">
                                                    <i className="fas fa-square"></i>
                                                    <div className="media-body">The generated reports are important for your strategy</div>
                                                </li>
                                            </ul>
                                            <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-3">LIGHTBOX</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
