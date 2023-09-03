import createEvent from "../../services/events/createEvent";
import createR2Event from "../../services/events/createR2Event";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export const Events = () => {
    const axiosPrivate = useAxiosPrivate();

    const handleSubmit = async () => {
        try {
            await createEvent(axiosPrivate);
        } catch (err) {
            console.error(err);
        }
    }

    const handleR2Submit = async () => {
        try {
            await createR2Event(axiosPrivate);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h1>Events</h1>
            <button onClick={handleSubmit}>New</button>
            <button onClick={handleR2Submit}>New R2</button>
        </>
    )
}