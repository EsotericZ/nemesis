const controller = new AbortController();

const createEvent = async (axiosPrivate) => {
    console.log('hit')
    const response = await axiosPrivate.post('/events', {
        signal: controller.signal,
    })
    return response;
}

export default createEvent;