import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-green-400 uppercase'>Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <li><Link to="/dashboard">My Order</Link></li>}
                    {!admin && <li><Link to="/dashboard/review">Add Review</Link></li>}
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    {admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                    {admin && <li><Link to="/dashboard/manageallorders">Manage Orders</Link></li>}
                    {admin && <li><Link to="/dashboard/addproduct">Add A Product</Link></li>}
                    {admin && <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;