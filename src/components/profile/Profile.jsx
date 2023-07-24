import { useState, useEffect } from "react"
// import getAllUsers from '../../services/users/getAllUsers';

export const Profile = () => {
    const [users, setUsers] = useState('');

    // useEffect(() => {
    //     const getUsers = getAllUsers()
    //     .then(
    //         setUsers(getUsers)
    //     )
    // }, [])

    return (
        <article>
            <h2>User List</h2>
            {users?.length 
                ? (
                    <ul>
                        {users.map((user, i) => {
                            <li key={i}>{user.name}</li>
                        })}
                    </ul>
                ) : <p>No users to display.</p>
            }
        </article>
    )
}