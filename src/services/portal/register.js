import axios from '../../api/axios';

const register = async (email, password) => {
    console.log('hit baby')
    const response = await axios.post('/portal/register', {
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

export default register;