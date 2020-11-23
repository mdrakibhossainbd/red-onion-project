import React from 'react';
import Modal from 'react-modal';
import { addToDatabaseCart, getDatabaseCart } from '../../DatabaseManager/DatabaseManager';


const FoodItemDetails = ({ modalIsOpen, closeModal, itemData }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            height: 'auto',
            maxWidth: '850px',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    Modal.setAppElement('#root')


    // useful and important function to handle add to cart
    const handleAddToCart = (id) => {
        const currentCart = getDatabaseCart()
        const allCartKeyArray = Object.keys(currentCart)

        if (allCartKeyArray.length > 0) {
            const getExistedId = allCartKeyArray.find(each => each === id)
            if (getExistedId) {
                const newCount = parseInt(currentCart[getExistedId]) + 1;
                addToDatabaseCart(id, newCount);
            } else {
                addToDatabaseCart(id, 1);
            }
        } else {
            addToDatabaseCart(id, 1);
        }
        console.log(getDatabaseCart())
    }

    return (
        <div className="m-5" >

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="ml-auto">
                    <button className="tab-btn" onClick={closeModal}>X</button>
                </div>


                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={itemData.image} height="70%" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="pl-3">
                            <h3>{itemData.name}</h3>
                            <p>{itemData.details}</p>
                            <h1>${itemData.price}</h1>
                            <button className="add-to-cart" onClick={() => handleAddToCart(itemData._id)} >
                                <i className="fa fa-shopping-cart"></i> &nbsp;
                            Add to Cart</button>
                        </div>
                    </div>

                </div>

            </Modal>


        </div>
    );
};

export default FoodItemDetails;