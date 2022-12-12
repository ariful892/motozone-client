import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../../hooks/useItems';
import ManageInventoryItem from '../MnanageInventoryItem/ManageInventoryItem';

const MyItems = () => {

    const [items, setItems] = useItems();
    const [user] = useAuthState(auth);
    const myItems = items.filter(item => item?.email === user.email);
    console.log(myItems);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {

            const url = `https://motozone-server-production.up.railway.app/item/${id}`;
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
            <h2 className='text-white text-center'>My Items: {myItems.length}</h2>
            {
                myItems.map(item => <ManageInventoryItem
                    key={item._id}
                    item={item}
                    handleDelete={handleDelete}
                ></ManageInventoryItem>)
            }

        </div>
    );
};

export default MyItems;