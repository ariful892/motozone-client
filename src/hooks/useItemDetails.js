import { useEffect, useState } from "react";

const useItemDetail = itemId => {

    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://nameless-mesa-03450.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId]);

    return { item, setItem };
}

export default useItemDetail;