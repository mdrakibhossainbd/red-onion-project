import React from 'react';
import Navbar from '../HomePageComponents/Navbar/Navbar';
import LandingPageLayOut from '../LandingPageLayOut/LandingPageLayOut';

const AppMainLayOut = () => {
    return (
        <div>
            <div className="container">
                <Navbar/>
            </div>
            <LandingPageLayOut />
        </div>
    );
};

export default AppMainLayOut;