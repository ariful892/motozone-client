import { useEffect, useState } from "react"

const useItems = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(ree => res => res.json())
            .then(data => setItems(data))
    }, []);

    return [items];
}

export default useItems;