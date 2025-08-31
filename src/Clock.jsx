
import { useState, useEffect } from 'react';
const Clock = ({ color }) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
    }, [])
    return (
        <div>
            <h1>Cuurent Time:</h1>
            <h2 style={{
                backgroundColor: "black",
                color: color,
                padding: "10px",
                borderRadius: "10px",
                width: "140px",
                alignSelf: "center"
            }}>{time}</h2>
        </div>
    )
}
export default Clock;
