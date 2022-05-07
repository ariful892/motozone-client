import React from 'react';
import useItems from '../../../hooks/useItems';

const InventoryItems = () => {

    const [items] = useItems();

    return (
        <div>
            <h2>Inventory Items: {items.length}</h2>
        </div>
    );
};

export default InventoryItems;

