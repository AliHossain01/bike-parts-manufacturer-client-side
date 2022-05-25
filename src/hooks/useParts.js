import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://secure-dawn-45035.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);
    return [parts, setParts]
}

export default useParts;