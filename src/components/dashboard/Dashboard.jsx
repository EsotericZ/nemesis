import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import jwt_decode from 'jwt-decode';

export const Dashboard = () => {
    const { auth } = useAuth();

    const decoded = auth?.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

    const email = decoded?.userInfo?.email || '';

    return (
        <>
            <h1>Logged in as {email}</h1>
            <br />
            <Link to="/director">Go to the Tournament Director page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
        </>
    )
}