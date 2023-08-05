import useAuth from "./useAuth";
import api from '../services/api';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        console.log('hit')
        const response = await api.get('/portal/refresh', {
            withCredentials: true,
        });
        setAuth(prev => {
            console.log(prev)
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }
    return refresh;
}

export default useRefreshToken;