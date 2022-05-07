import React from 'react';
import './InventoryItem.css';

const InventoryItem = ({ item }) => {

    const { name, img, description, price, quantity, supplier } = item;
    return (
        <div className='item-container'>
            <img className='img-fluid rounded' src={img} alt="" />
            <h4 className='mt-3'>{item.name}</h4>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
        </div>
    );
};

export default InventoryItem;