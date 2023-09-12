const controller = new AbortController();

const createR2Event = async (axiosPrivate, newR2Event, startDate, endDate) => {
    const response = await axiosPrivate.post('/r2events', {
        signal: controller.signal,
        newR2Event: newR2Event,
        startDate: startDate,
        endDate: endDate,
    })
    return response;
}

export default createR2Event;