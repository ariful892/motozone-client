import React from 'react';
import useItems from '../../hooks/useItems';
import ManageInventoryItem from '../MnanageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {

    const [items, setItems] = useItems();

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

    return (
        <div className='m-5'>
            <h2 className='text-white text-center'>Manage Inventory {items.length}</h2>
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