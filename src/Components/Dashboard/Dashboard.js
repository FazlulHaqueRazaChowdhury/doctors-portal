import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Loading/Loading';


const Dashboard = () => {
    const [user, loading] = useAuthState(auth);

    const [admin, adminLoading] = useAdmin(user?.email);
    if (loading || adminLoading) {
        return <Loading />
    }
    return (
        <div className="container mx-auto">
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col mx-auto w-full">



                    <Outlet />
                </div>
                x
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        <li><Link to='reviews'>My Review</Link></li>
                        <li><Link to='history'>My History</Link></li>
                        {
                            admin ? <>
                                <li><Link to='alluser'>All Users</Link></li>
                                <li><Link to='addDoctor'>Add Doctor</Link></li>
                                <li><Link to='manageDoctor'>Manage Doctor</Link></li>
                            </> : ''
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;