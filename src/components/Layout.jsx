import { Outlet } from "react-router-dom";
import { Avatar } from "./avatar/Avatar";

export const Layout = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}