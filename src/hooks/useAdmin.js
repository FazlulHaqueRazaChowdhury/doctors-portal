import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";

const useAdmin = email => {
    const [admin, setAdmin] = useState(false);
    const [admingLoading, setLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 403 || res.status === 401 || res.status === 404) {
                        signOut(auth);
                        return Navigate('/login')
                    }
                    return res.json();
                })
                .then(data => {
                    setAdmin(data.admin)
                    setLoading(false);
                });

        }
    }, [email])
    return [admin, admingLoading]
}
export default useAdmin;