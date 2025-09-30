import { useState } from 'react'

const UpdateArr = () => {
    const [data, setData] = useState(['preeti', 'priya', 'prakash'])
    return (
        <>
            <div>Update Array in state</div>
            {
                data.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))
            }
        </>
    )
}

export default UpdateArr