import { Link } from "react-router-dom"

export const Director = () => {
    return (
        <section>
            <h1>Tournament Director Page</h1>
            <br />
            <p>Tournament Directors can access this page</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}