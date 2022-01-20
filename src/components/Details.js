import React from 'react';
import detailimg from '../images/details.png';

function Details() {
  return (
    <div id="details" className="basic-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="text-container">
                    <h2>Now Is The Time To Upgrade Your Marketing Solution</h2>
                    <p>Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
                    <ul className="list-unstyled li-space-lg">
                        <li className="media">
                            <i className="fas fa-square"></i>
                            <div className="media-body">Understand customers and meet their requirements</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i>
                            <div className="media-body">Targeted client base with Tivo's efficient technology</div>
                        </li>
                    </ul>
                    <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                </div> 
            </div> 
            <div className="col-lg-6">
                <div className="image-container">
                    <img className="img-fluid" src={detailimg} alt="alternative"/>
                </div> 
            </div> 
        </div> 
    </div> 
</div> 

  )}

export default Details;
