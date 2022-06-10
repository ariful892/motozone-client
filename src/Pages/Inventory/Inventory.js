import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';

import './Inventory.css';

const Inventory = () => {

    const { itemId } = useParams();
    let [item, setItem] = useItemDetails(itemId);
    let { name, img, description, price, quantity, supplier } = item;
    console.log(item);

    let newQuantity = quantity;
    let updatedItem;

    const handleDelivered = () => {
        newQuantity = newQuantity - 1;
        quantity = newQuantity;
        updatedItem = { ...item, quantity };
        setItem(updatedItem);
    }

    const handleRestock = event => {
        event.preventDefault();

        const inputQuantity = parseInt(event.target.quantity.value);
        newQuantity = newQuantity + inputQuantity;
        quantity = newQuantity;
        updatedItem = { ...item, quantity };
        setItem(updatedItem);
    }

    useEffect(() => {
        const url = `https://nameless-mesa-03450.herokuapp.com/item/${itemId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
            });
    }, [item]);


    return (
        <div className='text-center m-5 text-white'>
            <h3 className='mb-3'>{name}</h3>
            <img width={500} className='img-fluid rounded' src={img} alt="" />

            <div className='mt-3'>

                <p>{description}</p>
                <p>Price: {price}</p>
                {
                    (newQuantity > 0) ?
                        <p>Quantity: {newQuantity}</p>
                        :
                        <p>Sold Out</p>
                }
                <p>Supplier: {supplier}</p>
            </div>
            <button disabled={newQuantity === 0} onClick={handleDelivered} className='inventory-btn px-4 py-1'>Delivered</button>
            <h4 className='restock-title mt-5'>Restock the item</h4>
            <form onSubmit={handleRestock}>
                <input className='mt-3 rounded border-0' type="number" name="quantity" id="" placeholder='Enter Item Quantity' required />
                <input className='inventory-btn ms-3 px-3' type="submit" value="Restock" />
            </form>
        </div>
    );
};

export default Inventory;