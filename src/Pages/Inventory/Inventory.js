import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';

import './Inventory.css';

const Inventory = () => {

    const { itemId } = useParams();
    const [item, setItem] = useItemDetails(itemId);
    const { name, img, description, price, supplier } = item;

    let newQuantity = item.quantity;

    const handleDelivered = () => {
        newQuantity = newQuantity - 1;
        item.quantity = newQuantity;
        const updatedItem = [...item, item.quantity];
        setItem(updatedItem);
    }

    const handleRestock = event => {
        event.preventDefault();

        const inputQuantity = parseInt(event.target.quantity.value);
        newQuantity = newQuantity + inputQuantity;
        const updatedItem = [...item, newQuantity];
        setItem(updatedItem);
    }

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
            <button onClick={handleDelivered} className='inventory-btn px-4 py-1'>Delivered</button>
            <h4 className='restock-title mt-5'>Restock the item</h4>
            <form onSubmit={handleRestock}>
                <input className='mt-3 rounded border-0' type="number" name="quantity" id="" required />
                <input className='inventory-btn ms-3 px-3' type="submit" value="Restock" />
            </form>
        </div>
    );
};

export default Inventory;