import { Routes, Route } from 'react-router-dom';

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
                    path='/login'
                    element={<Login />}
                />
            </Routes>
        </>
    );
}