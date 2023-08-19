import createEvent from "../../services/events/createEvent";
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

    return (
        <>
            <h1>Events</h1>
            <button onClick={handleSubmit}>New</button>
        </>
    )
}