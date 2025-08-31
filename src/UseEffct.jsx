import React, { useEffect } from 'react'
import { useState } from 'react';

const UseEffct = () => {
    const [counter, setcounter] = useState(0);
    const [data, setdata] = useState(0)

    function callonce() {
        console.log("callOnce function called");
    }
    useEffect(() => {
        callonce();
    }, [])

    function counterFunction() {
        console.log("counter function called", { counter });
    }
    useEffect(() => {
        counterFunction();
    }, [counter])

    function dataFunction() {
        console.log("data function called", { data });
    }
    useEffect(() => {
        dataFunction();
    }, [data])

    return (
        <div>
            <h2>useEffect Hook</h2>
            <button onClick={() => { setcounter(counter + 1) }}>Counter{counter}</button>
            <button onClick={() => { setdata(data + 1) }}>data{data}</button>
        </div>
    )
}

export default UseEffct;
