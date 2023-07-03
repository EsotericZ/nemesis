import { Routes, Route } from 'react-router-dom';
import RequiredAuth from './components/RequireAuth';

import { Home } from './components/home/Home';
import { Layout } from './components/Layout';
import { Login } from './components/login/Login';
import { Missing } from './components/missing/Missing';
import { Unauthorized } from './components/unauthorized/Unauthorized';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} />

                {/* PUBLIC ROUTES */}
                <Route path='/login' element={<Login />} />
                <Route path='/unauthorized' element={<Unauthorized />} />

                {/* PROTECTED ROUTES */}
                <Route element={<RequiredAuth allowedRoles={[ 'admin' ]} />}>
                    <Route path='/home' element={<Home />} />
                </Route>

                {/* CATCH ALL */}
                <Route path='*' element={<Missing />} />
            </Routes>
        </>
    );
}