import { useEffect, useState } from "react";

const useItemDetail = itemId => {

    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://secret-eyrie-78207.herokuapp.com/service/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId]);

    return [item];
}

export default useItemDetail;