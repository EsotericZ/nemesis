import { Routes, Route } from 'react-router-dom';

import { Home } from './components/home/Home';
import { Login } from './components/login/Login';

export const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<Login />}
                />
                <Route
                    path='/home'
                    element={<Home />}
                />
                <Route
                    path='/login'
                    element={<Login />}
                />
            </Routes>
        </>
    );
}