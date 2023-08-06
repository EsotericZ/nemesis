const controller = new AbortController();

const getAllUsers = async (axiosPrivate) => {
    const response = await axiosPrivate.get('/users', {
        signal: controller.signal,
    })
    return response;
}

export default getAllUsers;