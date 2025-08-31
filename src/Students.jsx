import React from 'react'

const Students = ({ student }) => {
    return (
        <div>
            <h4>student name:{student.name}</h4>
            <ul>
                <li>
                    {student.name}
                </li>
                <li>
                    {student.age}
                </li>
                <li>
                    {student.email}
                </li>
            </ul>
        </div>
    )
}

export default Students
