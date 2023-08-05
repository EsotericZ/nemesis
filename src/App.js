import { Routes, Route } from 'react-router-dom';

import { Admin } from './components/Admin';
import { Editor } from './components/Editor';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { LinkPage } from './components/LinkPage';
import { Login } from './components/Login';
import { Lounge } from './components/Lounge';
import { Missing } from './components/Missing';
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