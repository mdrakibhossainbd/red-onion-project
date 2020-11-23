import React from 'react';
import './DeliveryAddressForm.css'
import { useForm } from "react-hook-form";

const DeliveryAddressForm = ({handleDeliveryInfo}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
        handleDeliveryInfo(data);
        e.preventDefault();
    };

    return (
        <div className="mt-4 px-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="Full Name" className="form-control" ref={register({ required: true})} />
                <input name="email" placeholder="Email" className="form-control" ref={register({ required: true})} />
                <input name="phone" placeholder="Phone no." className="form-control" ref={register({ required: true})} />
                <input name="address" placeholder="Address" className="form-control" ref={register({ required: true})} />
                <input name="details" placeholder="Details" className="form-control" ref={register({ required: false})} />
                <div className="text-center my-5">
                    <button className="add-to-cart" type="submit" > Save and Confirm </button>
                </div>
                
            </form>
        </div>
    );
};

export default DeliveryAddressForm;