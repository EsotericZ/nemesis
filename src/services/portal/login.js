import api from '../api';

const login = async (email, password) => {
    console.log(email, password);
    const res = await api.post('/portal/login', { 
        email, 
        password,
    });
    return res.data;
}

export default login;