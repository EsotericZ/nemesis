import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import getAllUsers from "../../services/users/getAllUsers";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export const Users = () => {
    const axiosPrivate = useAxiosPrivate();
    const [users, setUsers] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await getAllUsers(axiosPrivate);
                const emails = response.data.map(email => email.email)
                isMounted && setUsers(emails);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
        </article>
    );
};