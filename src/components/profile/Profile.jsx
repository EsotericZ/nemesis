import useAuth from '../../hooks/useAuth';
import jwt_decode from 'jwt-decode';
// import ROLES from '../../services/roles/roles';
const ROLE_CODES = {
    2001: 'Player',
    1984: 'Director',
    5150: 'Admin'
}

export const Profile = () => {
    const { auth } = useAuth();

    const decoded = auth?.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

    const email = decoded?.userInfo?.email || '';
    const roles = decoded?.userInfo?.roles || [];
    console.log(roles)

    let newRole = []
    roles.forEach(role => {
        newRole.push(ROLE_CODES[role])
    });
    console.log(newRole)

    return (
        <>
            <h1>Logged in as {email}</h1>
            <ul>
                {newRole.map(role => (
                    <li key={role}>{role}</li>
                ))}
            </ul>
        </>
    )
}