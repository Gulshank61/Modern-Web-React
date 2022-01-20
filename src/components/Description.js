import React from 'react';
import desc1 from '../images/description-1.png';
import desc2 from '../images/description-2.png';
import desc3 from '../images/description-3.png';

function Description() {
  return (
    <div className="cards-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="above-heading">DESCRIPTION</div>
                <h2 className="h2-heading">Marketing Automation Will Bring More Qualified Leads</h2>
            </div> 
        </div> 
        <div className="row">
            <div className="col-lg-12">

                
                <div className="card">
                    <div className="card-image">
                        <img className="img-fluid" src={desc1} alt="alternative"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Lists Builder</h4>
                        <p>It's very easy to start creating email lists for your marketing actions. Just create your Tivo account</p>
                    </div>
                </div>
                

                
                <div className="card">
                    <div className="card-image">
                        <img className="img-fluid" src={desc2} alt="alternative"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Campaign Tracker</h4>
                        <p>Campaigns is a feature we've developed since the beginning because it's at the core of Tivo's functionalities</p>
                    </div>
                </div>
                

               
                <div className="card">
                    <div className="card-image">
                        <img className="img-fluid" src={desc3} alt="alternative"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Analytics Tool</h4>
                        <p>Tivo collects customer data in order to help you analyse different situations and take required action</p>
                    </div>
                </div>
               

            </div> 
        </div> 
    </div> 
</div> 

  )}

export default Description;
