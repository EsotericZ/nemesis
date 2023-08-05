import axiosPrivate from "../../api/axios";
const controller = new AbortController();

const getAllUsers = async () => {
    const response = await axiosPrivate.get('users', {
        signal: controller.signal
    })
    return response;
}

export default getAllUsers;