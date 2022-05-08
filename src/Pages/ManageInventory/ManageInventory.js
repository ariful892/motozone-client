import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import ManageInventoryItem from '../MnanageInventoryItem/ManageInventoryItem';

import './ManageInventory.css';

const ManageInventory = () => {

    const [items, setItems] = useItems();
    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {

            const url = `https://nameless-mesa-03450.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                });
        }
    }

    const navigateToAddItem = () => {
        navigate('/add');
    }

    return (
        <div className='m-5'>
            <h2 className='add-item-title'>Manage Inventory: {items.length}</h2>
            <div className='text-end'>
                <button onClick={navigateToAddItem} className='new-item-btn px-3'>Add New Item</button>
            </div>
            {
                items.map(item => <ManageInventoryItem
                    key={item._id}
                    item={item}
                    handleDelete={handleDelete}
                ></ManageInventoryItem>)
            }
        </div>
    );
};

export default ManageInventory;