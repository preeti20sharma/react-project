import React, { useState } from 'react'

const Updateobj = () => {
    const [data, setData] = useState({
        name: "john",
        age: 24,
        email: "ps953682@gmail.com",
        address: {
            city: "delhi",
            state: "delhi",
            country: "india"
        }
    })
    const handleName = (val) => {
        data.name = val
        setData({ ...data })
    }
    const handleCity = (val) => {
        data.address.city = val
        setData({ ...data, address: { ...data.address, val } })
    }

    const [employee, setEmployee] = useState({
        id: 1,
        name: "Preeti",
        email: "preeti@example.com",
    });

    const updateName = () => {
        setEmployee((prev) => ({
            ...prev,         // copy old properties
            name: "Preeti Sharma", // update only name
        }));
    };
    return (
        <>
            <div>Update objects in state using input field</div>
            <input type="text" onChange={(event) => handleName(event.target.value)} placeholder='enter name' />
            <input type="text" onChange={(event) => handleCity(event.target.value)} placeholder='enter city' />
            <h1>Name: {data.name}</h1>
            <h1>Age: {data.age}</h1>
            <h1>Email: {data.email}</h1>
            <h1>City: {data.address.city}</h1>
            <div>Update objects in state using button </div>
            <h2>{employee.name}</h2>
            <button onClick={updateName}>Update Name</button>
        </>
    )
}

export default Updateobj