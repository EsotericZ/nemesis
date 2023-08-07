import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from '../hooks/useAuth';

export const Home = () => {
    const { auth } = useAuth();
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
            <p>You are logged in! {auth?.email}</p>
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