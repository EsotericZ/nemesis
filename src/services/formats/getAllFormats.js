const controller = new AbortController();

const getAllFormats = async (axiosPrivate) => {
    const response = await axiosPrivate.get('/formats', {
        signal: controller.signal,
    })
    return response.data;
}

export default getAllFormats;