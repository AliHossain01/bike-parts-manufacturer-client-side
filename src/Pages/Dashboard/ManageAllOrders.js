import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import './ManageProducts.css'
import useOrders from './../../hooks/useOrders';


const ManageAllOrders = () => {
    const [orders, setOrders] = useOrders();

    // console.log(orders);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://secure-dawn-45035.herokuapp.com/part/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }


    return (
        <div className='mx-6'>
            <h2 className='text-2xl font-bold text-green-400 text-center'>Manage All Orders</h2>

            <div className='overflow-x-auto mx-6'>
                < table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>



                    </tr>
                    {orders.map(book => {
                        return (
                            <tr key={book._id}>
                                <td>{book.name}</td>
                                <td>{book.pname}</td>
                                <td>{book.quantity}</td>
                                <td><button onClick={() => handleDelete(book._id)} class="btn btn-error btn-xs">Cancel</button></td>


                            </tr>
                        )
                    })}
                </table>
            </div>

        </div>

    );
};

export default ManageAllOrders;



