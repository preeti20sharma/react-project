import React from 'react'

const PassFunc = ({ functionPass, functionWithPara, }) => {
    const name = "preeti"
    return (
        <div>
            <h1>call parent component function to child component function</h1>
            <button onClick={functionPass}>passFunction</button>
            <button onClick={() => { functionWithPara(name) }}>Function with Parameter</button>



        </div>
    )
}

export default PassFunc
