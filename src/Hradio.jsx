import React, { useState } from 'react'

const Hradio = () => {
    const [gender, setGender] = useState('female');
    const [city, setcity] = useState()
    const handlechange = (event) => {
        setGender(event.target.value)
    }
    const handlecity = (event) => {
        setcity(event.target.value)
    }
    return (
        <div>
            <h1>handle radio and dropdown</h1>
            {/*----------------- handle radio----------------------- */}
            <input onChange={handlechange} type='radio' name='gender'
                id='male' value={"male"} checked={gender == 'male'} />
            <label htmlFor='male'>Male</label>

            <input onChange={handlechange} type='radio' name='gender'
                checked={gender == 'female'} id='female' value={"female"} />
            <label htmlFor='female'>feMale</label>
            <h2>Select Gender: {gender}</h2>

            {/*----------------- handle Dropdown----------------------- */}
            <h2>Select City:</h2>
            <select onChange={handlecity} defaultValue={'delhi'}>
                <option value={'Delhi'}>Delhi</option>
                <option value={'Noida'}>Noida</option>
                <option value={'Banglore'}>Banglore</option>
                <option value={'pune'}>pune</option>
                <option value={'hyderabad'}>hyderabad</option>
            </select>
            <h2>Selected city:{city}</h2>
        </div>
    )
}

export default Hradio;
