import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ itemData , showDetails }) => {
    return (
        <div className=" p-3">
            <Link className="link-style"  onClick={()=>showDetails(itemData)} to='#'>
                <div className="card food-card d-flex justify-content-center align-items-center p-3">
                    <img src={itemData.image} alt="" height="120" width="120" /> <br /> 
                    <h6>{itemData.name}</h6>
                    <small className="text-muted text-center">{itemData.details.slice(0,50)}...</small>
                    <h4><strong> ${itemData.price}</strong></h4>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;