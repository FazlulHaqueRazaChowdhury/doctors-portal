import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import auth from '../firebase.init';
import useAdmin from './useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user?.email);
    console.log(admin.admin);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading />
    }
    if (!admin || !user) {
        signOut(auth);
        return <Navigate to='/logIn' state={{ from: location }} replace />
    }
    return children;
};

export default RequireAdmin;