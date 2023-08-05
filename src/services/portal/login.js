import axios from '../../api/axios';

const login = async (email, password) => {
    const response = await axios.post('/portal/login', {
        email, 
        password,
        },
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    )
    return response;
}

export default login;