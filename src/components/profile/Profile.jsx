import useAuth from '../../hooks/useAuth';
import jwt_decode from 'jwt-decode';
// import ROLES from '../../services/roles/roles';
const ROLE_CODES = {
    1089: 'Admin',
    1634: 'Blogger',
    2001: 'Player',
    8128: 'Director',
}

export const Profile = () => {
    const { auth } = useAuth();

    const decoded = auth?.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

    const email = decoded?.userInfo?.email || '';
    const roles = decoded?.userInfo?.roles || [];

    let newRole = []
    roles.forEach(role => {
        newRole.push(ROLE_CODES[role])
    });

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