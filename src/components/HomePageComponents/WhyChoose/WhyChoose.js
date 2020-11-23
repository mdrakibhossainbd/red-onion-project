import React from 'react';
import { Link } from 'react-router-dom';
import ChooseCards from './ChooseCards';

const WhyChoose = () => {
    return (
        <div>
            <div className="text-center mb-5">
               <Link to='/showCart'><button className="add-to-cart">Checkout Your Food</button></Link>  
            </div>
            
            <div className="col-md-6 col-sm-12 mt-5 pt-5">
                <h3>Why you choose us</h3>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae adipisci eveniet, eum neque tenetur nulla architecto unde!</p>
            </div>

            <div>
                <ChooseCards/>
            </div>
        </div>
    );
};

export default WhyChoose;