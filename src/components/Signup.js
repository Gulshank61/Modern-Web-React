import React from 'react';
import Navbar from './Navbar';

function Signup() {
  return (
    <header id="header" className="ex-2-header">
        <Navbar />
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Sign Up</h1>
               <p>Fill out the form below to sign up for Tivo. Already signed up? Then just <a className="white" href="/login">Log In</a></p>
                <div className="form-container">
                    <form id="signUpForm" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="semail" required/>
                            <label className="label-control" for="semail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="sname" required/>
                            <label className="label-control" for="sname">Name</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="spassword" required/>
                            <label className="label-control" for="spassword">Password</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="sterms" value="Agreed-to-Terms" required/>I agree with Tivo's <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">SIGN UP</button>
                        </div>
                        <div className="form-message">
                            <div id="smsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>
                </div> 
                

            </div> 
        </div> 
    </div> 
</header> 

  )}

export default Signup;
