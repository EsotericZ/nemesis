const controller = new AbortController();

const getAllEventTypes = async (axiosPrivate) => {
    const response = await axiosPrivate.get('/eventTypes', {
        signal: controller.signal,
    })
    return response.data;
}

export default getAllEventTypes;