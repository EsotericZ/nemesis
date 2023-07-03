import api from '../api';

const login = async (email, password) => {
    const res = await api.post('/portal/login', { 
        email: email, 
        password: password
    });
    return res.data;
}

export default login;