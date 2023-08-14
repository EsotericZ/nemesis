import { Link } from 'react-router-dom';
import { Users } from './Users';

export const Admin = () => {
    return (
        <section>
            <h1>Admins Page</h1>
            <br />
            <Users />
            <br />
            <div className='flexGrow'>
                <Link to='/dashboard'>Home</Link>
            </div>
        </section>
    )
}