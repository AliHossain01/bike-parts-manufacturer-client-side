import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import useParts from './../../hooks/useParts';
import './ManageProducts.css'


const ManageProducts = () => {
    const [parts, setParts] = useParts();




    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/part/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = parts.filter(parts => parts._id !== id);
                    setParts(remaining);
                })
        }
    }
    return (
        <div className='mx-6'>
            <h2 className='text-2xl font-bold text-green-400 text-center'>Manage Products</h2>

            <div className='overflow-x-auto mx-6'>
                < table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>



                    </tr>
                    {parts.map(book => {
                        return (
                            <tr key={book._id}>
                                <td>{book.name}</td>
                                <td>{book.price}</td>
                                <td>{book.quantity}</td>
                                <td>{<button onClick={() => handleDelete(book._id)}><AiFillDelete className='icon' /></button>}</td>


                            </tr>
                        )
                    })}
                </table>
            </div>

        </div>

    );
};

export default ManageProducts;

