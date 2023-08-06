import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

export const PersistLogin = () => {
    const [loading, setLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAuth();
    
    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                isMounted && setLoading(false);
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setLoading(false);

        return () => isMounted = false;
    }, [])

    useEffect(() => {
        console.log(`Loading: ${loading}`)
        console.log(`At: ${JSON.stringify(auth?.accessToken)}`)
    }, [loading])

    return (
        <>
            {! persist
                ? <Outlet />
                : loading
                    ? <p>Loading</p>
                    : <Outlet />
            }
        </>
    )
}