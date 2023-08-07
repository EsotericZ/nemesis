import { Routes, Route } from 'react-router-dom';

import { Admin } from './components/Admin';
import { Director } from './components/Director';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { LinkPage } from './components/LinkPage';
import { Login } from './components/Login';
import { Missing } from './components/Missing';
import { Navbar } from './components/navbar/Navbar';
import { PersistLogin } from './components/PersistLogin';
import { Register } from './components/Register';
import { RequireAuth } from './components/RequireAuth';
import { Unauthorized } from './components/Unauthorized';

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
                    <Route path="linkpage" element={<LinkPage />} />
                    <Route path="unauthorized" element={<Unauthorized />} />
                    <Route path="/" element={<Home />} />

                    <Route element={<PersistLogin />}>
                        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Player]} />}>
                            <Route path="/" element={<Home />} />
                        </Route> */}

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