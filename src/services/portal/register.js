import axios from '../../api/axios';

const register = async (firstName, lastName, email, password) => {
    const response = await axios.post('/portal/register', {
            firstName,
            lastName,
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