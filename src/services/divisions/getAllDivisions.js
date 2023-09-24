const controller = new AbortController();

const getAllDivisions = async (axiosPrivate) => {
    const response = await axiosPrivate.get('/divisions', {
        signal: controller.signal,
    })
    return response.data;
}

export default getAllDivisions;