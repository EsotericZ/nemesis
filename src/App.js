import { Routes, Route } from 'react-router-dom';

import { Admin } from './components/admin/Admin';
import { Blog } from './components/blog/Blog';
import { Dashboard } from './components/dashboard/Dashboard';
import { Director } from './components/director/Director';
import { Events } from './components/events/Events';
import { Home } from './components/home/Home';
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { Missing } from './components/missing/Missing';
import { Navbar } from './components/navbar/Navbar';
import { PersistLogin } from './components/PersistLogin';
import { Profile } from './components/profile/Profile';
import { Rankings } from './components/rankings/Rankings';
import { Register } from './components/register/Register';
import { RequireAuth } from './components/RequireAuth';
import { Unauthorized } from './components/unauthorized/Unauthorized';


// import ROLES from './services/roles/roles';
const ROLES = {
    'Player': 2001,
    'Director': 1984,
    'Admin': 5150
}

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="unauthorized" element={<Unauthorized />} />

                    <Route element={<PersistLogin />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/ranking" element={<Rankings />} />

                        <Route element={<RequireAuth allowedRoles={[ROLES.Player]} />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/profile" element={<Profile />} />
                        </Route>

                        <Route element={<RequireAuth allowedRoles={[ROLES.Director]} />}>
                            <Route path="director" element={<Director />} />
                        </Route>

                        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                            <Route path="admin" element={<Admin />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<Missing />} />
                </Route>
            </Routes>
        </>
    );
}