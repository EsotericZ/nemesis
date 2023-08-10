import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
// import { Auth0Provider } from '@auth0/auth0-react';
import { Auth0Navigate } from './Auth0Navigate';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
}

ReactDOM.render(
    <React.StrictMode>
        <Router>
            {/* <AuthProvider> */}
            {/* <Auth0Provider
                domain={domain}
                clientId={clientId}
                redirectUri={window.location.origin}
            > */}
            <Auth0Navigate>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            {/* </Auth0Provider> */}
            {/* </AuthProvider> */}
            </Auth0Navigate>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);