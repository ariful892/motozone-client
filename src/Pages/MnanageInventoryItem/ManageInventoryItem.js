import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

import './ManageInventoryItem.css';

const ManageInventoryItem = ({ item, handleDelete }) => {

    const { _id, name, img, quantity, supplier } = item;



    return (
        <div className='manage-item-container '>
            <div className='manage-item'>
                <div>
                    <img width={200} src={img} alt="" />
                </div>
                <div className='ms-4 mt-4'>
                    <h4 className='mb-1'>{name}</h4>
                    <p className='mb-1'><small>Quantity: {quantity}</small></p>
                    <p className='mb-1'><small>Supplier: {supplier}</small></p>
                </div>
            </div>
            <div className='d-flex align-items-center me-5'>
                <FontAwesomeIcon onClick={() => handleDelete(_id)} className='delete-btn' icon={faTrash}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default ManageInventoryItem;