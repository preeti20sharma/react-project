import React, { useState } from 'react'

const Skills = () => {
    const [skills, setskills] = useState([]);
    const handlechange = (event) => {
        if (event.target.checked) {
            setskills([...skills, event.target.value]);
        }
        else {
            setskills([...skills.filter((item) => item != event.target.value)])
        }
    }
    return (
        <div>
            <h2>handle checkbox in React js</h2>
            <input onChange={handlechange} type='checkbox' id='php' value={"php"} />
            <label htmlFor='php'>php</label><br /><br />

            <input onChange={handlechange} type='checkbox' id='java' value={"java"} />
            <label htmlFor='java'>Java</label><br /><br />

            <input onChange={handlechange} type='checkbox' id='css' value={"Css"} />
            <label htmlFor='css'>Css</label><br /><br />

            <input onChange={handlechange} type='checkbox' id='python' value={"python"} />
            <label htmlFor='python'>python</label><br /><br />
            <h2>{skills.toString()}</h2>
        </div>
    )
}

export default Skills
