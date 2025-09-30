import { useEffect, useState } from 'react'

const ApiIntegration = () => {
    const [userdata, setuserData] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        getUserdata()
    }, [])

    const getUserdata = async () => {
        setloading(true)
        const url = "http://localhost:3001/posts";
        const res = await fetch(url);
        const data = await res.json();
        setuserData(data)
        console.log(data); // log actual fetched data
        setloading(false)
    }

    return (
        <>
            <div>Integrate JSON server API and Loader</div>
            {loading ? (<h1> Data Loading...</h1>) :
                (
                    userdata.map((user, index) => (
                        <h1 key={index}>{user.title}</h1>
                    ))
                )
            }
        </>
    )
}

export default ApiIntegration
