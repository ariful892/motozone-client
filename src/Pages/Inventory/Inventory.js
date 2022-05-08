import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';

import './Inventory.css';

const Inventory = () => {

    const { itemId } = useParams();
    const [item] = useItemDetails(itemId);
    const { name, img, description, price, quantity, supplier } = item;

    let [itemQuantity, setItemQuantity] = useState(8);

    const handleDelivered = () => {
        itemQuantity = itemQuantity - 1;
        setItemQuantity(itemQuantity);
    }

    const handleRestock = event => {
        event.preventDefault();

        const inputQuantity = parseInt(event.target.quantity.value);
        itemQuantity = itemQuantity + inputQuantity;
        setItemQuantity(itemQuantity);
    }

    return (
        <div className='text-center m-5 text-white'>
            <h3 className='mb-3'>{name}</h3>
            <img width={500} className='img-fluid rounded' src={img} alt="" />

            <div className='mt-3'>

                <p>{description}</p>
                <p>Price: {price}</p>
                {
                    (itemQuantity > 0) ?
                        <p>Quantity: {itemQuantity}</p>
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