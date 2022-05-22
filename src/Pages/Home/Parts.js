import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Products</h3>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.slice(0, 3).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;