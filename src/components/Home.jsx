import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from '../hooks/useAuth';
import jwt_decode from 'jwt-decode';

export const Home = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    const decoded = auth?.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

    console.log(decoded)
    const email = decoded?.userInfo?.email || ''

    return (
        <section>
            <h1>Home</h1>
            <br />
            <h1>You are logged in! {email}</h1>
            <br />
            <Link to="/director">Go to the Tournament Director page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}