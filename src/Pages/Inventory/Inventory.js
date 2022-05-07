import React from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const Inventory = () => {

    const { itemId } = useParams();
    const [items] = useItems();
    console.log('items', items);
    const itemDetail = items.filter(item => itemId !== item.id);


    return (
        <div>
            <h2 className='text-white'>{items.length}</h2>
        </div>
    );
};

export default Inventory;