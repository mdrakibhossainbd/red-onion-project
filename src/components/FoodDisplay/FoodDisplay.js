import React, { useEffect, useState } from 'react';
import FoodItemDetails from './FoodItemDetails';
import ItemCard from './ItemCard';

const FoodDisplay = ({ tab , clickedItem}) => {

    const [tabItems, setTabItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/category/${tab}`)
            .then(res => res.json())
            .then(data => {
                setTabItems(data)
                clickedItem({})
            })
    }, [tab])

    const showDetails = (item) => {
        clickedItem(item)
    }
    
    return (
        <div>
            <div className="card-columns">
                {
                    tabItems.length > 0
                        ?
                        tabItems.map((each, index) => <ItemCard key={index} showDetails={showDetails} itemData={each} />)
                        :
                        <h3 className="text-center"> <b>Loading...</b> </h3>
                }
            </div>
        </div>
    );
};

export default FoodDisplay;