const controller = new AbortController();

const createR2Event = async (axiosPrivate, newR2Event) => {
    console.log(newR2Event)
    const response = await axiosPrivate.post('/r2events', {
        signal: controller.signal,
    })
    return response;
}

export default createR2Event;