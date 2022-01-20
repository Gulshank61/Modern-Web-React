import React from 'react';
import vidimg from '../images/video-image.png';

function Video() {
  return (
    <div id="video" className="basic-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">

               
                <div className="image-container">
                    <div className="video-wrapper">
                        <a className="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
                            <img className="img-fluid" src={vidimg} alt="alternative"/>
                            <span className="video-play-button">
                                <span></span>
                            </span>
                        </a>
                    </div> 
                </div> 
                

                <div className="p-heading">What better way to show off Tivo marketing automation saas app than presenting you some great situations of each module and tool available to users in a video</div>        
            </div>
        </div>
    </div>
</div>

  )}

export default Video;
