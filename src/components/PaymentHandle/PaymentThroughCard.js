import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../App';
import { processOrder } from '../../DatabaseManager/DatabaseManager';
import Navbar from '../HomePageComponents/Navbar/Navbar';
import ProcessPayment from './ProcessPayment';

const PaymentThroughCard = () => {
    const [allCartItems, setAllCartItems] = useContext(CartContext);
    const history = useHistory()

    const handlePaymentSuccess = (paymentId) => {
        console.log(paymentId)
        const orderDetails = { ...allCartItems, paymentId, orderTime: new Date() }
        console.log(orderDetails)
        fetch(`http://localhost:3001/addToCart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data){
                    processOrder()
                    history.push('/')
                    window.alert("Your order is placed successfully")
                }
            })
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="text-center d-flex justify-content-center align-items-center mt-5 text-Primary">
                <div className="card bg-light p-5 col-md-6 col-sm-12">
                    <h4 className="py-5">Payment Option</h4>
                    <ProcessPayment handlePayment={handlePaymentSuccess} />
                </div>
            </div>
        </div>

    );
};

export default PaymentThroughCard;