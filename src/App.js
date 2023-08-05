import { Routes, Route } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';


const ROLES = {
    'Player': 2001,
    'Director': 1984,
    'Admin': 5150
}

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="linkpage" element={<LinkPage />} />
                <Route path="unauthorized" element={<Unauthorized />} />

                <Route element={<RequireAuth allowedRoles={[ROLES.Player]} />}>
                    <Route path="/" element={<Home />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Director]} />}>
                    <Route path="editor" element={<Editor />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                    <Route path="admin" element={<Admin />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Director, ROLES.Admin]} />}>
                    <Route path="lounge" element={<Lounge />} />
                </Route>

                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
    );
}