import React from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {

};
function formatDate(time) {
    if (!time) return ""
    const date = new Date(time);
    const hour = `0${date.getHours()}`
    const minute = `0${date.getMinutes()}`
    const second = `0${date.getSeconds()}`
    return `${hour.slice(-2)}:${minute.slice(-2)}:${second.slice(-2)}`
}
function Clock(props) {
    const { timeString } = useClock()
    // const [timeString, setTimeString] = useState("")
    // const clockInterval = useEffect(() => {
    //     setInterval(() => {
    //         const now = new Date();
    //         const newTimeString = formatDate(now);
    //         setTimeString(newTimeString)
    //     }, 1000);
    //     return () => {
    //         console.log("Cleanup Interval")
    //         clearInterval(clockInterval)
    //     }
    // }, [])
    return (
        <p style={{ fontSize: "42px" }}>
            {timeString}
        </p>
    );
}

export default Clock;