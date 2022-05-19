import { useEffect, useState } from "react"
import axios from 'axios';
const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            axios.put(`http://localhost:5000/user/${email}`, currentUser)
                .then(res => {
                    localStorage.setItem('accessToken', res.data.token);
                    setToken(res.data.token)
                });
        }
    }, [user]);
    return [token];
}
export default useToken;