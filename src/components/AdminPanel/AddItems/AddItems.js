import React from 'react';
import { useForm } from 'react-hook-form';
import fakeData from '../../../FoodData/FoodData.json';

const AddItems = () => {

    // const allData = [...fakeData]
    // console.log(allData)

    // const addAll=()=>{
    //     console.log(allData)
    //     fetch('http://localhost:3001/addFoodItem', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(allData)
    //     })
    //         .then(res => res.json())
    //         .then(dta => {
    //             if (dta) {
    //                 window.alert("Item added successfully!")
    //             }
    //         })
    // }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data,e) =>  {
        console.log(data)
        e.preventDefault();
    };
    errors && console.log(errors);

    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder="Name" name="name" ref={register({ required: true})} />

                <select name="category" ref={register({ required: true })}>
                    <option defaultValue="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>

                <input type="text" placeholder="Details" name="details" ref={register({ required: true})} />
                <input type="text" placeholder="Price" name="price" ref={register({ required: true})} />
                <input type="text" placeholder="Rating" name="rating" ref={register({ required: true})} />
                <input type="text" placeholder="Image Link" name="imageUrl" ref={register({ required: true})} />

                <input type="submit" />

            </form>
        </div>
    );
};

export default AddItems;