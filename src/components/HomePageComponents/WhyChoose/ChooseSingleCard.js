import React from 'react';

const ChooseSingleCard = ({ cardData }) => {
    const { title, details, image, icon } = cardData
    return (
        <div>
            <div className="card food-card m-3">
                <div className="p-3">
                    <img src={image} style={{height:'40%', width:'100%'}} alt="" />
                    <br /> <br/>  
                    <img src={icon} alt="" />
                    <span> <strong>{title}</strong> </span>
                    <br />
                    <small className="text-muted"> {details} </small> 
                    <br/>
                    <p className="text-primary font-weight-bold">See More <i className="fas fa-long-arrow-alt-right"></i></p>
                </div>
            </div>
        </div>
    );
};

export default ChooseSingleCard;