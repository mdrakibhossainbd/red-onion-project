import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="d-flex search-bar">
                <input className="search-input" type="text"/>
                <button className="add-to-cart search-btn" type="submit" >Search</button>
            </div>
        </div>
    );
};

export default Banner;