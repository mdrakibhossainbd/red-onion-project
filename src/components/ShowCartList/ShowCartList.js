import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext, UserContext } from '../../App';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../DatabaseManager/DatabaseManager';
import PrivateRoute from '../Authentication/PrivateRoute';
import Navbar from '../HomePageComponents/Navbar/Navbar';
import ProcessPayment from '../PaymentHandle/ProcessPayment';
import DeliveryAddressForm from './DeliveryAddressForm/DeliveryAddressForm';
import SingleCart from './SingleCart';

const ShowCartList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allCartItems, setAllCartItems] = useContext(CartContext);

    const [cartList, setCartList] = useState(getDatabaseCart())
    const [state, setState] = useState(false)
    const [payment, setPayment] = useState({})
    const [orderConfirm, setOrderConfirm] = useState(false)
    const [deliveryInfo, setDeliveryInfo] = useState({})
    const history = useHistory()

    useEffect(() => {
        const currentCart = getDatabaseCart()
        const allCartKeyArray = Object.keys(currentCart)
        console.log(allCartKeyArray)

        fetch(`http://localhost:3001/findCarts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(allCartKeyArray)
        })
            .then(res => res.json())
            .then(data => {
                const cartSetUp = allCartKeyArray.map(key => {
                    const dataObj = data.find(dataKey => dataKey._id === key)
                    dataObj.quantity = currentCart[key]
                    return dataObj
                })
                setCartList(cartSetUp)
                calculateTotal(cartSetUp);
            })
    }, [state])

    const changeQuantity = (id, qty) => {
        const newObj = [...cartList];
        newObj.map(each => {
            if (each._id === id && qty > 0) {
                each.quantity = qty
                addToDatabaseCart(id, qty);
                return;
            }
        })
        console.log(newObj, getDatabaseCart())
        setCartList(newObj)
        calculateTotal(newObj);
    }

    const removeItem = (key) => {
        removeFromDatabaseCart(key);
        setState(!state);
    }

    const calculateTotal = (newCartList) => {
        let subTotal = 0.0;
        newCartList.map(each => {
            subTotal = subTotal + parseFloat(each.price) * each.quantity;
        })

        let tax = (subTotal * 0.02);
        let deliveryCharge = (subTotal * 0.3);
        let grandTotal = (subTotal + tax + deliveryCharge);

        subTotal = toFix(subTotal)
        tax = toFix(tax)
        deliveryCharge = toFix(deliveryCharge)
        grandTotal = toFix(grandTotal)

        const payment = { subTotal, tax, deliveryCharge, grandTotal }
        // console.log(payment)
        setPayment(payment);
    }
    const toFix = (value) => {
        return value.toFixed(2)
    }

    const handleDeliveryInfo = (deliveryInfo) => { // all info go to db from here
        setDeliveryInfo(deliveryInfo);
        const allCartInfo = { deliveryInfo, loggedInUser, payment, cartList }
        setAllCartItems(allCartInfo);
        history.push('/payNow')
    }

    return (
        <div className="container">
            
                <Navbar />

            <div className="row">
                <div className="col-md-6 col-sm-12">
                    {
                        cartList.length > 0
                            ?
                            cartList.map((each, index) => <SingleCart key={index} removeItem={removeItem} changeQuantity={changeQuantity} singleCart={each} />)
                            :
                            <p> Loading... </p>
                    }

                    <div className="mt-3 bg-light p-4 font-weight-bold">
                        <table>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sub-Total  ({cartList.length} Items) :  </td>
                                    <td> {payment.subTotal} </td>
                                </tr>
                                <tr>
                                    <td>Tax : </td>
                                    <td> {payment.tax} </td>
                                </tr>
                                <tr>
                                    <td>Delivery Charge : </td>
                                    <td> {payment.deliveryCharge} </td>
                                </tr>
                                <tr className="text-primary">
                                    <td>Total : </td>
                                    <td>{payment.grandTotal} $ </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                    <div className="text-center my-5">
                        <button className="add-to-cart" onClick={() => setOrderConfirm(true)}> Click to Order </button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    {

                        cartList.length > 0
                            ?
                            orderConfirm
                            &&
                            <PrivateRoute>
                                <DeliveryAddressForm handleDeliveryInfo={handleDeliveryInfo} />
                            </PrivateRoute>
                            :
                            <div className="text-center text-primary">
                                <h4>Your cart is empty. Please add items to cart</h4>
                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default ShowCartList;