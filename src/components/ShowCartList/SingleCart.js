import React from 'react';
import { removeFromDatabaseCart } from '../../DatabaseManager/DatabaseManager';
import './SingleCart.css';


const SingleCart = ({singleCart , changeQuantity, removeItem}) => {
    return (
        <div className="container single-cart-bg text-center bg-light my-2">
            <div className="row p-2 ">
                <div className="col-md-3 col-sm-3">
                    <img src={singleCart.image} height="60" style={{borderRadius:'50%'}} alt=""/>
                </div>
                <div className="col-md-4 col-sm-4 my-auto">
                    <strong> <span>{singleCart.name}</span> </strong>
                    <strong> <p style={{color:'red'}}>$ {singleCart.price}</p> </strong>
                </div>
                <div className="col-md-3 col-sm-3 my-auto">
                    <button className="bg-transparent-btn"  onClick={()=>changeQuantity(singleCart._id, singleCart.quantity>1 && singleCart.quantity-1)}> - </button>
                    <span className="px-1"> {singleCart.quantity}</span>
                    <button className="bg-transparent-btn" onClick={()=>changeQuantity(singleCart._id, singleCart.quantity+1)}> + </button>
                </div>
                <div className="col-md-2 col-sm-2 my-auto">
                    <button className="bg-transparent-btn" onClick={()=>removeItem(singleCart._id)}> X </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;