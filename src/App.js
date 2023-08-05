import { Routes, Route } from 'react-router-dom';
import RequiredAuth from './components/RequireAuth';

import { Blog } from './components/blog/Blog';
import { Events } from './components/events/Events';
import { Home } from './components/home/Home';
import { Layout } from './components/Layout';
import { Login } from './components/login/Login';
import { Missing } from './components/missing/Missing';
import { Navbar } from './components/navbar/Navbar';
// import { Profile } from './components/profile/Profile';
import { Ranking } from './components/ranking/Ranking';
import { Unauthorized } from './components/unauthorized/Unauthorized';

const ROLES = {
    'player': 2001,
    'director': 1984,
    'admin': 5150
}

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />

                {/* PUBLIC ROUTES */}
                <Route path='blog' element={<Blog />} />
                <Route path='events' element={<Events />} />
                {/* <Route path='home' element={<Home />} /> */}
                <Route path='login' element={<Login />} />
                {/* <Route path='/profile' element={<Profile />} /> */}
                <Route path='ranking' element={<Ranking />} />
                <Route path='unauthorized' element={<Unauthorized />} />

                {/* PROTECTED ROUTES */}
                <Route element={<RequiredAuth allowedRoles={[ROLES.admin]} />}>
                    <Route path='/home' element={<Home />} />
                    {/* <Route path='/profile' element={<Profile />} /> */}
                </Route>

                {/* CATCH ALL */}
                <Route path='*' element={<Missing />} />
            </Routes>
            
        </>
    );
}