import React, { useEffect } from 'react'

const Counter = ({ count, data }) => {
    const handleCounter = () => {
        console.log("handlecounter called", { count });
    }
    useEffect(() => {
        handleCounter();
    }, [])
    const handledata = () => {
        console.log("handledata called", data);
    }
    useEffect(() => {
        handledata();
    }, [data])

    useEffect(() => {
        console.log("mounting phase only");
    }, [])

    useEffect(() => {
        console.log("update phase only");
    }, [count])

    useEffect(() => {
        return () => {
            console.log("unmount phase only");
        }
    }, [])


    return (
        <div>
            <h1> lifecycle Counter value:{count}</h1>
            <h1> lifecycle data value:{data}</h1>

        </div>
    )
}

export default Counter;
