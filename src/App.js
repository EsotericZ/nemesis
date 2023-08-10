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

import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';

import { useAuth0 } from '@auth0/auth0-react';

const ROLES = {
    'Player': 2001,
    'Director': 1984,
    'Admin': 5150
}

export const App = () => {
    const { isLoading, error } = useAuth0();

    return (
        <>
            <h1>Auth0 Login</h1>
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && (
                <>
                    <LoginButton />
                    <LogoutButton />
                    <Profile />
                </>
            )}
            
            {/* <Navbar />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="linkpage" element={<LinkPage />} />
                    <Route path="unauthorized" element={<Unauthorized />} />
                    <Route element={<PersistLogin />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                    </Route>

                    <Route element={<PersistLogin />}> */}
                        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Player]} />}>
                            <Route path="/" element={<Home />} />
                        </Route> */}

                        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Director]} />}>
                            <Route path="director" element={<Director />} />
                        </Route>

                        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                            <Route path="admin" element={<Admin />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<Missing />} />
                </Route>
            </Routes> */}
        </>
    );
}