import React, { useState } from 'react';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import FoodItemDetails from '../../FoodDisplay/FoodItemDetails';
import './ItemsTab.css'

const ItemsTab = () => {

    const [tab, setTab] = useState('lunch')
    const [itemClicked, setItemClicked] = useState({})

    const clickedItem =(item)=>{
        setItemClicked(item)
        setIsOpen(true);
    }
    
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="tab-options text-center my-5">
                <button className="tab-btn" onClick={()=>setTab('breakfast')}><span>Breakfast</span></button> &nbsp;&nbsp;&nbsp;
                <button className="tab-btn" onClick={()=>setTab('lunch')}><span >Lunch</span></button> &nbsp;&nbsp;&nbsp;
                <button className="tab-btn" onClick={()=>setTab('dinner')}><span>Dinner</span></button>
            </div>
            <div className="my-5">
                <FoodDisplay clickedItem={clickedItem} tab={tab}/>
                {
                    itemClicked.name
                    &&
                    <FoodItemDetails modalIsOpen={modalIsOpen} closeModal={closeModal} itemData={itemClicked} />
                }
            </div>
        </div>
    );
};

export default ItemsTab;