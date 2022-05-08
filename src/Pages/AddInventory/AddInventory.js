import React from 'react';
import { useForm } from 'react-hook-form';

import './AddInventory.css';

const AddInventory = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'https://nameless-mesa-03450.herokuapp.com/item';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('Congratulations your item is added!');
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='add-item-title'>Add New Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 rounded-3' placeholder='Item Name' {...register("name", { required: true })} />
                <input className='mb-3 rounded-3' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <textarea className='mb-3 rounded-3' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-3 rounded-3' placeholder='Price' type="number" {...register("price", { required: true })} />
                <input className='mb-3 rounded-3' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input className='mb-3 rounded-3' placeholder='Supplier' type="text" {...register("supplier", { required: true })} />
                <input className='inventory-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddInventory;