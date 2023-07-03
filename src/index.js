import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import './index.css';
import { App } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <AuthProvider>
        <Router>
            <App />
        </Router>
    </AuthProvider>
);