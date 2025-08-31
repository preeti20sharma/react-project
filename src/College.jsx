import React from 'react'
import Students from './Students'

const College = ({ college }) => {
    return (
        <div style={{
            backgroundColor: "yellowgreen",
            color: "black",
            width: "400px",
            marginBottom: "10px",
            padding: "10px",
            borderBottom: "3px solid gray",
            borderRadius: "12px"
        }}>
            <h3>College Name:{college.name}</h3>
            <hr />
            <ul>
                <li><b>city:</b>
                    {college.city}
                </li>
                <li><b>website:</b>
                    {college.website}
                </li>
                <li><b>student:</b>
                    {college.student.map((student, index) => (
                        <div key={index}>
                            <Students student={student} />
                        </div>
                    ))}
                </li>
            </ul>
        </div>
    )
}
export default College
