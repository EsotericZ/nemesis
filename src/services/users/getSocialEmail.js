import api from '../api';

const getSocialEmail = async (email) => {
    console.log(email);
    const res = await api.post('/users/getSocialEmail', {
        email: email
    });
    return res.data
}

export default getSocialEmail;