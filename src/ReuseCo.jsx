import React from 'react'

const ReuseCo = ({ data }) => {
    return (
        <div style={{
            color: "red",
            border: "1px solid green",
            padding: "10px",
            borderRadius: "12px",
            marginBottom: "5px",
            width: "500px"
        }}>
            <h3>ID:{data.ID}</h3>
            <h3>Name;{data.name}</h3>
            <h3>Age:{data.age}</h3>
            <h3>Email:{data.email}</h3>
        </div>
    )
}
export default ReuseCo
