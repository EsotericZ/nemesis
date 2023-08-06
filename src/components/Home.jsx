import { useNavigate, Link } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../context/AuthProvider";
import useLogout from "../hooks/useLogout";

export const Home = () => {
    // const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
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