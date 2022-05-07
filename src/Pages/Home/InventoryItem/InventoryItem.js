import React from 'react';
import './InventoryItem.css';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({ item }) => {

    const { id, img, description, price, quantity, supplier } = item;
    const navigate = useNavigate();

    const handleManage = () => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='item-container'>
            <img className='ps-4 pe-4 img-fluid rounded' src={img} alt="" />
            <div className="item-details">
                <h4 className='mt-3 mb-1'>{item.name}</h4>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplier}</p>
            </div>
            <button onClick={handleManage} className='manage-btn'>MANAGE</button>
        </div>
    );
};

export default InventoryItem;