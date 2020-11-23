import React from 'react';
import Banner from '../HomePageComponents/Banner/Banner';
import Footer from '../HomePageComponents/Footer/Footer';
import ItemsTab from '../HomePageComponents/ItemsTab/ItemsTab';
import Navbar from '../HomePageComponents/Navbar/Navbar';
import WhyChoose from '../HomePageComponents/WhyChoose/WhyChoose';

const LandingPageLayOut = () => {
    return (
        <div>
            
            <Banner/>

            <div className="container">
                <ItemsTab/>
            </div>
            <div className="container">
                <WhyChoose/>
            </div>
            <Footer/>
        </div>
    );
};

export default LandingPageLayOut;