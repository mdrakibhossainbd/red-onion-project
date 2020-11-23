import React from 'react';
import logo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="container pt-3 mt-5">

                <div className="row">

                    <div className="col-md-6 col-sm-12">
                        <img src={logo} height="50" className="m-3" alt="" />
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <p>About Online food</p>
                                <p>Read our blog</p>
                                <p>Sign up to deliver</p>
                                <p>Add your restaurant</p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <p>Get help</p>
                                <p>Read FAQs</p>
                                <p>View all cities</p>
                                <p>Restaurants near me</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-2 d-flex p-3">
                        <div className="col-md-6 text-muted">
                            Copyright &copy; 2020 Online food
                        </div>
                        <div className="col-md-6 d-flex ml-auto">
                            <p className="mr-5">Privacy Policy</p>
                            <p className="mr-5">Terms of Use</p>
                            <p>Pricing</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;