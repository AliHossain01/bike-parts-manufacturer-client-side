import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://secure-dawn-45035.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return [orders, setOrders]
}

export default useOrders;