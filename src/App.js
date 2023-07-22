import { Routes, Route } from 'react-router-dom';
import RequiredAuth from './components/RequireAuth';

import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Layout } from './components/Layout';
import { Login } from './components/login/Login';
import { Missing } from './components/missing/Missing';
import { Unauthorized } from './components/unauthorized/Unauthorized';

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Layout />} />

                {/* PUBLIC ROUTES */}
                <Route path='/login' element={<Login />} />
                <Route path='/unauthorized' element={<Unauthorized />} />
                <Route path='/home' element={<Home />} />

                {/* PROTECTED ROUTES */}
                {/* <Route element={<RequiredAuth allowedRoles={[ 'admin', 'player' ]} />}>
                    <Route path='/home' element={<Home />} />
                </Route> */}

                {/* CATCH ALL */}
                <Route path='*' element={<Missing />} />
            </Routes>
            
        </>
    );
}