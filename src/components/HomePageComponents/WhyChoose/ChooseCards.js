import React from 'react';
import chooseImage1 from '../../../images/image/adult-blur-blurred-background-687824.png';
import chooseImage2 from '../../../images/image/chef-cook-food-33614.png';
import chooseImage3 from '../../../images/image/architecture-building-city-2047397.png';
import iconFast from '../../../images/icon/Group 1133.png';
import iconBell from '../../../images/icon/Group 204.png';
import iconVan from '../../../images/icon/Group 245.png';
import ChooseSingleCard from './ChooseSingleCard';

const ChooseCards = () => {
    const chooseData = [
        {
            title : 'Fast Delivery',
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint ullam illum eum, laboriosam quasi ut accusantium rerum dolor.',
            image: chooseImage1,
            icon: iconFast
        },
        {
            title : 'A Good Auto Responder',
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint ullam illum eum, laboriosam quasi ut accusantium rerum dolor.',
            image: chooseImage2,
            icon: iconBell
        },
        {
            title : 'Home Delivery',
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint ullam illum eum, laboriosam quasi ut accusantium rerum dolor.',
            image: chooseImage3,
            icon: iconVan
        }
    ]
    return (
        <div className="card-columns my-3">
            {
                chooseData.map((each, index) => <ChooseSingleCard key={index} cardData={each}/> )
            }
        </div>
    );
};

export default ChooseCards;