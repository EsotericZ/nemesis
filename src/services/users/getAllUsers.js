import api from '../api';
// import useApiPrivate from '../../hooks/useApiPrivate';
const controller = new AbortController();

const getAllUsers = async () => {
    try {
        const response = await api.get('/users', {
            signal: controller.signal
        })
        return response.data
    } catch (err) {
        console.error(err)
    }
}

export default getAllUsers;