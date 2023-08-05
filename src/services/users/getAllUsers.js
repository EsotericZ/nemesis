import api from '../api';
import useApiPrivate from '../../hooks/useApiPrivate';
const controller = new AbortController();

const getAllUsers = async () => {
    const response = await api.get('/users', {
    // const response = await useApiPrivate.get('/users', {
        signal: controller.signal
    })
    return response.data
}

export default getAllUsers;