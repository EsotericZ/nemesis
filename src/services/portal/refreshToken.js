import api from '../api';

const refreshToken = async () => {
    const res = await api.get('/users/refreshToken', {
        withCredentials: true
    });
    return res.data
}

export default refreshToken;